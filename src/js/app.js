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

const swiperCareers = new Swiper('.careers-swiper__swiper', {

  direction: 'horizontal',
  modules: [Navigation],
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
  spaceBetween: 20,

  wrapperClass: 'careers-swiper__wrapper',
  slideClass: 'careers-swiper__slide',

  navigation: {
    nextEl: '.careers-swiper__next',
    prevEl: '.careers-swiper__prev',
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
let body = document.querySelector('body');

headerBurger.addEventListener('click', function () {
  let headerMenu = document.querySelector('.header__list');

  headerBurger.classList.toggle('burger--active');
  headerMenu.classList.toggle('header__list--active');
  body.classList.toggle('no-scrol');
});

if (document.querySelectorAll('.video__video').length > 0) {
  let videoButton = document.querySelector('.video__button');
  let videoVideo = document.querySelector('.video__video');
  let videoVideoClose = document.querySelector('.video__close');

  videoButton.addEventListener('click', function () {
    videoVideo.classList.toggle('video__video--active');
    body.style.overflow = 'hidden';
  });

  videoVideoClose.addEventListener('click', function () {
    videoVideo.classList.remove('video__video--active');
    videoStopper("videoContainer");
    body.style.overflow = 'visible';
  })

  videoVideo.addEventListener('click', function () {
    videoVideo.classList.remove('video__video--active');
    videoStopper("videoContainer");
    body.style.overflow = 'visible';
  })

  let videoStopper = function (id) {
    let containerElement = document.getElementById(id);
    let iframe_tag = containerElement.querySelector('iframe');
    let video_tag = containerElement.querySelector('video');
    if (iframe_tag) {
      let iframeSrc = iframe_tag.src;
      iframe_tag.src = iframeSrc;
    }
    if (video_tag) {
      video_tag.pause();
    }
  }
}
//dropd


if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  let tarhetHeight = document.querySelector('.header__item-submenu').offsetHeight;
  document.querySelector('.header__item-submenu').style.height = tarhetHeight + 'px';

  function headerDropdawnF(e) {
    let target = e.target.closest('.header__item-submenu');
    let submenu = document.querySelector('.header__submenu');
    let submenuHeight = submenu.offsetHeight;

    if (target) {
      target.classList.toggle('header__item-submenu--active');
      if (target.classList.contains('header__item-submenu--active')) {
        target.style.height = tarhetHeight + submenuHeight + 'px';
      } else {
        target.style.height = tarhetHeight + 'px';
      }
    }
  }

  document.addEventListener('click', headerDropdawnF);
}

if (document.querySelectorAll('.plan__choice').length > 0) {

  let placeholder = document.querySelector('.plan__placeholder');
  let choice = document.querySelector('.plan__choice');

  placeholder.addEventListener('click', function () {
    choice.classList.toggle('plan__choice--active');
  });

  function choiceF(e) {
    let target = e.target.closest('.plan__duration-item');

    if (target) {
      placeholder.innerText = target.innerText;
      choice.classList.remove('plan__choice--active');
    }
  }

  document.addEventListener('click', choiceF);
}


if (document.querySelectorAll('.question').length > 0) {
  function questionAk(e) {
    let target = e.target.closest('.question__title');
    let question = e.target.closest('.question');
    let targetHeight = document.querySelector('.question__title').offsetHeight;
    let content = e.target.closest('.question__wrapper');

    if (target) {
      let qiestiomContentHeight = target.nextElementSibling.clientHeight;
      question.classList.toggle('question--active');

      question.classList.contains('question--active')
        ? question.style.height = targetHeight + qiestiomContentHeight + 'px'
        : question.style.height = targetHeight + 'px';
    } else if (!target && !content) {
      let questions = document.querySelectorAll('.question');
      questions.forEach(item => {
        item.classList.remove('question--active');
        item.style.height = targetHeight + 'px';
      })
    }
  }
  document.addEventListener('click', questionAk);
}

