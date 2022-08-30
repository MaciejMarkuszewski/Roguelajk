<?php

	session_start();
	
	if (isset($_POST['email']))
	{
		//Udana walidacja? Załóżmy, że tak!
		$wszystko_OK=true;
		$id=0;
		
		//Sprawdź poprawność nickname'a
		$nick = $_POST['nick'];

		if (ctype_alnum($nick)==false)
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_nick']=$_SESSION['e_nick'].'<img id="error" src="graj/assets/UI/ErrorNickZnaki.png"><br>';
		}
		
		//Sprawdzenie długości nicka
		if ((strlen($nick)<3) || (strlen($nick)>20))
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_nick']=$_SESSION['e_nick'].'<img id="error" src="graj/assets/UI/ErrorNickDlugosc.png"><br>';
		}
		
		
		// Sprawdź poprawność adresu email
		$email = $_POST['email'];
		$emailB = filter_var($email, FILTER_SANITIZE_EMAIL);
		
		if ((filter_var($emailB, FILTER_VALIDATE_EMAIL)==false) || ($emailB!=$email))
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_email']=$_SESSION['e_mail'].'<img id="error" src="graj/assets/UI/ErrorMail.png"><br>';
		}
		
		//Sprawdź poprawność hasła
		$haslo1 = $_POST['haslo1'];
		$haslo2 = $_POST['haslo2'];
		
		if ((strlen($haslo1)<8) || (strlen($haslo1)>20))
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_haslo']=$_SESSION['e_haslo'].'<img id="error" src="graj/assets/UI/ErrorHasloDlugosc.png"><br>';
		}
		
		if ($haslo1!=$haslo2)
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_haslo']=$_SESSION['e_haslo'].'<img id="error" src="graj/assets/UI/ErrorHasloPowtorz.png"><br>';
		}	

		$haslo_hash = password_hash($haslo1, PASSWORD_DEFAULT);
		
		//Czy zaakceptowano regulamin?
		if ($_POST['regulamin']=="false")
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_regulamin']=$_SESSION['e_regulamin'].'<img id="error" src="graj/assets/UI/ErrorRegulamin.png"><br>';
		}				
		
		//Bot or not? Oto jest pytanie!
		$sekret = "6LdnKCcTAAAAAA4Z1Anvd_OaAhFYLWtp0mHvrEYl";
		$response= $_POST['response'];
		
		$sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$sekret.'&response='.$_POST['response']);
		
		$odpowiedz = json_decode($sprawdz);
		
		if ($odpowiedz->success==false)
		{
			$id++;
			$wszystko_OK=false;
			$_SESSION['e_bot']=$_SESSION['e_bot'].'<img id="error" src="graj/assets/UI/ErrorCaptha.png"><br>';
		}		
		
		//Zapamiętaj wprowadzone dane
		$_SESSION['fr_nick'] = $nick;
		$_SESSION['fr_email'] = $email;
		$_SESSION['fr_haslo1'] = $haslo1;
		$_SESSION['fr_haslo2'] = $haslo2;
		if (isset($_POST['regulamin'])) $_SESSION['fr_regulamin'] = true;
		
		require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try 
		{
			$polaczenie = new mysqli($host, $db_user, $db_password, $db_name);
			if ($polaczenie->connect_errno!=0)
			{
				throw new Exception(mysqli_connect_errno());
			}
			else
			{
				//Czy email już istnieje?
				$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy WHERE email='$email'");
				
				if (!$rezultat) throw new Exception($polaczenie->error);
				
				$ile_takich_maili = $rezultat->num_rows;
				if($ile_takich_maili>0)
				{
					$id++;
					$wszystko_OK=false;
					$_SESSION['e_email']=$_SESSION['e_email'].'<img id="error" src="graj/assets/UI/ErrorEmailZajety.png"><br>';
				}		

				//Czy nick jest już zarezerwowany?
				$rezultat = $polaczenie->query("SELECT id FROM uzytkownicy WHERE user='$nick'");
				
				if (!$rezultat) throw new Exception($polaczenie->error);
				
				$ile_takich_nickow = $rezultat->num_rows;
				if($ile_takich_nickow>0)
				{
					$id++;
					$wszystko_OK=false;
					$_SESSION['e_nick']=$_SESSION['e_nick'].'<img id="error" src="graj/assets/UI/ErrorNickZajety.png"><br>';
				}
				
				if ($wszystko_OK==true)
				{
					//Hurra, wszystkie testy zaliczone, dodajemy gracza do bazy
					
					if ($polaczenie->query("INSERT INTO uzytkownicy VALUES (NULL, '$nick', '$haslo_hash', '$email')"))
					{
						$_SESSION['udanarejestracja']=true;
						header('Location: witamy.php');
					}
					else
					{
						throw new Exception($polaczenie->error);
					}
					
				}
				
				$polaczenie->close();
			}
			
		}
		catch(Exception $e)
		{
			$id++;
			$_SESSION['e_server']=$_SESSION['e_server'].'<img id="error" src="graj/assets/UI/ErrorServer.png">';
		}
		
	}
	
	
?>

<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Roguelajk</title>
	<script src='https://www.google.com/recaptcha/api.js?hl=en-GB'></script>
	<script src="libraries/p5.js" type="text/javascript"></script>

    <script src="libraries/p5.dom.js" type="text/javascript"></script>
    <script src="libraries/p5.sound.js" type="text/javascript"></script>
    <script src="rejestracja.js" type="text/javascript"></script>
    <style> body {padding: 0; margin: 0;} canvas {vertical-align: top;} </style>
	
	<style>
		
		#g-recaptcha{
			margin-top:166px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		#error{
			image-rendering: pixelated;
    		transform: translate(-50%,0);
			margin-top: 4px;
		}
	</style>
</head>

<body>
      	<div id="g-recaptcha" class="g-recaptcha" data-sitekey="6LdnKCcTAAAAANI4rE54eK2HQpkn4QRXwq2i59z1"></div>
		
		
		<?php
			echo '<div style="position: absolute; margin-left:auto; margin-right:auto; margin-top:'. -1*(($id*25)+130) .'px; top:50%; left:50%; line-height:0;">';
			if (isset($_SESSION['e_nick']))
			{
				echo $_SESSION['e_nick'];
				unset($_SESSION['e_nick']);
			}
			if (isset($_SESSION['e_email']))
			{
				echo $_SESSION['e_email'];
				unset($_SESSION['e_email']);
			}
			if (isset($_SESSION['e_haslo']))
			{
				echo $_SESSION['e_haslo'];
				unset($_SESSION['e_haslo']);
			}
			if (isset($_SESSION['e_regulamin']))
			{
				echo $_SESSION['e_regulamin'];
				unset($_SESSION['e_regulamin']);
			}
			if (isset($_SESSION['e_bot']))
			{
				echo $_SESSION['e_bot'];
				unset($_SESSION['e_bot']);
			}
			if (isset($_SESSION['e_server']))
			{
				echo $_SESSION['e_server'];
				unset($_SESSION['e_server']);
			}
			echo "</div>";
		?>	


</body>
</html>