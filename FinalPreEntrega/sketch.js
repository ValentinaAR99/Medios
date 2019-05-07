var INTRODUCCION =1 
//Año 2012
var ANO2012= 2

//Año 2013
var ANO2013=3

//Año 2014
var ANO2014=4
var ANO2015=5
var ANO2016=6
var ANO2017=7
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
var muerte 

var m=70
var u=230
var e=25
var r=25

  70,230,25,25




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
  muerte= loadImage('assets/skull (2).jpg')

  
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  numfilas = datosmuertes.getRowCount();
  numcolumnas = datosmuertes.getColumnCount();
  
}

function draw() {
  
  // Estado Inicial 
  
  if (estado==INTRODUCCION) {
  background(220);
  strokeWeight(50);
  fill(169,169,169);
  stroke(0);
  arc(windowWidth/2,650,600,600,-180,0);
  textSize(20);
  //INTRODUCCION
    
        //botonesAños
  noStroke(); 
  fill(169);
  rect(265,580,45,30);
  rect(315,510,45,30); 
  rect(385,450,45,30);  
  rect(465,410,45,30);
  rect(565,450,45,30);
  rect(625,510,45,30);
  rect(675,580,45,30);
  
    
    //Años
  noStroke()
  fill(0);
    
    
  text('2012',265,600);
  text('2013',315,530);
  text('2014',385,470);
  text('2015',465,430);
  text('2016',565,470);
  text('2017',625,530);
  text('2018',675,600);
  stroke(0);
  ellipse(windowWidth/2,610,20,20);
  stroke(0);
    

   
    strokeWeight(20);
    stroke(128,0,0);
    line(windowWidth/2,610,windowWidth/2,470);
    
    
    if (mouseIsPressed==true) {
    
    if (mouseX>265
        && mouseX < 265+45
        && mouseY > 580
        && mouseY < 580+30 ) {
    
   estado = ANO2012
    
  }
    }
    
      if (mouseIsPressed==true) {
     if(mouseX> 315
        && mouseX<315+45
        && mouseY>510
        && mouseY<510+30) {
       
    estado=ANO2013
       
     }
  }
    
    if (mouseIsPressed==true) {
     if(mouseX> 385
        && mouseX<384+45
        && mouseY>450
        && mouseY<450+30) {
       
    estado=ANO2014
       
     } 
  }
    
    
    
    if (mouseIsPressed==true) {
     if(mouseX> 465
        && mouseX<465+45
        && mouseY>410
        && mouseY<410+30) {
       
    estado=ANO2015
       
     } 
  }
    
       if (mouseIsPressed==true) {
     if(mouseX> 565
        && mouseX<565+45
        && mouseY>450
        && mouseY<450+30) {
       
    estado=ANO2016
       
     } 
  } 
    
    if (mouseIsPressed==true) {
     if(mouseX> 625
        && mouseX<625+45
        && mouseY>510
        && mouseY<510+30) {
       
    estado=ANO2017
       
     } 
  } 
   
    
    
    
    
    
    
  }
    
  //Contenido Pantalla Menu 2012  
  
  if (estado==ANO2012) {
    
  background(255);
  
  noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);
    fill(100);
  textSize(15);
    //moto
  text('Motociclista',70,110);
  image(Moto,70,130,80,80);
    //casco
  text('Acompañante',185,100);
  text('Motociclista',188,125);
  image(CascoMoto,200,140,50,50);
    //carro
  text('Conductor',307,110);
  image(Carro,300,130,80,80);
    //silla
  text('Pasajero',407,110);
  image(Silla,408,130,60,60);
    //bicicleta
  text('Ciclista',508,110);
  image(Bici,495,130,70,70);
    //casco bicicleta 
  text('Acompañante',593,100);
  text('Ciclista',610,125);
  image(CascoBici,602,140,60,60);
    //persona
  text('Peatón',710,110);
  image(Peaton,700,140,60,60);
    //persona signo interrogacion
  text('Sin Información',790,110);
  image(NoInfo,800,130,60,60);
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
      //image(muerte,30,40);
 
  }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(0, 1);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,800,600);
      //image(muerte,30,40);
 
  }
    // Motociclista Muertes 
   image(muerte,64,200,25,25);
   image(muerte,64+30,200,25,25); 
  image(muerte,64+30+30,200,25,25);
    
   image(muerte,64,230,25,25);
   image(muerte,94,230,25,25); 
   image(muerte,124,230,25,25);
    
   image(muerte,64,230+30,25,25);
   image(muerte,94,230+30,25,25); 
  image(muerte,124,230+30,25,25);
    

    
   image(muerte,64,290,25,25);
   image(muerte,94,290,25,25); 
   image(muerte,124,290,25,25);
    
   image(muerte,64,320,25,25);
   image(muerte,94,320,25,25); 
   image(muerte,124,320,25,25);
    
   image(muerte,64,350,25,25);
   image(muerte,94,350,25,25); 
   image(muerte,124,350,25,25);
    
    image(muerte,64,380,25,25);
   image(muerte,94,380,25,25); 
   image(muerte,124,380,25,25);
    
  image(muerte,64,410,25,25);
  image(muerte,94,410,25,25);
    
    //Acompañante motociclista muertes 
    image(muerte,194,200,25,25);
  image(muerte,194+30,200,25,25); 
  
    //Conductor muertes 
    
  image(muerte,294,200,25,25);
  image(muerte,324,200,25,25); 
  image(muerte,354,200,25,25);

    //Pasajeros Muertes
  image(muerte,394,200,25,25);
  image(muerte,424,200,25,25); 
  image(muerte,454,200,25,25); 
  
  image(muerte,394,230,25,25);
  image(muerte,424,230,25,25); 
  image(muerte,454,230,25,25);
    //muertes cliclista 
  image(muerte,500,200,25,25);
  image(muerte,530,200,25,25);
    
    //Acompañante cliclista 
    //Peatón
    
