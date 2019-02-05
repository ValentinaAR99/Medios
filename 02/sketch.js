
var is=0
var is2=40
////////////
var it=0
var it2=40
var it3=80
////////////
var iu=0
var iu2=80
var iu3=40
var iu4=120
////////////
var iv=0
var iv2=40
var iv3=120
var iv4=160
////////////
var iw=0
var iw2=160
var iw3=40
var iw4=200
////////////
var ix=0
var ix2=200
var ix3=40
var ix4=240
////////////
var iy=240
var iy2=280
////////////
var iz=40
var iz2=0
var iz3=80
////////////
var ia=40
var ia2=80
////////////
var ib=40
var ib2=80
var ib3=120
/////////////
var ic=40
var ic2=120
var ic3=80
var ic4=160
////////////
var id=40
var id2=160
var id3=80
var id4=200
////////////
var ie=40
var ie2=200
var ie3=80
var ie4=240
////////////
var if1=80
var if2=0
var if3=120
var if4=40
////////////
var ig=80
var ig2=40
var ig3=120
///////////
var ih=120
var ih2=0
var ih3=160
var ih4=40
///////////
var ii=120
var ii2=40
var ii3=160
var ii4=80
///////////
var ij=160
var ij2=0
var ij3=200
var ij4=40
///////////
var ik=160
var ik2=40
var ik3=200
var ik4=80
///////////
var il=200
var il2=0
var il3=240
var il4=40
///////////
var im=200
var im2=40
var im3=240
var im4=80
///////////
var in1=0
var in2=40
///////////
var io=360
var io2=0
var io3=40
var io4=320
///////////
var ip=320
var ip2=40
var ip3=360
var ip4=80
//////////
var iq=320
var iq2=80
var iq3=360
var iq4=120
///////////
var ir=360
var ir2=120
var ir3=160
var ir4=320
///////////
var ja=360
var ja2=160
var ja3=200
var ja4=320
////////////
var jb=320
var jb2=200
var jb3=360
var jb4=240
/////////////
var jc=320
var jc2=240
var jc3=360
var jc4=280
/////////////
var jd=400
var jd2=0
var jd3=40
var jd4=360
/////////////
var je=400
var je2=0
var je3=440
var je4=40
///////////
var jf=440
var jf2=0
var jf3=480
var jf4=40
///////////
var jg=520
var jg2=0
var jg3=40
var jg4=480
///////////
var jh=560
var jh2=0
var jh3=40
var jh4=520
/////////////
var ji=560
var ji2=0
var ji3=600
var ji4=40
/////////////
var jj=320
var jj2=0
var jj3=40
var jj4=360
/////////////
var jk=0
var jk2=360
var jk3=40
var jk4=400
////////////
var jl=40
var jl2=400
var jl3=440
var jl4=0
////////////
var jm=80
var jm2=320
var jm3=360
var jm4=40
///////////
var jn=120
var jn2=320
var jn3=360
var jn4=80
//////////
var jq=120
var jq2=320
var jq3=160
var jq4=360
/////////
var jr=160
var jr2=320
var jr3=200
var jr4=360
////////////
var js=240
var js2=320
var js3=360
var js4=200
////////////
var jt=280
var jt2=320
var jt3=360
var jt4=240
////////////
var ju=40
var ju2=440
var ju3=480
var ju4=0
////////////
var jv=0
var jv2=480
var jv3=40
var jv4=520
///////////
var jw=0
var jw2=520
var jw3=40
var jw4=560
///////////
var jx=0
var jx2=600
var jx3=40
var jx4=560
/////////
var a=600
var a2=320
var a3=360
var a4=640

var b=600
var b2=360
var b3=400
var b4=640

var c=640
var c2=400
var c3=600
var c4=440

var d=640
var d2=440
var d3=600
var d4=480

var e=600
var e2=480
var e3=520
var e4=640

var f=600
var f2=520
var f3=560
var f4=640

var g=640
var g2=560
var g3=600
var g4=600

var h=600
var h2=320
var h3=560
var h4=360

var i=560
var i2=320
var i3=520
var i4=360

var j=480
var j2=320
var j3=360
var j4=520

var k=440
var k2=320
var k3=360
var k4=480

var l=440
var l2=320
var l3=400
var l4=360

var m=400
var m2=320
var m3=360
var m4=360


function setup() {
  createCanvas(640,640);
  background(255,255,255);
  //////////////////////////////////////////
  //Primer Cuadrante;
  
  for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0);
    triangle(is,is,is2,is2,is,is2);
    is=is+80
    is2=is2+40*2

     }

