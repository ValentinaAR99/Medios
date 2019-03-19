
var b1=600
var b2=100
var b3=20
var b4=100
var b5=100

var l1=600
var l3=600
var l2=90
var l4=100

var l22=90
var l44=100

var l222=90
var l444=100

var lp1=580
var lp2=600
var lp3=620
var lp4=600

var lq1=780
var lq2=600
var lq3=820
var lq4=600

var miCancion;
var miCancion2;
var mifuente 

var vol; //volumen (sus valores van de 0.0 a 1.1)

var miPan;
/*paneo (son valores que dicen en qué parlante suenan
los sonidos: izquierda o derecha. Los valores van de
 -1.0 a 1.0 en donde -1 es el parlante izquierdo y 1 el derecho*/

var actual;
var actual1;//tiempo actual de la canción



function preload() {
  
  miCancion = loadSound('assets/what.mp3');
  miCancion1= loadSound('assets/Been.mp3');
  mifuente=loadFont('RobotoMono-Light.ttf')

}



function setup() {
createCanvas(1500,1000);
background(62,59,59);

//DISCOS 
 
  
fill(0);
ellipse(300,350,400,400);
ellipse(1130,350,400,400);
fill(46,45,45);
ellipse(300,350,380,380);
ellipse(1130,350,380,380);
fill(137);
ellipse(1130,350,350,350);
ellipse(300,350,350,350);
stroke(0);
strokeWeight(8);
noFill();
ellipse(300,350,100,100);
ellipse(1130,350,100,100);
stroke(0);
strokeWeight(18);
noFill();
ellipse(300,350,50,50);
ellipse(1130,350,50,50);
//BOTONES MITAD 
fill(0);


for(var cant=0; cant<3; cant=cant+1) {
  
ellipse(b1,b2,b3,b3);
b1=b1+100
}

for(var cant=0; cant<5; cant=cant+1) {
  
ellipse(600,b2,b3,b3);
b2=b2+100
}

for(var cant=0; cant<5; cant=cant+1) {
  
ellipse(700,b4,b3,b3);
b4=b4+100
}

for(var cant=0; cant<5; cant=cant+1) {
  
ellipse(800,b5,b3,b3);
b5=b5+100
}

stroke(255);
strokeWeight(3);
for(var cant=0; cant<3; cant=cant+1) {
line(l1,l2,l3,l4);
l1=l1+100
l3=l3+100
}
for(var cant=0; cant<5; cant=cant+1) {
line(600,l2,600,l4);
l2=l2+100
l4=l4+100
}
for(var cant=0; cant<5; cant=cant+1) {
line(700,l22,700,l44);
l22=l22+100
l44=l44+100
}
for(var cant=0; cant<5; cant=cant+1) {
line(800,l222,800,l444);
l222=l222+100
l444=l444+100
}

stroke(137);
line(650,150,650,500);
line(750,150,750,500);

stroke(98,96,96);
strokeWeight(12);
line(600,600,600,750);
line(800,600,800,750);

strokeWeight(1);
stroke(103);

for(var cant=0; cant<16; cant=cant+1) {
line(lp1,lp2,lp3,lp4);
lp2=lp2+10
lp4=lp4+10
}
for(var cant=0; cant<16; cant=cant+1) {
line(lq1,lq2,lq3,lq4);
lq2=lq2+10
lq4=lq4+10
}





noStroke()
fill(44,42,42);
rect(560,675,80,40);
rect(760,635,80,40);

///botones colores parte inferior 
textSize(20)
  fill(0);
  textFont(mifuente);
  text("Play ", 55,630);
fill(105,222,74);
rect(50,650,60,40);
  textSize(20)
  fill(0);
  textFont(mifuente);
  text("Restart", 135,630);
fill(232,44,79);
rect(150,650,60,40);
   textSize(20)
  fill(0);
  textFont(mifuente);
  text("Forward", 235,630);
fill(44,77,232);
rect(250,650,60,40);
  fill(0);
  textFont(mifuente);
  text("Backward", 335,630);
fill(232,160,44);
rect(350,650,60,40);
    fill(0);
  textFont(mifuente);
  text("Fast",454,630);
fill(56,232,44);
rect(450,650,60,40);
//
  fill(0);
  textFont(mifuente);
  text("Slow",55,800);
fill(94,139,81);
rect(50,720,60,40);
fill(175,12,42);
rect(150,720,60,40);
fill(12,40,175);
rect(250,720,60,40);
fill(175,67,12);
rect(350,720,60,40);
fill(44,173,19);
rect(450,720,60,40);
//lado derecho 
  fill(0);
  textFont(mifuente);
  text("Play ", 1335,630);
fill(105,222,74);
rect(1330,650,60,40);
  fill(0);
  textFont(mifuente);
  text("Restart", 1215,630);
fill(232,44,79);
rect(1230,650,60,40);
  fill(0);
  textFont(mifuente);
  text("Forward", 1115,630);
fill(44,77,232);
rect(1130,650,60,40);
  fill(0);
  textFont(mifuente);
  text("Backward", 1005,630);
fill(232,160,44);
rect(1030,650,60,40);
   fill(0);
  textFont(mifuente);
  text("Fast",935,630);
fill(56,232,44);
rect(930,650,60,40);
///
  fill(0);
  textFont(mifuente);
  text("Slow",1335,800);
fill(94,139,81);
rect(1330,720,60,40);
fill(232,44,79);
rect(1230,720,60,40);
fill(44,77,232);
rect(1130,720,60,40);
fill(232,160,44);
rect(1030,720,60,40);
fill(56,232,44);
rect(930,720,60,40);


  








}

function draw() {
     
  actual = miCancion.currentTime();
  actual1= miCancion1.currentTime();
   if (mouseIsPressed == true) {
     
  if (mouseX > 50 
      && mouseX < 50 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
      miCancion.play(1);
      miCancion.rate(1);
   
    
    }
     
  if (mouseX > 150 
      && mouseX < 150 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
      miCancion.playMode('restart');
      miCancion.play();
    }
     
    if (mouseX > 250 
      && mouseX < 250 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
   miCancion.jump(actual + 1);
  }
     
     if (mouseX > 350 
      && mouseX < 350 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
   miCancion.jump(actual -1);
     
    }  
     
      
     if (mouseX > 450 
      && mouseX < 450 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
      miCancion.rate(4);

    }  

     
     if (mouseX > 50 
      && mouseX < 50 + 60
      && mouseY > 720
      && mouseY < 720 + 40) {
      miCancion.rate(0.5);
    }  
     
 ////CANCION 2
     
     
     if (mouseX > 1330 
      && mouseX < 1330 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
      miCancion1.play(1);
      miCancion1.rate(1);
   
    
    }
     
  if (mouseX > 1230
      && mouseX < 1230 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
      miCancion1.playMode('restart');
      miCancion1.play();
    }
     
    if (mouseX > 1130 
      && mouseX < 1130 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
   miCancion1.jump(actual1 + 1);
  }
     
     if (mouseX > 1030 
      && mouseX < 1030 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
   miCancion1.jump(actual1 -1);
     
    }  
     
      
     if (mouseX > 930 
      && mouseX < 930 + 60
      && mouseY > 650
      && mouseY < 650 + 40) {
      miCancion1.rate(4);

    }  

     
     if (mouseX > 1330 
      && mouseX < 1330 + 60
      && mouseY > 720
      && mouseY < 720 + 40) {
      miCancion1.rate(0.5);
    }  
     

  
     
   }
  
  
  
  
  
  
  
  
  
  
  
  

}