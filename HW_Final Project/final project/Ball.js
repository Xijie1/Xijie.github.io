function Ball (posx,posy, width){
  this.x = posx;
  this.y = posy;
  this.deltaX = 0.5;
  this.deltaY = 2;
  this.width = width;
  this.rad = this.width*0.7;
  this.color = (255, 0, 0);
  this.direction = 1;
  this.noBrick = 0;
  this.speed =  2;
};

Ball.prototype.go = function (){
  this.x += this.deltaX;
  this.y += this.deltaY;

  if (this.x <= 0|| this.x >=width){
    this.deltaX = -this.deltaX;
  }
  if (this.y <=0 || this.y >= height){
    this.deltaY = -this.deltaY;
  }
  this.drawBall();
};

Ball.prototype.drawBall = function (){
  push();
  fill(100);
  translate(this.x, this.y);
  noStroke();
  ellipse(0,0,this.width,this.width);
  pop();
};


Ball.prototype.rebound = function (){
  this.x = -this.x;
  this.y = -this.y;
}

Ball.prototype.checkCollision = function ( breaker, brickArr ) {
  if (this.x >= breaker.x && this.x<= breaker.x+breaker.width && this.y >= breaker.y-this.rad) {
    this.y = breaker.y-this.rad;
    this.deltaY = -abs(this.deltaY);

    // change deltaX
    var ballOffset = breaker.x+breaker.width/2 - this.x;
    this.deltaX = map(ballOffset, -breaker.width/2, breaker.width/2, 5, -5);

    fill(200);
    console.log(ballOffset, 40, 400);
  }

  for (var i = 0; i < brickArr.length; i++) {
    if (this.x >= brickArr[i].x && this.x<= brickArr[i].x+brickArr[i].width && this.y <= brickArr[i].y+this.rad+brickArr[i].height && brickArr[i].make) {
      this.y = brickArr[i].y+5+brickArr[i].height;
      this.deltaY = -this.deltaY;
      brickArr[i].make = false;
    }
    // else if (this.x >= brickArr[i].x && this.x<= brickArr[i].x+brickArr[i].width && this.y <= brickArr[i].y+this.rad+brickArr[i].height) {
    //   this.y = brickArr[i].y+5+brickArr[i].height;
    // brickArr[i]= 0;
    //
    //  }
  }

};