for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0);
    triangle(it,it2,it2,it3,it,it3);
    it=it+80
    it2=it2+80
    it3=it3+80

     }
     
     
for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(iu,iu2,iu3,iu2,iu3,iu4);
    iu=iu+80
    iu2=iu2+80
    iu3=iu3+80
    iu4=iu4+80 
  
}

for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(iv,iv3,iv2,iv3,iv2,iv4);
    iv=iv+80
    iv2=iv2+80
    iv3=iv3+80
    iv4=iv4+80 
}

for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0);
    triangle(iw,iw2,iw3,iw4,iw,iw4);
    iw=iw+80
    iw2=iw2+80
    iw3=iw3+80
    iw4=iw4+80 
}

for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0);
    triangle(ix,ix2,ix3,ix4,ix,ix4);
    ix=ix+80
    ix2=ix2+80
    ix3=ix3+80
    ix4=ix4+80 
    
}

for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0);
    triangle(0,iy,40,iy,40,iy2);
    iy=iy+40
    iy2=iy2+40
   
}
for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0);
    triangle(iz,iz2,iz3,iz,iz,iz);
    iz=iz+80
    iz2=iz2+80
    iz3=iz3+80
 
}

for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0);
    triangle(ia,ia,ia2,ia,ia2,ia2);
    ia=ia+80
    ia2=ia2+80
   
 
}

for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(ib,ib2,ib2,ib2,ib2,ib3);
    ib=ib+80
    ib2=ib2+80
    ib3=ib3+80
 
}

for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(ic,ic2,ic3,ic4,ic,ic4);
    ic=ic+80
    ic2=ic2+80
    ic3=ic3+80
    ic4=ic4+80
 
}

for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0);
    triangle(id,id2,id3,id4,id,id4);
    id=id+80
    id2=id2+80
    id3=id3+80
    id4=id4+80
}

for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0);
    triangle(ie,ie2,ie3,ie2,ie3,ie4);
    ie=ie+80
    ie2=ie2+80
    ie3=ie3+80
    ie4=ie4+80
}

triangle(40,240,80,240,80,280);
triangle(40,280,80,320,40,320);
 
 for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(if1,if2,if3,if2,if3,if4);
    if1=if1+80
    if2=if2+80
    if3=if3+80
    if4=if4+80
}

for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(ig,ig2,ig3,ig2,ig3,ig);
    ig=ig+80
    ig2=ig2+80
    ig3=ig3+80
    
}

 for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(ih,ih2,ih3,ih2,ih3,ih4);
    ih=ih+80
    ih2=ih2+80
    ih3=ih3+80
    ih4=ih4+80
}

 for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0);
    triangle(ii,ii2,ii3,ii4,ii,ii4);
    ii=ii+80
    ii2=ii2+80
    ii3=ii3+80
    ii4=ii4+80
}
 for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(ij,ij2,ij3,ij4,ij,ij4);
    ij=ij+80
    ij2=ij2+80
    ij3=ij3+80
    ij4=ij4+80
 }


for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(ik,ik2,ik3,ik4,ik,ik4);
    ik=ik+80
    ik2=ik2+80
    ik3=ik3+80
    ik4=ik4+80
}

for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(il,il2,il3,il4,il,il4);
    il=il+80
    il2=il2+80
    il3=il3+80
    il4=il4+80
}
  for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(im,im2,im3,im2,im3,im4);
    im=im+80
    im2=im2+80
    im3=im3+80
    im4=im4+80
}
 for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(240,in1,280,in1,280,in2);
    in1=in1+40
    in2=in2+40
    
 }
  
    triangle(280,0,320,0,320,40);
    triangle(280,40,320,80,280,80);
    
///////////////////////////////////////
//Segundo Cuadrante;

for(var cant=0;cant<8;cant=cant+1){
    fill(0,0,0)
    triangle(io,io2,io,io3,io4,io3);
    io=io+40
    io2=io2+40
    io3=io3+40
    io4=io4+40
   
 }


for(var cant=0;cant<7;cant=cant+1){
    fill(0,0,0)
    triangle(ip,ip2,ip3,ip2,ip,ip4);
    ip=ip+40
    ip2=ip2+40
    ip3=ip3+40
    ip4=ip4+40
   
 }
 for(var cant=0;cant<6;cant=cant+1){
    fill(0,0,0)
    triangle(iq,iq2,iq3,iq2,iq,iq4);
    iq=iq+40
    iq2=iq2+40
    iq3=iq3+40
    iq4=iq4+40
   
 }

 

