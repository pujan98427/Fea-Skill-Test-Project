jQuery(document).ready(function ($) {
    /* Desktop Navigation
    --------------------------------------------- */
    $('.menu-item-has-children').append('<button class="submenu-toggle-btn"><i class="fas fa-caret-down"></i></button>');

    $('.submenu-toggle-btn').on('click', function () {
        $(this).siblings('.sub-menu').stop().slideToggle();
        $(this).toggleClass('active');
    });


    /* Mobile Navigation
    --------------------------------------------- */
    $('.site-header  .header-bottom-slide-inner ').css("top", 0);

    $('.site-header .mobile-header .toggle-btn-wrap .toggle-btn').click(function () {
        $('body').addClass('mobile-menu-active');
        $('.site-header .mobile-header .header-bottom-slide-inner ').css("transform", "translate(0,0)");
    });
    $('.site-header .mobile-header .header-bottom-slide-inner .mobile-header-wrapper  .close-btn').click(function () {
        $('body').removeClass('mobile-menu-active');
        $('.site-header .mobile-header .header-bottom-slide-inner ').css("transform", "translate(-100%,0)");
    });


    // AOS animation
    AOS.init({
        // once: true,
    });


    // scroll slider

    const slider = document.querySelector('.beneficiaries .beneficiaries-grid');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

});


