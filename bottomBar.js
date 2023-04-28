function bottomBarCheck(smileFace) {
  if (
    smileFace.y+smileFace.ray >= BottomBar.bootomYPosition &&
    smileFace.x+smileFace.ray > mouseX - Math.round(BottomBar.width / 2) &&
    smileFace.x-smileFace.ray < mouseX + Math.round(BottomBar.width / 2)
  ) {
    return -1;
  }

  return smileFace.sensY;
}

function bottomBar() {
  // color
  fill(BottomBar.color);
  rect(
    mouseX - Math.round(BottomBar.width / 2),
    BottomBar.bootomYPosition,
    BottomBar.width,
    BottomBar.height
  );
}