for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(ir,ir2,ir,ir3,ir4,ir3);
    ir=ir+40
    ir2=ir2+40
    ir3=ir3+40
    ir4=ir4+40
   
 }


for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0)
    triangle(ja,ja2,ja,ja3,ja4,ja3);
    ja=ja+40
    ja2=ja2+40
    ja3=ja3+40
    ja4=ja4+40
   
 }

for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0)
    triangle(jb,jb2,jb3,jb2,jb,jb4);
    jb=jb+40
    jb2=jb2+40
    jb3=jb3+40
    jb4=jb4+40
   
 }

  for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(jc,jc2,jc3,jc2,jc,jc4);
    jc=jc+40
    jc2=jc2+40
    jc3=jc3+40
    jc4=jc4+40
   
 }
 
 triangle(360,280,360,320,320,320);
 
 for(var cant=0;cant<7;cant=cant+1){
    fill(0,0,0);
    triangle(jd,jd2,jd,jd3,jd4,jd3);
    jd=jd+40
    jd2=jd2+40
    jd3=jd3+40
    jd4=jd4+40
   
 }
    for(var cant=0;cant<6;cant=cant+1){
    fill(0,0,0)
    triangle(je,je2,je3,je2,je,je4);
    je=je+40
    je2=je2+40
    je3=je3+40
    je4=je4+40
   
 }
    for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(jf,jf2,jf3,jf2,jf,jf4);
    jf=jf+40
    jf2=jf2+40
    jf3=jf3+40
    jf4=jf4+40
   
 }
    for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0)
    triangle(jg,jg2,jg,jg3,jg4,jg3);
    jg=jg+40
    jg2=jg2+40
    jg3=jg3+40
    jg4=jg4+40
   
 }
    
for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0)
    triangle(jh,jh2,jh,jh3,jh4,jh3);
    jh=jh+40
    jh2=jh2+40
    jh3=jh3+40
    jh4=jh4+40
   
 }
    
    for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0)
    triangle(ji,ji2,ji3,ji2,ji,ji4);
    ji=ji+40
    ji2=ji2+40
    ji3=ji3+40
    ji4=ji4+40
   
 }
   triangle(600,0,640,0,600,40);
//////////////////////////
//tercer cuadrante
   noStroke()
   for(var cant=0;cant<8;cant=cant+1){
    fill(0,0,0)
    triangle(jj2,jj,jj3,jj,jj2,jj4);
    jj=jj+40
    jj2=jj2+40
    jj3=jj3+40
    jj4=jj4+40
 
   
   }
  
    for(var cant=0;cant<8;cant=cant+1){
    fill(0,0,0)
    triangle(jk,jk2,jk3,jk2,jk,jk4);
    jk=jk+40
    jk2=jk2+40
    jk3=jk3+40
    jk4=jk4+40
    }
    
   for(var cant=0;cant<8;cant=cant+1){
    fill(0,0,0)
    triangle(jl,jl2,jl,jl3,jl4,jl3);
    jl=jl+40
    jl2=jl2+40
    jl3=jl3+40
    jl4=jl4+40
   }
   for(var cant=0;cant<7;cant=cant+1){
    fill(0,0,0)
    triangle(jm,jm2,jm,jm3,jm4,jm3);
    jm=jm+40
    jm2=jm2+40
    jm3=jm3+40
    jm4=jm4+40
   }
   for(var cant=0;cant<6;cant=cant+1){
    fill(0,0,0)
    triangle(jn,jn2,jn,jn3,jn4,jn3);
    jn=jn+40
    jn2=jn2+40
    jn3=jn3+40
    jn4=jn4+40
   }
   for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(jq,jq2,jq3,jq2,jq,jq4);
    jq=jq+40
    jq2=jq2+40
    jq3=jq3+40
    jq4=jq4+40
 
   
   }
    for(var cant=0;cant<4;cant=cant+1){
    fill(0,0,0)
    triangle(jr,jr2,jr3,jr2,jr,jr4);
    jr=jr+40
    jr2=jr2+40
    jr3=jr3+40
    jr4=jr4+40
  
   }
   
    for(var cant=0;cant<3;cant=cant+1){
    fill(0,0,0)
    triangle(js,js2,js,js3,js4,js3);
    js=js+40
    js2=js2+40
    js3=js3+40
    js4=js4+40
   
    }
    
    for(var cant=0;cant<2;cant=cant+1){
    fill(0,0,0)
    triangle(jt,jt2,jt,jt3,jt4,jt3);
    jt=jt+40
    jt2=jt2+40
    jt3=jt3+40
    jt4=jt4+40
    }
   triangle(280,320,320,320,280,360);
   
  for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(ju,ju2,ju,ju3,ju4,ju3);
    ju=ju+40
    ju2=ju2+40
    ju3=ju3+40
    ju4=ju4+40
    }
 for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(jv,jv2,jv3,jv2,jv,jv4);
    jv=jv+40
    jv2=jv2+40
    jv3=jv3+40
    jv4=jv4+40
    }
    for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(jw,jw2,jw3,jw2,jw,jw4);
    jw=jw+40
    jw2=jw2+40
    jw3=jw3+40
    jw4=jw4+40
    }
   for(var cant=0;cant<5;cant=cant+1){
    fill(0,0,0)
    triangle(jx,jx2,jx3,jx4,jx3,jx2);
    jx=jx+40
    jx2=jx2+40
    jx3=jx3+40
    jx4=jx4+40
    }
   triangle(0,640,40,600,40,640);
