// hamburger menu
let hbIcon = document.getElementById("hbIcon");
let hbMenu = document.getElementById("hbMenu");
hbIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);
function showMenu() {
  hbMenu.classList.add("active");
}
function hideMenu() {
  hbMenu.classList.remove("active");
}

const heroSwiperScript = new Swiper(".hero-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  autoplay: {
    delay: 4000,
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 60,
});

const facilitesSwiperScript = new Swiper(".facilites-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween: 40,
      freeMode: {
        enabled: true,
      },
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    }
  },
});