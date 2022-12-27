(function ($) {
    "use strict";
    $(document).ready(function ($) {


        $(".review-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            dots: false,
            nav: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
        });


        // off-canvas-menu
        $(".menu-trigger").on("click", function () {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close, .off-canvas-overlay").on("click", function () {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");

        });

        // magnific-popup
        $(".video-play-btn").magnificPopup({
            type: 'video'
        });


        // scroll-top
        var btn = $('.scroll-top');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });



    });


    $(window).on('load', function () {});
}(jQuery));