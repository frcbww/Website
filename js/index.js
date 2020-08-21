const isIE = (window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1
    || window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1);

$(window).on('load scroll', function () {
    let scroll = $(document).scrollTop();

    // 一定以上スクロールしたらヘッダーの色を変更する
    if ($(window).scrollTop() > $(window).height() / 3) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
    }

    // 背景画像をスクロールする
    if (!isIE) {
        $('.content-bg').stop(true, true).animate({
            'background-position-y': scroll / 3 - 500 + 'px'
        }, 100);
    }
});

$(window).on('load resize', function () {
    // スマートフォン・タブレットの判別
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0
        && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        const heightSize = $(window).height();
        $('.top-section').height(heightSize);
        $('.top-video').height(heightSize);
        $('.top-text').css({
            'transform': `translateY(calc(56px - ${heightSize / 10}%))`,
            '-webkit-transform': `translateY(calc(56px - ${heightSize / 10}%))`
        });
    }
});

$(function () {
    // ハンバーガーメニューのON・OFF切り替え
    $('.hamburger-menu').on('click', function () {
        const trigger = $('#hm-menu-trigger');
        trigger.toggleClass('active');

        const isOpen = trigger.hasClass('active')
        const rightVal = (isOpen) ? 0 : -325

        $('header nav').stop().animate({
            right: rightVal
        }, 200, "easeOutQuad");
    });
});