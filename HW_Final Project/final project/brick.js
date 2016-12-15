function Brick(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.make = true;
  this.color = [ random(256),random(256),random(256) ];
  //this.noBrick = 0;
}


Brick.prototype.makeBrick = function () {
  push();
  if (this.make) {
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
  }

  if (frameCount % 60 === 0) {
    this.color = [ random(256),random(256),random(256) ];
  }
  pop();
};

//Brick.prototype.noBrick = function(){

  //if (this.x = ball.x && this.y = ball.y)
  //  this.x =this.noBrick;
    //this.y =this.noBrick;
//};
