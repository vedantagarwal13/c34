const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var ball1,rope1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup(){
    createCanvas(2000,1000)
    

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground1 = new Ground(1000,450,2000,20);
  
  box1 = new Box(200,400,100,100,PI/2);
  box2 = new Box(300,400,100,100,PI/2);
  box3 = new Box(400,400,100,100,PI/2);
  box4 = new Box(500,400,100,100,PI/2);
  box5 = new Box(250,300,100,100,PI/2);
  box6 = new Box(350,300,100,100,PI/2);
  box7 = new Box(450,300,100,100,PI/2);
  box8 = new Box(270,200,100,100,PI/2);
  box9 = new Box(370,200,100,100,PI/2);
  box10 = new Box(320,100,100,100,PI/2);
  ball1 = new Ball(700,200,100,PI/2);
 rope1 = new Rope(ball1.body,{x:700 , y:10})

}

function draw(){
  background("white");
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ball1.display();
  rope1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}