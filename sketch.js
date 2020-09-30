
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var optons = {
	    isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}

	
	var ground = new Ground(800, 700, 800, 50);
	var paper = new Paper(100, 30, 40);
	var rect1 = new Dustbin (400, 600, 200, 20);
	var rect2 = new Dustbin (320, 590, 20, 100);
	var rect3 = new Dustbin (480, 590, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
}



