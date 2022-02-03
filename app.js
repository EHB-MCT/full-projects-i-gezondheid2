/*navbar*/

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const closeLink = document.querySelector('.closeLink');
const closeLink2 = document.querySelector('.closeLink2');
const closeLink3 = document.querySelector('.closeLink3');
const closeLink4 = document.querySelector('.closeLink4');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
closeLink.addEventListener('click', close);
closeLink2.addEventListener('click', close);
closeLink3.addEventListener('click', close);
closeLink4.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}


function close() {
    mainMenu.style.top = '-200vh'

}


/*carousel*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}