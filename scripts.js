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

  // right eye
  circle(220, 180, 20);

  // left eye
  circle(180, 180, 20);
}