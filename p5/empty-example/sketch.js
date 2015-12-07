var bg;
var snowman;
var sun;
var snowflake;
var hearts;
var speed = 1;


function setup() {
  
   createCanvas(windowWidth, windowHeight);
   bg = loadImage("../images/background.svg");
   snowman = createSprite(windowWidth/2, windowHeight-100,50,50);
   snowman.addAnimation("stand","../images/s3.svg");
   snowman.addAnimation("floating","../images/s2.svg");
   snowman.addAnimation("moving","../images/s1.svg");
   
    sun = new Group();
    snowflake = new Group();
    hearts = new Group();
    
    for(var i=0;i<5;i++){
        var newHearts = createSprite(90+i*40,20);
        newHearts.addAnimation("heart","../images/heart.svg");
        hearts.add(newHearts);
    }
          
}



function draw() {
    background(bg);
    textSize(20);
    text("Life:" ,20,30);

    for(var i=0;i<sun.length;i++){
        var s = sun[i];
       // s.addSpeed(0.01,90);
        
        
        if (s.position.y >height) {
            s.position.y = 0;
        }     
        
    }

    for(var i=0;i<snowflake.length;i++){
        var f = snowflake[i];
        //f.addSpeed(0.01,90);
        
        if (f.position.y >height)
            
            f.position.y=0;
    }
    
    snowman.collide(sun);
    snowman.overlap(sun,collect);
    
    snowman.collide(snowflake);
    snowman.overlap(snowflake,collect);

    drawSprites();
    
    if(frameCount%360==0){
        speed = speed * 1.1;
    var newSnowflake = createSprite(random(0,width), random(0,100));
        newSnowflake.addAnimation("snow","../images/snowflake.svg");
        newSnowflake.rotationSpeed = -2;
        newSnowflake.setVelocity(0, speed);
//        newSnowflake.addSpeed(0.01,90);
        snowflake.add(newSnowflake);
    
     var newSun = createSprite(random(0,width), random(0,100));
        newSun.addAnimation("sun","../images/sun.svg");
//        newSun.addSpeed(0.01, 90);
        newSun.setVelocity(0,2*speed);
        sun.add(newSun);
    }
    
}

function keyPressed(){
    
    if(keyCode === LEFT_ARROW){
        snowman.changeAnimation("moving");
        snowman.velocity.x = - 10;
    }
    
    
    else if(keyCode === RIGHT_ARROW){
        snowman.changeAnimation("moving");
        snowman.velocity.x = 10;
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
    
//    collector.changeAnimation("stretch");
//    collector.animation.rewind();
    console.log(123);
    if (collected.getAnimationLabel()=="sun"){
        snowman.changeAnimation("floating");
        hearts[hearts.length-1].remove();
    }
    collector.position.y = windowHeight-100;
    collected.remove();
    
    if (hearts.length < 1 ){
        alert("Game over!");
    }
    
}





