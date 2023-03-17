function setup() {
  createCanvas(400, 400)
}
function draw(){
  background("#00ffff")

  smileFaceRadu();
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