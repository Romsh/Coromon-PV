$(document).ready(function(){
    $(".theme-light").on("click",function(){
        $(".body-light").toggleClass("body-dark");
        $(".body-dark").toggleClass("body-light");
    
        $(".app-title-light").toggleClass("app-title-dark");
        $(".app-title-dark").toggleClass("app-title-light");
    
        $(".navbox-light").toggleClass("navbox-dark");
        $(".navbox-dark").toggleClass("navbox-light");
    
        $(".box-light").toggleClass("box-dark");
        $(".box-dark").toggleClass("box-light");
    
        $(".result-light").toggleClass("result-dark");
        $(".result-dark").toggleClass("result-light");
    
        $(".theme-light").toggle();
        $(".theme-dark").toggle();
    });
    
    $(".theme-dark").on("click",function(){
        $(".body-dark").toggleClass("body-light");
        $(".body-light").toggleClass("body-dark");
    
        $(".app-title-dark").toggleClass("app-title-light");
        $(".app-title-light").toggleClass("app-title-dark");
    
        $(".navbox-dark").toggleClass("navbox-light");
        $(".navbox-light").toggleClass("navbox-dark");
    
        $(".box-dark").toggleClass("box-light");
        $(".box-light").toggleClass("box-dark");
    
        $(".result-dark").toggleClass("result-light");
        $(".result-light").toggleClass("result-dark");
    
        $(".theme-light").toggle();
        $(".theme-dark").toggle();
    });
});
