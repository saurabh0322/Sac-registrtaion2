// Shery.mouseFollower();
// Shery.makeMagnet(".left");
// Shery.makeMagnet(".magnet");
// Shery.makeMagnet(".tag");
// Shery.makeMagnet(".sicon")


 

function animation(){
    var tl =gsap.timeline();

    tl.to(".hvr",{
        y:0,
        ease: Expo.easeInOut,
        duration:.6,
        stagger:.1,
        ease:Power1,
    })
}



// FOR UPCOMING EVENT VIEW BUTTON (START)-----.>

document.querySelector(".vdo button")
.addEventListener("mouseover",function(){
    gsap.to(".vdo video",{
        opacity:1,
        duration:.5,
        ease:Power3
    })
});


document.querySelector(".vdo button")
.addEventListener("mouseleave",function(){
    gsap.to(".vdo video",{
        opacity:0,
        duration:.5,
        ease:Power3

    })
});

document.querySelector(".vdo button")
.addEventListener("mouseover",function(){
    gsap.to(".text",{
        opacity:0,
        duartion:.5,
        ease:Power3
    })
})

document.querySelector(".vdo button")
.addEventListener("mouseleave",function(){
    gsap.to(".text",{
        opacity:1,
        duartion:.5,
        ease:Power3
    })
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
  });


animation();