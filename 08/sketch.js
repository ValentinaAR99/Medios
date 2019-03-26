var posX = [];  
var posY = [];	

var cant = 10;	




function setup() {
  createCanvas(2000, 2000);
  for (var i = 0; i < cant; i = i + 1) {
		posX[i] = random(800); 
		posY[i] = random(800);
	}
  
  
  
  
  
  
}

function draw() {
  background(220);
  
   for (var i = 0; i < cant; i = i + 1) {
  noStroke();
  fill(250,114,3);
  triangle(120+posX[i],150+posY[i],130+posX[i],145+posY[i],130+posX[i],155+posY[i]);
  ellipse(150+posX[i],150+posY[i],40,30);
  fill(0);
  ellipse(160+posX[i],145+posY[i],10,10);
  
    
        posX[2] = posX[2] + 0.1
		posY[2] = posY[2] - 0.1
    
    posX[1] = posX[1] - 0.1
		posY[1] = posY[1] + 0.1
     
     
     
    posX[3] = posX[3] - 0
		posY[3] = posY[3] + 0.1 
     
     
     
    posX[4] = posX[4] - 0.1
		posY[4] = posY[4] + 0
    
    
    
    
    posX[5] = posX[5] - 0.1
		posY[5] = posY[5] + 0
    
    posX[6] = posX[6] - 0
		posY[6] = posY[6] + 0.1 
     
     
     
     
     
     
     
//RATAS
     
     
     
     fill(0);
  noStroke();
  ellipse(78+posX[i],50+posY[i],3,3);
  fill(167,164,164);
  triangle(70+posX[i],45+posY[i],78+posX[i],50+posY[i],70+posX[i],55+posY[i]);
  ellipse(63+posX[i],50+posY[i],22,12);
  ellipse(40+posX[i],52+posY[i],40,20);
  ellipse(60+posX[i],41+posY[i],5,10);
  fill(227,185,185);
  ellipse(50+posX[i],63+posY[i],10,5);
  ellipse(30+posX[i],63+posY[i],10,5);
  stroke(227,185,185);
  strokeWeight(2);
  line(20+posX[i],50+posY[i],10+posX[i],60+posY[i]);
  stroke(0)
  strokeWeight(0.5);
  line(75+posX[i],50+posY[i],70+posX[i],55+posY[i]);
  line(75+posX[i],50+posY[i],73+posX[i],55+posY[i]);
  fill(0);
  ellipse(78+posX[i],50+posY[i],3,3);
  ellipse(64+posX[i],46+posY[i],4,4);
  
  	posX[i] = posX[i] + 1
		posY[i] = posY[i] + 0
     
    ///polillas
     
     noStroke();
  fill(162,157,157);
  triangle(250+posX[i],250+posY[i],330+posX[i],140+posY[i],330+posX[i],350+posY[i]);
  triangle(250+posX[i],250+posY[i],170+posX[i],140+posY[i],170+posX[i],350+posY[i]);
  fill(100,86,86);
  ellipse(250+posX[i],250+posY[i],14,100);
  stroke(0);
  line(246+posX[i],206+posY[i],240+posX[i],190+posY[i]);
  line(253+posX[i],206+posY[i],257+posX[i],190+posY[i]);
  
  posX[i] = posX[i] + 0
		posY[i] = posY[i] - 1
     
  //palomas
      noStroke();
  fill(130);
  ellipse(100+posX[i],100+posY[i],30,30);
  triangle(110+posX[i],95+posY[i],130+posX[i],105+posY[i],110+posX[i],105+posY[i]);
  rect(105+posX[i],180+posY[i],5,16);
  rect(95+posX[i],180+posY[i],5,16);
  ellipse(100+posX[i],195+posY[i],10,5);
  ellipse(110+posX[i],195+posY[i],10,5);
  //torso
  
  ellipse(98+posX[i],150+posY[i],50,80);
  fill(123,114,131);
  ellipse(88+posX[i],155+posY[i],30,80)
  fill(0);
  ellipse(105+posX[i],95+posY[i],10,5);
  //perros
      noStroke()
  fill(255);
  rect(150+posX[i],150+posY[i],60,30);
  rect(195+posX[i],135+posY[i],25,25);
  ellipse(199+posX[i],130+posY[i],10,15);
  rect(205+posX[i],145+posY[i],20,15);
  rect(150+posX[i],175+posY[i],10,20);
  rect(163+posX[i],175+posY[i],10,20);
  rect(200+posX[i],175+posY[i],10,20);
  rect(187+posX[i],175+posY[i],10,20);
  ellipse(150+posX[i],150+posY[i],15,15);
  fill(0);
  rect(220+posX[i],145+posY[i],5,5);
  ellipse(210+posX[i],140+posY[i],7,7);
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}