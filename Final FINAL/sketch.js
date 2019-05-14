var INTRODUCCION =1 
//Año 2012
var ANO2012=2

//Año 2013
var ANO2013=3

//Año 2014
var ANO2014=4
var ANO2015=5
var ANO2016=6
var ANO2017=7
var ANO2018=8
var ANO2012AC=9
var ANO2013AC=10
var ANO2014AC=11
var ANO2015AC=12
var ANO2016AC=13
var ANO2017AC=14
var ANO2018AC=15
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
var todos
var kit 
var RIP

var m=70
var u=230
var e=25
var r=25

var gasolina 
var street



var estado = INTRODUCCION 

function preload () {
  
  datosmuertes= loadTable('assets/muertostran.csv', 'csv', 'header');
  datosaccidentes= loadTable('assets/Accidentestran.csv','csv','header');
  
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
  
 kit= loadImage('assets/emergency-kit.jpg')

  gasolina= loadImage('assets/Untitled-1.jpg')
  
  street= loadImage('assets/street.jpg')
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  numfilas = datosmuertes.getRowCount();
  numcolumnas = datosmuertes.getColumnCount();
  numfilas2=datosaccidentes.getRowCount();
  numcolumnas2=datosaccidentes.getRowCount();
  angleMode(DEGREES);
  
}