image(muerte,690,200,25,25);
image(muerte,690+30,200,25,25);
image(muerte,750,200,25,25);
    
image(muerte,690,230,25,25);
image(muerte,720,230,25,25);
image(muerte,750,230,25,25);

image(muerte,690,260,25,25);
image(muerte,720,260,25,25);
image(muerte,750,260,25,25);
    
image(muerte,690,290,25,25);
image(muerte,720,290,25,25);
image(muerte,750,290,25,25);
    
image(muerte,690,320,25,25);
image(muerte,720,320,25,25);
image(muerte,750,320,25,25);
    
image(muerte,690,350,25,25);
image(muerte,720,350,25,25);
image(muerte,750,350,25,25);
    
    //muertes no informacion
  image(muerte,805,200,25,25);
  image(muerte,835,200,25,25);


    
  }
    
  //Datos 2012 Motos 
  
    
    //image(muerte,50,300,50,50);
    //for (var i = 0; i < numfilas; i = i + 1) {
  //var muertes= datosmuertes.getNum(1, 8);
  //var ano = datosmuertes.getString(i, 1);
      
      //fill(255,0,0);
      //noStroke();
     //textSize(50);
      //text(muertes,580,70);
      
    
      
      
      
      
      

   

// Contenido Pantalla Menu 2013
   if(estado==ANO2013) {
  
background(255);
  
  noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);
    fill(100);
  textSize(15);
    //moto
  text('Motociclista',70,110);
  image(Moto,70,130,80,80);
    //casco
  text('Acompañante',185,100);
  text('Motociclista',188,125);
  image(CascoMoto,200,140,50,50);
    //carro
  text('Conductor',307,110);
  image(Carro,300,130,80,80);
    //silla
  text('Pasajero',407,110);
  image(Silla,408,130,60,60);
    //bicicleta
  text('Ciclista',508,110);
  image(Bici,495,130,70,70);
    //casco bicicleta 
  text('Acompañante',593,100);
  text('Ciclista',610,125);
  image(CascoBici,602,140,60,60);
    //persona
  text('Peatón',710,110);
  image(Peaton,700,140,60,60);
    //persona signo interrogacion
  text('Sin Información',790,110);
  image(NoInfo,800,130,60,60);
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
      //image(muerte,30,40);
 
  }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(1, 1);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,800,600);
      //image(muerte,30,40);
 
  }
    // Motociclista Muertes 
   image(muerte,64,200,25,25);
   image(muerte,64+30,200,25,25); 
  image(muerte,64+30+30,200,25,25);
    
   image(muerte,64,230,25,25);
   image(muerte,94,230,25,25); 
   image(muerte,124,230,25,25);
    
   image(muerte,64,230+30,25,25);
   image(muerte,94,230+30,25,25); 
  image(muerte,124,230+30,25,25);
    

    
   image(muerte,64,290,25,25);
   image(muerte,94,290,25,25); 
   image(muerte,124,290,25,25);
    
   image(muerte,64,320,25,25);
   image(muerte,94,320,25,25); 
   image(muerte,124,320,25,25);
    
   image(muerte,64,350,25,25);
   image(muerte,94,350,25,25); 
   image(muerte,124,350,25,25);
    
    image(muerte,64,380,25,25);
   image(muerte,94,380,25,25); 
   image(muerte,124,380,25,25);
    

    
    //Acompañante motociclista muertes 
  image(muerte,180,200,25,25);
  image(muerte,180+30,200,25,25);
  image(muerte,180+30+30,200,25,25);
  image(muerte,180,200+30,25,25);
  image(muerte,180+30,200+30,25,25);
  
    //Conductor muertes 
    
  image(muerte,294,200,25,25);
  image(muerte,324,200,25,25); 
  image(muerte,354,200,25,25);
  image(muerte,294,230,25,25);
  image(muerte,324,230,25,25); 
  image(muerte,354,230,25,25);

    //Pasajeros Muertes
  image(muerte,394,200,25,25);
  image(muerte,424,200,25,25); 
  image(muerte,454,200,25,25); 
  
  image(muerte,394,230,25,25);
  image(muerte,424,230,25,25); 
  image(muerte,454,230,25,25);
    //muertes cliclista 
  image(muerte,490,200,25,25);
  image(muerte,518,200,25,25);
  image(muerte,518+28,200,25,25);
    
    //Acompañante cliclista 
    //Peatón
    
