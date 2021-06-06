const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const menuNav = document.querySelector('.menu-nav').children;



burger.addEventListener('click', headerToggle);

function headerToggle(e) {
    line2.classList.toggle('line-none')
    line1.classList.toggle('line-rotate-left')
    line3.classList.toggle('line-rotate-right')
    menu.classList.toggle('active-clip-path')
    body.classList.toggle('hidden')
}

for (let item of menuNav) {
    item.addEventListener('click', showPage)
}


function showPage() {
    line2.classList.remove('line-none')
    line1.classList.remove('line-rotate-left')
    line3.classList.remove('line-rotate-right')
    menu.classList.remove('active-clip-path')
    body.classList.remove('hidden')
}

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
    });

})
