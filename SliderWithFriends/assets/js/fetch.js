// 'use strict';

const slide = document.querySelector('#slide'),
    current = document.querySelector('#current'),
    lengthSlide = document.querySelector('#length'),
    slideContainer = document.querySelector('.slide__container'),
    prev = document.querySelector('.fa-chevron-left'),
    next = document.querySelector('.fa-chevron-right'),
    width = window.getComputedStyle(slide).width,
    dotArr = [],
    slidesArr = [],
    imgArr = [];


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


fetch('./db.json')
    .then(data => data.json())
    .then(sliderData => {
        sliderData.slider.forEach((data, i) => {
            const slides = document.createElement('div'),
                img = document.createElement('img');
            slides.classList.add('slide__item');
            img.setAttribute('src', `assets/img/${data.img}`)

            slides.appendChild(img);
            slideContainer.appendChild(slides);

            slide.style.overflow = 'hidden';
            slideContainer.style.width = 100 * slidesArr.length + '%';
            slideContainer.style.display = 'flex';
            slideContainer.style.transition = 'all 0.4s ';
            slidesArr.push(slides);
            imgArr.push(img);

            imgArr.forEach(img => {
                img.style.width = width;
            })


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
            navigator.append(navigatorInner);
            slide.append(navigator);
            console.log(dot);

            let offset = 0;
            let slideIndex = 1;
            console.log(offset);
            currentSlide()
            slideLength()

            function slideLength() {
                if (slidesArr.length < 10) {
                    lengthSlide.textContent = `0${slidesArr.length}`;
                } else {
                    lengthSlide.textContent = slidesArr.length;

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
                    offset = ~~width.slice(0, width.length - 2) * (slidesArr.length - 1);
                    slideIndex = slidesArr.length;

                } else {
                    offset -= ~~width.slice(0, width.length - 2);
                    slideIndex--;
                }


                slideContainer.style.transform = `translateX(-${offset}px)`;
                currentSlide();
                currentDot()
            })

            next.addEventListener('click', () => {

                if (offset == ~~width.slice(0, width.length - 2) * (slidesArr.length - 1)) {
                    offset = 0;
                    slideIndex = 1;
                } else {
                    offset += ~~width.slice(0, width.length - 2);
                    slideIndex++;
                }
                slideContainer.style.transform = `translateX(-${offset}px)`;
                currentSlide()
                currentDot()

            });


            dotArr.forEach(dot => {
                dot.addEventListener('click', e => {
                    const dotId = e.target.getAttribute('data-id');
                    slideIndex = dotId;

                    offset = ~~width.slice(0, width.length - 2) * (slideIndex - 1)
                    slideContainer.style.transform = `translateX(-${offset}px)`;
                    currentDot()
                    currentSlide()
                })
            });
        })


    })