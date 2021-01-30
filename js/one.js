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
  box = Bodies.rectangle(200, 100, 80, 80);
  World.add(world, [box]);
  Engine.run(engine);
  console.log("box :>> ", box);
}

function draw() {
  background(51);

  rect(box.position.x, box.position.y, 80, 80);
}
