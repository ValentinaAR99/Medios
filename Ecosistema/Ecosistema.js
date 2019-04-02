var remy;
var stewart;
var losremys=[];
var numremys = 10;
var lospaz=[];
var paz; 
var numpaz=10;
var poli;
var laspolis=[];
var numpolis=5;

function setup() {
  createCanvas(1000, 850);
  
  remy = new rata(random(width),random (height));
  stewart= new rata(random(width),random (height));
  paz= new paloma(random(width),random (height));
  poli= new polilla(random(width), random(height));

  for (var i = 0; i < 10; i = i + 1) {
    losremys[i] = new rata(random(20,800),random (500,550));
  }
for (var i = 0; i < 10; i = i + 1) {
    lospaz[i] = new paloma(random(20,800),random (600,600));
  }
  for (var i=0; i<10; i=i +1) {
    laspolis[i]= new polilla(random(260,260), random (280,280));
  }
  



}

function draw() {
  background(2,6,52);
  
  
   if( this.posX> width) {
   this.posX=0
 }
  //remy.dibujarse();
  //remy.moverse();
   //if(dist(mouseX, mouseY, remy.posX, remy.posY) <25) {
 // remy.morirse();
  // }
  
  
  
  //stewart.dibujarse();
  //stewart.moverse();
  //if(dist(mouseX, mouseY, stewart.posX, stewart.posY) <25) {
   // stewart.morirse();
 // }
  
  //paz.dibujarse2();
  //paz.moverse2();
  //if(dist(remy.posX,remy.posY,paz.posXpal,paz.posYpal)<10){    paz.morirse();
                                                                       // }
    //Ciudad Fondo 
    //CALLE CURVA
  noStroke(); 
   
  fill(0);
  beginShape();
  curveVertex(320,520);
  curveVertex(320,520);
  curveVertex(360,470);
  curveVertex(390,340);
  curveVertex(360,170);
  curveVertex(230,0);
  curveVertex(300,0);
  curveVertex(500,170);
  curveVertex(580,360);
  curveVertex(540,520);
  curveVertex(320,520);
  curveVertex(320,520);
  endShape();
  
 //EDIFICIO
  fill(111);
  rect(120,200,200,320);
  fill(75,74,74,100);
  rect(140,420,160,100);
  fill(111);
  beginShape();
  vertex(120,200);
  vertex(170,170);
  vertex(360,170);
  vertex(360,470);
  vertex(320,520);
  vertex(320,200);
  endShape(); 
  
  fill(227,206,212);
  rect(540,380,230,140);
  

  //bakery
  fill(227,206,212);
  beginShape()
  vertex(540,380);
  vertex(590,340);
  vertex(800,340);
  vertex(800,470);
  vertex(770,520);
  vertex(770,380);
  endShape(); 
  
  //Carrera 
  fill(0);
  rect(0,520,1000,200)
  
  //Pasto 
  fill(7,39,3);
  rect(0,720,1000,150);
  
  //Arbol 1
  fill(72,46,20);
  rect(110,740,20,60);
  fill(60,147,42);
  ellipse(100,730,60,60);
  ellipse(120,710,60,60);
  ellipse(140,730,60,60);
  
  //Arbol 2
  fill(72,46,20);
  rect(410,740,20,60);
  fill(60,147,42);
  ellipse(400,730,60,60);
  ellipse(420,710,60,60);
  ellipse(440,730,60,60);

  //Arbol 3
  fill(72,46,20);
  rect(710,740,20,60);
  fill(60,147,42);
  ellipse(700,730,60,60);
  ellipse(720,710,60,60);
  ellipse(740,730,60,60);
  
  //Luz 
  fill(247,229,20,80);
  beginShape();
  vertex(325,250);
  vertex(280,530);
  vertex(380,530);
  vertex(340,250);
  endShape();
  
  
  //Poste 
  fill(100,99,98);
  rect(50,220,20,300);
  rect(50,220,250,20);
  triangle(300,200,370,250,300,250);
  
  //Puerta bakery 
  fill(118,86,20);
  rect(595,430,120,90);
  



  

  
  for (var i = 0; i < numremys; i = i + 1) {
    losremys[i].dibujarse();
    losremys[i].moverse();
    if(dist(lospaz[i].posXpal,lospaz[i].posYpal, losremys[i].posX, losremys[i].posY) <280 ){
       losremys[i].morirse();
    }
  

}
  
          
  
  for (var i = 0; i < numpaz; i = i + 1) {
  lospaz[i].dibujarse2();
  lospaz[i].moverse2();
    if(dist(losremys[i].posX,losremys[i].posY,lospaz[i].posXpal,lospaz[i].posYpal) <280) {
      lospaz[i].morirse2();
  }

}


  for (var i = 0; i < numpolis; i = i + 1) {
  laspolis[i].dibujarse3();
  laspolis[i].moverse3();
   

 }
 

   
 
 






}



