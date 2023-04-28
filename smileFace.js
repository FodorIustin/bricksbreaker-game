function smileFaceIustin(x, y, d) {
  //skin
  fill(255, 204, 0);
  circle(x, y, d);

  //eyes
  circle(x + d * 0.17, y - d * 0.1, d * 0.1);
  circle(x + d * 0.17, y - d * 0.1, d * 0.1);

  circle(x - d * 0.17, y - d * 0.1, d * 0.1);
  circle(x - d * 0.17, y - d * 0.1, d * 0.1);

  line(x - d * 0.3, y - d * 0.3, x - d * 0.1, y - d * 0.1);
  line(x + d * 0.3, y, x + d * 0.1, y + d * 0.1);

  //mouth
  arc(x, y + d * 0.2, d * 0.43, d * 0.25, 0, Math.PI);
}

function smileFaceRadu(x, y, d) {
  // skin
  fill("#ffff00");
  circle(x, y, d);

  // hair
  fill("#000000");
  line(x - d * 0.3, y - d * 0.5, x - d * 0.2, y - d * 0.4);
  line(x - d * 0.25, y - d * 0.6, x - d * 0.2, y - d * 0.4);
  line(x - d * 0.1, y - d * 0.6, x - d * 0.1, y - d * 0.4);
  line(x + d * 0.5, y - d * 0.6, x - d * 0.1, y - d * 0.4);
  line(x + d * 0.15, y - d * 0.6, x, y);
  line(x + d * 0.25, y - d * 0.6, x, y - d * 0.4);

  // eyes
  fill("#ffffff");
  circle(x - d * 0.2, y - d * 0.2, d * 0.2);
  circle(x + d * 0.2, y - d * 0.2, d * 0.2);

  // iris
  fill("#0000ff");
  circle(x + d * 0.2, y - d * 0.2, d * 0.07);
  circle(x - d * 0.2, y - d * 0.2, d * 0.07);

  // mouth
  fill("#ff0000");
  arc(x, y + d * 0.2, d * 0.4, d * 0.2, 0, Math.PI);
}

function sensSmileFaceChecksX(x, r, sensInitial) {
  // verificare limita LEFT
  if (x < limitLeft + r) {
    // schimbare de sens
    return 1;
  }
  // verificare limita RIGTH
  if (x > limitRight - r) {
    // schimbare de sens
    return -1;
  }

  return sensInitial;
}

function sensSmileFaceChecksY(y, r, sensInitial) {
  // verificare limita TOP
  if (y < limitTop + r) {
    // schimbare de sens
    return 1;
  }
  // verificare limita BOOTOM
  // if (y > limitBottom - r) {
  //   // schimbare de sens
  //   return -1;
  // }

  return sensInitial;
}
