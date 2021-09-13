
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopterIMG, helicopter, package,packageIMG, packageBody,ground;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2;
	package.velocityY = 3;
	package.visible=false;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;
	helicopter.velocityX = 3;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	package.visible=true;
    
  }
}



