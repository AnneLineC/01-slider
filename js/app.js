const app = {
    currentSlide: 1,
    nbSlides: 0,
    timer: 500,
    sliderScrollingOn: '',
    init: function() {

        const sliderRightArrow = document.querySelector('.slider__arrow--right');
        sliderRightArrow.addEventListener('click', app.handleClickRightArrow);

        const sliderLeftArrow = document.querySelector('.slider__arrow--left');
        sliderLeftArrow.addEventListener('click', app.handleClickLeftArrow);

        app.nbSlides = document.querySelectorAll('.slider__slide').length;

        app.addDataNumbers();

        const sliderDots = document.querySelectorAll('.slider__dot');
        for (const sliderDot of sliderDots) {
            sliderDot.addEventListener('click', app.handleClickDots);
        }

        const playButton = document.querySelector('#button-play');
        playButton.addEventListener('click', app.sliderPlayScrolling);

        const pauseButton = document.querySelector('#button-pause');
        pauseButton.addEventListener('click', app.sliderPauseScrolling);

        app.writeSlideNumberInHTML();

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

    sliderPlayScrolling: function(event) {
        app.handleClickRightArrow();
        app.sliderScrollingOn = setInterval(app.handleClickRightArrow, 3000);
        const buttonPlay = event.target;
        buttonPlay.classList.add('hidden');
        const buttonPause = document.getElementById('button-pause');
        buttonPause.classList.remove('hidden');
    },

    sliderPauseScrolling: function(event) {
        clearInterval(app.sliderScrollingOn);
        const buttonPause = event.target;
        buttonPause.classList.add('hidden');
        const buttonPlay = document.getElementById('button-play');
        buttonPlay.classList.remove('hidden');
    },

    handleClickRightArrow: function() {
        app.currentSlide++;
        // console.log(app.currentSlide + ' sur ' + app.nbSlides);
    
        const activeSlide = document.querySelector('.slider__slide--active');
        activeSlide.classList.add('fade-out');
        setTimeout(function() {activeSlide.classList.remove('slider__slide--active', 'fade-in', 'fade-out')}, app.timer);

        if (app.currentSlide <= app.nbSlides) {
            const nextActiveSlide = activeSlide.nextElementSibling;
            setTimeout(function() {nextActiveSlide.classList.add('slider__slide--active', 'fade-in')}, app.timer);
            app.writeSlideNumberInHTML();
            app.updateCurrentDotsHTML();
        } else {
            app.currentSlide = 1;
            // console.log(app.currentSlide);
            const firstSlide = document.querySelector('div[data-slide-number="' + app.currentSlide + '"]');
            setTimeout(function() {firstSlide.classList.add('slider__slide--active', 'fade-in')}, app.timer);
            app.writeSlideNumberInHTML();
            app.updateCurrentDotsHTML();
        }
    },

    handleClickLeftArrow: function() {
        app.currentSlide--;
        // console.log(app.currentSlide + ' sur ' + app.nbSlides);
    
        const activeSlide = document.querySelector('.slider__slide--active');
        activeSlide.classList.add('fade-out');
        setTimeout(function() {activeSlide.classList.remove('slider__slide--active', 'fade-in', 'fade-out')}, app.timer);
    
        if (app.currentSlide >= 1) {
            const nextActiveSlide = activeSlide.previousElementSibling;
            setTimeout(function() {nextActiveSlide.classList.add('slider__slide--active', 'fade-in')}, app.timer);
        } else {
            app.currentSlide = app.nbSlides;
            // console.log(app.currentSlide);
            const lastSlide = document.querySelector('div[data-slide-number="' + app.currentSlide + '"]');
            setTimeout(function() {lastSlide.classList.add('slider__slide--active', 'fade-in')}, app.timer);
        }

        app.writeSlideNumberInHTML();
        app.updateCurrentDotsHTML();
    
    },

    handleClickDots: function(event) {
        const dotDataNumber = event.target.dataset.dotNumber;
        // console.log(dotDataNumber);

        app.currentSlide = dotDataNumber;

        const activeSlide = document.querySelector('.slider__slide--active');
        activeSlide.classList.add('fade-out');
        setTimeout(function() {activeSlide.classList.remove('slider__slide--active', 'fade-in', 'fade-out')}, app.timer);

        const currentSlide = document.querySelector('div[data-slide-number="' + app.currentSlide + '"');
        setTimeout(function() {currentSlide.classList.add('slider__slide--active', 'fade-in')}, app.timer);

        app.writeSlideNumberInHTML();
        app.updateCurrentDotsHTML();

    },

    updateCurrentDotsHTML: function() {
        const activeDot = document.querySelector('.slider__dot--active');
        activeDot.classList.remove('slider__dot--active');
        const currentDot = document.querySelector('button[data-dot-number="' + app.currentSlide + '"');
        currentDot.classList.add('slider__dot--active');
    },

    writeSlideNumberInHTML: function() {
        const elementSlideNumberText = document.querySelector('#slide-number');
        elementSlideNumberText.innerText = app.currentSlide + ' / ' + app.nbSlides;
    }
}

document.addEventListener('DOMContentLoaded', app.init);