image(muerte,690,200,25,25);
image(muerte,690+30,200,25,25);
image(muerte,750,200,25,25);
    
image(muerte,690,230,25,25);
image(muerte,720,230,25,25);
image(muerte,750,230,25,25);

image(muerte,690,260,25,25);
image(muerte,720,260,25,25);
image(muerte,750,260,25,25);
    
image(muerte,690,290,25,25);
image(muerte,720,290,25,25);
image(muerte,750,290,25,25);
    
image(muerte,690,320,25,25);
image(muerte,720,320,25,25);
image(muerte,750,320,25,25);
    
image(muerte,690,350,25,25);
image(muerte,720,350,25,25);
image(muerte,750,350,25,25);
    
    //muertes no informacion
  image(muerte,818,200,25,25);
 


    
  
  
    //Boton Inicio 2013
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
     
   }}




   
  
  

  
  
  
  //Contenido pantalla menu 2014
  
  if(estado==ANO2014) {
  
background(255);
  
  noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);
    fill(100);
  textSize(15);
    //moto
  text('Motociclista',70,110);
  image(Moto,70,130,80,80);
    //casco
  text('Acompañante',185,100);
  text('Motociclista',188,125);
  image(CascoMoto,200,140,50,50);
    //carro
  text('Conductor',307,110);
  image(Carro,300,130,80,80);
    //silla
  text('Pasajero',407,110);
  image(Silla,408,130,60,60);
    //bicicleta
  text('Ciclista',508,110);
  image(Bici,495,130,70,70);
    //casco bicicleta 
  text('Acompañante',593,100);
  text('Ciclista',610,125);
  image(CascoBici,602,140,60,60);
    //persona
  text('Peatón',710,110);
  image(Peaton,700,140,60,60);
    //persona signo interrogacion
  text('Sin Información',790,110);
  image(NoInfo,800,130,60,60);
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
      //image(muerte,30,40);
 
  }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(2, 1);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,800,600);
      //image(muerte,30,40);
 
  }
    // Motociclista Muertes 
   image(muerte,64,200,25,25);
   image(muerte,64+30,200,25,25); 
  image(muerte,64+30+30,200,25,25);
    
   image(muerte,64,230,25,25);
   image(muerte,94,230,25,25); 
   image(muerte,124,230,25,25);
    
   image(muerte,64,230+30,25,25);
   image(muerte,94,230+30,25,25); 
  image(muerte,124,230+30,25,25);
    

    
   image(muerte,64,290,25,25);
   image(muerte,94,290,25,25); 
   image(muerte,124,290,25,25);
    
   image(muerte,64,320,25,25);
   image(muerte,94,320,25,25); 
   image(muerte,124,320,25,25);
    
   image(muerte,64,350,25,25);

    
    //Acompañante motociclista muertes 
  image(muerte,194,200,25,25);
  image(muerte,194+30,200,25,25); 
   image(muerte,194,200+30,25,25);
  image(muerte,194+30,200+30,25,25); 
    
    
    
    
    //Conductor muertes 
    
  image(muerte,294+15,200,25,25);
  image(muerte,324+15,200,25,25); 
  

    //Pasajeros Muertes
  image(muerte,394+15,200,25,25);
  image(muerte,424+15,200,25,25); 
  
  
  image(muerte,394+15,230,25,25);
  image(muerte,424+15,230,25,25); 
  
    //muertes cliclista 
  image(muerte,500,200,25,25);
  image(muerte,530,200,25,25);
    
    //Acompañante cliclista 
    //Peatón
    
