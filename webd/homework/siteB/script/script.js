document.addEventListener("DOMContentLoaded", () => {
    
    let currentIndex = 0;   
    document.getElementByClassName("sliderWrap").append(document.getElementByClassName("slider").first().clone(true));

    setInterval(function(){
        currentIndex++;     
        document.getElementByClassName("sliderWrap").animate({marginLeft: -1200 * currentIndex}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                document.getElementByClassName("sliderWrap").animate({marginLeft:0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(400);
        $("#header .container").classList.add("on");
    });
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $("#header .container").classList.remove("on");
    });

    
    document.getElementByClassName("popup-btn").click(function(){
        document.getElementByClassName("popup-view").style.display = "";
    });
    document.getElementByClassName("popup-close").click(function(){
        document.getElementByClassName("popup-view").style.display = "none";
    });
});