var x= 50
var y= 50
var xy=30

var x1=50
var y1=90
var xy1=30

var x2=50
var y2=130
var xy2=30

var x3=50
var y3=170
var xy3=30

var x4=50
var y4=210
var xy4=30

var x5=50
var y5=250
var xy5=30

var x6=50
var y6=290
var xy6=30

var x7=50
var y7=330
var xy7=30

var x8=50
var y8=370
var xy8=30

var x9=50
var y9=410
var xy9=30

var colsec=0
var hersec=0

//Botones Color 

var xc=130
var yc=50
var xyc=30

var xc1=170
var yc1=50
var xyc1=30

var xc2=210
var yc2=50
var xyc2=30

var xc3=250
var yc3=50
var xyc3=30

var xc4=290
var yc4=50
var xyc4=30

var xc5=330
var yc5=50
var xyc5=30

var xc6=370
var yc6=50
var xyc6=30

var xc7=410
var yc7=50
var xyc7=30

var xc8=450
var yc8=50
var xyc8=30

var xc9=490
var yc9=50
var xyc9=30

var xc10=530
var yc10=50
var xyc10=30

var xc11=570
var yc11=50
var xyc11=30



function setup() {
createCanvas(windowWidth,windowHeight);
background(255);

stroke(0);
  line(20,195,30,195);
  line(15,185,35,185);
  line(5,175,43,175);
   

fill(0);
    noStroke(0);
 rect(25,145,20,5)
 rect(30,138,10,20)
 //
  ellipse(35,49,10,10);
 ellipse(35,68,20,30);
 //
 ellipse(20,105,35,15);
 triangle(30,105,45,95,45,115);
 //
 noFill()
 stroke(1)
      ellipse(25,223,20,20)
      ellipse(30,223,20,20)
      ellipse(25,227,20,20);
      ellipse(30,227,20,20);
      //
noFill()
stroke(1);
      ellipse(13,267,20,20)
      ellipse(38,267,20,20)
      line(23,267,28,267);
      //
       fill(0)
      rect(10,315,30,10);
      rect(15,285,20,30);
      //
      line(10,370,40,340);
      quad(30,354,40,340,35,390,35,390);
      
      
      
      
}


