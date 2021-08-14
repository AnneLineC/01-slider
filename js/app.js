const app = {
    currentSlide: 1,
    init: function() {

        console.log(app.currentSlide);

        const sliderRightArrow = document.querySelector('.slider__arrow--right');
        sliderRightArrow.addEventListener('click', app.handleClickRightArrow);

        const sliderLeftArrow = document.querySelector('.slider__arrow--left');
        sliderLeftArrow.addEventListener('click', app.handleClickLeftArrow);


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
            const firstSlide = document.getElementById('slide-' + app.currentSlide);
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
            app.currentSlide = 4;
            console.log(app.currentSlide);
            const firstSlide = document.getElementById('slide-' + app.currentSlide);
            firstSlide.classList.add('slider__slide--active');
        }
    
    },
}

document.addEventListener('DOMContentLoaded', app.init);