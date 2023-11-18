//Carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 0, //если луп не включен, то эта настройка поставит центральную карточку на вторую позицию
    items: 1, //один слайд на смартфонах
    responsive: {
        540: {
            items: 3,
            startPosition: 1,
        },
        850: {
            items: 3,
            startPosition: 1,
        },
        1200: {
            items: 3,
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
