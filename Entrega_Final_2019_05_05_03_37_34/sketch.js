var INTRODUCCION =1 
//Año 2012
var ANO2012= 2
var ANO2012DATMOTO=3
var ANO2012DATAMOTO=4
var ANO2012DATCONDUCTOR=5
var ANO2012DATPASAJERO=6
var ANO2012DATCICLISTA=7
var ANO2012DATACICLISTA=8
var ANO2012DATPEATON=9
var ANO2012SININFO=10
//Año 2013
var ANO2013=11
var ANO2013DATMOTO=12
var ANO2013DATAMOTO
var ANO2013DATCONDUCTOR
var ANO2013DATPASAJERO
var ANO2013DATCICLISTA
var ANO2013DATACICLISTA
var ANO2013DATPEATON
var ANO2013SININFO
//Año 2014
var ANO2014
var ANO2015
var ANO2016
var ANO2017
var ANO2018
var INTERACCION 
var datosmuertes
var noInfo
var Silla
var Peaton
var Bici 
var Moto 
var CascoMoto
var Carro
var CascoBici


  

var estado = INTRODUCCION 

function preload () {
  
  datosmuertes= loadTable('assets/muertostran.csv', 'csv', 'header');
  
  Moto= loadImage('assets/motor-sports.jpg')
  CascoMoto= loadImage('assets/helmet.jpg')
  Bici= loadImage('assets/bicycle.jpg')
  Carro= loadImage('assets/car.jpg')
  Silla= loadImage('assets/seat.jpg')
  CascoBici= loadImage('assets/cascobici.jpg')
  Peaton= loadImage('assets/walker.jpg')
  NoInfo= loadImage('assets/confusion.jpg')
  MiFuente= loadFont('assets/Anton-Regular.ttf')
  

  
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  
}

function draw() {
  
  
  if (estado==INTRODUCCION) {
  background(220);
  strokeWeight(50);
  fill(169,169,169);
  stroke(0);
  arc(windowWidth/2,600,600,600,-180,0);
  textSize(20);
  //INTRODUCCION
    
        //botonesAños
  noStroke(); 
  fill(255);
  rect(100,500,45,30);
  rect(150,430,45,30); 
  rect(220,370,45,30);  
  rect(323,330,45,30);
  rect(435,370,45,30);
  rect(510,430,45,30);
  rect(550,500,45,30);
  
    
    //Años
  noStroke()
  fill(0);
  text('2012',100,520);
  text('2013',150,450);
  text('2014',220,390);
  text('2015',323,350);
  text('2016',435,390);
  text('2017',510,450);
  text('2018',550,520);
  stroke(0);
  ellipse(345,560,20,20);
  stroke(0);
    

   
    strokeWeight(20);
    stroke(128,0,0);
    line(345,560,343,420);
    
    
    if (mouseIsPressed==true) {
    
    if (mouseX>100
        && mouseX < 100+45
        && mouseY > 500 
        && mouseY < 500+30 ) {
    
   estado = ANO2012
    
  }
    }
    
      if (mouseIsPressed==true) {
     if(mouseX> 150
        && mouseX<150+45
        && mouseY>430
        && mouseY<430+30) {
       
    estado=ANO2013
       
     }
  }
  }
    
    
  
  if (estado==ANO2012) {
    
  background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('2012',300,57);
    fill(100);
  textSize(20);
  text('Motociclista',50,260);
  image(Moto,30,70,150,150);
  text('Acompañante',225,260);
  text('Motociclista',230,285);
  image(CascoMoto,240,95,90,90);
  text('Conductor',405,265);
  image(Carro,380,75,140,140);
  text('Pasajero',600,270);
  image(Silla,580,80,120,120);
  text('Ciclista',75,530);
  image(Bici,40,340,130,130);
  text('Acompañante',230,530);
  text('Ciclista',250,555);
  image(CascoBici,230,350,110,110);
  text('Peatón',420,540);
  image(Peaton,400,350,110,110);
  text('Sin Información',570,540);
  image(NoInfo,580,350,110,110);
  
    //Boton Inicio 2012
    fill(0,0,255);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    
        if (mouseIsPressed==true) {
     if(mouseX> 30
        && mouseX<30+150
        && mouseY>70
        && mouseY<70+150) {
       
    estado=ANO2012DATMOTO
       
     }
    
    }
    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    
    
    
  }
    
    if( estado ==ANO2012DATMOTO) {
        background(0);
      }
   


   if( estado==ANO2013) {
  
  background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('2013',300,57);
    fill(100);
  textSize(20);
  text('Motociclista',50,260);
  image(Moto,30,70,150,150);
  text('Acompañante',225,260);
  text('Motociclista',230,285);
  image(CascoMoto,240,95,90,90);
  text('Conductor',405,265);
  image(Carro,380,75,140,140);
  text('Pasajero',600,270);
  image(Silla,580,80,120,120);
  text('Ciclista',75,530);
  image(Bici,40,340,130,130);
  text('Acompañante',230,530);
  text('Ciclista',250,555);
  image(CascoBici,230,350,110,110);
  text('Peatón',420,540);
  image(Peaton,400,350,110,110);
  text('Sin Información',570,540);
  image(NoInfo,580,350,110,110);
  
    //Boton Inicio 2012
    fill(0,0,255);
    textSize(20);
    rect(20,30,60,30);
    fill(255,34,65);
    text('Inicio',27,53);
     
     
     if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
     
   }
  if (mouseIsPressed==true) {
     if(mouseX> 30
        && mouseX<30+150
        && mouseY>70
        && mouseY<70+150) {
       
    estado=ANO2013DATMOTO
       
     }
    
    }

   }
  
  
  if( estado ==ANO2013DATMOTO) {
        background(244,0,0);
      }
  
  
  
  
  
  
  
  
  
  
} //Cierre draw 
  
    
  


  
  //text('2017',

//function mouseDragged() {
 // return false;
//}

