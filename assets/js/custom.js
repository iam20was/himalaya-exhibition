//AOS for animating on scroll
AOS.init();

// Swiper for the hero sections sliders

var swiper = new Swiper(".myHeroSwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      loop: true,
    },
  });