function setup() {
  createCanvas(2000,2000);
  colorMode(HSB);
  background('black');
  
}


function draw() {

 //this is a head;
 fill(157, 96, 68);
 ellipse(870, 300, 300);

 //this is a mouth
 fill(359, 92, 90);
 arc(870, 400, 90, 90, 0.5, PI+QUARTER_PI, PIE);
 
 //this are eyes
 stroke(255);
 fill(100, 100, 0);
 ellipse(800, 350, 100);

 stroke(255);
 fill(100, 100, 0);
 ellipse(950, 350, 100);
 
 //this is a body
 fill(140, 26, 82);
 triangle(870, 800, 800, 450, 950, 450)
 
 //this is leg and hand
 fill(145, 100, 52);
 line(800, 450, 750, 650);
 line(950, 450, 1000, 650);
 
 //this are foots
 line(870, 800, 950, 950);
 line(870, 800, 800, 950)
}
