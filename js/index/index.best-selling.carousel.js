$(document).ready(function() {
    $('.best-selling__products').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToscroll: 1,
    responsive: [
       {
         breakpoint: 990,
        setting: {
            slidesToShow: 2,
            infinite: true
        }
    },
    {
        breakpoint: 767,
        setting: {
            slidesToShow: 1
        }
    }
    ]
});
});