////////////////////////////////////////
//cuarto caudrante 

for(var cant=0;cant<8;cant=cant+1){
    fill(243,196,58)
    triangle(a,a2,a,a3,a4,a3);
    a=a-40
    a2=a2+40
    a3=a3+40
    a4=a4-40
    }
    for(var cant=0;cant<7;cant=cant+1){
    fill(243,196,58)
    triangle(b,b2,b,b3,b4,b3);
    b=b-40
    b2=b2+40
    b3=b3+40
    b4=b4-40
    }
    
    for(var cant=0;cant<6;cant=cant+1){
    fill(243,196,58)
    triangle(c,c2,c3,c2,c,c4);
    c=c-40
    c2=c2+40
    c3=c3-40
    c4=c4+40
    }
    for(var cant=0;cant<5;cant=cant+1){
    fill(243,196,58)
    triangle(d,d2,d3,d2,d,d4);
    d=d-40
    d2=d2+40
    d3=d3-40
    d4=d4+40
    }
    for(var cant=0;cant<4;cant=cant+1){
    fill(243,196,58)
    triangle(e,e2,e,e3,e4,e3);
    e=e-40
    e2=e2+40
    e3=e3+40
    e4=e4-40
    }
     for(var cant=0;cant<3;cant=cant+1){
    fill(243,196,58)
    triangle(f,f2,f,f3,f4,f3);
    f=f-40
    f2=f2+40
    f3=f3+40
    f4=f4-40
    }
    for(var cant=0;cant<2;cant=cant+1){
    fill(243,196,58)
    triangle(g,g2,g,g3,g4,g2);
    g=g-40
    g2=g2+40
    g3=g3+40
    g4=g4-40
   
    }
    for(var cant=0;cant<7;cant=cant+1){
    fill(243,196,58)
    triangle(h,h2,h3,h2,h,h4);
    h=h-40
    h2=h2+40
    h3=h3-40
    h4=h4+40
    }
    for(var cant=0;cant<6;cant=cant+1){
    fill(243,196,58)
    triangle(i,i2,i3,i2,i,i4);
    i=i-40
    i2=i2+40
    i3=i3-40
    i4=i4+40
    }
    for(var cant=0;cant<5;cant=cant+1){
    fill(243,196,58)
    triangle(j,j2,j,j3,j4,j3);
    j=j-40
    j2=j2+40
    j3=j3+40
    j4=j4-40
    }
    triangle(640,600,600,600,640,640);
    
    for(var cant=0;cant<4;cant=cant+1){
    fill(243,196,58)
    triangle(k,k2,k4,k3,k,k3);
    k=k-40
    k2=k2+40
    k3=k3+40
    k4=k4-40
    }
    
    for(var cant=0;cant<3;cant=cant+1){
    fill(243,196,58)
    triangle(l,l2,l3,l2,l,l4);
    l=l-40
    l2=l2+40
    l3=l3-40
    l4=l4+40
    }
    
    triangle(320,320,360,360,320,360);
    
     for(var cant=0;cant<2;cant=cant+1){
    fill(243,196,58)
    triangle(m,m2,m4,m2,m,m3);
    m=m-40
    m2=m2+40
    m3=m3+40
    m4=m4-40
   }
    
    
    
    

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
	
	
	
	
 
}

