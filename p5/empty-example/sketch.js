var bg;
var snowman;
var sun;
var snowflake;
var heart;



function setup() {
  
   createCanvas(windowWidth, windowHeight);
   bg = loadImage("../images/background.svg");
   snowman = createSprite(windowWidth/2, windowHeight-100,50,50);
   snowman.addAnimation("moving","../images/s1.svg");
   snowman.addAnimation("stand","../images/s3.svg");
   snowman.addAnimation("floating","../images/s2.svg");
   
    
    heart = createSprite(90, 20,20,20);
    heart.addAnimation("stand","../images/heart.svg");
    
    heart = createSprite(130, 20,20,20);
    heart.addAnimation("stand","../images/heart.svg");
    
    heart = createSprite(170, 20,20,20);
    heart.addAnimation("stand","../images/heart.svg");
    
    heart = createSprite(210, 20,20,20);
    heart.addAnimation("stand","../images/heart.svg");
    
    heart = createSprite(250, 20,20,20);
    heart.addAnimation("stand","../images/heart.svg");
    
    sun = new Group();
    snowflake = new Group();
    
    for(var i=0;i<6;i++){
        var newSun = createSprite(random(0,width), random(0,100));
        newSun.addAnimation("moving","../images/sun.svg");
        sun.add(newSun);
    }

    for(var i=0;i<6;i++){
        var newSnowflake = createSprite(random(0,width), random(0,100));
        newSnowflake.addAnimation("moving","../images/snowflake.svg");
        newSnowflake.rotationSpeed = -2;
        newSnowflake.addToGroup(snowflake);
    }
}

function draw() {
    background(bg);
    textSize(20);
    text("Life:" ,20,30);

    for(var i=0;i<sun.length;i++){
        var s = sun[i];
        s.addSpeed(0.001,90);
        
        if (s.position.y >height)
            s.position.y = 0;
       
    }

    
    for(var i=0;i<snowflake.length;i++){
        var f = snowflake[i];
        f.addSpeed(0.001,90);
        
        if (f.position.y >height)
            f.position.y=0;
    }
    
    snowman.collide(sun);
    snowman.overlap(sun,collect);

    
    snowman.collide(snowflake);
    snowman.overlap(snowflake,collect);
    
    if(snowman.getAnimationLabel() == "strech" && snowman.animation.getFrame()==snowman.animation.getFrame() ){
        
        snowman.changeAnimation("normal");
    }

    drawSprites();
}

function keyPressed(){
    
    if(keyCode === LEFT_ARROW){
        snowman.changeAnimation("moving");
        snowman.velocity.x = - 3;
    }
    
    
    else if(keyCode === RIGHT_ARROW){
        snowman.changeAnimation("moving");
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


function collect(collector, collected){
    
    collector.changeAnimation("stretch");
    collector.animation.rewind();
    collected.remove();
    
    if (collected === sun){
         snowman.changeAnimation("floating");
    }
}