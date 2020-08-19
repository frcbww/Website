// 一定以上スクロールしたらヘッダーの色を変更する
$(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height() / 4) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
    }
});