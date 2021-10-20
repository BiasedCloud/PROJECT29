const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, wall1, wall2, bridge, link;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall2 = new Base(windowWidth, windowHeight/2, 200, 200);
  wall1 = new Base(0, windowHeight/2, 200 , 200);
  ground = new Base(0,windowHeight,windowWidth, 1);
  bridge = new Bridge(14, {x: wall1.width, y: windowHeight/2})
  
}

function draw() {
  background(51);
  Engine.update(engine);

  wall1.display();
  wall2.display();
  ground.display();
  bridge.show();
}
