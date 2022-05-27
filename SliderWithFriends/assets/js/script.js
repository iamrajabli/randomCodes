'use strict';

const slide = document.querySelector('#slide'),
    current = document.querySelector('#current'),
    lengthSlide = document.querySelector('#length'),
    slideContainer = document.querySelector('.slide__container'),
    prev = document.querySelector('.fa-chevron-left'),
    next = document.querySelector('.fa-chevron-right'),
    slides = document.querySelectorAll('.slide__item'),
    width = window.getComputedStyle(slide).width,
    dotArr = [];

slide.style.overflow = 'hidden';
slideContainer.style.width = 100 * slides.length + '%';
slideContainer.style.display = 'flex';
slideContainer.style.transition = 'all 0.4s ';

const navigator = document.createElement('div');
const navigatorInner = document.createElement('ol');
navigator.style.cssText = `
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
navigatorInner.style.cssText = `
    display: flex;
    gap: 20px;
`;

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li')
    dot.style.cssText = `
        width: 60px;
        height: 20px;
        background-color: rgba(255, 255, 255);
        opacity: .4;
        cursor: pointer;
    `;
    dot.setAttribute('data-id', i + 1);
    navigatorInner.append(dot);
    dotArr.push(dot);
    if (i == 0) {
        dot.style.opacity = '.8'
    }
}

navigator.append(navigatorInner);
slide.append(navigator);


let offset = 0;
let slideIndex = 1;

currentSlide()
slideLength()

function slideLength() {
    if (slides.length < 10) {
        lengthSlide.textContent = `0${slides.length}`;
    } else {
        lengthSlide.textContent = slides.length;

    }
}

function currentSlide() {
    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

function currentDot() {
    dotArr.forEach(dot => dot.style.opacity = '.4');
    dotArr[slideIndex - 1].style.opacity = '.7';
}

prev.addEventListener('click', () => {

    if (offset == 0) {
        offset = ~~width.slice(0, width.length - 2) * (slides.length - 1);
        slideIndex = slides.length;

    } else {
        offset -= ~~width.slice(0, width.length - 2);
        slideIndex--;
    }


    slideContainer.style.transform = `translateX(-${offset}px)`;
    currentSlide();
    currentDot()
    setSS(slideIndex);
})

next.addEventListener('click', () => {

    if (offset == ~~width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
        slideIndex = 1;
    } else {
        offset += ~~width.slice(0, width.length - 2);
        slideIndex++;
    }

    slideContainer.style.transform = `translateX(-${offset}px)`;
    currentSlide()
    currentDot()
    setSS(slideIndex);

});


dotArr.forEach(dot => {
    dot.addEventListener('click', e => {
        const dotId = e.target.getAttribute('data-id');
        slideIndex = dotId;

        offset = ~~width.slice(0, width.length - 2) * (slideIndex - 1)
        slideContainer.style.transform = `translateX(-${offset}px)`;
        currentDot()
        currentSlide()
        setSS(slideIndex);
    })
});