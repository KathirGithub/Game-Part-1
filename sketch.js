var bob
var bob_Img
var El_Macho1,El_Macho2
var El_Macho1_Img,El_Macho2_Img
var moon_img






function preload(){

bob_Img = loadImage('bear.png')
El_Macho1_Img = loadImage('El Macho Minions.png')
El_Macho2_Img = loadImage('Evil Minions.png')
moon_img = loadImage('bad.jpg')

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  bob = createSprite(50,height-50, 50, 50);
  bob.addImage(bob_Img);
  bob.scale = 0.2;
}

function draw() {
  background(moon_img);
  drawSprites();
}