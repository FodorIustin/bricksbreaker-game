function setup() {
  createCanvas(400, 400)
}
function draw(){
  background("#00ffff")
  smileFaceIustin();
  smileFaceRadu(200, 200);
}

function smileFaceIustin(){
  //skin
  fill(255, 204, 0)
  circle(200,200, 100)

  //eyes
  circle(217,190,10)
  circle(217,190,1)

  circle(183,190,10)
  circle(183,190,1)

  line(170, 170, 190, 190);
  line(230, 200, 210, 210);

  //mouth
  arc(200 ,220 , 43 , 25 , 0 ,Math.PI)


}


function smileFaceRadu(x, y) {
  // skin
  fill("#ffff00");
  circle(x, y, 100);

  // hair 
  fill("#000000");
  line(x-30, y-50, x-20, y-40)
  line(x-25, y-60, x-20, y-40)
  line(x-10, y-60, x-10, y-40)
  line(x+5, y-60, x-10, y-40)
  line(x+15, y-60, x, y-40)
  line(x+25, y-60, x, y-40)

  // eyes
  fill("#ffffff");
  circle(x-20, y-20, 20);
  circle(x+20, y-20, 20);

  // iris
  fill("#0000ff");
  circle(x+20, y-20, 7) 
  circle(x-20, y-20, 7)

  // mouth
  fill("#ff0000");
  arc(x, y+20, 40, 20, 0, Math.PI)
}