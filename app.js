let zero = 0;

sliderActive(zero)

function sliderActive(i) {
    zero += i;

    let sliders =  document.getElementsByClassName('feedback-slider');
    let dots = document.getElementsByClassName('dot');

    for(let i = 0; i < sliders.length; i++)
        sliders[i].style.display = 'none';
    
    for(let i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");
    if(zero > sliders.length - 1)
        zero = 0;
    
    if(zero < 0)
        zero = sliders.length - 1;
    
    sliders[zero].style.display = 'block';
    dots[zero].className += " active"
}


const message = document.getElementById("message");
const whatsapp = document.getElementById("whatsapp");
const instagram = document.getElementById("instagram");
const telegram = document.getElementById("telegram")
const messageAll = document.getElementById("message-all");
const messageClose = document.getElementById("message-close");


    message.addEventListener("click", () => {
      whatsapp.classList.toggle("whatsapp-active");
      instagram.classList.toggle("instagram-active");
      telegram.classList.toggle("telegram-active")
      messageClose.classList.toggle("message-close__active");
      messageAll.classList.toggle("message-all__active");
    });


const phone = document.querySelector('.tel')
const tele = document.querySelector('.phone-tele')

phone.addEventListener('click', () => {
    tele.classList.toggle("phone-tele__active")
})
