jQuery(document).ready(function ($) {
    /* Desktop Navigation
    --------------------------------------------- */
    $('.menu-item-has-children').append('<button class="submenu-toggle-btn"><i class="fas fa-caret-down"></i></button>');
    $('.site-header .secondary-nav >div').prepend('<button class="close-btn"></button>');
    $('.submenu-toggle-btn').on('click', function () {
        $(this).siblings('.sub-menu').stop().slideToggle();
        $(this).toggleClass('active');
    });

    $('.header-main .toggle-btn').on('click', function () {
        $(this).siblings('.main-navigation').animate({
            width: 'toggle'
        });
    });
    $('.main-navigation .close-btn').on('click', function () {
        $('.main-navigation').animate({
            width: 'toggle'
        });
    });

    /* Mobile Navigation
    --------------------------------------------- */

    var adminbarHeight = $('#wpadminbar').outerHeight();
    if (adminbarHeight) {
        $('.site-header .mobile-header .header-bottom-slide .header-bottom-slide-inner ').css("top", adminbarHeight);
    } else {
        $('.site-header .mobile-header .header-bottom-slide .header-bottom-slide-inner ').css("top", 0);
    }

    $('.sticky-header .toggle-btn,.site-header .mobile-header .toggle-btn-wrap .toggle-btn').click(function () {
        $('body').addClass('mobile-menu-active');
        $('.site-header .mobile-header .header-bottom-slide .header-bottom-slide-inner ').css("transform", "translate(0,0)");
    });
    $('.site-header .mobile-header .header-bottom-slide .header-bottom-slide-inner .container .mobile-header-wrapper  .close-btn').click(function () {
        $('body').removeClass('mobile-menu-active');
        $('.site-header .mobile-header .header-bottom-slide .header-bottom-slide-inner ').css("transform", "translate(-100%,0)");
    });


    /* article share mobile toggle
    --------------------------------------------- */

    $('.single .content-area article .article-meta .post-share .post-share-title ').on('click', function () {
        $('.single.single-post .content-area .site-main > article .article-meta .post-share .social-networks').slideToggle();
    });
    /* secondary Navigation
    --------------------------------------------- */

    $('.site-header .secondary-nav .toggle-btn, .secondary-nav .close-btn').on('click', function () {
        if ($('#wpadminbar').length) {
            $('.site-header .secondary-nav > div').animate({
                width: 'toggle',
                'top': adminbarHeight
            });
        } else {
            $('.site-header .secondary-nav > div').animate({
                width: 'toggle'
            });
        }

    });






});


