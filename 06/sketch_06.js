var miAno;
var miMes;
var miDia;
var miHora;
var miMinuto;

var miSegundo;
var miSegundoMod;
var x=0
var y=0
var z=0


function setup() {
createCanvas (windowWidth, windowHeight);
angleMode(DEGREES);
  strokeWeight(3);
  stroke(255);
  noFill();
  ellipse(width / 2, height / 2,800,800)



}


function draw() {
background(0);
miAno = year();
miMes = month();
miDia = day();
miHora = hour();
miMinuto = minute();
miSegundo = second();
  
  //miSegundoMod = map(miSegundo, 0, 59, 0, height);
  //noStroke();
  //textSize(50);
  //text(miSegundo,100,200);

    
 if(miSegundo==0) {
    z=0
 }
  z=z+2/10
  
  
 
  
miMinutoMod = map(miMinuto, 0, 59, 0, height);
  noStroke();
  textSize(50+z);
  fill(4,7,75,20+z);
  text(miMinuto,200,600);
  
  
  
  
  
    if(miSegundo==0) {
    x=0
  }
  
  if(miSegundo>0) {
    fill(12,20+y,206,0+x)
    textSize(50);
    text(miSegundo,100,200)
    x=x+1/50
    y=y+1/40
  }
  
  
  if(miSegundo>0) {
    fill(12,20+y,206,0+x)
    textSize(100);
    text(miSegundo,170,200)
    x=x+1/50
    y=y+1/40
  }
  
  if(miSegundo>0) {
    fill(12+y,20+y,206,0+x)
    textSize(200);
    text(miSegundo,300,200)
    x=x+1/50
    y=y+1/40
  }
  
  if(miSegundo>0) {
    fill(12,20+y,206,0+x)
    textSize(100);
    text(miSegundo,540,200)
    x=x+1/50
    y=y+1/40
  }
  
   if(miSegundo>0) {
    fill(12,20+y,206,0+x)
    textSize(50);
    text(miSegundo,670,200);
    x=x+1/80
    y=y+1/40
  }

  miHorGrad = map(miHora, 0, 12, 0, 360);

  push();
  translate(width / 2, height / 2);
  rotate(miHorGrad);
  stroke(255);
  strokeWeight(10);
  line(0, 0, 0, -150);
  pop();
  
  
  if(miHora==18) {
  fill(255);
  text("VI", 692, 830);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

if(miHora==19) {
  fill(255);
  text("VII",469,775);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==20) {
  fill(255);
  text("VIII",334,640);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==21) {
  fill(255);
  text("IX",295,430);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==22) {
  fill(255);
  text("X", 355, 240);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("XI",480,90);
  }

  if(miHora==23) {
  fill(255);
  text("XI",480,90);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  
  }

  if(miHora==24) {
  fill(255);
  text("XII", 685, 40);
  fill(21,23,129);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

if(miHora==1) {
  fill(255);
  text("I", 915, 90);
  fill(21,23,129);
  text("XII", 685, 40);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

if(miHora==2) {
  fill(255);
  text("II", 1050, 240);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==3) {
  fill(255);
  text("III", 1100,430);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==4) {
  fill(255);
  text("IV", 1050, 640);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

  if(miHora==5) {
  fill(255);
  text("V", 915, 775);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==6) {
  fill(255);
  text("VI", 692, 830);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

  if(miHora==7) {
  fill(255);
  text("VII",469,775);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

  if(miHora==8) {
  fill(255);
  text("VIII",334,640);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }

  if(miHora==9) {
  fill(255);
  text("IX",295,430);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==10) {
  fill(255);
  text("X", 355, 240);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("XI",480,90);
  }
  
  if(miHora==11) {
  fill(255);
  text("XI",480,90);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  }
  
  if(miHora==12) {
  fill(255);
  text("XII", 685, 40);
  fill(21,23,129);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==13) {
  fill(255);
  text("I", 915, 90);
  fill(21,23,129);
  text("XII", 685, 40);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==14) {
  fill(255);
  text("II", 1050, 240);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==15) {
  fill(255);
  text("III", 1100,430);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("IV", 1050, 640);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==16) {
  fill(255);
  text("IV", 1050, 640);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("V", 915, 775);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  if(miHora==17) {
  fill(255);
  text("V", 915, 775);
  fill(21,23,129);
  text("XII", 685, 40);
  text("I", 915, 90);
  text("II", 1050, 240);
  text("III", 1100,430);
  text("IV", 1050, 640);
  text("VI", 692, 830);
  text("VII",469,775);
  text("VIII",334,640);
  text("IX",295,430);
  text("X", 355, 240);
  text("XI",480,90);
  }
  
  
}
