let zero = 0

sliderActive(zero)

function sliderActive(i) {
  zero += i

  let sliders = document.getElementsByClassName('feedback-slider')
  let dots = document.getElementsByClassName('feedback-dot')

  for (let i = 0; i < sliders.length; i++) sliders[i].style.display = 'none'

  for (let i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(' active', '')
  if (zero > sliders.length - 1) zero = 0

  if (zero < 0) zero = sliders.length - 1

  sliders[zero].style.display = 'block'
  dots[zero].className += ' active'
}

sliderEquipment(zero)

function sliderEquipment(i) {
  zero += i

  let sliders = document.getElementsByClassName('equipment-slider')
  let dots = document.getElementsByClassName('equipment-dot')

  for (let i = 0; i < sliders.length; i++) sliders[i].style.display = 'none'

  for (let i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(' active', '')
  if (zero > sliders.length - 1) zero = 0

  if (zero < 0) zero = sliders.length - 1

  sliders[zero].style.display = 'block'
  dots[zero].className += ' active'
}

const message = document.getElementById('message')
const whatsapp = document.getElementById('whatsapp')
const instagram = document.getElementById('instagram')
const telegram = document.getElementById('telegram')
const messageAll = document.getElementById('message-all')
const messageClose = document.getElementById('message-close')

message.addEventListener('click', () => {
  whatsapp.classList.toggle('whatsapp-active')
  instagram.classList.toggle('instagram-active')
  telegram.classList.toggle('telegram-active')
  messageClose.classList.toggle('message-close__active')
  messageAll.classList.toggle('message-all__active')
})

const phone = document.querySelector('.tel')
const tele = document.querySelector('.phone-tele')

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
