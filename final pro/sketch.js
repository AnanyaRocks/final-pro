var player,playerImage,groundImage;
function preload (){
 playerImage=loadImage("fur.png") 
 groundImage=loadImage("Capture.png")
 backgroundImage=loadImage("Capture5.PNG")
}
function setup() {
  createCanvas(800,400);
  player=createSprite(400, 200, 50, 50);
  player.addImage(playerImage);
  player.scale=0.2;
ground = createSprite(400,380,800,20);
ground.addImage(groundImage);
ground.x = ground.width/2;
ground.velocityX=-6
//ground.width=1000
ground.scale=4;
}

function draw() {
  background(backgroundImage);  
  if (keyDown(UP_ARROW)){
  player.velocityY=-13;  
  }
  player.velocityY=player.velocityY+1

    if (ground.x<0){
      ground.x=ground.width/2
    }
    player.collide(ground);
  drawSprites();
}