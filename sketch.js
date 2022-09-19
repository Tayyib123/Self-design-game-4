
var ground, groundImage;
var hero, heroImage;
var invisibleGround;
var diamondImage, starImage, goldbarImage;
var gameOverImage;
var diamondGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

var monsterGroup;
var monster1Image, monster2Image, monster3Image, monster4Image;

function preload(){
  groundImage = loadImage("Background7.jpeg");
  heroImage = loadImage("Hero.png");

  monster1Image = loadImage("Monster-1.png");
  monster2Image = loadImage("Monster-2.png");
  monster3Image = loadImage("Monster-3.png");
  monster4Image = loadImage("Monster-4.png");

  diamondImage = loadImage("diamond.png");
  starImage = loadImage("star.png");
  goldbarImage = loadImage("goldbar.png");
  gameOverImage = loadImage("gameOver.png");
}

function setup(){
  createCanvas(550,300)
  

  ground = createSprite(300,150,600,200)
  ground.addImage(groundImage)
  ground.x = ground.width /2
  ground.velocityX = -1
  ground.scale = 1
 
  invisibleGround = createSprite(300,290,600,10);
  invisibleGround.visible = false;
  invisibleGround.shapeColor = "darkGreen";

  hero = createSprite(80,100,20,20)
  hero.addImage(heroImage)
  hero.scale = 0.2

  monsterGroup = new Group();
  diamondGroup = new Group();

}

function draw(){
  background("green")

  if(gameState===PLAY) {
    hero.collide(invisibleGround);

    if(keyDown("space") && hero.y >= height-120) {
      hero.velocityY = -8
    }
    hero.velocityY = hero.velocityY + 0.8

    if(ground.x < 200) {
      ground.x = ground.width /2
    }
    spawnMonsters();
    spawnDiamonds();
  }
  else if(gameState===END) {

  }

  drawSprites()

}

function spawnMonsters() {

  if(frameCount % 80 === 0) {
    var monster = createSprite(width+20,height-100,40,20);
    monster.y = Math.round(random(100,280));
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: monster.addImage(monster1Image);
              break;
      case 2: monster.addImage(monster2Image);
              break;
      case 3: monster.addImage(monster3Image);
              break;
      case 4: monster.addImage(monster4Image);
              break;                      
    }
    monster.velocityX = -3
    monster.scale = 0.2
    monster.lifetime = 200

    monsterGroup.add(monster);
  }
}

function spawnDiamonds() {
  if(frameCount % 60 === 0) {
    var diamond = createSprite(width+10,height-300,20,10);
    diamond.y = Math.round(random(20,200));

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: diamond.addImage(diamondImage);
              break;
      case 2: diamond.addImage(starImage);
              break;
      case 3: diamond.addImage(goldbarImage);
              break;
    }

    diamond.velocityX = -4;
    diamond.scale = 0.08;
    diamond.lifetime = 140;

    diamondGroup.add(diamond);
  }
} 