//Carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 1, //если луп не включен, то эта настройка поставить центральную карточку на вторую позицию
    item: 3, //три слайда на экране
    responsive: {
        850: {
            startPosition: 1,
            item: 3,
        },
        1000: {
            margin: 20,
            item: 3,
        },
        1200: {
            margin: 30,
        },
    },
});

$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});

//Nav Icon
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
};
