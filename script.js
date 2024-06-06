//navbar-responsiv
var log_navbar = document.querySelector('.header-content-1');
var icone_navbar = document.querySelector('.icon-navbar-responsiv');
var header =  document.querySelector('header')
function navbar_top(icone) {
    if(header.style.height == '50vh'){
        header.style.height = '';
        log_navbar.style.height = '';
        icone.parentNode.parentNode.style.height = ''
    }
    else{
        header.style.height = '50vh';
        log_navbar.style.height = '20%';
        icone.parentNode.parentNode.style.height = '20%'
        navbarcontent_link()
    }
}

function navbarcontent_link() {
    const navbarcontent_link = document.querySelectorAll('.content-navbar-responsiv a')
    navbarcontent_link.forEach(element => {
        element.addEventListener('click', function () {
            header.style.height = '9vh'
            log_navbar.style.height = '';
            icone_navbar.style.height = ''
        })
    });
}

//card-information
var image_card = document.querySelectorAll('.card-content-page-6 img');
var paragraphe_card = document.querySelectorAll('.card-content-page-6-info p span');

function card_information() {
    const cards = [
        //cards-1
        { src: "Assets/card-1-page-6.png", paragraphe: "Absolutely thrilled with my experience. They were professional, creative, and incredibly talented. My home feels like a work of art now!" },
        { src: "Assets/card-2-page-6.png", paragraphe: "They were fantastic to work with! Their design ideas were fresh and innovative, and they were always willing to accommodate my preferences." },
        //cards-2
        { src: "Assets/card-3-page-6.png", paragraphe: 'The experience was nothing short of exhilarating. The team displayed unparalleled professionalism, infused with creativity and talent.' },
        { src: "Assets/card-4-page-6.png", paragraphe: 'Turning my home into such splendor is the result of a close collaboration with talented artists and designers.' },
        //cards-3
        { src: "Assets/card-5-page-6.png", paragraphe: 'I am deeply grateful for this transformation that has brought my wildest dreams to life. My home is now a sanctuary of beauty and inspiration.' },
        { src: "Assets/card-6-page-6.png", paragraphe: 'Each room now breathes a unique aesthetic that not only mirrors the latest interior design trends but also my personal taste and personality.' },
    ]

    image_card.forEach((img, index) => {
        if (cards[index]) {
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
//cards-question
function cards_question() {
    var all_cards = document.querySelectorAll('.card-content-page-7');
    var size = '30%';
    var height = '50%';
    var currentElement = null;

    all_cards.forEach(function (element) {
        element.addEventListener('click', function () {
            var icon = this.querySelector('.bx-chevron-down');
            var tittles = this.querySelector(".card-content-quetion-page-7")

            if (currentElement && currentElement !== this) {
                currentElement.style.height = '';
                currentElement.style.alignItems = '';
                var currentIcon = currentElement.querySelector('.bx-chevron-down');
                var currentTitles = currentElement.querySelector(".card-content-quetion-page-7");
                currentIcon.style.transform = '';
                currentIcon.style.color = '';
                currentTitles.style.height = '';
            }
            if (this.style.height == size) {
                this.style.height = '';
                this.style.alignItems = ''
                icon.style.transform = '';
                icon.style.color = '';
                tittles.style.height = '';
            } else {
                if (currentElement) {
                    currentElement.style.height = '';
                    currentElement.alignItems = ''
                    tittles.style.height = '';
                    currentElement.querySelector('.bx-chevron-down').style.transform = '';
                    icon.style.color = ''
                }
                this.style.height = size;
                this.style.alignItems = 'start'

                icon.style.transform = 'rotate(180deg)';
                icon.style.color = 'black';

                tittles.style.height = height;
                currentElement = this;
            }
        });
    });
}
cards_question();