image(muerte,690,200,25,25);
image(muerte,690+30,200,25,25);
image(muerte,750,200,25,25);
    
image(muerte,690,230,25,25);
image(muerte,720,230,25,25);
image(muerte,750,230,25,25);

image(muerte,690,260,25,25);
image(muerte,720,260,25,25);
image(muerte,750,260,25,25);
    
image(muerte,690,290,25,25);
image(muerte,720,290,25,25);
image(muerte,750,290,25,25);
    

    
    //muertes no informacion
image(muerte,818,200,25,25);


    
  
     
     
     if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
     
   }
  }
  
   if (estado==ANO2015) {
    
  background(255);
  
  noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);
    fill(100);
  textSize(15);
    //moto
  text('Motociclista',70,110);
  image(Moto,70,130,80,80);
    //casco
  text('Acompañante',185,100);
  text('Motociclista',188,125);
  image(CascoMoto,200,140,50,50);
    //carro
  text('Conductor',307,110);
  image(Carro,300,130,80,80);
    //silla
  text('Pasajero',407,110);
  image(Silla,408,130,60,60);
    //bicicleta
  text('Ciclista',508,110);
  image(Bici,495,130,70,70);
    //casco bicicleta 
  text('Acompañante',593,100);
  text('Ciclista',610,125);
  image(CascoBici,602,140,60,60);
    //persona
  text('Peatón',710,110);
  image(Peaton,700,140,60,60);
    //persona signo interrogacion
  text('Sin Información',790,110);
  image(NoInfo,800,130,60,60);
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
      //image(muerte,30,40);
 
  }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(3, 1);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,800,600);
      //image(muerte,30,40);
 
  }
    // Motociclista Muertes 
   image(muerte,64,200,25,25);
   image(muerte,64+30,200,25,25); 
  image(muerte,64+30+30,200,25,25);
    
   image(muerte,64,230,25,25);
   image(muerte,94,230,25,25); 
   image(muerte,124,230,25,25);
    
   image(muerte,64,230+30,25,25);
   image(muerte,94,230+30,25,25); 
  image(muerte,124,230+30,25,25);
    

    
   image(muerte,64,290,25,25);
   image(muerte,94,290,25,25); 
   image(muerte,124,290,25,25);
    
   image(muerte,64,320,25,25);
   image(muerte,94,320,25,25); 
   image(muerte,124,320,25,25);
    
   image(muerte,64,350,25,25);
   image(muerte,94,350,25,25); 

    
    //Acompañante motociclista muertes 
    image(muerte,180,200,25,25);
  image(muerte,180+30,200,25,25);
  image(muerte,180+30+30,200,25,25);
  
    //Conductor muertes 
    
  image(muerte,294+15,200,25,25);
  image(muerte,324+15,200,25,25); 
  

    //Pasajeros Muertes
  image(muerte,394,200,25,25);
  image(muerte,424,200,25,25); 
  image(muerte,454,200,25,25); 
  

    //muertes cliclista 
  image(muerte,500,200,25,25);
  image(muerte,530,200,25,25);
    
    //Acompañante cliclista 
    //Peatón
    
image(muerte,690,200,25,25);
image(muerte,690+30,200,25,25);
image(muerte,750,200,25,25);
    
image(muerte,690,230,25,25);
image(muerte,720,230,25,25);
image(muerte,750,230,25,25);

