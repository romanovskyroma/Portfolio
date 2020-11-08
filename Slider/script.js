let imgBlock = document.getElementById('img');
let radio = document.querySelectorAll('.radio');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let arrUrl = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg'];
let play = document.querySelector('.play');
let stop = document.querySelector('.stop');

let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    if (n < 0) {
        slideIndex = arrUrl.length - 1;
    }

    if (n > arrUrl.length - 1) {
        slideIndex = 0;
    }

    for (let i = 0; i < arrUrl.length; i++) {
        imgBlock.style.backgroundImage = '';
    }

    for (let i = 0; i < radio.length; i++) {
        radio[i].removeAttribute('checked');
    }
    imgBlock.style.backgroundImage = `url(${arrUrl[slideIndex]})`;
    radio[slideIndex].setAttribute('checked', 'true');
}

for (let i = 0; i < radio.length; i++) {
    radio[i].onclick = function () {
        currentSlide(i);
    }
}

left.onclick = function () {
    previousSlide();
}

right.onclick = function () {
    nextSlide();
}

let autoPlay;

play.onclick = function () {
    play.style.display = 'none';
    stop.style.display = 'block';
    autoPlay = setInterval(nextSlide, 1000);
}

stop.onclick = function () {
    stop.style.display = 'none';
    play.style.display = 'block';
    clearInterval(autoPlay);
}