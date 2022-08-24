function slider() {
 try {
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
        breakpoints: {
            320: {
                slidesPerView: 1
            },

            480: {
                slidesPerView: 2
            },

            668: {
                slidesPerView: 3
            },

            992: {
                slidesPerView: 4
            }
        }
    });
 } catch {}
}

export default slider;
