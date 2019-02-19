var x=0
var direccion=1
var z=0
var direccion1=1
var y=0
var direccion2=1
var t=0
var c=0
var h=0
var u=0
var s=0
var o=0
var i=0
var p=0
var e=0

function setup() {
createCanvas (1061,707);
ellipseMode(CENTER)
frameRate(4);

}


function draw() {
background(247,246,237);
angleMode(DEGREES);
//base estufa
stroke(198,198,196);
strokeWeight(4);
fill(214,213,207);
quad(430,120,430,520,1030,520,1030,120);
//estufa
stroke(0,0,0);
strokeWeight(4);
fill(240,240,240);
quad(600,140,600,495,960,495,960,140);
//estufa estufa
fill(255)
stroke(0);
strokeWeight(3);
noFill();
quad(620,170,770,170,770,300,620,300);
quad(790,170,940,170,940,300,790,300);
quad(620,330,770,330,770,460,620,460);
quad(790,330,940,330,940,460,790,460);
noStroke();
fill(206,206,206);
//fogones
ellipse(695,235,70,70);
ellipse(865,235,70,70);
ellipse(695,395,70,70);
ellipse(865,395,70,70);


//llamitasVertical
fill(192,212,250);
ellipse(695+x,190,10,20);
fill(124,167,250);
ellipse(695+x,193,5,10);
x=x+4*direccion
if(x>640||(x<750)){
  
  direccion=direccion*-1;
}

//
fill(192,212,250);
ellipse(695+x,280,10,20);
fill(124,167,250);
ellipse(695+x,277,5,10);
//
fill(192,212,250);
ellipse(695+x,350,10,20);
fill(124,167,250);
ellipse(695+x,353,5,10);
//
fill(192,212,250);
ellipse(695+x,440,10,20);
fill(124,167,250);
ellipse(695+x,437,5,10);
//
fill(192,212,250);
ellipse(865+z,190,10,20);
fill(124,167,250);
ellipse(865+z,193,5,10);
z=z+4*direccion1

if(z>865||(z<870)){
  
  direccion1=direccion1*-1;
}

//
fill(192,212,250);
ellipse(865+z,280,10,20);
fill(124,167,250);
ellipse(865+z,277,5,10);
//
fill(192,212,250);
ellipse(865+z,350,10,20);
fill(124,167,250);
ellipse(865+z,353,5,10);
//
fill(192,212,250);
ellipse(865+z,440,10,20);
fill(124,167,250);
ellipse(865+z,437,5,10);



//llamitas Horizontales
fill(192,212,250);
ellipse(650,235+y,20,10);
fill(124,167,250);
ellipse(653,235+y,10,5);
y=y+4*direccion2
if (y>235||(y<240)){
  
  direccion2=direccion2*-1;
}


//
fill(192,212,250);
ellipse(740,235+y,20,10);
fill(124,167,250);
ellipse(737,235+y,10,5);
//
fill(192,212,250);
ellipse(650,395+y,20,10);
fill(124,167,250);
ellipse(653,395+y,10,5);
//
fill(192,212,250);
ellipse(740,395+y,20,10);
fill(124,167,250);
ellipse(737,395+y,10,5);



//llamitas Horizontales
fill(192,212,250);
ellipse(820,235+y,20,10);
fill(124,167,250);
ellipse(823,235+y,10,5);
//
fill(192,212,250);
ellipse(910,235+y,20,10);
fill(124,167,250);
ellipse(907,235+y,10,5);
//
fill(192,212,250);
ellipse(820,395+y,20,10);
fill(124,167,250);
ellipse(823,395+y,10,5);
//
fill(192,212,250);
ellipse(910,395+y,20,10);
fill(124,167,250);
ellipse(907,395+y,10,5);



//Botones estufa 
fill(0,0,0);
ellipse(995,235,30,30);
stroke(255);
line(995,235,1009,235);
//
fill(0,0,0);
noStroke()
ellipse(995,290,30,30);
stroke(255);
line(995,290,1009,290);
//
fill(0,0,0);
noStroke()
ellipse(995,345,30,30);
stroke(255);
line(995,345,1009,345);
//
fill(0,0,0);
noStroke()
ellipse(995,400,30,30);
stroke(255);
line(995,400,1009,400);
//
strokeWeight(3);
stroke(0,0,0);
line(620,170,680,220);
line(770,170,710,220);
line(620,300,680,250);
line(770,300,710,250);
//
line(790,170,850,220);
line(940,170,880,220);
line(790,300,850,250);
line(940,300,880,250);
//
line(790,330,850,380);
line(940,330,880,380);
line(790,460,850,410);
line(940,460,880,410);
//
line(620,330,680,380);
line(770,330,710,380);
line(620,460,680,410);
line(770,460,710,410);
//sarten
noStroke();
fill(93,94,95);
ellipse(695,795-t,110,110);
stroke(93,94,95);
strokeWeight(17);
line(695,795-t,555,830-t);
//huevo frito
noStroke()
fill(255,255,255,0+c)
ellipse(695,795-t,70,70);
fill(252,230,20,0+c);
ellipse(695,795-t,30,30);
c=c+10
t=t+60
if (t>395){t=395}
//olla
fill(157,3,26);
strokeWeight(2);
ellipse(695,-235+s,110,110);
ellipse(745,-235+s,40,40);
ellipse(645,-235+s,40,40);
fill(30,64,8,-100+c)
ellipse(695,-235+s,80,80);
fill(13,28,4,-200+c)
ellipse(685+x,-215+s+z,10,10)
ellipse(675+x,-238+s+z,10,10)
ellipse(680+x,-260+s+z,10,10)
ellipse(690+x,-235+s,10,10)
ellipse(700+x,-255+s,10,10)
ellipse(710+x,-225+s,10,10)
s=s+50
c=c+10
if(s>470){s=470}

//Aceite 
fill(219,209,130,150);
ellipse(390,230,10+i,100+o);
fill(166,203,296);
rect(300,250,100,150);
stroke(255,0,0);
strokeWeight(2);
line(300,270,400,270);
line(300,380,400,380);
textSize(35);
text('OIL',322,330);
noStroke();
triangle(400,230,400,250,380,250);

  o=o+5
  i=i+5
  if (o>80){o=80}
  if (i>80){i=80}
  fill(183,227,160);
  for(var cant=0;cant<10;cant=cant+1){
  ellipse(315+p,505-e,12,12)
  p=p+10
  e=e+4
  }
  for(var cant=0;cant<10;cant=cant+1){
  ellipse(315+p,510-e,12,12)
  p=p-10
  e=e-4
  }
  textSize(13);
  fill(0,0,0);
text('PEAS',322,500);
  
  if (p=40){p=40}
  if (e=20){e=20}
  
  fill(54,121,18,100);
  quad(300,500,400,460,410,480,310,520);
  quad(400,460,410,480,405,482,395,462);
  
  fill(18,13,95);
  ellipse(865,235,90,90);
  stroke(18,13,95);
  strokeWeight(10)
  line(865,235,905,150);
  noStroke()
  
  //toci
  fill(129,3,17);
  rect(880,215,10,40);
  rect(860,215,10,40);
  rect(840,215,10,40);
  stroke(240,189,80);
  strokeWeight(2);
  line(840,215,840,255);
  line(850,215,850,255);
  line(860,215,860,255);
  line(870,215,870,255);
  line(880,215,880,255);
  line(890,215,890,255);
  stroke(237,196,202);
  strokeWeight(1)
  line(885,215,885,255);
  line(865,215,865,255);
  line(845,215,845,255);
	

    }
 
    
  
  