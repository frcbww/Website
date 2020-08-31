window.onscroll = function () {
    const scrollTop = document.scrollingElement.scrollTop;
    const content_bg = document.getElementsByClassName("content-bg")[0];
    content_bg.style.backgroundPositionY = scrollTop / 3 - 500 + "px";
}

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