$(window).on('scroll', function () {
    let scroll = $(document).scrollTop();

    // 一定以上スクロールしたらヘッダーの色を変更する
    if ($(window).scrollTop() > $(window).height() / 3) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
    }

    // 背景画像をスクロールする
    $('.content-bg').stop(true, true).animate({
        'background-position-y': scroll / 3 - 500 + 'px'
    }, 100);
});