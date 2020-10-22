
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananaGroup = new Group()
  obstacleGroup = new Group()
 
}



function setup() {
  createCanvas(400,400);

  ground = createSprite(200,350,450,5);
  ground.velocityX = -5;
  
  monkey = createSprite(80,320,50,50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  survivalTime = 0;
}


function draw() {
   background("white");
   drawSprites()
  
  ground.x = ground.width/2;
  
  if(keyDown("space") && monkey.y == 316.8 ){
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.9;
  monkey.collide(ground);
  console.log(monkey.y);
  
  banana();
  obstacle();
  
  survivalTime = Math.ceil(frameCount/frameRate())
  
  text("SURVIVAL TIME :-" + survivalTime, 150,50)
}

function banana () {
  if(frameCount%80 === 0){
   var banana
   banana = createSprite(400,200,40,40);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.y = Math.round(random(120,200));
   banana.velocityX = -5;
   banana.setLifetime = 80;
   bananaGroup.add(banana);
   }
}

function obstacle () {
  if(frameCount%300 === 0){
    var obstacle
    obstacle = createSprite(400,330,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.setLifetime = 100;
    obstacleGroup.add(obstacle)
  }
  
  
  
  
  
  
}