image(muerte,690,260,25,25);
image(muerte,720,260,25,25);
image(muerte,750,260,25,25);
    
image(muerte,690,290,25,25);
image(muerte,720,290,25,25);
image(muerte,750,290,25,25);
    

    
    //muertes no informacion
  image(muerte,805,200,25,25);
  image(muerte,835,200,25,25);


    
  }
  
  if (estado==ANO2016) {
    
  background(255);
  
  noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);
    fill(100);
  textSize(15);
    //moto
  text('Motociclista',70,110);
  image(Moto,70,130,80,80);
    //casco
  text('Acompañante',185,100);
  text('Motociclista',188,125);
  image(CascoMoto,200,140,50,50);
    //carro
  text('Conductor',307,110);
  image(Carro,300,130,80,80);
    //silla
  text('Pasajero',407,110);
  image(Silla,408,130,60,60);
    //bicicleta
  text('Ciclista',508,110);
  image(Bici,495,130,70,70);
    //casco bicicleta 
  text('Acompañante',593,100);
  text('Ciclista',610,125);
  image(CascoBici,602,140,60,60);
    //persona
  text('Peatón',710,110);
  image(Peaton,700,140,60,60);
    //persona signo interrogacion
  text('Sin Información',790,110);
  image(NoInfo,800,130,60,60);
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
      //image(muerte,30,40);
 
  }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(4, 1);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,800,600);
      //image(muerte,30,40);
 
  }
    // Motociclista Muertes 
   image(muerte,64,200,25,25);
   image(muerte,64+30,200,25,25); 
  image(muerte,64+30+30,200,25,25);
    
   image(muerte,64,230,25,25);
   image(muerte,94,230,25,25); 
   image(muerte,124,230,25,25);
    
   image(muerte,64,230+30,25,25);
   image(muerte,94,230+30,25,25); 
  image(muerte,124,230+30,25,25);
    

    
   image(muerte,64,290,25,25);
   image(muerte,94,290,25,25); 
   image(muerte,124,290,25,25);
    
   image(muerte,64,320,25,25);
   image(muerte,94,320,25,25); 
   image(muerte,124,320,25,25);
    
   image(muerte,64,350,25,25);
   image(muerte,94,350,25,25); 
   image(muerte,124,350,25,25);
    
    image(muerte,64,380,25,25);
   image(muerte,94,380,25,25); 
   image(muerte,124,380,25,25);
    
  image(muerte,64,410,25,25);
  image(muerte,94,410,25,25);
  image(muerte,124,410,25,25);
   
  image(muerte,64,440,25,25);
  image(muerte,94,440,25,25);
  image(muerte,124,440,25,25);
  image(muerte,64,470,25,25);
    
    //Acompañante motociclista muertes 
image(muerte,180,200,25,25);
  image(muerte,180+30,200,25,25);
  image(muerte,180+30+30,200,25,25);
  image(muerte,180,200+30,25,25);
  image(muerte,180+30,200+30,25,25); 
  
    //Conductor muertes 
    
  image(muerte,294,200,25,25);
  image(muerte,324,200,25,25); 
  image(muerte,354,200,25,25);

    //Pasajeros Muertes
  image(muerte,394,200,25,25);
  image(muerte,424,200,25,25); 
  image(muerte,454,200,25,25); 
  
  image(muerte,394,230,25,25);
  image(muerte,424,230,25,25); 
  
    //muertes cliclista 
image(muerte,490,200,25,25);
  image(muerte,518,200,25,25);
  image(muerte,518+28,200,25,25);
    
    //Acompañante cliclista 
    //Peatón
    
image(muerte,690,200,25,25);
image(muerte,690+30,200,25,25);
image(muerte,750,200,25,25);
    
image(muerte,690,230,25,25);
image(muerte,720,230,25,25);
image(muerte,750,230,25,25);

image(muerte,690,260,25,25);
image(muerte,720,260,25,25);
image(muerte,750,260,25,25);
    
image(muerte,690,290,25,25);
image(muerte,720,290,25,25);
image(muerte,750,290,25,25);
    
image(muerte,690,320,25,25);
image(muerte,720,320,25,25);
image(muerte,750,320,25,25);
    
