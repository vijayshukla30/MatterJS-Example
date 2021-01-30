// module aliases
var Engine = Matter.Engine,
  //  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let ground;
const boxes = [];

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  const options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(200, height, width, 10, options);
  World.add(world, ground);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(51);
  boxes.forEach((box) => box.show());
}
