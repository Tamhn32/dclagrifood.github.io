$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })

    //toggle
    $('.menu-btn').click(function(){
        $('.navbar . menu').toggleClass("active")
    })
});

// typing Animation script
var typed = new Typed(".typing", {
    strings: ["Sắn", "Lúa Mì", "Cám Cọ"],
    typeSpeed: 100,
    backSpeed: 160,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Dai Cat LAM", "LTD", "DCL"],
    typeSpeed: 100,
    backSpeed: 160,
    loop: true
});