var x=0
var x2=0
var x1=0
var y1=0
var y2=0
var gris=0
var y=0
var xE=0
var yE=0
var direccion=0
var direccion1=0


function setup() {
  createCanvas(windowWidth,windowHeight);
xE= random(0,width);
yE= 100
}

function draw() {
background(72,113,34);
//jugador 1
fill(160,224,102);
rect (x, y,20, 20);
//jugador 2 
fill(255)
rect(x1,y1,20,20);
//Manzana
fill(173,24,62);
ellipse(xE,yE,20,20);

print(dist(x1,y1,xE,yE));
if(dist(x1,y1,xE,yE)<30) {
 xE= random(0,width);
 yE= random(0,height);
}




if( x>width) {
 x= 0
}

if(x<-10) {
 x=1400

}

if(y>height) {
 y=0
}

if(y<-10) {
 y=600
}

if( x1>width) {
 x1= 0
}

if(x1<-10) {
 x1=1400

}

if(y1>height) {
 y1=0
}

if(y1<-10) {
 y1=600
}

if (direccion==2) {
  x=x+5}

if (direccion==3) {
  x=x-5}
  
if (direccion==0) {
  y=y-5}
  
if (direccion==1) {
  y=y+5}
  
  
 if (direccion1==2) {
  x1=x1+5}

if (direccion1==3) {
  x1=x1-5}
  
if (direccion1==0) {
  y1=y1-5}
  
if (direccion1==1) {
  y1=y1+5}



print(dist(x,y,xE,yE));
if(dist(x,y,xE,yE)<30) {
 xE= random(0,width);
 yE= random(0,height);
}




if( x>width) {
 x= 0
}

if(x<-10) {
 x=1400

}

if(y>height) {
 y=0
}

if(y<-10) {
 y=800
}


if (keyIsPressed== true) {

if(keyCode === RIGHT_ARROW) {
x=x+5
}
  
if(keyCode === LEFT_ARROW) {
 
x=x-5
}
 
 
 if(keyCode === UP_ARROW) {
 
 y=y-5

}

if(keyCode === DOWN_ARROW) {
 y=y+5
}

}

if (keyIsPressed== true) {


if(key === "d") {
x1=x1+5
}
  
if(key === "a") {
 
x1=x1-5
}
 
if(key === "w") {
 
y1=y1-5

}

if(key === "s") {
 y1=y1+5
}

}



}
function keyPressed() {

if (keyIsPressed== true) {

if(keyCode === RIGHT_ARROW) {
direccion=2
}

if(keyCode === LEFT_ARROW) {
 
direccion=3
}

if(keyCode === UP_ARROW) {
 
 direccion=0

}

if(keyCode === DOWN_ARROW) {
 direccion=1
}

if(key === "d") {
direccion1=2
}
  
if(key === "a") {
 
direccion1=3
}
 
 
 if(key === "w") {
 
 direccion1=0

}

if(key === "s") {
 direccion1=1
}
}















}