function draw() {
  
  // Estado Inicial 
  
  if (estado==INTRODUCCION) {
  background(78,82,83);
  strokeWeight(50);
    
    if(rotationX==180) {
      estado=RIP
    }
    image(street,-190+rotationX*4,-230+rotationY*4,1300,600);
    noStroke()
    fill(37,31,20);
    rect(0,260,1600,1000);
    
  noStroke();  
  fill(0);
  arc(windowWidth/2,650,1000,900,-180,0);
  fill(169,169,169);
  stroke(51);
    strokeWeight(30);
  arc(windowWidth/2,650,600,600,-180,0);
    
  image(gasolina, 80,480,60,80);
    
    
    
    
    
    
    
    
  textSize(20);
  
    
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

   //fill(255,20,80); 
    fill(51);
  rect(835,425,75,40);
    
    noStroke()
  fill(0);
  text("Todos",845,450),
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
  
    
    
    
  
  line(windowWidth/2,610,(windowWidth/2),470);
    
    
    
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
   
   
    if (mouseIsPressed==true) {
     if(mouseX> 675
        && mouseX<675+45
        && mouseY>580
        && mouseY<580+30) {
       
    estado=ANO2018
       
     } 
  } 
    
    
    
    835,425,80,45
    
    
    
    if (mouseIsPressed==true) {
     if(mouseX> 835
        && mouseX<835+75
        && mouseY>425
        && mouseY<425+40) {
       
    estado=todos
       
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
 
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    //Boton Accidentes 
    fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
       
    

    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2012AC
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
      
    if(estado==ANO2012AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255);  text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2012
       
     }
       }
      
  

      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      text(12.239,55,600);
 image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20);     image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);   
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20);    
      
      //datos acomp motociclista accdidentes 
      text(6119,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20);     image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);   
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20);    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
      

      //datos conductor accidentes 
      text(9273,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
 image(kit,325,275,20,20);  image(kit,355,275,20,20);    
 image(kit,295,300,20,20);
 image(kit,325,300,20,20);  image(kit,355,300,20,20); 
       image(kit,295,325,20,20);
 image(kit,325,325,20,20);  image(kit,355,325,20,20);
      
image(kit,295,350,20,20);
 image(kit,325,350,20,20);  image(kit,355,350,20,20);
      
 image(kit,295,375,20,20);
 image(kit,325,375,20,20);  
  
      //datos pasajero accidentes
      text(3091,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20);  image(kit,455,225,20,20);
   
 image(kit,395,250,20,20);
 image(kit,425,250,20,20); 
      
      //datos ciclista accidentes
      text(1421,494,600);
      
 image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         

      //datos acomp ciclista 
      text(710,593,600);
  image(kit,620,200,20,20); 


      //datos peaton 
      text(9093,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      
image(kit,685,350,20,20);
 image(kit,715,350,20,20);  image(kit,745,350,20,20);
      
 image(kit,685,375,20,20);
 image(kit,715,375,20,20);
  
         
  
         
    }
      
      
      
      
      
      
      
    

   

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

    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
     
     fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
     
     if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2013AC
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
  
  if(estado==ANO2013AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255);  text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2013
       
     }
    }
      
      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      text(14.114,55,600);
 image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20); 
    
 image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);  
    
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);  
    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20);
    
 image(kit,65,450,20,20);
 image(kit,95,450,20,20);  image(kit,125,450,20,20);   
      
      //datos acomp motociclista accdidentes 
      text(7057,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20); 
    
  image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);  
    
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20); 
    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
    
 image(kit,185,325,20,20);
 image(kit,215,325,20,20); 
      

      //datos conductor accidentes 
      text(5902,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
 image(kit,325,275,20,20);  image(kit,355,275,20,20);    
 image(kit,295,300,20,20);
 image(kit,325,300,20,20);  image(kit,355,300,20,20); 
       
 
  
      //datos pasajero accidentes
      text(2951,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20);  image(kit,455,225,20,20);
   
 image(kit,395,250,20,20);
 
      
      //datos ciclista accidentes
      text(1382,494,600);
      
 image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         

      //datos acomp ciclista 
      text(741,593,600);
  image(kit,620,200,20,20); 


      //datos peaton 
      text(9481,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      
image(kit,685,350,20,20);
 image(kit,715,350,20,20);  image(kit,745,350,20,20);
      
 image(kit,685,375,20,20);
 image(kit,715,375,20,20);
  image(kit,745,375,20,20);
  
      
      
      
      
    }




   
  
  

  
  
  
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
    
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    
    //Boton Accidentes 
    fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2014AC
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
    

    
     
     
     if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
     
   }
  }
  
  
  if(estado==ANO2014AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255);  text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2014
       
     }
       }
      
  

      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      text(15.123,55,600);
 image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20);     image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);   
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20); 
    
  image(kit,65,450,20,20);
 image(kit,95,450,20,20);  image(kit,125,450,20,20);
    
  image(kit,65,475,20,20);
 image(kit,95,475,20,20);  image(kit,125,475,20,20);
    
  image(kit,65,500,20,20);
    
      
      //datos acomp motociclista accdidentes 
      text(7561,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20);     image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);   
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20);    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
    
 image(kit,185,325,20,20);
 image(kit,215,325,20,20);  image(kit,245,325,20,20);
    
 image(kit,185,350,20,20);
    
    
      

      //datos conductor accidentes 
      text(6362,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
 image(kit,325,275,20,20);  image(kit,355,275,20,20);    
 image(kit,295,300,20,20);
 image(kit,325,300,20,20);  image(kit,355,300,20,20); 
       image(kit,295,325,20,20);
 
  
      //datos pasajero accidentes
      text(3181,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20);  image(kit,455,225,20,20);
   
 image(kit,395,250,20,20);
 image(kit,425,250,20,20); 
      
      //datos ciclista accidentes
      text(1584,494,600);
      
 image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         
 image(kit,535,225,20,20); 
    
      //datos acomp ciclista 
      text(792,593,600);
  image(kit,608,200,20,20); 
  image(kit,635,200,20,20);

      //datos peaton 
      text(9758,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      
image(kit,685,350,20,20);
 image(kit,715,350,20,20);  image(kit,745,350,20,20);
      
 image(kit,685,375,20,20);
 image(kit,715,375,20,20);
 image(kit,745,375,20,20);
  
         
  
         
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
  
    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
     //boton accidentes 
     
     fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
     
     if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2015AC
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
    


    
  }
  
  
  
  if(estado==ANO2015AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255);  text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2015
       
     }
       }
      
  

      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      text(16.817,55,600);
    
    image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20);     image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);   
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20); 
    
  image(kit,65,450,20,20);
 image(kit,95,450,20,20);  image(kit,125,450,20,20);
    
  image(kit,65,475,20,20);
 image(kit,95,475,20,20);  image(kit,125,475,20,20);
    
  image(kit,65,500,20,20);
  image(kit,95,500,20,20);  image(kit,125,500,20,20);
    
  image(kit,65,525,20,20);
  image(kit,95,525,20,20);  image(kit,125,525,20,20);
    
      
      //datos acomp motociclista accdidentes 
      text(8409,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20);     image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);   
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20);    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
    
 image(kit,185,325,20,20);
 image(kit,215,325,20,20);  image(kit,245,325,20,20);   
    
 image(kit,185,350,20,20);
 image(kit,215,350,20,20);  image(kit,245,350,20,20); 
      

      //datos conductor accidentes 
      text(5536,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
 image(kit,325,275,20,20);  image(kit,355,275,20,20);    
 image(kit,295,300,20,20);
 image(kit,325,300,20,20); 
  
      //datos pasajero accidentes
      text(2768,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20);  image(kit,455,225,20,20);
   
 image(kit,395,250,20,20);
 
      
      //datos ciclista accidentes
      text(1755,494,600);
      
image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         
 image(kit,535,225,20,20);         

      //datos acomp ciclista 
      text(877,593,600);
  image(kit,608,200,20,20); 
  image(kit,635,200,20,20);


      //datos peaton 
      text(9594,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      
image(kit,685,350,20,20);
 image(kit,715,350,20,20);  image(kit,745,350,20,20);
      
 image(kit,685,375,20,20);
 image(kit,715,375,20,20);
 image(kit,745,375,20,20);
         
  
         
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

    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    
    fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2016AC
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

    



    
  }
  
  
  
  if(estado==ANO2016AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255);  text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2016
       
     }
       }
      
  

      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      
    
    image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20);     image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);   
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20); 
    
  image(kit,65,450,20,20);
 image(kit,95,450,20,20);  image(kit,125,450,20,20);
    
  image(kit,65,475,20,20);
 image(kit,95,475,20,20);  image(kit,125,475,20,20);
    
  image(kit,65,500,20,20);
  image(kit,95,500,20,20);  image(kit,125,500,20,20);
    
  image(kit,65,525,20,20);
  image(kit,95,525,20,20);  image(kit,125,525,20,20);
    
  image(kit,65,550,20,20);
  image(kit,95,550,20,20); 
    
    
    text(17.265,55,600);
      
      //datos acomp motociclista accdidentes 
      text(8633,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20);     image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);   
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20);    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
    
 image(kit,185,325,20,20);
 image(kit,215,325,20,20);  image(kit,245,325,20,20);   
    
 image(kit,185,350,20,20);
 image(kit,215,350,20,20);  image(kit,245,350,20,20); 
    
    
      

      //datos conductor accidentes 
      text(5014,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
 image(kit,325,275,20,20);  image(kit,355,275,20,20);    

  
      //datos pasajero accidentes
      text(2507,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20);  image(kit,455,225,20,20);
   
 
 
      
      //datos ciclista accidentes
      text(1832,494,600);
      
image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         
 image(kit,535,225,20,20);         

      //datos acomp ciclista 
      text(916,593,600);
  image(kit,608,200,20,20); 
  image(kit,635,200,20,20);


      //datos peaton 
      text(9056,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      
image(kit,685,350,20,20);
 image(kit,715,350,20,20);  image(kit,745,350,20,20);
      
 image(kit,685,375,20,20);

         
  
         
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

    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
     
     fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
     
         if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2017AC
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

    


     
     
     

    
  }
  
  
  
  
    if(estado==ANO2017AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255); 
      text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2017
       
     }
       }
      
  

      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      
    
    image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20);     image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);   
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20); 
    
  image(kit,65,450,20,20);
 image(kit,95,450,20,20);  image(kit,125,450,20,20);
    
  image(kit,65,475,20,20);
 image(kit,95,475,20,20);  image(kit,125,475,20,20);
    
  image(kit,65,500,20,20);
 
    
    
    text(15.117,55,600);
      
      //datos acomp motociclista accdidentes 
      text(7559,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20);     image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);   
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20);    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
    
 image(kit,185,325,20,20);
 image(kit,215,325,20,20);  image(kit,245,325,20,20);   
    
 image(kit,185,350,20,20);

    
    
      

      //datos conductor accidentes 
      text(4487,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
 image(kit,325,275,20,20);     

  
      //datos pasajero accidentes
      text(2244,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20); 
   
 
 
      
      //datos ciclista accidentes
      text(1771,494,600);
      
image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         
 image(kit,535,225,20,20);         

      //datos acomp ciclista 
      text(885,593,600);
  image(kit,608,200,20,20); 
  image(kit,635,200,20,20);


      //datos peaton 
      text(7936,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      
image(kit,685,350,20,20);
 image(kit,715,350,20,20); 

         
  
         
    }
  
  
  
  
  
  
  if (estado==ANO2018) {
    
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

    //calavera 
  
  image(muerte, 800,10,40,40);
  text('= 100',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    
    fill(0);
    rect(828,275,90,40);
    fill(255,100,80);
    text('ACCIDENTES', 830,300);
    image(kit, 850,320,40,40);
    

    
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
    
    if (mouseIsPressed==true) {
      if (mouseX>828
      && mouseX<828+90
      && mouseY>275
      && mouseY<275+40){
        estado=ANO2018AC
      }
    }
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 8);
  var ano = datosmuertes.getString(i, 1);
      
      fill(100);
      noStroke();
     textSize(40);
    text(muertes,70,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 4);
 ;
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,195,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 6);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,308,600);
      //image(muerte,30,40);
 
  }
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 5);
  
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,410,600);
      //image(muerte,30,40);
 
  }
    
    
   for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 3);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,504,600);
      //image(muerte,30,40);
 
  } 
    
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 2);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,610,600);
      //image(muerte,30,40);
 
  }
    
    
    for (var i = 0; i < numfilas; i = i + 1) {
  var muertes= datosmuertes.getNum(6, 7);
  
      
      fill(100);
      noStroke();
     textSize(40);
      text(muertes,690,600);
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
       
  image(muerte,294,260,25,25);
  image(muerte,324,260,25,25); 




    //Pasajeros Muertes
  image(muerte,394,200,25,25);
  image(muerte,424,200,25,25); 
  image(muerte,454,200,25,25); 
  
  image(muerte,394,230,25,25);
  image(muerte,424,230,25,25); 
  image(muerte,454,230,25,25);
  image(muerte,394,260,25,25);
       
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
    


    

  

    
  }
  
      if(estado==ANO2018AC) {
      background(255);
  
  noStroke();
  fill(255,0,0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('ACCIDENTES',370,57);
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
 
    //calavera 
  
  image(kit, 800,10,40,40);
  text('= 400',850,35);
  
    //Boton Inicio 2012
    fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
      
      
      
      image(muerte,845,315,50,50);
     fill(0);
   rect(828,375,90,40);
    fill(255); 
      text('MUERTES',838,403);
      
      
          if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
      
       if (mouseIsPressed==true) {
     if(mouseX> 828
        && mouseX<828+90
        && mouseY>375
        && mouseY<375+40) {
       
  estado=ANO2018
       
     }
       }
      
  

      //datos motociclista accidentes 
      fill(196,73,48);
      textSize(40);
      
    
    image(kit,65,200,20,20);
 image(kit,95,200,20,20);  image(kit,125,200,20,20);     image(kit,65,225,20,20);
 image(kit,95,225,20,20);  image(kit,125,225,20,20);
   
 image(kit,65,250,20,20);
 image(kit,95,250,20,20);  image(kit,125,250,20,20);   
 image(kit,65,275,20,20);
 image(kit,95,275,20,20);  image(kit,125,275,20,20);    
 image(kit,65,300,20,20);
 image(kit,95,300,20,20);  image(kit,125,300,20,20);
      
 image(kit,65,325,20,20);
 image(kit,95,325,20,20);  image(kit,125,325,20,20);
      
 image(kit,65,350,20,20);
 image(kit,95,350,20,20);  image(kit,125,350,20,20);
      
 image(kit,65,375,20,20);
 image(kit,95,375,20,20);  image(kit,125,375,20,20);
      
 image(kit,65,400,20,20);
 image(kit,95,400,20,20);  image(kit,125,400,20,20);
      
 image(kit,65,425,20,20);
 image(kit,95,425,20,20);  image(kit,125,425,20,20); 
    
  image(kit,65,450,20,20);
 image(kit,95,450,20,20);  image(kit,125,450,20,20);
    
  image(kit,65,475,20,20);

 
    
    
    text(13.901,55,600);
      
      //datos acomp motociclista accdidentes 
      text(6951,185,600);
      
 image(kit,185,200,20,20);
 image(kit,215,200,20,20);  image(kit,245,200,20,20);     image(kit,185,225,20,20);
 image(kit,215,225,20,20);  image(kit,245,225,20,20);
   
 image(kit,185,250,20,20);
 image(kit,215,250,20,20);  image(kit,245,250,20,20);   
 image(kit,185,275,20,20);
 image(kit,215,275,20,20);  image(kit,245,275,20,20);    
 image(kit,185,300,20,20);
 image(kit,215,300,20,20);  image(kit,245,300,20,20);
    
 image(kit,185,325,20,20);
 image(kit,215,325,20,20); 

    
    
      

      //datos conductor accidentes 
      text(4125,285,600);
   image(kit,295,200,20,20);
 image(kit,325,200,20,20);  image(kit,355,200,20,20);     image(kit,295,225,20,20);
 image(kit,325,225,20,20);  image(kit,355,225,20,20);
   
 image(kit,295,250,20,20);
 image(kit,325,250,20,20);  image(kit,355,250,20,20);   
 image(kit,295,275,20,20);
     

  
      //datos pasajero accidentes
      text(2062,395,600);
image(kit,395,200,20,20);
 image(kit,425,200,20,20);  image(kit,455,200,20,20);     image(kit,395,225,20,20);
 image(kit,425,225,20,20); 
   
 
 
      
      //datos ciclista accidentes
      text(1848,494,600);
      
image(kit,505,200,20,20);
 image(kit,535,200,20,20);  image(kit,505,225,20,20);         
 image(kit,535,225,20,20);         

      //datos acomp ciclista 
      text(924,593,600);
  image(kit,608,200,20,20); 
  image(kit,635,200,20,20);


      //datos peaton 
      text(7324,680,600);
image(kit,685,200,20,20);
 image(kit,715,200,20,20);  image(kit,745,200,20,20);     image(kit,685,225,20,20);
 image(kit,715,225,20,20);  image(kit,745,225,20,20);
   
 image(kit,685,250,20,20);
 image(kit,715,250,20,20);  image(kit,745,250,20,20);   
 image(kit,685,275,20,20);
 image(kit,715,275,20,20);  image(kit,745,275,20,20);    
 image(kit,685,300,20,20);
 image(kit,715,300,20,20);  image(kit,745,300,20,20); 
       image(kit,685,325,20,20);
 image(kit,715,325,20,20);  image(kit,745,325,20,20);
      


         
  
         
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  if (estado==todos) {
    
    background(255);
    
    
     noStroke();
  fill(0);
  textFont(MiFuente);
  //Titulo Año 
  textSize(50);
  text('MUERTES',390,57);

  numfilas = datosmuertes.getRowCount();
  numcolumnas = datosmuertes.getColumnCount();
  
  var año=datosmuertes.getNum(0,1); 
  
 
  //sin info negro
 
  textSize(20);
  
  ////Acomp Cilista verde
  
  beginShape();
  noFill();
  stroke(0,255,0);
  strokeWeight(3);
  vertex(212,windowHeight-(datosmuertes.getNum(0,2))-150);
  vertex(313,windowHeight-(datosmuertes.getNum(1,2))-150);
  vertex(414,windowHeight-(datosmuertes.getNum(2,2))-150);
  vertex(515,windowHeight-(datosmuertes.getNum(3,2))-150);
  vertex(616,windowHeight-(datosmuertes.getNum(4,2))-150);
  vertex(717,windowHeight-(datosmuertes.getNum(5,2))-150);
  vertex(818,windowHeight-(datosmuertes.getNum(6,2))-150);
  endShape();



//ciclista rojo
    beginShape();
  noFill();
  stroke(255,0,0);
  strokeWeight(3);
  vertex(212,windowHeight-((datosmuertes.getNum(0,3))/4)-100);
  vertex(313,windowHeight-((datosmuertes.getNum(1,3))/4)-100);
  vertex(414,windowHeight-((datosmuertes.getNum(2,3))/4)-100);
  vertex(515,windowHeight-((datosmuertes.getNum(3,3))/4)-100);
  vertex(616,windowHeight-((datosmuertes.getNum(4,3))/4)-100);
  vertex(717,windowHeight-((datosmuertes.getNum(5,3))/4)-100);
  vertex(818,windowHeight-((datosmuertes.getNum(6,3))/4)-100);
  endShape();
  
  ///Acompañante Motos azul oscuro 
  beginShape();
  noFill();
  stroke(0,0,255);
  strokeWeight(3);
  vertex(212,windowHeight-((datosmuertes.getNum(0,4))/4)-100);
  vertex(313,windowHeight-((datosmuertes.getNum(1,4))/4)-100);
  vertex(414,windowHeight-((datosmuertes.getNum(2,4))/4)-100);
  vertex(515,windowHeight-((datosmuertes.getNum(3,4))/4)-100);
  vertex(616,windowHeight-((datosmuertes.getNum(4,4))/4)-100);
  vertex(717,windowHeight-((datosmuertes.getNum(5,4))/4)-100);
  vertex(818,windowHeight-((datosmuertes.getNum(6,4))/4)-100);
  endShape();
  
  //Pasajero rosado Oscuro 
  
  beginShape();
  noFill();
  stroke(228, 88, 236);
  strokeWeight(3);
  vertex(212,windowHeight-((datosmuertes.getNum(0,5))/5)-100);
  vertex(313,windowHeight-((datosmuertes.getNum(1,5))/4)-100);
  vertex(414,windowHeight-((datosmuertes.getNum(2,5))/4)-100);
  vertex(515,windowHeight-((datosmuertes.getNum(3,5))/4)-100);
  vertex(616,windowHeight-((datosmuertes.getNum(4,5))/4)-100);
  vertex(717,windowHeight-((datosmuertes.getNum(5,5))/4)-100);
  vertex(818,windowHeight-((datosmuertes.getNum(6,5))/4)-100);
  endShape();
  
  //Conductor Amarillo 
  beginShape();
  noFill();
  stroke(241, 199, 14);
  strokeWeight(3);
  vertex(212,windowHeight-((datosmuertes.getNum(0,6))/4)-100);
  vertex(313,windowHeight-((datosmuertes.getNum(1,6))/4)-100);
  vertex(414,windowHeight-((datosmuertes.getNum(2,6))/4)-100);
  vertex(515,windowHeight-((datosmuertes.getNum(3,6))/4)-100);
  vertex(616,windowHeight-((datosmuertes.getNum(4,6))/4)-100);
  vertex(717,windowHeight-((datosmuertes.getNum(5,6))/4)-100);
  vertex(818,windowHeight-((datosmuertes.getNum(6,6))/4)-100);
  endShape();
  //peaton azul claro
  
  beginShape();
  noFill();
  stroke(57,237,252);
  strokeWeight(3);
  vertex(212,windowHeight-((datosmuertes.getNum(0,7))/8)-100);
  vertex(313,windowHeight-((datosmuertes.getNum(1,7))/8)-100);
  vertex(414,windowHeight-((datosmuertes.getNum(2,7))/8)-100);
  vertex(515,windowHeight-((datosmuertes.getNum(3,7))/8)-100);
  vertex(616,windowHeight-((datosmuertes.getNum(4,7))/8)-100);
  vertex(717,windowHeight-((datosmuertes.getNum(5,7))/8)-100);
  vertex(818,windowHeight-((datosmuertes.getNum(6,7))/8)-100);
  endShape();
  
  //Motociclista rosado
  
   beginShape();
  noFill();
  stroke(254,0,246);
  strokeWeight(3);
  vertex(212,windowHeight-((datosmuertes.getNum(0,8))/8)-100);
  vertex(313,windowHeight-((datosmuertes.getNum(1,8))/8)-100);
  vertex(414,windowHeight-((datosmuertes.getNum(2,8))/8)-100);
  vertex(515,windowHeight-((datosmuertes.getNum(3,8))/8)-100);
  vertex(616,windowHeight-((datosmuertes.getNum(4,8))/8)-100);
  vertex(717,windowHeight-((datosmuertes.getNum(5,8))/8)-100);
  vertex(818,windowHeight-((datosmuertes.getNum(6,8))/8)-100);
  endShape();
  
  noStroke();
  fill(0);
  text("2012",200,600);
  text("2013",300,600);
  text("2014",400,600);
  text("2015",500,600);
  text("2016",600,600);
  text('2017',700,600);
  text("2018",800,600);
  
  fill(0);
    textSize(20);
    rect(20,30,60,30);
    fill(255);
    text('Inicio',27,53);
    
    fill(254,0,246);
    rect(100,230,20,20);
    image(Moto,150,220,40,40);
    fill(57,237,252);
    rect(100,266,20,20);
    image(Peaton,150,260,40,40); 
    fill(228, 88, 236);
    rect(100,305,20,20);
    image(Silla, 150,308, 30,30);
    fill(241, 199, 14);
    rect(100,340,20,20);
    image(Carro,150,335,40,40);
    fill(0,0,255);
    rect(100,380,20,20);
    image(CascoMoto,155,380,25,25);
    fill(255,0,0);
    rect(100,415,20,20);
    image(Bici,150,410,30,30);
    fill(0,255,0);
    rect(100,450,20,20);
    image(CascoBici,150,445,30,30);
    //noInfo
 //Silla
//Peaton
 //Bici 
// Moto 
  //CascoMoto
// Carro
// CascoBici
    
    if (mouseIsPressed==true) {
     if(mouseX> 20
        && mouseX<20+60
        && mouseY>30
        && mouseY<30+30) {
       
  estado=INTRODUCCION
       
     }
    }
  
  
  


}

  
  //if (estado==RIP )
  //{
     // background(255,0,0);
      //text('RIP',400,400,100,100);
  
//}
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
}//Cierre draw 
  
    
  


  
  //text('2017',

//function mouseDragged() {
 // return false;
//}