image(muerte,690,350,25,25);
image(muerte,720,350,25,25);

    
    //muertes no informacion
  image(muerte,785,200,25,25);
  image(muerte,815,200,25,25);
  image(muerte,845,200,25,25);


    
  }

 
   if (estado==ANO2017) {
    
  background(255);
  
  noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);
    fill(100);
  textSize(15);
    //moto
  text('Motociclista',70,110);
  image(Moto,70,130,80,80);
    //casco
  text('Acompañante',185,100);
  text('Motociclista',188,125);
  image(CascoMoto,200,140,50,50);
    //carro
  text('Conductor',307,110);
  image(Carro,300,130,80,80);
    //silla
  text('Pasajero',407,110);
  image(Silla,408,130,60,60);
    //bicicleta
  text('Ciclista',508,110);
  image(Bici,495,130,70,70);
    //casco bicicleta 
  text('Acompañante',593,100);
  text('Ciclista',610,125);
  image(CascoBici,602,140,60,60);
    //persona
  text('Peatón',710,110);
  image(Peaton,700,140,60,60);
    //persona signo interrogacion
  text('Sin Información',790,110);
  image(NoInfo,800,130,60,60);
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
      //image(muerte,30,40);
 
  }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(5, 1);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,800,600);
      //image(muerte,30,40);
 
  }
    // Motociclista Muertes 
   image(muerte,64,200,25,25);
   image(muerte,64+30,200,25,25); 
  image(muerte,64+30+30,200,25,25);
    
   image(muerte,64,230,25,25);
   image(muerte,94,230,25,25); 
   image(muerte,124,230,25,25);
    
   image(muerte,64,230+30,25,25);
   image(muerte,94,230+30,25,25); 
  image(muerte,124,230+30,25,25);
    

    
   image(muerte,64,290,25,25);
   image(muerte,94,290,25,25); 
   image(muerte,124,290,25,25);
    
   image(muerte,64,320,25,25);
   image(muerte,94,320,25,25); 
   image(muerte,124,320,25,25);
    
   image(muerte,64,350,25,25);
   image(muerte,94,350,25,25); 
   image(muerte,124,350,25,25);
    
    image(muerte,64,380,25,25);
   image(muerte,94,380,25,25); 
   image(muerte,124,380,25,25);
    
  image(muerte,64,410,25,25);
  image(muerte,94,410,25,25);
  image(muerte,124,410,25,25);
   
  image(muerte,64,440,25,25);
  image(muerte,94,440,25,25);
  image(muerte,124,440,25,25);
  image(muerte,64,470,25,25);
    
    //Acompañante motociclista muertes 
image(muerte,180,200,25,25);
  image(muerte,180+30,200,25,25);
  image(muerte,180+30+30,200,25,25);
  image(muerte,180,200+30,25,25);
  image(muerte,180+30,200+30,25,25); 
  
    //Conductor muertes 
    
  image(muerte,294,200,25,25);
  image(muerte,324,200,25,25); 
  image(muerte,354,200,25,25);

    //Pasajeros Muertes
  image(muerte,394,200,25,25);
  image(muerte,424,200,25,25); 
  image(muerte,454,200,25,25); 
  
  image(muerte,394,230,25,25);
  image(muerte,424,230,25,25); 
  
    //muertes cliclista 
image(muerte,490,200,25,25);
  image(muerte,518,200,25,25);
  image(muerte,518+28,200,25,25);
    
    //Acompañante cliclista 
    //Peatón
    
image(muerte,690,200,25,25);
image(muerte,690+30,200,25,25);
image(muerte,750,200,25,25);
    
image(muerte,690,230,25,25);
image(muerte,720,230,25,25);
image(muerte,750,230,25,25);

image(muerte,690,260,25,25);
image(muerte,720,260,25,25);
image(muerte,750,260,25,25);
    
image(muerte,690,290,25,25);
image(muerte,720,290,25,25);
image(muerte,750,290,25,25);
    
image(muerte,690,320,25,25);
image(muerte,720,320,25,25);
image(muerte,750,320,25,25);
    
image(muerte,690,350,25,25);
image(muerte,720,350,25,25);

    
    //muertes no informacion
  image(muerte,785,200,25,25);
  image(muerte,815,200,25,25);
  image(muerte,845,200,25,25);


    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}//Cierre draw 
  
    
  


  
  //text('2017',

//function mouseDragged() {
 // return false;
//}

