function setup() {
  
  
  
  
  frameRate(1000);
  createCanvas(1000, 1000);
  colorMode(HSB);
  
 
  
  
};
  var rectX = 500;

  
  var rectY = 500;
  
  var rectWidth = 20;
  
  var rectHeight = 20;
  

function draw() {
  background('red'); 
  
  rectMode(CENTER); 
  rect(rectX, rectY, rectWidth, rectHeight); 
  
 
  rectX = rectX + random(-50, 50); 
  rectY = rectY + random(-50, 50); 
  rectWidth = rectWidth + random(-10.10);
  rectHeight = rectHeight + random(-10, 10);
  
 var spotX = map(mouseX, 0, width,150,170);
 var spotY = map(mouseY, 0, height,150,170);
 
 
  fill(54, 71, 100);
  line(spotX, spotY, mouseX, mouseY);
  ellipse(mouseX, mouseY, 200, 100)

};