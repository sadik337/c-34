const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var coach1,coach2,coach3;
var chain1;
var trainSound;
var crashSound;
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  coach1 = new Coach(50,170,50,50);
  coach2 = new Coach(150,170,50,50);
  coach3 = new Coach(250,170,50,50);
  coach4 = new Coach(350,170,50,50);
  coach5 = new Coach(450,170,50,50);
  coach6 = new Coach(550,170,50,50);

  rock1 = new Rock(1100,200,100,100);

  chain1 = new Chain(coach1.body,coach2.body);
  chain2 = new Chain(coach2.body,coach3.body);
  chain3 = new Chain(coach3.body,coach4.body);
  chain4 = new Chain(coach4.body,coach5.body);
  chain5 = new Chain(coach5.body,coach6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  ground.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();
  
  rock1.show();

  coach1.show();
  coach2.show();
  coach3.show();
  coach4.show();
  coach5.show();
  coach6.show();

  var collision=Matter.SAT.collides(coach6.body,rock1.body);
  if(collision.collided){
    flag=1
  }
  if(flag===1){
    textSize(30);
    stroke(3);
    fill("pink");
    text("crash hooo",500,200);
    crashSound.play();
  }

  }

  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce
      (coach6.body,{x:coach6.body.position.x,y:coach6.body.position.y} , {x:0.5,y:0});
     // trainSound.play();
    }
  }
