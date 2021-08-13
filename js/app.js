const sliderRightArrow = document.querySelector('.slider__arrow--right');
sliderRightArrow.addEventListener('click', handleClickRightArrow);


function handleClickRightArrow() {

    const activeSlide = document.querySelector('.slider__slide--active');
    const nextActiveSlide = activeSlide.nextElementSibling;
    activeSlide.classList.remove('slider__slide--active');
    nextActiveSlide.classList.add('slider__slide--active');
    console.log(activeSlide);
    console.log(nextActiveSlide);


    // const slides = document.querySelectorAll('.slider__slide');
    // // console.log(slides);
    // for (const slide of slides) {
    //     slide.classList.remove('slider__slide--active');
    //     // console.log(slide);
    // }


}