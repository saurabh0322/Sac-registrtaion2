var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    keyboard:{
      enabled:true
    },
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// Shery.mouseFollower();
// Shery.makeMagnet(".left");
// Shery.makeMagnet(".magnet");
// Shery.makeMagnet(".tag");
// Shery.makeMagnet(".sicon")

  gsap.from('.swiper-slide', {
    stagger: .1,
    y:-80,
    duration:1.4,
    opacity: 0
  })
  
  gsap.from('.branchdiv', {
    stagger:.3,
    x:-80,
    duration:1.4,
    opacity: 0
  })

  gsap.from('.h1', {
    y:-80,
    duration:1.4,
    opacity: 0
  })


  gsap.from('.abttext', {
    y:-80,
    duration:1.4,
    opacity: 0
  })