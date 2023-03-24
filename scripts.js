function setup() {
  createCanvas(400, 400)
}
function draw(){
  background("#00ffff")
  smileFaceIustin(85,200);
  smileFaceRadu();
}

function smileFaceIustin(x,y){
  //skin
  fill(255, 204, 0)
  circle(x,y, 100)

  //eyes
  circle(x+17,y-10,10)
  circle(x+17,y-10,1)

  circle(x-17,y-10,10)
  circle(x-17,y-10,1)

  line(x-30, y-30, x-10, y-10);
  line(x+30, y, x+10, y+10);

  //mouth
  arc(x ,y+20 , 43 , 25 , 0 ,Math.PI)


}


function smileFaceRadu() {
  // skin
  fill("#ffff00");
  circle(200, 200, 100);

  // hair 
  fill("#000000");
  line(170, 150, 180, 160)
  line(175, 140, 180, 160)
  line(190, 140, 190, 160)
  line(205, 140, 190, 160)
  line(215, 140, 200, 160)
  line(225, 140, 200, 160)

  // eyes
  fill("#ffffff");
  circle(180, 180, 20);
  circle(220, 180, 20);

  // iris
  fill("#0000ff");
  circle(220, 180, 7) 
  circle(180, 180, 7)

  // mouth
  fill("#ff0000");
  arc(200, 220, 40, 20, 0, Math.PI)
  
}