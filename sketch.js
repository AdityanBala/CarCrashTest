var Car;
var Wall;
var Speed, Weight;
var Deformation = 0;

function setup() {
  createCanvas(1600,400);

  Speed = Math.round(random(55,90));
  Weight = Math.round(random(400,1500));

  Car = createSprite(50, 200, 50, 10);

  Wall = createSprite(1500,200,60,height/2);
  Wall.shapeColor = color(80,80,80);

  Car.velocityX = Speed;
}

function draw() {
  background(255,255,255);

  if(Car.collide(Wall)){
    Car.velocityX = 0;
    
    Deformation = (((0.5)*(Weight)*(Speed)*(Speed))/22500);
    
    console.log(Deformation);
  }

  if(Deformation <= 100 && Deformation != 0){
    Car.shapeColor = color(0,255,0);
  }else if(Deformation > 100 && Deformation <= 180){
    Car.shapeColor = color(230, 230, 0);
  }else if(Deformation > 180){
    Car.shapeColor = color(255, 0, 0);
  }

  //console.log(Speed);
  console.log(Weight);

  text("the number is: " + Deformation,300,300);

  drawSprites();
}