jQuery(document).ready(function ($) {

    let sliderWrapper = $('.fno-customer-story__slider-wrapper');
    let autoplay = sliderWrapper.data('autoplay');
    let pauseonHover = sliderWrapper.data('pause-on-hover');
    let autoPlaySpeed = sliderWrapper.data('autoplay-speed');

    $('.fno-customer-story__slider-wrapper').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnHover: pauseonHover ? true : false,
        autoplay: autoplay ? true : false,
        autoplaySpeed: autoPlaySpeed,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'ease-in-out',
        appendDots: $('.fno-customer-story__slider-wrapper'),
    });


    // Update slide numbers dynamically
    $('.fno-customer-story__slider-wrapper').on('afterChange', function (event, slick, currentSlide) {
        // Update the current slide number
        let currentSlideNumber = currentSlide + 1;
        $('.fno-customer-story__slider-counting .current-slide').text(('0' + currentSlideNumber).slice(-2));
    });

    // Set the total number of slides
    let totalSlides = $('.fno-customer-story__slider-wrapper').slick('getSlick').slideCount;
    $('.fno-customer-story__slider-counting .total-slides').text(('0' + totalSlides).slice(-2));




    // Application Slider.
    // Select the main container
    let mainContainer = $('.fno-application-slider');

    // Retrieve data attributes from the main container
    let autoPlay = mainContainer.data('auto-play');
    let pauseOnHover = mainContainer.data('pause-on-hover');
    let slideSpeed = mainContainer.data('slide-speed');
    let autoplaySpeed = mainContainer.data('auto-play-speed');
    let showArrows = mainContainer.data('show-arrows');
    let showDots = mainContainer.data('show-dots');

    // Initialize the slider with responsive settings
    let slider = $('.fno-application-slider__cards-wrapper').slick({
        infinite: true,
        speed: slideSpeed,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: autoPlay,
        autoplaySpeed: autoplaySpeed,
        pauseOnHover: pauseOnHover,
        arrows: showArrows,
        dots: false,
        variableWidth: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    dots: showDots,
                }
            }
        ]
    });

    // Update slide numbers dynamically
    slider.on('afterChange', function (event, slick, currentSlide) {
        // Update the current slide number
        let currentSlideNumber = currentSlide + 1;
        $('.fno-application-slider__slider-counting .current-slide').text(('0' + currentSlideNumber).slice(-2));
    });

    // Set the total number of slides
    let totalApplicationSlides = slider.slick('getSlick').slideCount;
    $('.fno-application-slider__slider-counting .total-slides').text(('0' + totalApplicationSlides).slice(-2));


});