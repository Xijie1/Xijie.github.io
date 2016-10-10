var box = [];

function setup() {
   createCanvas(800, 400);
   for (var i = 0; i < 30; i++){
     box[i] = new box(random(40, 100), 800, 400);
   }

}

function draw() {
	background(0);

	for (var i = 0; i < box.length; i++){
	  box[i].drawbox();
	  box[i].move();
	}

}

function mousePressed(){
  for (var i = 0; < box.length; i++)(
    box[i].flying;
  )
};
