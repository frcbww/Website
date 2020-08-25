$(window).on('load scroll', function () {
    // 一定以上スクロールしたらヘッダーの色を変更する
    if ($(window).scrollTop() > $(window).height() / 3) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
    }
});

$(function () {
    const trigger = $('#hm-menu-trigger');
    // ハンバーガーメニューのクリックリスナー
    $('.hamburger-menu').on('click', function () {
        hamburger_menu_toggle();
    });

    // ハンバーガーメニューの領域外クリック時にOFF切り替え
    $(document).on('click', function (e) {
        if (trigger.hasClass('active') && !$(e.target).closest('header').length) {
            hamburger_menu_toggle();
        }
    });

    // ハンバーガーメニューのON・OFF切り替え
    function hamburger_menu_toggle() {
        trigger.toggleClass('active');
        const rightVal = (trigger.hasClass('active')) ? 0 : -325;
        $('header nav').stop().animate({
            right: rightVal
        }, 200, "easeOutQuad");
    }
});