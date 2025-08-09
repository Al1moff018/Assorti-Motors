var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  breakpoints: {
    // mobile
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 30
    },
    // laptop va kattaroq
    1103: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
