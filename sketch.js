
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var rside;
var lside;
var tside;
var dside;
var bside;
var ball;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bside = new Ground (100,290,300,20)
  rside = new Ground (200,390,400,20)
  lside =  new Ground (390,200,20,400)
  tside = new Ground (10,200,20,400)
  dside =  new Ground (200,10,400,20)

  var ball_option = {
      restitution:0.95
  }
  ball = Bodies.circle(200,100,20,ball_option)
  World.add (world,ball)
   
    rectMode(CENTER);
    ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)

  rside.show()
  lside.show()
  tside.show()
  dside.show()
  bside.show()

  drawSprites();
 
}
   
function hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}


//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;

//let engine;
//let world;

//var ground;
//var right;
//var left;
//var top_wall;
//var ball;
//var btn1,btn2;

//function setup() {
 // createCanvas(400,400);
//  engine = Engine.create();
 // world = engine.world;

  
  //btn1 = createImg("right.png")
  //btn1.position(220,30)
  //btn1.size(50,50)
  //btn1.mouseClicked(hforce)

  //btn2 = createImg("up.png")
 // btn2.position(20,30)
 // btn2.size(50,50)
//  btn2.mouseClicked(vforce)

  //ground = new Ground(200,390,400,20)
//  right =  new Ground(390,200,20,400)
//  left = new Ground(10,200,20,400)
 // top_wall =  new Ground(200,10,400,20)

  //var ball_option = {
  //  restitution:0.95
 //}
  //ball = Bodies.circle(200,100,20,ball_option)
//World.add (world,ball)
 
 // rectMode(CENTER);
 // ellipseMode(RADIUS);
//}

//function draw() 
//{
//  background(51);
//  ellipse(ball.position.x,ball.position.y,20)

 // ground.show()
 // right.show()
 // left.show()
 // top_wall.show()

  //Engine.update(engine);

//}



//function hforce() {
  //Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
//}

//function vforce() {
 // Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
//}