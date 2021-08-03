
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 rectMode(Circle);

	engine = Engine.create();
	world = engine.world;

	paper=new paper(100,600,10);

	groundObj=new groundObj()


	 var ball_options = {
		 isStatic=false,
		restitution: 0.95,
		frictionAir:0.3,
		density:1.2
	  }

     ground=new ground(width/2,670,width,20);
     leftside= new ground(1100,600,20,120);
	   rightside=new ground(670,620,20,100);
	   bottom=new ground(610,660,100,20)
	   Engine.run(engine);

	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  groungObj.display();

  leftside.display();
  rightside.dsplay();
  bottom.display();
  
  

  
  }
  
  drawSprites();
  function keyPressed(){
    if( keyCode=== (UP_ARROW)){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
    }
}



