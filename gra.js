var d
var w
var Menu
var P

function preload(){

  Menu=loadImage("graj/assets/UI/Menu.png")
  P=loadImage("graj/assets/TilesetLochy/P.png")

}

function setup() {
  noSmooth()
  d =windowWidth
  w =windowHeight
  createCanvas(d,w)
  background(P)
  image(Menu,(d/2)-(Menu.width/2),(w/2)-(Menu.height/2))
}

function windowResized() {
  d=windowWidth
  w=windowHeight
  resizeCanvas(d,w)
  background(P)
  image(Menu,(d/2)-(Menu.width/2),(w/2)-(Menu.height/2))
}

function mouseClicked(){
}