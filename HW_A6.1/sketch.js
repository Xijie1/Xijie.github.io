var boxArr = [];

function setup() {
   createCanvas(800, 400);
   for (var i = 10; i < 50; i++){
     boxArr[i] = new Box(random(width), random(height), 40, 40);
   }

}

function draw() {
	background(0);

	for (var i = 10; i < boxArr.length; i++){
	  boxArr[i].drawbox();
	   boxArr[i].flying();
	}
  //collisionCheck();

};
//
// function mousePressed(){
//   for (var i = 0; < boxArr.length; i++)(
  //  boxArr[i].flying();)

//};
 //function collisionCheck (){
  // var xCur = 0;
//   var yCur = 0;
//   var disCur = 0;
//   var rCombo= 0;

//   for (var i = 0; i < boxArr.length; i++){
//     xCur = boxArr[i].boxX;
//     yCur = boxArr[i].boxY;
//     rCur = boxArr[i].boxDiam/2;

//     for (var j = i+1; j < boxArr.length; j++){
  //     disCur = dist(xCur, yCur, boxArr.[j].x, boxArr.[j].y)
  //     rCombo = rCur + box.[j].boxDiam/2;
  //     if(disCur <= rCombo){
  //       box[i].collision();
  //       box[j].collision();
  //     }
  // }
//}

//};
