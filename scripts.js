function setup() {
  createCanvas(400, 400)
}
function draw(){
  background("#00ffff")
  smileFaceIustin();
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