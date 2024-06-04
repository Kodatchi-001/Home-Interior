//navbar-responsiv
const navbarcontent = document.querySelector('.content-navbar-responsiv');
const navbarcontent_link = document.querySelectorAll('.content-navbar-responsiv a')

function navbar_content_left() {
    navbarcontent.style.marginRight = '-50vw'
    navbarcontent_link.forEach(link => {
        link.addEventListener('click', function () {
            navbarcontent.style.marginRight = '-150vw'
        })
    })
}
function navbar_content_right() {
    navbarcontent.style.marginRight = '-150vw'
}

//card-information
var image_card = document.querySelectorAll('.card-content-page-6 img');
var paragraphe_card = document.querySelectorAll('.card-content-page-6-info p span');

function card_information() {
    const cards = [
        //cards-1
        {src : "Assets/card-1-page-6.png",paragraphe : "Absolutely thrilled with my experience. They were professional, creative, and incredibly talented. My home feels like a work of art now!"},
        {src : "Assets/card-2-page-6.png",paragraphe : "They were fantastic to work with! Their design ideas were fresh and innovative, and they were always willing to accommodate my preferences."},
        //cards-2
        {src : "Assets/card-3-page-6.png",paragraphe : 'The experience was nothing short of exhilarating. The team displayed unparalleled professionalism, infused with creativity and talent.'},
        {src : "Assets/card-4-page-6.png",paragraphe : 'Turning my home into such splendor is the result of a close collaboration with talented artists and designers.'},
        //cards-3
        {src : "Assets/card-5-page-6.png",paragraphe : 'I am deeply grateful for this transformation that has brought my wildest dreams to life. My home is now a sanctuary of beauty and inspiration.'},
        {src : "Assets/card-6-page-6.png",paragraphe : 'Each room now breathes a unique aesthetic that not only mirrors the latest interior design trends but also my personal taste and personality.'},
    ]
    
    image_card.forEach((img,index) => {
       if(cards[index]){
        img.src = cards[index].src;
        paragraphe_card[index].textContent = cards[index].paragraphe
       }
    });
    
}
card_information()
//cards-slides
let currentIndex = 0;
const slides = document.querySelectorAll('.card-page-6');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.cards-page-6').style.transform = `translateX(${offset}%)`;
}
