// flying box

function Box ( boxX, boxY, w, h){
  this.x=boxX;
  this.y=boxY;
  this.w= w;
  this.h= h;
  this.boxDiam = box;


  this.dirx = 1;
  this.diry = 1;
  this.maxDir = 10;


  this.r = random(256);
  this.g = random(256);
  this.b= random(256);
};

 Box.prototype.drawbox = function () {

	push();
	stroke(0);
	translate(this.x, this.y, this.w, this.h);
  fill(this.r, this.g, this.b);
	rect(0, 0, this.w, this.h);
  pop();




 };


 Box.prototype.flying = function(){

  this.x += this.dirx ;
  this.y += this.diry ;
if (this.x <= 0 || this.x >= width ){
  this.dirx = -this.dirx;

}
if (this.y <= 0 || this.y >= height){
  this.diry = - this.diry;
}


};

//Box.prototype.collision = function (){
//   this.dirx = -this.dirx;
//   this.diry = -this.diry;
//}
