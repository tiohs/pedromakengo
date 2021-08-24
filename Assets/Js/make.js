$(function () {
  !(function () {
    let o = AOS.init();
    console.log(o);
  })(),
    $(".owl-carousel").owlCarousel({
      loop: !0,
      margin: 5,
      smartSpeed: 2e3,
      nav: !0,
      autoplay: !0,
      autoplayTimeout: 2e3,
      autoplayHoverPause: !0,
      responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 3 } },
    }),
    $(window).scroll(function () {
      $(this).scrollTop() > 100
        ? $("#topScroll").css("display", "block")
        : $("#topScroll").css("display", "none");
    });
});
