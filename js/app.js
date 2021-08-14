const app = {
    currentSlide: 1,
    nbSlides: 0,
    init: function() {

        console.log(app.currentSlide);

        const sliderRightArrow = document.querySelector('.slider__arrow--right');
        sliderRightArrow.addEventListener('click', app.handleClickRightArrow);

        const sliderLeftArrow = document.querySelector('.slider__arrow--left');
        sliderLeftArrow.addEventListener('click', app.handleClickLeftArrow);

        app.addDataNumbers();

        const sliderDots = document.querySelectorAll('.slider__dot');
        for (const sliderDot of sliderDots) {
            sliderDot.addEventListener('click', app.handleClickDots);
        }

    },

    addDataNumbers: function() {
        const sliderSlides = document.querySelectorAll('.slider__slide');
        for(let i = 0; i < sliderSlides.length; i++) {
            sliderSlides[i].dataset.slideNumber = i + 1;
        }

        const sliderDots = document.querySelectorAll('.slider__dot');
        for(let i = 0; i < sliderDots.length; i++) {
            sliderDots[i].dataset.dotNumber = i + 1;
        }
    },

    handleClickRightArrow: function() {
        app.currentSlide++;
        
        const nbSlides = document.querySelectorAll('.slider__slide').length;
        console.log(app.currentSlide + ' sur ' + nbSlides);
    
        const activeSlide = document.querySelector('.slider__slide--active');
        activeSlide.classList.remove('slider__slide--active');
    
        if (app.currentSlide <= nbSlides) {
            const nextActiveSlide = activeSlide.nextElementSibling;
            nextActiveSlide.classList.add('slider__slide--active');
        } else {
            app.currentSlide = 1;
            console.log(app.currentSlide);
            const firstSlide = document.querySelector('div[data-slide-number="' + app.currentSlide + '"');
            firstSlide.classList.add('slider__slide--active');
        }
    },

    handleClickLeftArrow: function() {
        app.currentSlide--;
    
        const nbSlides = document.querySelectorAll('.slider__slide').length;
        console.log(app.currentSlide + ' sur ' + nbSlides);
    
        const activeSlide = document.querySelector('.slider__slide--active');
        activeSlide.classList.remove('slider__slide--active');
    
        if (app.currentSlide >= 1) {
            const nextActiveSlide = activeSlide.previousElementSibling;
            nextActiveSlide.classList.add('slider__slide--active');
        } else {
            app.currentSlide = nbSlides;
            console.log(app.currentSlide);
            const lastSlide = document.querySelector('div[data-slide-number="' + app.currentSlide + '"');
            lastSlide.classList.add('slider__slide--active');
        }
    
    },

    handleClickDots: function(event) {
        const dotDataNumber = event.target.dataset.dotNumber;
        console.log(dotDataNumber);

        app.currentSlide = dotDataNumber;

        const activeSlide = document.querySelector('.slider__slide--active');
        activeSlide.classList.remove('slider__slide--active');

        const currentSlide = document.querySelector('div[data-slide-number="' + app.currentSlide + '"');
        console.log(currentSlide);
        currentSlide.classList.add('slider__slide--active');

    }
}

document.addEventListener('DOMContentLoaded', app.init);