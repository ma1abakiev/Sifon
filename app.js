const message = document.getElementById('message')
const whatsapp = document.getElementById('whatsapp')
const instagram = document.getElementById('instagram')
const telegram = document.getElementById('telegram')
const messageAll = document.getElementById('message-all')
const messageClose = document.getElementById('message-close')
const phone = document.querySelector('.tel')
const tele = document.querySelector('.phone-tele')

message.addEventListener('click', () => {
  whatsapp.classList.toggle('whatsapp-active')
  instagram.classList.toggle('instagram-active')
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




// ща постой я слайдер сделаю 

const slider = document.querySelector('.feedback-wrapper'),
  slides = Array.from(document.querySelectorAll('.feedback-slider'))


let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('.feedback-content')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)


  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})




function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false


  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}


function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -1350
  prevTranslate = currentTranslate
  setSliderPosition()
}



setInterval(function() {
  currentIndex = (currentIndex + 1) % slides.length;
  setPositionByIndex();
}, 5000);













//equipment -slider
const equipmentSlider = document.querySelector('.equipment-content'),
 equipmentSlides = Array.from(document.querySelectorAll('.equipment-slider'))


let equipmentDragging = false,
  equipmentStartPos = 0,
  equipmentCurrentTranslate = 0,
  equipmentPrevTranslate = 0,
  equipmentCurrentIndex = 0

  equipmentSlides.forEach((slide, index) => {
  const equipmentSlideImage = slide.querySelector('.equipment-inner')
  equipmentSlideImage.addEventListener('dragstart', (e) => e.preventDefault())

  slide.addEventListener('touchstart', eTouchStart(index))
  slide.addEventListener('touchend', eTouchEnd)
  slide.addEventListener('touchmove', eTouchMove)


  slide.addEventListener('mousedown',eTouchStart(index))
  slide.addEventListener('mouseup', eTouchEnd)
  slide.addEventListener('mouseleave', eTouchEnd)
  slide.addEventListener('mousemove', eTouchMove)
})



function eTouchStart(index) {
  return function (event) {
    equipmentCurrentIndex = index
    equipmentStartPos = PositionX(event)
    equipmentDragging = true
    equipmentSlider.classList.add('grabbing')
  }
}

function eTouchEnd() {
  equipmentDragging = false


  const movedBy =  equipmentCurrentTranslate - equipmentPrevTranslate

  if (movedBy < -100 &&  equipmentCurrentIndex < equipmentSlides.length - 1)  equipmentCurrentIndex += 1

  if (movedBy > 100 &&  equipmentCurrentIndex > 0)  equipmentCurrentIndex -= 1

  PositionByIndex()

  equipmentSlider.classList.remove('grabbing')
}

function eTouchMove(event) {
  if (equipmentDragging) {
    const currentPosition = PositionX(event)
    equipmentCurrentTranslate = equipmentPrevTranslate + currentPosition - equipmentStartPos
  }
}

function PositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}


function SliderPosition() {
  equipmentSlider.style.transform = `translateX(${equipmentCurrentTranslate}px)`
}

function PositionByIndex() {
  equipmentCurrentTranslate =  equipmentCurrentIndex * -1350
  equipmentPrevTranslate =  equipmentCurrentTranslate
  SliderPosition()
}


setInterval(function() {
  equipmentCurrentIndex = ( equipmentCurrentIndex + 1) % equipmentSlides.length;
  PositionByIndex();
}, 7000);