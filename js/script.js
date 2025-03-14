// let intro = document.querySelector('.intro');
// let logo = document.querySelector('.logo_header');
// let logoSpan = document.querySelectorAll('.logo');

// window.addEventListener("DOMContentLoaded", ()=>{
//     setTimeout(()=>{
//         logoSpan.forEach((span, idx)=>{
//             setTimeout(()=>{
//                 span.classList.add('active');
//             }, (idx+1) * 400)  
//         });

//         setTimeout(()=>{
//             logoSpan.forEach((span, idx)=>{
//                 setTimeout(()=>{
//                     span.classList.remove('active');
//                     span.classList.add('fade');
//                 }, (idx+1) * 150)
//             })
//         }, 4000);

//         setTimeout(()=>{
//             intro.style.top = '-100vh'
//         }, 3700);
        
//     })
// })

// Shery.mouseFollower();
// Shery.makeMagnet(".left");
// Shery.makeMagnet(".magnet");
// Shery.makeMagnet(".tag");
// Shery.makeMagnet(".sicon")

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo_header');
let logoSpan = document.querySelectorAll('.logo');

// Check if the animation has already been played
// const hasAnimationPlayed = localStorage.getItem('animationPlayed');
const hasAnimationPlayed = sessionStorage.getItem('animationPlayed');


if (!hasAnimationPlayed) {
    window.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400);
            });

            setTimeout(() => {
                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 150);
                });
            }, 1800);

            setTimeout(() => {
                intro.style.top = '-100vh';
                
                // Set a flag in localStorage indicating that the animation has been played
                sessionStorage.setItem('animationPlayed', 'true');
                // hasAnimationPlayed = true;
            }, 2700);

        });
    })
} else {
    // If the animation has already been played, hide the intro immediately
    intro.style.display = 'none';
}





gsap.to(".lleftelem", {
    scrollTrigger: {
        trigger: ".leaders",
        start: "top top",
        pin: true,
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1,

});

gsap.from('.tag', {
    stagger: .1,
    y: -40,
    duration: 1,
    opacity: 0
})

gsap.from('.anim1', {


    x: -80,
    duration: 1.3,
    opacity: 0
})
gsap.from('.anim2', {

    x: 80,
    duration: 1.3,
    opacity: 0
})
gsap.from('.anim3', {

    x: -80,
    duration: 1.3,
    opacity: 0
})