function rata(_x,_y) {
  //caracteristicas
  this.posX = _x;
  this.posY = _y;
  this.dir = 1; 
  this.estaViva= true 
  //Habilidades 
  this.dibujarse = function() {
    
    if(this.estaViva == true) {
    fill(0);
    noStroke();
    ellipse(78 + this.posX, 50 + this.posY, 3, 3);
    fill(167, 164, 164);
    triangle(70 + this.posX, 45 + this.posY, 78 + this.posX, 50 + this.posY, 70 + this.posX, 55 + this.posY);
    ellipse(63 + this.posX, 50 + this.posY, 22, 12);
    ellipse(40 + this.posX, 52 + this.posY, 40, 20);
    ellipse(60 + this.posX, 41 + this.posY, 5, 10);
    fill(227, 185, 185);
    ellipse(50 + this.posX, 63 + this.posY, 10, 5);
    ellipse(30 + this.posX, 63 + this.posY, 10, 5);
    stroke(227, 185, 185);
    strokeWeight(2);
    line(20 + this.posX, 50 + this.posY, 10 + this.posX, 60 + this.posY);
    stroke(0)
    strokeWeight(0.5);
    line(75 + this.posX, 50 + this.posY, 70 + this.posX, 55 + this.posY);
    line(75 + this.posX, 50 + this.posY, 73 + this.posX, 55 + this.posY);
    fill(0);
    ellipse(78 + this.posX, 50 + this.posY, 3, 3);
    ellipse(64 + this.posX, 46 + this.posY, 4, 4);
  }


  }

  this.moverse = function() {

    this.posX = this.posX + random(1, 0)
    this.posY = this.posY + random(0, 0)

  }
  
  
  this.morirse = function () {
    
    this.estaViva = false
    
  }





}

function paloma (_x,_y) {
  //caracteristicas 
  this.posXpal=_x;
  this.posYpal=_y;
  this.dir=1
  this.estaViva2=true 
  
  //habilidades
  this.dibujarse2= function() {
  if(this.estaViva2 == true){
    noStroke();
  fill(130);
  ellipse(100+this.posXpal,100+this.posYpal,30,30);
  triangle(110+this.posXpal,95+this.posYpal,130+this.posXpal,105+this.posYpal,110+this.posXpal,105+this.posYpal);
  rect(105+this.posXpal,180+this.posYpal,5,16);
  rect(95+this.posXpal,180+this.posYpal,5,16);
  ellipse(100+this.posXpal,195+this.posYpal,10,5);
  ellipse(110+this.posXpal,195+this.posYpal,10,5);
  //torso
  
  ellipse(98+this.posXpal,150+this.posYpal,50,80);
  fill(123,114,131);
  ellipse(88+this.posXpal,155+this.posYpal,30,80)
  fill(0);
  ellipse(105+this.posXpal,95+this.posYpal,10,5);
  }

  }

  this.moverse2= function () {
    
    this.posXpal = this.posXpal + random(-1, 1)
    this.posYpal = this.posYpal + random(-1, 1)

  }
    this.morirse2 = function () {
      this.estaViva2=false}


}


function polilla (_x,_y) {
  //caracteristicas 
  this.posXpol=_x;
  this.posYpol=_y;
  this.dir=1
  this.estaViva3=true 
  
  //habilidades
  this.dibujarse3= function() {
  
    noStroke();
    noStroke();
  fill(162,157,157);
  triangle(62+this.posXpol,62+this.posYpol,82+this.posXpol,35+this.posYpol,82+this.posXpol,82+this.posYpol);
  triangle(62+this.posXpol,62+this.posYpol,42+this.posXpol,35+this.posYpol,42+this.posXpol,82+this.posYpol);
  fill(100,86,86);
  ellipse(62+this.posXpol,62+this.posYpol,3,25);
  stroke(0);
  line(61+this.posXpol,51+this.posYpol,60+this.posXpol,47+this.posYpol);
  line(63+this.posXpol,51+this.posYpol,64+this.posXpol,47+this.posYpol);
  }
  
  this.moverse3= function () {
    
    this.posXpol = this.posXpol + random(-1, 1)
    this.posYpol = this.posYpol + random(-1, 1)

  }
    


}
