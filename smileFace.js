function smileFaceIustin(x, y, d){
    //skin
    fill(255, 204, 0)
    circle(x,y,d)
  
    //eyes
    circle(x+17,y-10,10)
    circle(x+17,y-10,1)
  
    circle(x-17,y-10,10)
    circle(x-17,y-10,1)
  
    line(x-30, y-30, x-10, y-10);
    line(x+30, y, x+10, y+10);
  
    //mouth
    arc(x ,y+20 , 43 , 25 , 0 ,Math.PI)
  }
  
  
  function smileFaceRadu(x, y, d) {
    // skin
    fill("#ffff00");
    circle(x, y, d);
  
    // hair 
    fill("#000000");
    line(x-30, y-50, x-20, y-40)
    line(x-25, y-60, x-20, y-40)
    line(x-10, y-60, x-10, y-40)
    line(x+5, y-60, x-10, y-40)
    line(x+15, y-60, x, y-40)
    line(x+25, y-60, x, y-40)
  
    // eyes
    fill("#ffffff");
    circle(x-20, y-20, 20);
    circle(x+20, y-20, 20);
  
    // iris
    fill("#0000ff");
    circle(x+20, y-20, 7) 
    circle(x-20, y-20, 7)
  
    // mouth
    fill("#ff0000");
    arc(x, y+20, 40, 20, 0, Math.PI)
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