function setup() {
  createCanvas(400, 400)
}

function draw(){
  background("#00ffff")

function smileFaceIustin(x,y){
  //skin
  fill(255, 204, 0)
  circle(x,y, 100)

  sensS2X = sensSmileFaceChecksX(moveS2X, rayS2, sensS2X);
  sensS2Y = sensSmileFaceChecksY(moveS2Y, rayS2, sensS2Y);

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y * speedS2;

  smileFaceIustin(moveS1X, moveS1Y, rayS1*2);
  smileFaceRadu(moveS2X, moveS2Y, rayS2*2);
}}