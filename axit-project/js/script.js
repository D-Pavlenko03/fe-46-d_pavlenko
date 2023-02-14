const smoothLinks = document.querySelectorAll('a[href^="#"]');

const navBtn = document.querySelector('.header__burger');
const navBurger = document.querySelector('.burger');
const mobileNav = document.querySelector('.header__mobile-menu');
const body = document.body;

const tabs = document.querySelectorAll(".tabs__nav-item");
const contents = document.querySelectorAll(".tab__content");

smoothLinks.forEach(smoothLink => {
   smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
});

navBurger.addEventListener('click', (event) => {
   event.stopPropagation();
   toggleMobileNav()
})

mobileNav.addEventListener('click', () => {
   if (body.classList.contains('no-scroll')) {
      toggleMobileNav()
   }
})

mobileNav.addEventListener('click', (event) => {
   event.stopPropagation();
})

function toggleMobileNav() {
   navBurger.classList.toggle('open');
   mobileNav.classList.toggle('header__mobile-menu_active');
   body.classList.toggle('no-scroll');
}

for (let i = 0; i < tabs.length; i++) {
   tabs[i].addEventListener("click", (event) => {

      let tabsChildren = event.target.parentElement.children;
      for (let t = 0; t < tabsChildren.length; t++) {
         tabsChildren[t].classList.remove("tabs__nav-item_active");
      }
      tabs[i].classList.add("tabs__nav-item_active");

      let tabContentChildren = event.target.parentElement.nextElementSibling.children;
      for (let c = 0; c < tabContentChildren.length; c++) {
         tabContentChildren[c].classList.remove("tab__content_active");
      }
      contents[i].classList.add("tab__content_active");
   });
}

const swiper = new Swiper('.reviews-swiper', {
   loop: true,
   speed: 600,
   slidesPerView: 3,
   spaceBetween: 5,
   centeredSlides: true,
   initialSlide: 1,
   
   breakpoints: {
      850: {
         slidesPerView: 3,
         spaceBetween: 10,
      },

      699: {
         slidesPerView: 2,
      },

      501: {
         slidesPerView: 2,
         centeredSlides: false,
      },

      500: {
         slidesPerView: 1,
      },

      300: {
         slidesPerView: 1,
         spaceBetween: 10,
         centeredSlides: true,
      },
   },

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   mousewheel: {
      invert: false
   },

   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
});