const message = document.getElementById('message')
const whatsapp = document.getElementById('whatsapp')
const telegram = document.getElementById('telegram')
const messageAll = document.getElementById('message-all')
const messageClose = document.getElementById('message-close')
const phone = document.querySelector('.tel')
const tele = document.querySelector('.phone-tele')

message.addEventListener('click', () => {
  whatsapp.classList.toggle('whatsapp-active')
  telegram.classList.toggle('telegram-active')
  messageClose.classList.toggle('message-close__active')
  messageAll.classList.toggle('message-all__active')
})

phone.addEventListener('click', () => {
  tele.classList.toggle('phone-tele__active')
})

// Ma1abakiev code

window.addEventListener('scroll', () => {
  let scrollPos = window.pageYOffset
  let pos = document.getElementById('intro').scrollHeight
  if (scrollPos > pos - 80)
    document.querySelector('.header').classList.add('active')
  else document.querySelector('.header').classList.remove('active')
})

const headerLinks = document.querySelectorAll('.header__link')
for (let i = 0; i < headerLinks.length; i++) {
  headerLinks[i].addEventListener('click', function () {
    document
      .getElementById(this.dataset.scroll)
      .scrollIntoView({ behavior: 'smooth' })
  })
}

document
  .querySelector('.header__burger')
  .addEventListener('click', function () {
    this.classList.toggle('header__burger_active')
    document.querySelector('.header').classList.toggle('header__active')
    console.log('hello')
    document
      .querySelector('.header__nav')
      .classList.toggle('header__nav_active')
  })

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

var swiper = new Swiper('.reviews-slider', {
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 3,
    },
  },
})

var swiper = new Swiper('.equipment-slider', {
  grabCursor: true,
  spaceBetween: 40,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
  },
})
