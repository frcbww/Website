window.addEventListener('scroll', function () {
    // 一定以上スクロールしたらヘッダーの色を変更する
    const header = document.querySelector('header');
    const scrollTop = document.scrollingElement.scrollTop;
    if (scrollTop > window.innerHeight / 3) {
        header.classList.add('transform');
    } else {
        header.classList.remove('transform');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // WebP対応ブラウザかどうか
    Modernizr.on('webp', function (result) {
        if (result) {
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
    })

    // ハンバーガーメニューのクリックリスナー
    document.getElementsByClassName('hamburger-menu')[0].addEventListener('click', function () {
        hamburger_menu_toggle();
    });

    // ハンバーガーメニューの領域外クリック時にOFF切り替え
    const trigger = document.getElementById('hm-menu-trigger');
    document.onclick = function (e) {
        if (trigger.classList.contains('active') && !e.target.closest('header')) {
            hamburger_menu_toggle();
        }
    }

    // ハンバーガーメニューのON・OFF切り替え
    function hamburger_menu_toggle() {
        trigger.classList.toggle('active');
        const rightVal = trigger.classList.contains('active') ? 0 : -325;
        anime({
            targets: "header nav",
            right: rightVal,
            duration: 200,
            easing: 'easeOutQuad',
        });
    }
});