var planet1;
var planet2;
var planet3;
var planet4;
var planet5;
var planet6;
var planet7;
var planet8;
var sun;

var angle=0;
var anglespeed=0.2;
var sunRadius;
function setup() {
  createCanvas(1200,1200);
  sun=createSprite(700,300,100,100);
  sun.scale=0.3;
  sun.setCollider("circle", -85, -60, 140);
  sun.debug=true;
  sun.shapeColor="yellow";


  planet1=createSprite(610,300,20,20); 
  planet1.scale = 0.2;
  planet1.setCollider("circle", 0, 0, 300);
  planet1.debug = true;
  planet1.shapeColor="orange";



  planet2=createSprite(550,300,25,25);
  planet2.scale = 0.16;
  planet2.shapeColor=("red");
  planet2.debug = true;
  planet3=createSprite(490,300,30,30); 
  planet3.scale = 0.23; 
  planet3.shapeColor="blue";  
  planet3.debug = true;                    
 planet4=createSprite(430,300,27,27);
 planet4.scale = 0.3;
 planet4.shapeColor="brown";
 planet4.debug = true;
 planet5=createSprite(350,300,31,31); 
 planet5.scale = 0.4;
 planet5.shapeColor="brown";
 planet5.debug = true;
 planet6=createSprite(290,300,30,30);
 planet6.scale = 0.4;
 planet6.shapeColor="brown";
 planet6.debug = true;
 planet7=createSprite(230,300,26,26); 
 planet7.scale = 0.3;   
 planet7.shapeColor="blue";   
 planet7.debug = true;                 
planet8=createSprite(170,300,27,27);
planet8.scale = 0.2;
planet8.shapeColor="blue";
planet8.debug = true;

}

function draw() {
  background(0);
sun.display();
  planet1.display();
planet2.display();
planet3.display();
planet4.display();
planet5.display();
planet6.display();
planet7.display();
planet8.display();
planet1.x=mouseX;

angleMode(DEGREES);
translate(width/2,height/2);
rotate(angle);





if(sun.collide(planet1)){

  planet1.destroy();
  
  }
  
if(sun.collide(planet2)){

  planet2.destroy();
  
  }
  
if(sun.collide(planet3)){

  planet3.destroy();
  
  }
  
if(sun.collide(planet4)){

  planet4.destroy();
  
  }
  
if(sun.collide(planet5)){

  planet5.destroy();
  
  }
  
if(sun.collide(planet6)){

  planet6.destroy();
  
  }
  
if(sun.collide(planet7)){

  planet7.destroy();
  
  }
  
if(sun.collide(planet8)){

  planet8.destroy();
  
  }
  angle=angle+anglespeed;
if(framecount % 1 ===0){

sun.scale=sun.scale+0.01;

}





  drawSprites();
}