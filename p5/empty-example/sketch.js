var bg;
var snowman;
var sun;
var snowflake;
var hearts;
var speed = 1;
var score;
var snowX;
var sunX;


function setup() {
  
   createCanvas(windowWidth, windowHeight);
   bg = loadImage("../images/background1.svg");
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
    
     score=0;
    
    
          
}



function draw() {
    background(bg);
    textSize(20);
    text("Life:" ,20,30);
    textSize(60);
    text(score,width-60,60);
    
    for(var i=0;i<sun.length;i++){
        var s = sun[i];
       
        
        if (s.position.y >height) {
            s.position.y = 0;
        }     
        
    }
    

    for(var i=0;i<snowflake.length;i++){
        var f = snowflake[i];
      
        if (f.position.y >height)
            
            f.position.y=0;
    }
    
    sun.collide(snowman, collect);
    snowflake.collide(snowman, collect);
    sun.overlap(snowman);
    snowflake.overlap(snowman);
    

        if(snowman.position.x <100)snowman.position.x=100;
        if(snowman.position.x >width -100)snowman.position.x=width -100;
    
    
    drawSprites();
    
    snowX=random(width);
    sunX=random(width);
    
    if(frameCount%180==0){
        speed = speed * 1;
    var newSnowflake = createSprite(snowX, random(0,100));
        newSnowflake.addAnimation("snow","../images/snowflake.svg");
        newSnowflake.rotationSpeed = -2;
        newSnowflake.setVelocity(0, speed);
        snowflake.add(newSnowflake);
    
    
    }
    
    if(frameCount%780==0){
        speed = speed * 1;
    
    
     var newSun = createSprite(sunX, random(0,100));
        newSun.addAnimation("sun","../images/sun.svg");
        newSun.setVelocity(0,speed);
//        if(newSun.position.x-newSnowflake.position.x)
        sun.add(newSun);
    }
    
    
    if(Math.abs(snowX-sunX)<100){
        snowX=random(width);
        sunX=random(width);
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
    

    if (collector.getAnimationLabel()=="sun"){
        snowman.changeAnimation("floating");
        hearts[hearts.length-1].remove();
    }
//    collector.position.y = windowHeight-100;
    collector.remove();
    
    if(collector.getAnimationLabel()=="snow"){
        score++;
    }
    
    if (hearts.length < 1 ){
        alert("Game over!");
        reset();
        collected.remove();
        collector.remove();
    }
    
}

function reset(){
    
      for(var i=0;i<5;i++){
        var newHearts = createSprite(90+i*40,20);
        newHearts.addAnimation("heart","../images/heart.svg");
        hearts.add(newHearts);
    
    } 
    for(var i=0;i<sun.length;i++){
        sun[0].remove();
    }
    for(var i=0;i<snowflake.length;i++){
        snowflake[0].remove();
    }
        
        snowman.changeAnimation('stand');
        snowman.velocity.x = 0;
        snowman = createSprite(windowWidth/2, windowHeight-100,50,50);
        snowman.addAnimation("stand","../images/s3.svg");
       snowman.addAnimation("floating","../images/s2.svg");
       snowman.addAnimation("moving","../images/s1.svg");
        
        
        speed = 1;
    
        score = 0;
        
    
    
}






