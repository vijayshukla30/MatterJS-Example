/**
 * This is a custom wrapper over MatterJS Box
 * It have a function to create the box over P5
 * @param {x coordinate} x
 * @param {y coordinate} y
 * @param {width of the box} w
 * @param {height of the box} h
 */
function Box(x, y, w, h) {
  this.body = Bodies.rectangle(x, y, w, h);
  World.add(world, this.body);
  this.w = w;
  this.h = h;

  this.show = function () {
    const pos = this.body.position;
    const angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    // Rotate
    rotate(angle);
    rectMode(CENTER);
    // Draw Rect
    rect(0, 0, this.w, this.h);
    pop();
  };
}
