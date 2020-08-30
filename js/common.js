$(window).on('load scroll', function () {
    // 一定以上スクロールしたらヘッダーの色を変更する
    if ($(window).scrollTop() > $(window).height() / 3) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
    }
});


$(function () {
    // WebP対応ブラウザの場合パス置き換え
    Modernizr.on('webp', function (result) {
        $(".lazy").each(function () {
            if (result) {
                const split = $(this).attr('data-src').match(/(.*\/)?(.*?)\.(\w+)?/);
                $(this).attr('data-src', split[1] + 'webp/' + split[2] + '.webp');
            }
        });
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