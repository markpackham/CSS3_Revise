/*
Option 3 use the library itself https://github.com/cferdinandi/smooth-scroll
less bloated than using jQuery & works on all browsers unlike Pure CSS method
*/

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 800
});
