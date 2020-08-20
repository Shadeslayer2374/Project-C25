var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine, world;

var RD1;

function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  RD1 = new Raindrop(400,0,10,10);
}

function draw() 
{
  Engine.update(engine)
  background(0);
  RD1.display();
}