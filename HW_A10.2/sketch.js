var employers = [];
var button ;
var i = 0;


function setup() {
// createCanvas(400, 400);
noCanvas();
noFill(0);
var url = "data.JSON";

loadJSON(url, employersCallBack);
button = createButton("i know this");
button.position(420,850);
button.mousePressed(worldgone);

}

function employersCallBack(data) {
var docs = data.response;
console.log(docs[0][8]);
console.log(docs[0][9]);
background(10,50,200);
fill(0);

for(var i = 0; i<docs.length; i++){
 createP("year: " + docs[i][8] + ", rating: " + docs[i][9]+", state: "+ docs[i][10]+", Company: "+ docs[i][11]);

}
function mousePressed(worldgone){
 
 ;


}
}
