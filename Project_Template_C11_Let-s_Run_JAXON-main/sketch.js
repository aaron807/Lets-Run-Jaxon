var path
var pathImage
var runner
var runnerImage
var leftB
var rightB

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200,200,200);
path.addImage(pathImage);
path.scale=1.2;
path.velocityY=4;

runner = createSprite(200,200,10,10);
runner.addAnimation("running",runnerImage);
runner.scale=0.1;

leftB = createSprite(1,200,10,400);
rightB = createSprite(399,200,10,400);
} 

function draw() {
  background(0);
  
  //if (runner.isTouching)

  runner.x=mouseX

  runner.collide(leftB)
  runner.collide(rightB)
 
  leftB.visible=false
  rightB.visible=false

  if (path.y>400){
    path.y = height/2;
  }

  drawSprites()
}

