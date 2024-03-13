let x = 0
let y = 0

function setup() {
  createCanvas(1000, 800);

}

function draw() {
      background(230);
  
  fill(0,10,120,10);
  stroke(0);
    square(10,10,700);
  
  fill(10,10,120,30);
  stroke(255);
  square(20,20,600);
  
 stroke(255,20,100,10);
  fill(255,20,100,10);
rect(500, 200, 50, 100);
  
  stroke(255,20,100);
  fill(255,20,100,45);
rect(488, 188, 50, 100);
  
  fill(10,100,120,10);
 ellipse(50, 700, 50, 80);
  
  fill(25,10,255);
  circle(67,350,200);
  
  fill(200,130,10);
  rect(x,250,100,70);
  x = x + 3;

  if(x > width){
    x = 0;
  }
  
  
  fill(10,244,150);
  square (680,y,90);
  y = y + 5;
  
  fill(10,200,180);
  square(mouseX, mouseY, 67);
}