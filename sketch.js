var pokeBall, pikachu, obstacles, score, background;
var pokeBallImage, pikachuAnimation, obstaclesImage, backgroundImage;
var pokeBallGroup, obstaclesGroup;

function preload(){
  pokeBallImage = loadImage("sprites/PokeBall.png");
  pikachuAnimation = loadAnimation("sprites/PikachuGif.gif");
  obstaclesImage = loadImage("sprites/TeamRocket.png");
  backgroundImage = loadImage("sprites/Jungle.jpg");
}

function setup(){
  background = createSprite(0,0,1600,800);
  background.addImage("background", backgroundImage);
  background.scale = 10;

  pikachu = createSprite(100, 300, 20, 50);
  pikachu.addAnimation("pikachu", pikachuAnimation);
  pikachu.scale = 0.5;

}

function draw(){
  createCanvas(1600,800);

  background.velocityX = -5;

  if(background.x < 0){
    background.x = background.width/2;
  }

  pikachu.y = World.mouseY;
  pikachu.x = World.mouseX;

  drawSprites();
}