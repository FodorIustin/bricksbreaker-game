
function setup() {
  createCanvas(400, 400)
}

function draw(){
  background("#00ffff")

  sensS1X = sensSmileFaceChecksX(moveS1X, rayS1, sensS1X);
  sensS1Y = sensSmileFaceChecksY(moveS1Y, rayS1, sensS1Y);

  sensS2X = sensSmileFaceChecksX(moveS2X, rayS2, sensS2X);
  sensS2Y = sensSmileFaceChecksY(moveS2Y, rayS2, sensS2Y);

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y * speedS2;

  smileFaceIustin(moveS1X, moveS1Y, rayS1*2);
  smileFaceRadu(moveS2X, moveS2Y, rayS2*2);
}