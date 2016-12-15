function Breaker(x, y){

  this.x = x;
  this.y = y;
  this.width = 100;
  this.direction = -1;
  this.speed = 0;
};

Breaker.prototype.setSpeed = function (speed, direction) {
    this.speed = speed * direction;
    this.direction = direction;
};

Breaker.prototype.move = function () {
  this.x = this.x + (this.speed * this.direction);
  this.drawBreaker();
};

Breaker.prototype.drawBreaker = function () {
  push();
  fill(50);
  translate(this.x, this.y);
  noStroke();
  rect(0, 0, this.width, 10);// breaker
  pop();
};
