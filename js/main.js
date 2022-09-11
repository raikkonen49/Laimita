$(document).foundation();

$(document).ready(function() {

    $(".fancybox").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        },
        beforeShow: function() {
            $(".fancybox-skin").css("backgroundColor", "transparent");
            $(".fancybox-skin").css("padding", "0px");
        }
    });

    $(document).ready(function() {
        $(".owl-carousel").owlCarousel();
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 20,
        nav: false,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            641: {
                items: 2
            },
            1025: {
                items: 3
            },

        }
    });

    var owl2 = $('#recommends-slider, experts-slider');
    $('.recommends-slider-next').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    $('.recommends-slider-prev').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    var owl3 = $('#experts-slider');
    $('.experts-slider-next').click(function() {
        owl3.trigger('next.owl.carousel');
    });

    $('.experts-slider-prev').click(function() {
        owl3.trigger('prev.owl.carousel');
    });


    // Sticky nav

    var $window = $(window);

    $window.scroll(function() {
        $scroll = $window.scrollTop();
        if ($scroll < 0) {
            $scroll = 0;
        }

        if ($scroll > 50) {
            $('.nav-block, .mob-header').stop().addClass('sticky');
        }
        if ($scroll < 50) {
            $('.nav-block, .mob-header').stop().removeClass('sticky');
        }

        if ($scroll > 1) {
            $('.scroll-btn').stop().addClass('sticky');
        }
        if ($scroll < 1) {
            $('.scroll-btn').stop().removeClass('sticky');
        }
    });

    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }

    $(".hamburger").click(function() {
        $(".mob-nav, .mob-header").toggleClass("close");
    });
    // popups

    $(".open-filter span").click(function() {
        $(".search").toggleClass("close");
        $(".open-filter").toggleClass("close");
    });


    // #ScrollToTop

    $("a[href='#top']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });



    // object slider

    var ss = $('#vertical').lightSlider({
        gallery: true,
        item: 1,
        vertical: true,
        verticalHeight: 440,
        vThumbWidth: 155,
        thumbItem: 4,
        thumbMargin: 4,
        slideMargin: 0,
    });

    $('#prevslide').click(function(){
        ss.goToPrevSlide();
    });

    $('#nextslide').click(function(){
        ss.goToNextSlide();
    });


    var modile = $('#modile-slider').lightSlider({
        gallery: true,
        item: 1,
        vertical: false,
        verticalHeight: 440,
        vThumbWidth: 120,
        thumbItem: 5,
        thumbMargin: 4,
        slideMargin: 0,
    });

    $('.object-slider-mobile .lslide div').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.439;
        $(this).css('height', itemH);
    });


    // #href scroll //

    $('.scrolling-mouse a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 700, 'swing', function () {
            window.location.hash = target;
        });
    });


    var slider = document.getElementById('slider-1');

    noUiSlider.create(slider, {
        start: [35, 80],
        connect: true,
        step: 1,
        range: {
            'min': 35,
            'max': 80
        },
        format: {
            to: function(value) {
                return value + '';
            },
            from: function(value) {
                return value.replace('', '');
            }
        }
    });

    var slider = document.getElementById('slider-2');

    noUiSlider.create(slider, {
        start: [35, 80],
        connect: true,
        step: 1,
        range: {
            'min': 35,
            'max': 80
        },
        format: {
            to: function(value) {
                return value + '';
            },
            from: function(value) {
                return value.replace('', '');
            }
        }
    });

    var slider = document.getElementById('slider-3');

    noUiSlider.create(slider, {
        start: [35, 80],
        connect: true,
        step: 1,
        range: {
            'min': 35,
            'max': 80
        },
        format: {
            to: function(value) {
                return value + '';
            },
            from: function(value) {
                return value.replace('', '');
            }
        }
    });

});

$(window).resize(function() {

    $('.object-slider-mobile .lslide div').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.1439;
        $(this).css('height', itemH);
    });

});
