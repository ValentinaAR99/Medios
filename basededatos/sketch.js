var datos;
var cuantos;
var datos2;
var cuantos2;


function preload() {
 datos = loadJSON("board.json");
// datos2= loadJSON("board2.json");

}

function setup() {
  createCanvas(700, 600);
  background(0);


  
  cuantos = datos.jeopardy.length;
  cuantos2 = datos.questions;
 
  

  for (var i = 0; i < cuantos; i = i + 1) {
    var posX = random(width - (325 / 6));
    var posY = random(height - (567 / 6));
    
   
    textAlign(CENTER);
    
    if(datos.jeopardy[i].name=="ROBOTS"){
    textSize(30);
    text("🤖", posX, posY-20);
    var nombre = datos.jeopardy[i].name;
    fill(255);
    textSize(12);
    text(nombre, posX, posY );
    
      
    }
   

    if(datos.jeopardy[i].name=="NICKNAMES"){
    textSize(30);
    text("🤡", posX, posY-20);
    var nombre = datos.jeopardy[i].name;
    fill(255);
    textSize(12);
    text(nombre, posX, posY);

 }
    
    if(datos.jeopardy[i].name=="FAMOUS FIRST WORDS"){
    textSize(30);
    text("😎", posX, posY-20);
    var nombre = datos.jeopardy[i].name;
    fill(255);
    textSize(12);
    text(nombre, posX, posY);

 }
 if(datos.jeopardy[i].name=="GOING \"DARK\""){
    textSize(30);
    text("🌚", posX, posY-20);
    var nombre = datos.jeopardy[i].name;
    fill(255);
    textSize(12);
    text(nombre, posX, posY);

 }

    if(datos.jeopardy[i].name=="FICTIONAL COMPANIES"){
    textSize(30);
    text("🧝🏽‍♀️🧝🏽‍♂️", posX, posY-20);
    var nombre = datos.jeopardy[i].name;
    fill(255);
    textSize(12);
    text(nombre, posX, posY);

 }
    
    if(datos.jeopardy[i].name=="PAINFULLY OBVIOUS"){
    textSize(30);
    text("🙄", posX, posY-20);
    var nombre = datos.jeopardy[i].name;
    fill(255);
    textSize(12);
    text(nombre, posX, posY);

 }
    
    textSize(30);
   text("❓", posX, posY+50)
  }
  
  for (var i = 0; i < cuantos2; i = i + 1) {
  var posX = random(width - (325 / 6));
   var posY = random(height - (567 / 6));
   
    textSize(30);
   text("‼️", posX, posY+50)
      
    var respuesta = datos.questions[i].answer
    fill(255);
    textSize(12);
    text(respuesta, posX, posY);
  
  //for (var i = 0; i < cuantos; i = i + 1) {
  //  var posX = random(width - (325 / 6));
   // var posY = random(height - (567 / 6));
   // print(cuantos2);
   // var pregunta = datos2[i].answer;
   // textSize(30);
   // text("❓", posX, posY+50);
   // print(pregunta);
   // fill(255);
   // textSize(12);
   // text(pregunta, posX, posY );
 // }
    
   
    
}
  
}
  


function draw() {
 
}
