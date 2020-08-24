$(window).on('load scroll', function () {
    // 一定以上スクロールしたらヘッダーの色を変更する
    if ($(window).scrollTop() > $(window).height() / 3) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
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