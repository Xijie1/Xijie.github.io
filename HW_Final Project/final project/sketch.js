//var num =60;
//var xpos =[];
//var ypos =[];

var MaxSpeed = 9;
var wall = [];
var breaker, ball, wallTop, wallBottom, wallLeft, wallRight;
var WALL_THINKNESS = 30;
var ball;
var stopmove;
var brick;
var bWidth = 20;
var bHeight = 10;
var bHeightSpace = 10;





function setup (){
  createCanvas(windowWidth, windowHeight);
  stroke(0);

  // create a brick breaker object
  breaker = new Breaker(400, 600);

  // create a ball object
  ball = new Ball(410, 510, 20 );

  // crete bricks

  var wid = round(width/bWidth);
  var hei = round(height/2/bHeight);
  for (var x = 0; x <= width; x+= wid){
    for(var y =0; y<=300; y+= hei+hei*0.25){
      wall.push( new Brick(x, y, wid, hei) );
    }
  }


  wallTop = { obj: createSprite(width/2, height-WALL_THINKNESS/2, width+WALL_THINKNESS*2, WALL_THINKNESS) };
  wallTop.immovable = true;

  wallBottom = { obj: createSprite(width/2, height+WALL_THINKNESS/2, width+WALL_THINKNESS*2, WALL_THINKNESS)};
  wallBottom.immovable = true;

  wallLeft = { obj: createSprite(width-WALL_THINKNESS/2, height/2, WALL_THINKNESS, height)};
  wallLeft.immovable = true;

  wallRight = { obj: createSprite(width+WALL_THINKNESS/2, height/2, WALL_THINKNESS,height)};
  wallRight.immovable = true;
};


function draw (){

  background(255);

  //brickHit();


  if ( keyIsDown(LEFT_ARROW)) {
    breaker.direction = -1;
    breaker.speed += 1;
  }
  if ( keyIsDown(RIGHT_ARROW)) {
    breaker.direction = 1;
    breaker.speed += 1;
  }
  breaker.move();

  for (var i = 0; i < wall.length; i++) {
    wall[i].makeBrick();
  }

  ball.go();
  ball.checkCollision(breaker, wall);


textSize(72);
  textAlign(CENTER, CENTER);
  if (this.brick = 0) {
    text(score, width/2, height/2);
  }
  else {
  //  text("you win!", width/2, height/2);
  }
}






function keyReleased() {
  breaker.speed = 0;
}


function brickcollider (Break, Ball, birck){
 this.Ball.collide(this.birck || this.breaker);

if (this.Ball >= this.brick || this.Ball >= this.breaker)

this.Ball = this.rebound;
}






function keyboard(breaker){


  if (keyCode == LEFT_ARROW){
    Breaker.direction(10, -1);
  }
  else if (keyCode == RIGHT_ARROW){
    Breaker.direction(10, 1);
  }
  return false;
}
