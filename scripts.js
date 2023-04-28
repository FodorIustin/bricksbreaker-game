
function setup() {
  createCanvas(400, 400)
}

function draw(){
  background("#00ffff")

  sensS1X = sensSmileFaceChecksX(moveS1X, rayS1, sensS1X);
  sensS1Y = sensSmileFaceChecksY(moveS1Y, rayS1, sensS1Y);

  SmileFaceRadu.sensX = sensSmileFaceChecksX(SmileFaceRadu.x, SmileFaceRadu.ray, SmileFaceRadu.sensX);
  SmileFaceRadu.sensY = sensSmileFaceChecksY(SmileFaceRadu.y, SmileFaceRadu.ray, SmileFaceRadu.sensY);

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  SmileFaceRadu.x += SmileFaceRadu.sensX * SmileFaceRadu.speed;
  SmileFaceRadu.y += SmileFaceRadu.sensY * SmileFaceRadu.speed;

  smileFaceIustin(moveS1X, moveS1Y, rayS1*2);
  smileFaceRadu(SmileFaceRadu.x, SmileFaceRadu.y, SmileFaceRadu.ray*2);
}