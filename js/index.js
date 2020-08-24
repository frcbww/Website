const isIE = (window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1
    || window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1);

$(window).on('load scroll', function () {
    // 背景画像をスクロールする
    if (!isIE) {
        $('.content-bg').stop(true, true).animate({
            'background-position-y': $(window).scrollTop() / 3 - 500 + 'px'
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
    }
});

$(function () {
    // スクロールボタン
    $(".top-scroll-hint").on("click", function () {
        $("html").animate({scrollTop: $(".top-section")[0].scrollHeight - 56}, 500, "easeOutQuad");
    })
});