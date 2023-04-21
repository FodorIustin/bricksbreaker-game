function smileFaceIustin(x, y, d){
    //skin
    fill(255, 204, 0)
    circle(x,y,d)
  
    //eyes
    circle(x+d*0.17,y-d*0.10, d*0.10)
    circle(x+d*0.17,y-d*0.10, d*0.1)

    circle(x-d*0.17,y-d*0.10,d*0.10)
    circle(x-d*0.17,y-d*0.10,d*0.1)
  
    line(x-d*0.30, y-d*0.30, x-d*0.10, y-d*0.10);
    line(x+d*0.30, y, x+d*0.10, y+d*0.10);
  
    //mouth
    arc(x ,y+d*0.20 , d*0.43 , d*0.25 , 0 ,Math.PI)
  }
  
  
  function smileFaceRadu(x, y, d) {
    // skin
    fill("#ffff00");
    circle(x, y, d);
  
    // hair 
    fill("#000000");
    line(x-d*0.30, y-d*0.50, x-d*0.20, y-d*0.40)
    line(x-d*0.25, y-d*0.60, x-d*0.20, y-d*0.40)
    line(x-d*0.10, y-d*0.60, x-d*0.10, y-d*0.40)
    line(x+d*0.5, y-d*0.60, x-d*0.10, y-d*0.40)
    line(x+d*0.15, y-d*0.60, x, y)
    line(x+d*0.25, y-d*0.60, x, y-d*0.40)
  
    // eyes
    fill("#ffffff");
    circle(x-d*0.20, y-d*0.20, d*0.20);
    circle(x+d*0.20, y-d*0.20, d*0.20);
  
    // iris
    fill("#0000ff");
    circle(x+d*0.20, y-d*0.20, d*0.07) 
    circle(x-d*0.20, y-d*0.20, d*0.07)
  
    // mouth
    fill("#ff0000");
    arc(x, y+d*0.20, d*0.40, d*0.20, 0, Math.PI)
  }

function sensSmileFaceChecksX(x, r, sensInitial) {
  // verificare limita LEFT S1
  if (x < limitLeft+r) {
    // schimbare de sens
    return 1; 
  } 
  // verificare limita RIGTH S1
  if (x > limitRight-r) {
    // schimbare de sens
    return -1; 
  }

  return sensInitial;
}

function sensSmileFaceChecksY(y, r, sensInitial) {
  // verificare limita TOP S1
  if (y < limitTop+r) {
    // schimbare de sens
    return 1;
  }
  // verificare limita BOOTOM S1
  if (y > limitBottom-r) {
    // schimbare de sens
    return -1; 
  }

  return sensInitial;
}