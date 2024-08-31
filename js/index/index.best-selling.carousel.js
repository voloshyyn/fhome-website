$(document).ready(function() {
    $('.best-selling__products').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
       {
         breakpoint: 990,
        settings: {
            slidesToShow: 2,
            infinite: true
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }
    }
    ]
});
});