function draw() {

  noStroke();
  
 
  //Botones Herramientas 
  fill(0);
  rect(x,y,xy,xy);
  rect(x1,y1,xy1,xy1);
  rect(x2,y2,xy2,xy2);
  rect(x3,y3,xy3,xy3);
  rect(x4,y4,xy4,xy4);
  rect(x5,y5,xy5,xy5);
  rect(x6,y6,xy6,xy6);
  rect(x7,y7,xy7,xy7);
  
  
  //Botones Colores
  //rojo
  fill(252,5,5);
  rect(xc,yc,xyc,xyc);
  //morado claro
  fill(152,46,140);
  rect(xc1,yc1,xyc1,xyc1);
  //morado oscuro
  fill(116,46,152);
  rect(xc2,yc2,xyc2,xyc2);
  //azul oscuro
  fill(46,68,152);
  rect(xc3,yc3,xyc3,xyc3);
  //azul claro
  fill(46,149,152);
  rect(xc4,yc4,xyc4,xyc4);
  //verde clarito
  fill(46,152,94);
  rect(xc5,yc5,xyc5,xyc5);
  //verde verde
  fill(77,152,46);
  rect(xc6,yc6,xyc6,xyc6);
  //amarillo
  fill(245,230,62);
  rect(xc7,yc7,xyc7,xyc7);
  //naranja
  fill(245,144,62);
  rect(xc8,yc8,xyc8,xyc8);
  //negro
  fill(0)
  rect(xc9,yc9,xyc9,xyc9);
  //borrador
  fill(255)
  stroke(0);
  rect(xc10,yc10,xyc10,xyc10);
  //clear
  fill(255)
  stroke(0);
  rect(xc11,yc11,xyc11,xyc11);
  
  // seleccion color
    if(colsec==0) {
      //rojo
      fill(252,5,5);
      stroke(252,5,5);
    }  else if( colsec==1) {
      //morado claro
      fill(152,46,140);
      stroke(152,46,140);
    } else if(colsec==2) {
      //morado oscuro
      fill(116,46,152);
      stroke(116,46,152);
    }
    else if(colsec==3) {
      //Azul Oscuro
     fill(46,68,152);
     stroke(46,68,152);
    }
    else if(colsec==4) {
      //Azul clarito
     fill(46,149,152);
     stroke(46,149,152);
    }
    else if(colsec==5) {
      //Verde clarito
     fill(46,152,94);
     stroke(46,152,94);
    }
     else if(colsec==6) {
      //Verde verde
     fill(77,152,46);
     stroke(77,152,46);
    }
    else if(colsec==7) {
      //Amarillo
     fill(245,230,62);
     stroke(245,230,62);
    }
     else if(colsec==8) {
      //naranja
     fill(245,144,62);
     stroke(245,144,62);
    }
    else if(colsec==9) {
      //negro
     fill(0);
     stroke(0);
    }
  else if(colsec==10) {
      //borrador
     fill(255);
     stroke(255);
    }

 
 
 
 
  if (mouseIsPressed==true) {
    //Seleccion herramienta 
    if (hersec==0) {
      ellipse(mouseX,mouseY,10,10);
      ellipse(mouseX,mouseY+20,20,30);
    } else if (hersec==1) {
      ellipse(mouseX,mouseY,40,20);
      triangle(mouseX+15,mouseY,mouseX+35,mouseY-10,mouseX+35,mouseY+10);
    } else if (hersec==2) {
      rect(mouseX+7,mouseY+19,20,5)
      rect(mouseX+12,mouseY+12,10,20)
    } else if(hersec==100) {
      ellipse(mouseX,mouseY,40,40)
    } else if(hersec==1000) {
      background(255);
    } else if(hersec==3) {
      line(mouseX-5,mouseY-1,mouseX+5,mouseY-1);
      line(mouseX-10,mouseY-10,mouseX+10,mouseY-10);
      line(mouseX-20,mouseY-20,mouseX+20,mouseY-20);
    } else if (hersec==4) {
      noFill()
      ellipse(mouseX,mouseY,40,40)
      ellipse(mouseX+10,mouseY,40,40)
      ellipse(mouseX,mouseY+10,40,40);
      ellipse(mouseX+10,mouseY+10,40,40); 
    }
    else if (hersec==5) {
      noFill()
      ellipse(mouseX,mouseY,20,20)
      ellipse(mouseX+25,mouseY,20,20)
      line(mouseX+10,mouseY,mouseX+15,mouseY);
    }
    else if (hersec==6) {
      rect(mouseX,mouseY,30,10);
      rect(mouseX+5,mouseY-30,20,30);
    }
    else if (hersec==7) {
      line(mouseX,mouseY,mouseX+40,mouseY-40);
      quad(mouseX+35,mouseY-35,mouseX+50,mouseY-50,mouseX+35,mouseY+35,mouseX+35,mouseY+35);
    
    }
    
    
    
    
    
    
      
    
   //seleccion colores
    if (mouseX > xc 
      && mouseX < xc + xyc
      && mouseY > yc
      && mouseY < yc + xyc) {
      //background(100);
      colsec=0;
      }
    
     if (mouseX > xc1 
      && mouseX < xc1 + xyc1
      && mouseY > yc1
      && mouseY < yc1 + xyc1) {
      //background(100);
      colsec=1;
      }
    
    if (mouseX > xc2
      && mouseX < xc2 + xyc2
      && mouseY > yc2
      && mouseY < yc2 + xyc2) {
      //background(100);
      colsec=2;
      }
    if (mouseX > xc3
      && mouseX < xc3 + xyc3
      && mouseY > yc3
      && mouseY < yc3 + xyc3) {
      //background(100);
      colsec=3;
      }
    
    if (mouseX > xc4
      && mouseX < xc4 + xyc4
      && mouseY > yc4
      && mouseY < yc4 + xyc4) {
      //background(100);
      colsec=4;
      }
     if (mouseX > xc5
      && mouseX < xc5 + xyc5
      && mouseY > yc5
      && mouseY < yc5 + xyc5) {
      //background(100);
      colsec=5;
      }
    if (mouseX > xc6
      && mouseX < xc6 + xyc6
      && mouseY > yc6
      && mouseY < yc6+ xyc6) {
      //background(100);
      colsec=6;
      }
    if (mouseX > xc7
      && mouseX < xc7 + xyc7
      && mouseY > yc7
      && mouseY < yc7+ xyc7) {
      //background(100);
      colsec=7;
      }
    if (mouseX > xc8
      && mouseX < xc8 + xyc8
      && mouseY > yc8
      && mouseY < yc8+ xyc8) {
      //background(100);
      colsec=8;
      }
     if (mouseX > xc9
      && mouseX < xc9 + xyc9
      && mouseY > yc9
      && mouseY < yc9+ xyc9) {
      //background(100);
      colsec=9;
      }
     if (mouseX > xc10
      && mouseX < xc10 + xyc10
      && mouseY > yc10
      && mouseY < yc10+ xyc10) {
      //background(100);
      colsec=10;
      }
     if (mouseX > xc11
      && mouseX < xc11 + xyc11
      && mouseY > yc11
      && mouseY < yc11+ xyc11) {
      //background(100);
      hersec=1000;
      }
    
    
    //zona sensible de los botones 
    
    if (mouseX>xc10
    &&mouseX<xc10+xyc10
    &&mouseY>yc10
    &&mouseY<yc10+xyc10) {
      hersec=100;
    }
   
    
    if (mouseX>x
    &&mouseX<x+xy
    &&mouseY>y
    &&mouseY<y+xy) {
      hersec=0;
    }
   if (mouseX>x1
    &&mouseX<x1+xy1
    &&mouseY>y1
    &&mouseY<y1+xy1) {
      hersec=1;
    }
   if (mouseX>x2
    &&mouseX<x2+xy2
    &&mouseY>y2
    &&mouseY<y2+xy2) {
      hersec=2;
    }
    if (mouseX>x3
    &&mouseX<x3+xy3
    &&mouseY>y3
    &&mouseY<y3+xy3) {
      hersec=3;
    }
   
   if (mouseX>x4
    &&mouseX<x4+xy4
    &&mouseY>y4
    &&mouseY<y4+xy4) {
      hersec=4;
    }
   if (mouseX>x5
    &&mouseX<x5+xy5
    &&mouseY>y5
    &&mouseY<y5+xy5) {
      hersec=5;
    }
   if (mouseX>x6
    &&mouseX<x6+xy6
    &&mouseY>y6
    &&mouseY<y6+xy6) {
      hersec=6;
    }
   if (mouseX>x7
    &&mouseX<x7+xy7
    &&mouseY>y7
    &&mouseY<y7+xy7) {
      hersec=7;
    }
   
   
   
   
   
   
   fill(0);
    noStroke(0);
 rect(25,145,20,5)
 rect(30,138,10,20)
 //
 ellipse(35,49,10,10);
 ellipse(35,68,20,30);
 //
 ellipse(20,105,35,15);
 triangle(30,105,45,95,45,115);
 //
 stroke(0);
  line(20,195,30,195);
  line(15,185,35,185);
  line(5,175,43,175);
  //
  noFill()
      ellipse(25,223,20,20)
      ellipse(30,223,20,20)
      ellipse(25,227,20,20);
      ellipse(30,227,20,20);
      //
   noFill()
      ellipse(13,267,20,20)
      ellipse(38,267,20,20)
      line(23,267,28,267);
      //
      fill(0)
      rect(10,320,30,10);
      rect(15,290,20,30);
      //
      line(10,370,40,340);
      quad(30,354,40,340,35,390,35,390);
    

   
   
   
}








}
