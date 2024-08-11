$('#menuicon').click(function () {
    var checked = $('#menuicon').is(':checked');

    if (checked) {
        $('.translation').css({ width: 0 });
    }
    else {
        $('.translation').css({ width: '74px' });
    }
});

$(".not-stay").hover(function () {
    $(".stay").css({ 'color': "#ffffff" });
}, function () {
    $(".stay").css({ 'color': "#63f4f3" });
});




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

$(function () {




    var mq3 = window.matchMedia('(min-width:1440px)');
    
    var mq2 = window.matchMedia('(max-width:1024px)');
    
    var mql = window.matchMedia('(max-width:780px)');

    var mq0 = window.matchMedia('(max-width:450px)');



    mq3.addEventListener("change",render3);

    mq2.addEventListener("change",render2);
    
    mql.addEventListener("change", render);

    mq0.addEventListener("change", render0);



    scl0 = 140;
    scl = 840;
    scl2 = 1280;
    scl3 = 1880;



    function render3(mq3) {
        if (mq3.matches) {
            scl0 = 50;
            scl = 400;
            scl2 = 800;
            scl3 = 1350;
        }
    }

    function render2(mq2) {
        if (mq2.matches) {
            scl0 = 50;
            scl = 400;
            scl2 = 900;
            scl3 = 1650;
        }
    }

    
    function render(mq1) {
        if (mq1.matches) {
            scl0 = 50;
            scl = 500;
            scl2 = 900;
            scl3 = 1400;
        }
    }
    
    function render0(mq0) {
        if (mq0.matches) {

            scl0 = 50;
            scl = 400;
            scl2 = 400;
            scl3 = 400;

           
        }
    }
    




    // function render2(mq2) {
    //     if (mq2.matches) {
    //         scl0=50;
    //         scl =500;
    //         scl2 =900;
    //         scl3 =1300;
    //     } else {
    //         scl0= 140;
    //         scl = 840;
    //         scl2 = 1280;
    //         scl3 =1880;
    //     }
    // }

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


    render3(mq3);
    render2(mq2);
    render(mql);
    render0(mq0);




});
