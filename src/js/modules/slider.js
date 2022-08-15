function slider() {
    new Swiper('.image-slider', {
        // Стрелки
        navigation: {
            nextEl: '.image-slider__button-next',
            prevEl: '.image-slider__button-prev'
        },
    
        // Прогрессбар - буллеты
        // pagination: {
        //     el: '.swiper-pagination'
        // },

        // autoplay: {
        //     delay: '1000'
        // },
        loop: true,
        slidesPerView: 4,
    });
}

export default slider;
