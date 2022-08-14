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



// Return to top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 600px
        $('#return-to-top').fadeIn(100);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(300);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0,                       // Scroll to top of body
    }, 0);
  });