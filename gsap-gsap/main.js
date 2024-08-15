import './style.scss'
import { initSlider } from './slider.js'
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

initSlider();

// const fakePin = gsap.to('.slider__item--intro', { x:  window.innerWidth * (sections.length) + 10, ease: 'none' })
// ScrollTrigger.create({
//
//     trigger: ".slider__item--intro",
//     containerAnimation: scrollTween,
//     start: '-160px left',
//     end: "+=" + window.innerWidth * (sections.length),
//     scrub: true,
//     animation: fakePin
//
// })
// let sections = gsap.utils.toArray(".slider__item");
// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length),
//     ease: "none", // <-- IMPORTANT!
//     scrollTrigger: {
//         trigger: ".container",
//         pin: true,
//         scrub: true,
//         //snap: directionalSnap(1 / (sections.length - 1)),
//         end: "+=4000"
//     }
// });
// const items = Array.from(document.querySelectorAll(".slider__item"));
// const itemsContent = Array.from(document.querySelectorAll(".slider__item-content"));
// items.forEach((item, index) => {
//     ScrollTrigger.create({
//         trigger: item,
//         containerAnimation: scrollTween,
//         start: '-160px left',
//         end: "+=" + window.innerWidth * (sections.length),
//         scrub: true,
//         animation: gsap.to(item, { x:  window.innerWidth * (sections.length) + 14, ease: 'none' })
//     })
//
//     // const img = item.querySelector(".ranks-item__img");
//     // gsap.set(img, { scale: 0 });
// });
// itemsContent.forEach((item, index) => {
//     ScrollTrigger.create({
//         trigger: item,
//         containerAnimation: scrollTween,
//         start: 'left 460px',
//         end: 'left 200px',
//         scrub: true,
//         animation: gsap.to(item, { minWidth: '482px', ease: 'none' }),
//         markers: index === 0 ? true : false,
//         onUpdate: (self) => {
//             // console.log(self.progress)
//             if(self.progress === 1) {
//                 item.classList.add('slider__item--pinned')
//             } else {
//                 item.classList.remove('slider__item--pinned')
//             }
//         },
//     })
// })
// ScrollTrigger.create({
//     trigger: '.slider__item--intro img',
//     containerAnimation: scrollTween,
//     start: '0px left',
//     end: '200px left',
//     scrub: true,
//     animation: gsap.to('.slider__item--intro img', { opacity:  0, ease: 'none' })
// })
//
// // red section
// gsap.to(".red h1", {
//     duration: 20,
//     opacity:1,
//     ease: "elastic",
//     scrollTrigger: {
//         trigger: ".red",
//         containerAnimation: scrollTween,
//         start: "-20% center",
//         toggleActions: "play none none reset",
//         scrub: true,
//         id: "1"
//     }
// });
// gsap.to(".red", {
//   duration: 20,
//   opacity:0,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".red",
//     start: "500% center",
//     toggleActions: "play none none reset",
//     scrub: true,
//     markers: true,
//   }
// });
// gsap.to(".gray", {
//   duration: 20,
//   opacity:0,
//   ease: "elastic",
//   scrollTrigger: {
//     trigger: ".red",
//     start: "800px center",
//     toggleActions: "play none none reset",
//     scrub: true,
//     markers: true,
//   }
// });

// gsap.set('.red', { zIndex: 0 })
// gsap.set('.gray', { zIndex: 1 })

// const fakePin = gsap.to('.red h1', { x:  window.innerWidth * (sections.length - 2), ease: 'none' })
// const fakePin2 = gsap.to('.gray h1', { x:  window.innerWidth * (sections.length - 2), ease: 'none' })
//
// ScrollTrigger.create({
//
//     trigger: ".red",
//     containerAnimation: scrollTween,
//     start: 'left left',
//     end: "+=" + window.innerWidth * (sections.length - 2),
//     scrub: true,
//
//     animation: fakePin
//
// })
// ScrollTrigger.create({
//
//     trigger: ".gray",
//     containerAnimation: scrollTween,
//     start: 'left left',
//     end: "+=" + window.innerWidth * (sections.length - 2),
//     scrub: true,
//     animation: fakePin2
//
// })