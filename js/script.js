var mySwiper = new Swiper('.s3_container', {
    loop: true,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination-im',
        type: 'fraction',
        renderFraction: function (currentClass, totalClasss) {
            return '0 <span class="' + currentClass + '"></span>' + ' /0 ' +
                '<span class="' + totalClasss + '"></span>';

        }

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-im',
        prevEl: '.swiper-button-prev-im',
    }
});

var myNewSwiper = new Swiper('.s4_container', {
    freeMode: true,
    loop: true,
    spaceBetween: 25,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next-im',
        prevEl: '.swiper-button-prev-im',
    },
    breakpoints: {
        800: {
            slidesPerView: 2,

        }
    }

});
