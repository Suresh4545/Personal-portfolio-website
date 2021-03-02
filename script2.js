$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');

        }else{
            $('.navbar').removeClass('sticky');

        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass('show');

        }else{
            $('.scroll-up-btn').removeClass('show');

        }
    });
      // slide-up script
      $('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});

      });
        //typing animate
        var typed = new Typed(".typing", {
            strings: ["Youtuber", "Developer", "Vlogger", "Gamer","Fitness", "Modeling"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })
        var typed = new Typed(".typing-2", {
            strings: ["Youtuber", "Developer", "Vlogger", "Gamer","Fitness", "Modeling"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })



    //toggle menu/ ba script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    //owl carousel script
    $('.carousel').owlCarousel({
         margin:20,
         loop:true,
         autoplayTimeOut:2000,
         autoplayHoverPause: true,
         responsive: {
            0:{
                items: 1,
                 nav: false
            },
           600:{
               items: 2,
                 nav: false
            },
            1000:{
                 items: 3,
                 nav: false
             }
         }

     });
    let button = document.querySelector("body a");
    button.addEventListener("click", ()=>{
        const span = ducument.querySelector(" a span");
        button.getElementsByClassName.paddingRight = '10px';
        span.style.visibility ="visible";
        setTimeout(()=>{
            span.style.visibility="hidden";
            button.style.transition = "0.3s ease-in-out";
            button.style.paddingRight = "0px";
        },300);

    })

});