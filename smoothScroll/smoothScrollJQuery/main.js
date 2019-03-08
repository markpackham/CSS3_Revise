/*
Option 2, using jQuery smooth scroll (since CSS smooth scroll isn't available in all browsers)
*/
$(".navbar a").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      /* 800 miliseconds speed */
      800
    );
  }
});
