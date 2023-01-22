// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

import Swiper, { Navigation } from 'swiper';

const swiperFamily = new Swiper('.swiper-family', {

  direction: 'horizontal',
  modules: [Navigation],
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  spaceBetween: 20,

  wrapperClass: 'swiper-family__wrapper',
  slideClass: 'swiper-family__slide',

  navigation: {
    nextEl: '.swiper-family__next',
    prevEl: '.swiper-family__prev',
  },
});

const swiperFeatures = new Swiper('.features-family__swiper', {

  direction: 'horizontal',
  modules: [Navigation],
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  spaceBetween: 20,

  wrapperClass: 'features-family__wrapper',
  slideClass: 'features-family__slide',

  navigation: {
    nextEl: '.features-family__next',
    prevEl: '.features-family__prev',
  },
});


let header = document.querySelector('.header')

window.addEventListener('scroll', function () {
  if (scrollY > 60) {
    header.classList.add('header--fixed');
  }
  else {
    header.classList.remove('header--fixed');
  }
});


let headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', function () {
  let headerMenu = document.querySelector('.header__list');
  let body = document.querySelector('body');

  headerBurger.classList.toggle('burger--active');
  headerMenu.classList.toggle('header__list--active');
  body.classList.toggle('no-scrol');
});

//dropdown

let headerDropdawn = document.querySelectorAll('.header__item-submenu');

function headerDropdawnF(event) {
  let target = event.target.closest('.header__item-submenu');
  let targetHeight = target.clientHeight;
  let dropdownHeader = target.querySelector('.header__submenu');
  let dropdownHeaderHeight = dropdownHeader.clientHeight;

  if (target.classList.contains('header__item-submenu--active')) {
    target.classList.remove('header__item-submenu--active');
    target.style.paddingBottom = 0;
  }

  else {
    target.classList.add('header__item-submenu--active');
    dropdownHeader.style.top = targetHeight + 'px';
    target.style.paddingBottom = dropdownHeaderHeight + 'px';
  }
};

function closeHederItem(event) {
  let target = event.target.closest('.header__item-submenu');

  if (!target) {
    headerDropdawn.forEach(headerDropdawnItem => {
      headerDropdawnItem.classList.remove('header__item-submenu--active');
      headerDropdawnItem.style.paddingBottom = 0;
    });

  }
}

document.addEventListener('click', closeHederItem);

// Проверка на мобилу

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  headerDropdawn.forEach(headerDropdawnItem => {
    headerDropdawnItem.addEventListener('click', headerDropdawnF);
  });
}

let videoButton = document.querySelector('.video__button');
let videoVideo = document.querySelector('.video__video');

videoButton.addEventListener('click', function () {
  let body = document.querySelector('body');

  videoVideo.classList.toggle('video__video--active');
  body.style.overflow = 'hidden';
});



// Обратный отсчет

// let deadline = '2023-01-20';

// function getTimeRemaining(endtime) {
//   let t = Date.parse(endtime) - Date.parse(new Date());
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   let days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     'total': t,
//     'days': days,
//     'hours': hours,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }

// function initializeClock(id, endtime) {
//   let clock = document.getElementById(id);
//   let daysSpan = clock.querySelector('.days');
//   let hoursSpan = clock.querySelector('.hours');
//   let minutesSpan = clock.querySelector('.minutes');
//   let secondsSpan = clock.querySelector('.seconds');
//   function updateClock() {
//     let t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = ('0' + t.days).slice(-2);
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock(); // запустите функцию один раз, чтобы избежать задержки
//   let timeinterval = setInterval(updateClock, 1000);
// }

// initializeClock('clockdiv', deadline);

// Табы

// let tabButton = document.querySelectorAll('.tab__nav-item ');

// function tabTab(event) {
//   let target = event.target.closest('.tab__nav-item');

//   let tabButton = document.querySelectorAll('.tab__nav-item');

//   let tabTableWrapper = document.querySelectorAll('.tab__table-wrapper');

//   tabButton.forEach(tabButton => {
//     tabButton.classList.remove('tab__nav-item--active')
//   });

//   target.classList.add('tab__nav-item--active');

//   for (let item of tabTableWrapper) {
//     let slideData = item.dataset.target;
//     let buttunData = target.dataset.target + '-tab'

//     item.classList.remove('tab__table-wrapper--visible')

//     if (slideData == buttunData) {
//       item.classList.add('tab__table-wrapper--visible');
//     }
//   }

// }

// tabButton.forEach(tabItem => {
//   tabItem.addEventListener('click', tabTab);
// });

// Анимации при скролле

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 2;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }