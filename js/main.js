$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1, //если луп не включен, то эта настройка поставить центральную карточку на вторую позицию
        item: 3, //три слайда на экране
    });
});
