var spriteName
var seaImg
var shipImg
var ship
function preload(){
  seaImg = loadImage ("sea.png");
  shipImg = loadImage ("ship-1.png");
}

function setup(){
  createCanvas(900,600); 
  spriteName = createSprite(450,300,900,600);
  spriteName.addImage(seaImg);
  spriteName.scale = 0.3


  
  ship = createSprite(225,300,200,200);
  ship.addImage(shipImg);
  ship.scale = 0.3
}


function draw() {
  background("#73FFD7");
  drawSprites();
}
