window.addEventListener('scroll', function () {
    // // 一定以上スクロールしたらヘッダーの色を変更する
    // const header = document.querySelector('header');
    // const scrollTop = document.scrollingElement.scrollTop;
    // if (scrollTop > window.innerHeight / 3) {
    //     header.classList.add('transform');
    // } else {
    //     header.classList.remove('transform');
    // }
});

document.addEventListener('DOMContentLoaded', function () {
    // WebP対応ブラウザかどうか
    const canUseWebP = (function () {
        const elem = document.createElement('canvas');
        if (!!(elem.getContext && elem.getContext('2d'))) {
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
        return false;
    })();

    if (canUseWebP) {
        // WebPにパス置き換え
        const targetElements = document.getElementsByClassName('lazy');
        [].forEach.call(targetElements, function (elem) {
            const split = elem.getAttribute('data-src').match(/(.*\/)?(.*?)\.(\w+)?/);
            elem.setAttribute('data-src', split[1] + 'webp/' + split[2] + '.webp')
        });

        // 画像の遅延読み込み
        const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        if ("IntersectionObserver" in window) {
            lazyImages.forEach(function (image) {
                    image.src = "data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7";
                }
            )
            let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        if (typeof lazyImage.dataset.srcset === "undefined") {
                        } else {
                            lazyImage.srcset = lazyImage.dataset.srcset;
                        }
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    } else {
        const targetElements = document.getElementsByClassName('lazy');
        [].forEach.call(targetElements, function (elem) {
            elem.setAttribute('src', elem.getAttribute('data-src'))
        });
    }

    // ハンバーガーメニューのクリックリスナー
    $('.hamburger-menu').on('click', function () {
        hamburger_menu_toggle();
    });

    // ハンバーガーメニューの領域外クリック時にOFF切り替え
    const trigger = $('#hm-menu-trigger');
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