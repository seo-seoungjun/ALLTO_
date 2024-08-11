$(".not-stay").hover(function () {
    $(".stay").css({ 'color': "#11111b" });
}, function () {
    $(".stay").css({ 'color': "#63f4f3" });
});


$(function () {

    var mql = window.matchMedia('(max-width:780px)');
    var mql2 = window.matchMedia('(max-width:450px)');
    var scl = 400;

    mql.addEventListener("change", render);

    mql2.addEventListener("change", render2);



    function render(mql) {
        if (mql.matches) {

            $('#menuicon').click(function () {
                var checked = $('#menuicon').is(':checked');

                if (checked) {
                    $('.logo').attr("src", '../images/logo.svg');
                    $('#A').attr("src", '../images/Layer 2.svg');
                    $('h1').css({ 'color': "#ffffff" });
                }
                else {
                    $('#A').attr("src", '../images/AAA.svg');
                    $('.logo').attr("src", '../images/BLACK.svg');
                    $('h1').css({ 'color': "#11111b" });
                }
            });
        }
    }


    function render2(mql2) {
        if (mql2.matches) {

            scl=200;

            $('#menuicon').click(function () {
                var checked = $('#menuicon').is(':checked');

                if (checked) {
                    $('.logo').attr("src", '../images/logo.svg');
                    $('#A').attr("src", '../images/Layer 2.svg');
                    $('h1').css({ 'color': "#ffffff" });
                }
                else {
                    $('#A').attr("src", '../images/AAA.svg');
                    $('.logo').attr("src", '../images/BLACK.svg');
                    $('h1').css({ 'color': "#11111b" });
                }
            });
        }
    }

    $(function () {
        var f = $(".container");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= scl) {
                f.addClass("visible");
            }

        });
    });

    render(mql);
    render2(mql2);
});



// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();


    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {

        $('header').removeClass('header-down').addClass('header-up');
    } else {

        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('header-up').addClass('header-down');
        }
    }

    lastScrollTop = st;
}

