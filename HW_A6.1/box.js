// flying box

function box ( boxD, boxY, scW, scH, color){
  this.x=random(boxD);
  this.y=random(boxY);
  this.w= random(scW);
  this.h=random(scH);

  this.boxDiam = boxD;
  this.dirx = 1;
  this.diry = 1;
  this.maxDir = 10;


  this.r = random(256);
  this.g = random(256);
  this.b= random(256);
};

 box.prototype.drawbox = function () {

	push();
	stroke(0);
	translate(this.x, this.y);
  fill(this.r, this.g, this.b);
	rect(0, 0, this.w, this.h);



 };



box.prototype.flying = function(){
  this.x += this.dirx * this.speed;
  this.y +=this.diry * this.speed;


};




 box.prototype.boxcolor = function(){
   fill(this.r)
 }

};
