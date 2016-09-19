 var spot = {
   x: 200,
   y: 100
 };


  var col = {
    r:255,
    g:0,
    b:0
  };
  
  var speed = 10;
  
function setup() {
  createCanvas(1000,1000);

  colorMode(RGB);
  
  background(0);
  
  frameRate(30);
  

  
}

function draw() {
  col.r = random(100, 255);
  col.g= random(0) ;
  col.b= random(50, 180);
  
  if (mouseIsPressed){
    background(100,255,100);
  }
  
  
   
    fill(col.r, col.g, col.b);
  if ( mouseX >300 && mouseY <500){
  rect(spot.x, spot.y, 500, 500);
  }
  var x=0, y=0;
  
   if (spot.x > width ){
    speed = -3;
    
    

  }

  
  spot.x =  spot.x + speed;
  

 
 for (var x = 0; x < width; x = x+50){
  for(var y = 0; y <= height;y++)
 ellipse(x, y*100, 20, 20);
  
  }

x++

}
