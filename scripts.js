function setup() {
  createCanvas(400, 400)
}

function draw(){
  background("#00ffff")

  SmileFaceIustin.sensX = sensSmileFaceChecksX(SmileFaceIustin.x, SmileFaceIustin.ray, SmileFaceIustin.sensX);
  SmileFaceIustin.sensY = sensSmileFaceChecksY(SmileFaceIustin.y, SmileFaceIustin.ray, SmileFaceIustin.sensY);

  SmileFaceRadu.sensX = sensSmileFaceChecksX(SmileFaceRadu.x, SmileFaceRadu.ray, SmileFaceRadu.sensX);
  SmileFaceRadu.sensY = sensSmileFaceChecksY(SmileFaceRadu.y, SmileFaceRadu.ray, SmileFaceRadu.sensY);

  SmileFaceIustin.x += SmileFaceIustin.sensX * SmileFaceIustin.speed;
  SmileFaceIustin.y += SmileFaceIustin.sensY * SmileFaceIustin.speed;

  SmileFaceRadu.x += SmileFaceRadu.sensX * SmileFaceRadu.speed;
  SmileFaceRadu.y += SmileFaceRadu.sensY * SmileFaceRadu.speed;

  smileFaceIustin(SmileFaceIustin.x, SmileFaceIustin.y, SmileFaceIustin.ray*2);
  smileFaceRadu(SmileFaceRadu.x, SmileFaceRadu.y, SmileFaceRadu.ray*2);
}
