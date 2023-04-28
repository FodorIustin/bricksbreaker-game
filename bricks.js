function initBricks() {
  const bricksNumber = 5;
  const marginLeft = 20;
  const marginRigth = 20;
  const bricksZone = limitRight - marginLeft - marginRigth;
  const bricksDistance = 10;

  const brickWidth =
    Math.round(bricksZone / bricksNumber) - bricksDistance;

  for (let i = 0; i < bricksNumber; i++) {
    bricks.push({
      color: "#0000ff",
      x: marginLeft + i * bricksDistance + i * brickWidth,
      y: 40,
      width: brickWidth,
      heigth: 20,
    });
   }
}

function showBricks() {
  for (let i = 0; i < bricks.length; i++) {
    fill(bricks[i].color);
    rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].heigth);
  }
}


