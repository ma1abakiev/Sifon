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
