$('#menuicon').click(function () {
    var checked = $('#menuicon').is(':checked');

    if (checked) {
        $('.translation').css({ width: 0 });
    }
    else {
        $('.translation').css({ width: '66px' });
    }
});

$(".not-stay").hover(function () {
    $(".stay").css({ 'color': "#ffffff" });
}, function () {
    $(".stay").css({ 'color': "#63f4f3" });
});

// $(function () {
//     var text = $(".text");
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 200) {
//             text.removeClass("hidden");
//         } else {
//             text.addClass("hidden");
//         }
//     });
// });

// jQuery(document).ready(function () {
//     jQuery(window).scroll(function () {
//         if (jQuery(this).scrollTop() > 189.6) {
//             jQuery('#After-ghost').fadeOut(20);
//             jQuery('#A').fadeOut(20);
//         }
//         else {
//             jQuery('#After-ghost').fadeIn(20);
//             jQuery('#A').fadeIn(20);
//         }
//     });
// });







// $(function () {
//     var g = $(".ghost");
//     var n = $(".not-stay")
//     var s = $(".stay")
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         if (scroll <= 200) {
//             g.css({ 'opacity': 0 });

//         }
//         if (scroll >= 200 & scroll <= 800) {
//             g.css({ 'opacity': 1 });

//         }

//         if (scroll >= 800) {
//             g.css({ 'opacity': 0 });

//         }

//         if (scroll <= 700) {
//             n.removeClass("a");
//         }
//         if (scroll >= 700) {
//             n.addClass("a");

//         }
//         $(".not-stay").hover(function () {

//             if (scroll <= 700  ) {
//                 $(".stay").css({ 'color': "#ffffff" });
//             }

//             if (scroll >= 700 && scroll <= 2000) {
//                 $(".stay").css({ 'color': "#11111b" });

//             }

//             if ( scroll >= 1700 ) {
//                 $(".stay").css({ 'color': "#ffffff" });
//             }


//         }, function () {
//             $(".stay").css({ 'color': "#63f4f3" });
//         })
//         if (scroll >= 1700) {
//             n.removeClass("a");
//         }

//     });
// });






// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 700) {
//         $(".logo").attr("src", "BLACK.svg");
//     } 

//     if(scroll >= 1700 || scroll <= 700 ){
//         $(".logo").attr("src", "logo.svg");
//     }
// });







// $(function () {
//     var g = $(".ghost");

//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         if(scroll <=189){
//             g.css({ 'opacity': 0 });
//         }

//         if (scroll>=189 && scroll <= 500) {
//             g.css({ 'opacity': 1 });
//         }

//                 if (scroll >= 500) {
//             g.css({ 'opacity': 0 });

//         }

//     });
// });


$(function () {

    var mq4 = window.matchMedia('(min-width:1440px)');

    var mq3 = window.matchMedia('(max-width:1024px)');

    var mql = window.matchMedia('(max-width:780px)');

    var mq5 = window.matchMedia('(max-width:600px)');

    var mq2 = window.matchMedia('(max-width:450px)');

    mq4.addEventListener("change", render4);

    mq3.addEventListener("change", render3);

    mql.addEventListener("change", render);

    mq5.addEventListener("change", render5);

    mq2.addEventListener("change", render2);

    var scl0 = 140;
    var scl = 840;
    var scl2 = 1700;
    var scl3 = 2400;

    function render4(mq4) {
        if (mq4.matches) {
            scl0 = 140;
            scl = 840;
            scl2 = 1500;
            scl3 = 2100;
        }
    }


    function render3(mq3) {
        if (mq3.matches) {
            scl0 = 50;
            scl = 500;
            scl2 = 1200;
            scl3 = 2000;
        }
    }

    function render(mql) {
        if (mql.matches) {
            scl0 = 50;
            scl = 700;
            scl2 = 1200;
            scl3 = 1700;
        }
    }

    function render5(mq5) {
        if (mq5.matches) {
            scl0 = 50;
            scl = 400;
            scl2 = 900;
            scl3 = 1400;
        }
    }

    function render2(mq2) {
        if (mq2.matches) {
            scl0 = 50;
            scl = 500;
            scl2 = 500;
            scl3 = 500;
        }
    }

    // scl = 400;
    // scl2 = 1700;
    // scl3 = 2400;

    var curve0 = $(".curve");
    var p0 = $(".p1");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= scl0) {
            curve0.addClass("expansion");
            p0.css({ 'opacity': 0.73 });
        } else {
            curve0.removeClass("expansion");
            curve0.addClass("ex");
            p0.css({ 'opacity': 0 });
        }
    });




    var curve = $(".curve2");
    var p1 = $(".curve2 p");
    var c1 = $(".c1");


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();


        if (scroll >= scl) {
            curve.addClass("expansion");
            p1.css({ 'opacity': 0.73 });
            c1.addClass("expansion");

        } else {
            curve.removeClass("expansion");
            p1.css({ 'opacity': 0 });
            c1.removeClass("expansion");

        }

    });



    var curve2 = $(".curve3");
    var p2 = $(".curve3 p");
    var c2 = $(".c2");


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= scl2) {
            curve2.addClass("expansion");
            p2.css({ 'opacity': 0.73 });
            c2.css({ 'backgroundColor': "#11111b" });
        } else {
            curve2.removeClass("expansion");
            p2.css({ 'opacity': 0 });
            c2.css({ 'backgroundColor': "#63f4f3" });
        }
    });



    var curve3 = $(".curve4");
    var p3 = $(".curve4 p");
    var c3 = $(".c3");


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= scl3) {
            curve3.addClass("expansion");
            p3.css({ 'opacity': 0.73 });
            c3.css({ 'backgroundColor': "#11111b" });
        } else {
            curve3.removeClass("expansion");
            p3.css({ 'opacity': 0 });
            c3.css({ 'backgroundColor': "#11111b" });
        }
    });

    render4(mq4);
    render3(mq3);
    render(mql);
    render5(mq5);
    render2(mq2);


});