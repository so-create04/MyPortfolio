// slick-init.js

$(document).ready(function(){
    $('.slick-slider').slick({
        centerMode: true,
        centerPadding: '60px', // Adjust as needed
        slidesToShow: 3, // Number of slides to show
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });
});