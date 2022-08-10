$(document).ready(function(){
    $('.section__i-pages-slick-list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow:
        `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
        nextArrow:
        `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 739,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]

    });
  });