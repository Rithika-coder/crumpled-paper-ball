const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload() {}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    isStatic: false,
    restitution: 0.95,
    frictionAir: 0.3,
    density: 1.2,
  };

  btn1 = createImg("right.png");
  btn1.position(220, 30);
  btn1.size(50, 50);
  btn1.mouseClicked(hForce);
  btn2 = createImg("up.png");
  btn2.position(20, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);
  fill("green");
  groundObj = new ground(width / 2, 670, width, 20);
  fill("yellow");
  leftside = new ground(1100, 600, 20, 120);
  rightside = new ground(1350, 600, 20, 120);
  Engine.run(engine);

  var ball_options = { restitution: 0.95 };
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 40);

  groundObj.display();

  leftside.display();
  rightside.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.body.position, { x: 15, y: -15 });
  }
}

function hForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}
function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
