var tablapoblacion
var numfilas
var numcolumnas 

function preload () {
  tablapoblacion= loadTable ('assets/Poblacion.csv', 'csv', 'header');
}



function setup() {
  createCanvas(400, 400);
  
  numfilas = tablapoblacion.getRowCount();
  numcolumnas = tablapoblacion.getColumnCount();
  
  for (var i = 0; i < numfilas; i = i + 1) {
  var porcentaje= tablapoblacion.getNum(i, 3);
  var ano = tablapoblacion.getString(i, 1);
    
  var alto = map(porcentaje, 40, 90, 0, height);
  var ancho = width / numfilas;
  var posX = (numfilas - 1 - i) * (ancho);
  var posY = height - alto;
    
     fill(216,122,122);
    noStroke();
    ellipse(posX+7, posY-500, ancho - 1, alto - 1);
    
    fill(0);
    push();
    translate(posX+(ancho-3), height-2);
    rotate(-HALF_PI);
    text(ano, 0, 0);
    pop();
    
    
  


}
}


