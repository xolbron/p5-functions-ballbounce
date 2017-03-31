var x = 300;
var y = 200;
var speedx = 7;
var speedy = 5;
var bg;
var img;
var runner;

function setup(){
    createCanvas(1340,620, WEBGL);
     loadImage("abstractbackground40.jpg", function(img) {
    image(img, 0, 0);
  });
}

function draw(){
    background(100);
  rotateY(frameCount * -0.01);

  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * -0.001 + j) * -100, sin(frameCount * -0.001 + j) * -100, i * -0.1);
      rotateZ(frameCount * -0.002);
      push();
      torus(8, 6, 4); 
      pop();
      translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * -0.001 + j) * -200, i * 0.1);
      rotateZ(frameCount * -0.025);
      push();
      rect(-8, -6, -14); 
      pop();
    }
    pop();
  }
    display();
    move();
    bounce();
}

function display(){
     //display ball
    stroke(255);
    strokeWeight(4);
    fill(runner,mouseY,mouseX);
    ellipse(x, y, 50, 50);
    
    runner = random(255);
    
}

function move(){
    //make ball move
    y = y + speedy;
    x = x + speedx;
}

function bounce(){
     //ball changes direction when it hits wall
    if(x > 575 || x < 25){
        speedx = -speedx;
        
    }
     if(y > 400 || y < 25){
        speedy = -speedy;
    }
}