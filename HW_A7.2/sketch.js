var pokeman = [];


function setup(){
  createCanvas(1000, 1000);

  for (var i =0; i <6; i++){

    pokeman[i] = new Pokeman(i*100+100, 200, 140);
  }
};

function draw(){
  background(0);

  for(var i = 0; i < pokeman.length; i ++){
    pokeman[i].draw();
    pokeman[i].move();


  }
};
