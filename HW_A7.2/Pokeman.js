//Pokeman
function Pokeman(xpos, ypos, diam){
  // Pokeman's facce
  this.x = xpos;
  this.y = ypos;

  this.PokemanDiam = diam;

  // Pokeman's moving
  this.posx = 1;
  this.posy = 1;
  this.way = 0;
  this.maxDir = 10;

  this.differentway = 0;
  this.changex = 0;
  this.changey = 0;
  this.waiting = false && true;

  this.posDist = 0;
  this.minDist = 0;
  this.xVar = 0;
  this.yVar = 0;

  // time
  this.setupTime = 0;
  this.starTime = random(this.endTime);
  this.endTime = 6;

  //Pokeman's eyePos
  this.eye = this.PokemanDiam/4;

  // mouth
  this.mouth = PI / 4;
  this.change = 7;
  this.mouthchange = 1/128;

  this.r = random(256);
  this.g = random(256);
  this.b = random(256);

};

Pokeman.prototype.draw = function(){
  push();
  stroke(0);
  translate(this.x, this.y);
  fill(this.r, this.g, this.b);
  arc(0,0, this.PokemanDiam, this.PokemanDiam, this.mouth, -this.mouth,PIE);
  fill(0);
  arc(0, -this.eye, this.PokemanDiam/6, this.PokemanDiam/6, this.mouth, -this.mouth,PIE);
  pop();
  this.mchange();
  this.time();

  fill(255);
  text(int(this.endTime*frameRate()) + " : " + this.setupTime + " : " + this.differentway, 20, 20);

};

Pokeman.prototype.move = function(){
  this.x += this.posx;
  this.y += this.posy;

  if (this.x <= 0 || this.x >= width){
    this.posx = - this.posx;
  }
  if(this.y <= 0 || this.y >= height){
    this.posy = - this.posy;
  }

};

// mouthchange
Pokeman.prototype.mchange = function(){
  if(this.waiting = false && true){
    this.xpos += this.changex;
    this.ypos += this.changey;
  }


  this.mouth = this.mouth + (this.mouthchange * this.change);
  if(this.mouth > PI * (1/6) ){
    this.mouthchange = -this.mouthchange;
    this.mouth = PI * (1/6);
  }
  if (this.mouth < 0.01){
    this.mouthchange = -this.mouthchange;
    this.mouth = 0.03;
  }

};

//this.edgeChenk();
Pokeman.prototype.time = function(){

  if ( this.setupTime >= this.endTime * frameRate() ){
    this.changeway();
    this.setupTime = 0;
  }
  else {
    ( this.setupTime++)}
}

Pokeman.prototype.changeway = function(){
   var newDifferentway;


   do {
     newDifferentway = floor(random(4));
  } while (newDifferentway == this.differentway)
  this.differentway = newDifferentway;


   // east
   if (newDifferentway === 0){
     this.changex = this.differentway;
     this.changey = 0;
     this.posx = 1;
     this.posy = 0;
  }
   // west
  if (newDifferentway === 1){
    this.changex = - this.differentway;
    this.changey = 0;
    this.posx = -1;
    this.posy = 0;

  }
  // north
  if (newDifferentway === 2){
    this.changex = 0;
    this.changey = this.differentway;
    this.posx = 0;
    this.posy = 1;
  }
  // south
  if (newDifferentway === 3){
    this.changex = 0;
    this.changey = -this.differentway;
    this.posx = 0;
    this.posy = -1;
  }


 };
