// module aliases
var Engine = Matter.Engine,
  //  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let box;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  box = new Box(200, 100, 50, 50);
}

function draw() {
  background(51);
  box.show();
}
