$(function () {

  var windowSize = $(window).width();

  $(window).resize(function () {
    windowSize = $(window).width();
  });



  if (windowSize > 767) {

    var controller = new ScrollMagic.Controller();

    var zoomHeader = TweenMax.to("#header", 0.5, { scale: 22, ease: Circ.EaseIn });


    var headerZoom = new ScrollMagic.Scene({
      triggerElement: "#header",
      triggerHook: 0,
      duration: "300%"
    })
      .setPin('#header')
      .setClassToggle('#header', 'showing')
      .setTween(zoomHeader)
      .addTo(controller);

  }

});


