const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 3000,
    ride: 'carousel',
    pause: false,
    keyboard: false
})