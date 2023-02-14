const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
      });
   });
};

const navBtn = document.querySelector('.header__burger');
const navBurger = document.querySelector('.burger');
const mobileNav = document.querySelector('.header__mobile-menu');
const body = document.body;

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