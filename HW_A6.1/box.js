// flying box

function box ( boxD, boxY, w, h, color){
  this.x=random(boxD);
  this.y=random(boxY);
  this.w= w;
  this.h= h;


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
	rect(this.x, this.y, 0, 0);




 };



box.prototype.flying = function(){

  this.x += this.dirx * this.speed;
  this.y +=this.diry * this.speed;


};


 box.prototype.boxcolor = function(){
   fill(this.r, this.g , this.b);
 }

};
