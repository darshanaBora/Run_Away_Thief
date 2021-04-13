const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var thief,coin,policeman,invisibleGround,gameOver,restart,cityBackground;
var thiefImg,coinImg,policemanImg,gameOverImg,restartImg,backgroundImg;
var policemanGroup,coinsGroup;
var score,Coins;

function preload(){
  thiefImg = loadImage("images/thief.png");
  coinImg = loadImage("images/coin.png");
  policemanImg = loadImage("images/policeman.png");
  gameOverImg = loadImage("images/gameOver.png");
  restartImg = loadImage("images/restart.png");
  backgroundImg = loadImage("images/background.png");
}
function setup(){
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  cityBackground = createSprite(0,90,10,10);
  cityBackground.addImage("background", backgroundImg);
  cityBackground.scale = 0.5;
  cityBackground.velocityX = -2;

  /*policeman = createSprite(900,489,0,0);
  policeman.addImage("policeman", policemanImg);
  policeman.scale = 0.3;
  policeman.velocityX = -2;*/

  thief = createSprite(200, 500, 50, 50);
  thief.addImage("thief", thiefImg);
  thief.scale = 0.5;

  invisibleGround = createSprite(600,580,1200,5);
  invisibleGround.visible = false;
  
  restart = createSprite(500,400,20,20);
  restart.addImage("restart", restartImg);
  restart.scale = 0.5;
  restart.visible = false;

  gameOver = createSprite(500,250,20,20);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.scale = 2;
  gameOver.visible = false;

  score = 0;
  Coins = 0;

  policeman = new Policeman(900,500,160,180);

  //coin = new Coin(500,500,50);
}

function draw() {
  background("white");

  for(var i; i=50; i=i+10){
    
  }

  if(cityBackground.x < 0){
    cityBackground.x = width/2;
  }

  if(keyDown("SPACE")&& thief.y >= 100){
    thief.velocityY = -13;
  }
  thief.velocityY = thief.velocityY + 0.8
  
  /*if(thief.isTouching(policeman)){
    cityBackground.velocityX = 0;
    policeman.velocityX = 0;
    restart.visible = true;
    gameOver.visible = true;
  }*/

  thief.collide(invisibleGround);

  score = score + Math.round(frameCount/60);

  drawSprites();

  fill("Black"); 
  textSize(30);
  text("Score: "+ score, 700,100);
  fill("black");
  textSize(30);
  text("Coin: "+ Coins, 500,100)

  policeman.display();
  //coin.display();
}
