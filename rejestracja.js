var d
var w
var NewAccount
var P
var login
var email
var password1
var password2
var regulations
var onloadCallback = function() {
        grecaptcha.render('g-recaptcha', {
          'sitekey' : '6LdnKCcTAAAAANI4rE54eK2HQpkn4QRXwq2i59z1'
        })
      }
var checkbox
var URLParams
var b=true


function preload(){

  P=loadImage("graj/assets/TilesetLochy/P.png")
  NewAccount=loadImage("graj/assets/UI/NewAccount.png")

}

function setup() {
  noSmooth()
  URLParams=getURLParams()
  fill(45,12,27)
  login=createInput(URLParams.nick)
  email=createInput(URLParams.email)
  password1=createInput("","password")
  password2=createInput("","password")
  regulations=eval(URLParams.checkbox)
  checkbox=createCheckbox("",regulations)
  checkbox.changed(myCheckedEvent)
  d =windowWidth
  w =windowHeight
  createCanvas(d,w)
  background(P)
  image(NewAccount,(d/2)-(NewAccount.width/2),(w/2)-130)
  login.position((d/2)-144,(w/2)-84)
  login.size(132,15)
  email.position((d/2)-144,(w/2)-48)
  email.size(132,15)
  password1.position((d/2)-144,(w/2)-12)
  password1.size(132,15)
  password2.position((d/2)-144,(w/2)+24)
  password2.size(132,15)
  checkbox.position((d/2)-144,(w/2)+59)
  checkbox.size(10,10)
}

function windowResized() {
  d=windowWidth
  w=windowHeight
  resizeCanvas(d,w)
  background(P)
  image(NewAccount,(d/2)-(NewAccount.width/2),(w/2)-130)
  login.position((d/2)-144,(w/2)-84)
  email.position((d/2)-144,(w/2)-48)
  password1.position((d/2)-144,(w/2)-12)
  password2.position((d/2)-144,(w/2)+24)
  checkbox.position((d/2)-144,(w/2)+59)
  checkbox.size(10,10)
}

function keyTyped(){
  if(keyCode == ENTER&&b){
    rejestracja()
  }
}

function mouseClicked(){
  
  if(mouseX>=(d/2)-52&&mouseX<=(d/2)+101&&mouseY>=(w/2)+68&&mouseY<=(w/2)+92&&b){
    rejestracja()
  }
  
}

function rejestracja(){
  
  var form=document.createElement("form")
  input1=document.createElement("input")
  input2=document.createElement("input")
  input3=document.createElement("input")
  input4=document.createElement("input")
  input5=document.createElement("input")
  input6=document.createElement("input")
  form.method="post"
  form.action="rejestracja.php?nick="+login.value()+"&email="+email.value()+"&checkbox="+regulations
  input1.type="hidden"
  input1.name="nick"
  input1.value=login.value()
  form.appendChild(input1)
  input2.type ="hidden"
  input2.name="email"
  input2.value=email.value()
  form.appendChild(input2)
  input3.type ="hidden"
  input3.name="haslo1"
  input3.value=password1.value()
  form.appendChild(input3)
  input4.type ="hidden"
  input4.name="haslo2"
  input4.value=password2.value()
  form.appendChild(input4)
  input5.type ="hidden"
  input5.name="regulamin"
  input5.value=regulations
  form.appendChild(input5)
  input6.type ="hidden"
  input6.name="response"
  input6.value=grecaptcha.getResponse()
  form.appendChild(input6)
  document.body.appendChild(form)
  form.submit()
}

function myCheckedEvent() {
  if (this.checked()) {
    regulations=true
  } else {
    regulations=false
  }
}
