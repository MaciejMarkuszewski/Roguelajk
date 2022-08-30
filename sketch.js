var d
var w
var LoginWindow
var NoweKonto
var TryOut
var P
var login
var password
var b=true

function preload(){

  LoginWindow=loadImage("graj/assets/UI/LoginWindow.png")
  NoweKonto=loadImage("graj/assets/UI/NoweKonto.png")
  TryOut=loadImage("graj/assets/UI/TryOut.png")
  P=loadImage("graj/assets/TilesetLochy/P.png")

}

function setup() {
  noSmooth()
  login=createInput()
  password=createInput("","password")
  d =windowWidth
  w =windowHeight
  createCanvas(d,w)
  background(P)
  image(LoginWindow,(d/2)-(LoginWindow.width/2),(w/2)-(LoginWindow.height/2))
  image(NoweKonto,(d/2)-(NoweKonto.width/2),(w/2)+130)
  image(TryOut,(d/2)-(TryOut.width/2),(w/2)+160)
  login.position((d/2)-31,(w/2)-43)
  login.size(78,15)
  password.position((d/2)-31,(w/2)+2)
  password.size(78,15)
}

function windowResized() {
  d=windowWidth
  w=windowHeight
  resizeCanvas(d,w)
  background(P)
  image(LoginWindow,(d/2)-(LoginWindow.width/2),(w/2)-(LoginWindow.height/2))
  image(NoweKonto,(d/2)-(NoweKonto.width/2),(w/2)+130)
  image(TryOut,(d/2)-(TryOut.width/2),(w/2)+160)
  login.position((d/2)-31,(w/2)-43)
  password.position((d/2)-31,(w/2)+2)
}

function keyTyped(){
  if(keyCode == ENTER&&b){
    logowanie()
  }
}

function mouseClicked(){
  
  if(mouseX>=(d/2)-13&&mouseX<=(d/2)+36&&mouseY>=(w/2)+25&&mouseY<=(w/2)+50&&b){
    logowanie()
  }
  if(mouseX>=(d/2)-56&&mouseX<=(d/2)+62&&mouseY>=(w/2)+131&&mouseY<=(w/2)+155){
    window.location = "rejestracja.php"
  }
  if(mouseX>=(d/2)-56&&mouseX<=(d/2)+62&&mouseY>=(w/2)+161&&mouseY<=(w/2)+185){
    window.location = "graj/guest.php"
  }
}

function logowanie(){
  b=false
  var form=document.createElement("form")
  input=document.createElement("input")
  input2=document.createElement("input")
  form.action="zaloguj.php"
  form.method="post"
  input.type="hidden"
  input.name="login"
  input.value=login.value()
  form.appendChild(input)
  input2.type ="hidden"
  input2.name="haslo"
  input2.value=password.value()
  form.appendChild(input2)
  document.body.appendChild(form)
  form.submit()
}
