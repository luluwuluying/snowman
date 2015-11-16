




$(document).ready(function(){
    
    $(".b1").click(function(){  
        $(".flower1").fadeIn(3000);
        $(".flower2").fadeIn(3000);
        $(".flower3").fadeIn(3000);
        $(".flower4").fadeIn(3000);
        
    
        $(".flower1").fadeOut(3000);
        $(".flower2").fadeOut(3000);
        $(".flower3").fadeOut(3000);
        $(".flower4").fadeOut(3000);
        
        $(".flower1").rotate({
              angle:0, 
              animateTo:360, 
           });
        $(".flower2").rotate({
              angle:0, 
              animateTo:360, 
           });
        $(".flower3").rotate({
              angle:0, 
              animateTo:360, 
           });
        $(".flower4").rotate({
              angle:0, 
              animateTo:360, 
           });
   
       $(".butterfly").animate({
            height: 'toggle'
        });
        
    });
        
        
    });