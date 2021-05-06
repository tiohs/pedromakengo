$(function () {

    // Inicializando com uma framework
    function aOs() {
        let x = AOS.init();
        console.log(x);
    }
    aOs();

    // Slider
    function slider(element) {
        var owl = $(element);
        owl.owlCarousel({
            loop: true,
            margin: 5,
            smartSpeed: 2000,
            nav: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        })
    }
    slider('.owl-carousel');

    // Renderizar os testemunhos
    function renderTestemunhos() {

    }
    renderTestemunhos();

    // ScrollTop
    function topHeaderScroll() {
        $(window).scroll(function () {
            let top = $(this).scrollTop();
            if (top > 100) {
                $("#topScroll").css("display", "block")
            } else {
                $("#topScroll").css("display", "none")
            }
        });
    }
    topHeaderScroll();


});