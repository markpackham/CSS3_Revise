$(document).ready(function () {
    setInterval(checkScroll, 200);
});

/*
You should only see a grey border at the bottom of the nav when you aren't
at the top of the page
 */
function checkScroll() {
    let nav = $('.top-nav').first();

    if ($(document).scrollTop() > 0 && !nav.hasClass('scrolling')) {
        nav.addClass('scrolling');
    } else if
    //If we area already at the top of the page remove the scrolling class
    ($(document).scrollTop() === 0 && nav.hasClass('scrolling')) {
        nav.removeClass('scrolling');
    }
}