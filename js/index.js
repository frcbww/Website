// 背景画像を視差効果でスクロールする
window.onscroll = function () {
    const scrollTop = document.scrollingElement.scrollTop;
    const content_bg = document.getElementsByClassName("content-bg")[0];
    content_bg.style.backgroundPositionY = scrollTop / 3 - 500 + "px";
}

window.onresize = function () {
    // スマートフォン・タブレットの場合100vh再設定
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0
        && navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        const heightSize = window.innerHeight;
        document.getElementsByClassName('top-section')[0].style.height = heightSize + 'px';
        document.getElementsByClassName('top-video')[0].style.height = heightSize + 'px';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // スクロールボタン
    document.getElementsByClassName('top-scroll-hint')[0].addEventListener('click', function () {
        anime({
            targets: "html",
            scrollTop: document.getElementsByClassName('top-section')[0].scrollHeight - 56,
            duration: 600,
            easing: 'easeOutQuad',
        });
    });
});