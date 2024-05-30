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