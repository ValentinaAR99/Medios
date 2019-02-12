var v=0
var direccion0=1
var x=0
var direccion=1
var y=0
var direccion2=1
var z=0
var direccion3=1



function setup() {
createCanvas (470,320);
background(244,255,80);
}


function draw() {
background(230,255,255);
noStroke()
fill(224,172,105);
//torre
strokeWeight(2);
stroke(198,134,66);
beginShape();
vertex(270,320);
vertex(270,160);
vertex(335,160);
vertex(335,40);
vertex(420,40);
vertex(420,160);
vertex(470,160);
vertex(470,320);
endShape();

//reloj
fill(255);
ellipse(378,80,60,60);
stroke(0);
strokeWeight(2);
line(378,80,378+v,55);
line(378,80,395-v,80-v);

v=v+1*direccion0

if((v>width)||(v<100)){
  
  direccion0=direccion0*-1;
}






fill(198,134,66);
noStroke()
quad(335,40,325,25,430,25,420,40);
fill(224,172,105);
rect(294,120,20,40);
rect(435,120,20,40);
arc(303.5,120,40,40,0,PI)
arc(445,120,40,40,0,PI)
//llamitas
fill(255,69,0);
ellipse(303.5+y,105,10,30);
fill(255,206,39);
ellipse(303.5+y,110,5,18);
fill(255,69,0);
ellipse(445+z,105,10,30);
fill(255,206,39);
ellipse(445+z,110,5,18);

z=z+3*direccion3

if(x>446||(x<446)){
  
  direccion3=direccion3*-1;
}



y=y+3*direccion2

if(x>305||(x<305)){
  
  direccion2=direccion2*-1;
}





//nubes
noStroke()
fill(201-x/9, 233-x/9, 246-x/9);

ellipse(110+x,40,100,40);
ellipse(30+x,40,100,40);
ellipse(150-x,80,100,40);
ellipse(230-x,80,100,40);
fill(201-x/9, 233-x/9, 246-x/9,180);
ellipse(400-x,100,100,40);
ellipse(310-x,100,100,40);
////
fill(141,85,36);
rect(295,200,150,250);






x=x+1*direccion

if((x>width)||(x<0)){
  
  direccion=direccion*-1;
}




}
