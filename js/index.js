$(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height() / 4) {
        $('header').addClass('transform');
    } else {
        $('header').removeClass('transform');
    }
});

$(window).trigger('scroll');