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

//   Lightgallery for the gallery
lightGallery(document.querySelector('.gallery-container'));

// Back to top button functionality
window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const scrolled = window.pageYOffset;
  
    if (scrolled > 1000) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  const backToTopBtn = document.getElementById('backToTopBtn');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  