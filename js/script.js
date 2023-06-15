jQuery(document).ready(function () {
    $('.testi_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });

    $('.med_pro-wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: "unslick"
            }
        ]
    });

    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });



    $('.faq-collapse-toggler').each(function () {
        var collapseIO = 0;
        $(this).click(function () {
            if (collapseIO == 0) {
                $(this).addClass('active');
                $(this).siblings('.faq-collapse-text').removeClass('collapse');
                collapseIO = 1;
            } else {
                $(this).removeClass('active');
                $(this).siblings('.faq-collapse-text').addClass('collapse');
                collapseIO = 0;
            }
        });
    });
    $('.faq-collapse-text').each(function () {
        var contentHeight = $(this).height();
        $(this).css({
            height: contentHeight,
        });
        setTimeout(function () {
            $('.faq-collapse-text').addClass('collapse');
        }, 300);
    });




    if (window.matchMedia('(min-width: 768px)').matches) {
        var trigger_element = $('.trigger_element');
        var $window = $(window);


        trigger_element.parent().addClass('position-relative');

        function check_trigger() {
            $.each(trigger_element, function () {
                var $element = $(this);
                var distanceToTop = $element.offset().top;
                var scrollValue = window.scrollY;

                var logo = document.getElementById("logoOverlay");

                if (($(window).scrollTop() >= distanceToTop) && ($(window).scrollTop() <= distanceToTop + 37)) {
                    logo.style.height = (scrollValue - distanceToTop) + "px";

                    console.log(trigger_element);

                }

                if ($(window).scrollTop() <= (distanceToTop)) {
                    logo.style.height = 0 + "px";
                }

                if ($(window).scrollTop() >= (distanceToTop + 37)) {
                    logo.style.height = 37 + "px";
                }
            });
        }

        $window.on('scroll resize', check_trigger);
        $window.trigger('scroll');

    }


});





