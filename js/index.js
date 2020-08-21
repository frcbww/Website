const isIE = (window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1
    || window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1);

$(window).on('scroll', function () {
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


$(function () {
    $('#hm-menu-trigger').on('click', function () {
        $(this).toggleClass('active');

        const isOpen = $(this).hasClass('active')
        const rightVal = (isOpen) ? 0 : -330

        $('header nav').stop().animate({
            right: rightVal
        }, 200, "easeOutQuad");

        // $('main').stop().animate({
        //     right: rightVal + 330
        // }, 400, "easeOutQuad");
    });
});