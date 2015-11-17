var bg;
var snowman;
var sun;
var snowflake;



function setup() {
  
   createCanvas(windowWidth, windowHeight);
   bg = loadImage("../images/background.svg");
   snowman = createSprite(windowWidth/2, windowHeight-100,50,50);
   snowman.addAnimation("moving","../images/s1.svg");
   snowman.addAnimation("stand","../images/s3.svg");
   
    
    

}

function draw() {
    background(bg);
    
    
    

    drawSprites();
}

function keyPressed(){
    
    if(keyCode === LEFT_ARROW){
        snowman.changeAnimation("moving");
       snowman.mirrorX(-1);
        snowman.velocity.x = - 3;
    }
    
    
    else if(keyCode === RIGHT_ARROW){
        snowman.changeAnimation("moving");
        snowman.mirrorX(1);
        snowman.velocity.x = 3;
    }
    
    else {
    snowman.changeAnimation('stand');
    snowman.velocity.x = 0;
  }
}

function keyReleased() {
    
    snowman.changeAnimation('stand');
    snowman.velocity.x = 0;
    
    
}