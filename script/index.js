import { key } from './data.js';

$('body').on('scroll touchmove mousewheel', function (e) {
  e.preventDefault();

  e.stopPropagation();

  return false;
});

setTimeout(function () {
  $('.loding').fadeToggle();
  $('body').off('scroll touchmove mousewheel');
}, 2500);

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  sectionsColor: [
    '#11111b',
    '#11111b',
    '#11111b',
    ,
    ,
    ,
    ,
    '#ffffff',
    '#11111b',
    '#11111b',
    '#ffffff',
  ],
  // scrollBar:true,
  navigation: true,
  licenseKey: key,

  afterLoad: function (origin) {
    var loadedSection = this;

    //앵커링크 사용
    if (origin.anchor == '11') {
      $('.goleft').css({ right: '1400px' });
      $('.goright').css({ left: '1400px' });
      $('.contact').css({ opacity: 1 });
      $('.contact').css({ visibility: 'visible' });
      $('#section12').css({ 'background-color': '#11111b' });
      $('.contact a').css({ 'animation-play-state': 'running' });
    }
  },

  onLeave: function (origin, destination, direction) {
    var leavingSection = this;

    //구역 2를 떠난 후
    if (
      origin.anchor == '1' &&
      direction == 'down' &&
      destination.anchor == '2'
    ) {
      $('#section2 h2').addClass('up');
      $('.spanwrap').addClass('down');
      $('.sss').addClass('down');
    }

    if (destination.anchor == '2') {
      $('#section2 h2').addClass('up');
      videostart();
    }

    if (
      origin.anchor == '3' &&
      direction == 'down' &&
      destination.anchor == '4'
    ) {
      wave1.restart();
      backgroundstart('.wavebackground');
    }

    if (destination.anchor == '4') {
      wave1.restart();
      backgroundstart('.wavebackground');
    }

    if (
      origin.anchor == '4' &&
      direction == 'down' &&
      destination.anchor == '5'
    ) {
      wave2.restart();
      backgroundstart('.wavebackground2');
    }

    if (destination.anchor == '5') {
      wave2.restart();
      backgroundstart('.wavebackground2');
    }

    if (
      origin.anchor == '5' &&
      direction == 'down' &&
      destination.anchor == '6'
    ) {
      wave3.restart();
      backgroundstart('.wavebackground3');
    }
    if (destination.anchor == '6') {
      wave3.restart();
      backgroundstart('.wavebackground3');
    }
    if (
      origin.anchor == '6' &&
      direction == 'down' &&
      destination.anchor == '7'
    ) {
      wave.restart();
    }
    if (destination.anchor == '7') {
      wave.restart();
      $('#fp-nav').css({ width: 0 });
      $('#fp-nav').css({ height: 0 });
      $('#fp-nav').css({ overflow: 'hidden' });
    }

    if (
      destination.anchor == '1' ||
      destination.anchor == '2' ||
      destination.anchor == '3' ||
      destination.anchor == '4' ||
      destination.anchor == '5' ||
      destination.anchor == '6' ||
      destination.anchor == '8' ||
      destination.anchor == '9' ||
      destination.anchor == '10' ||
      destination.anchor == '12' ||
      destination.anchor == '11'
    ) {
      $('#fp-nav').css({ width: 'auto' });
      $('#fp-nav').css({ height: 'auto' });
      $('#fp-nav').css({ overflow: 'visible' });
    }

    if (destination.anchor == '7' || destination.anchor == '11') {
      $('#fp-nav ul li a span').css({ background: '#11111b' });
      $('.fp-slidesNav ul li a span').css({ background: '#11111b' });
      textcolorchange(
        'h1',
        '#submenu li a',
        '#11111b',
        '#11111b',
        '#A',
        'images/AAA.svg',
        '.logo',
        'images/BLACK.svg'
      );
    }

    if (
      destination.anchor == '1' ||
      destination.anchor == '2' ||
      destination.anchor == '3' ||
      destination.anchor == '4' ||
      destination.anchor == '5' ||
      destination.anchor == '6' ||
      destination.anchor == '8' ||
      destination.anchor == '9' ||
      destination.anchor == '10' ||
      destination.anchor == '12'
    ) {
      $('#fp-nav ul li a span').css({ background: '#ffffff' });
      $('.fp-slidesNav ul li a span').css({ background: '#ffffff' });
      textcolorchange(
        'h1',
        '#submenu li a',
        '#ffffff',
        '#ffffff',
        '#A',
        'images/Layer 2.svg',
        '.logo',
        'images/logo.svg'
      );
    }

    if (destination.anchor == '10') {
      $('.list').addClass('show');
    }

    if (destination.anchor == '12') {
      $('.goleft').css({ right: '1400px' });
      $('.goright').css({ left: '1400px' });
      $('.contact').css({ opacity: 1 });
      $('.contact').css({ visibility: 'visible' });
      $('#section12').css({ 'background-color': '#11111b' });
      $('.contact a').css({ 'animation-play-state': 'running' });
    }
  },
});

var videostart = function () {
  $('#section2-video').trigger('play');
};

var videostop = function () {
  $('#section2-video').trigger('pause');
};

var backgroundstart = function (a) {
  var b = $(a);
  b.removeClass(a).addClass(a);
  b.css({ 'animation-play-state': 'running' });
};

var textcolorchange = function (
  a,
  c,
  a1,
  a2,
  imgId1,
  imgsrc1,
  imgId2,
  imgsrc2
) {
  var b = $(a);
  var d = $(c);
  d.css({ color: a1 });
  b.css({ color: a2 });
  $(imgId1).attr('src', imgsrc1);
  $(imgId2).attr('src', imgsrc2);
};

$('.click-purse').click(function () {
  $('.purse-wave').toggleClass('show');
  $('.click-purse').toggleClass('show');
  $('.line').toggleClass('show');
  $('.circle').toggleClass('show');
});

$('#play-btn').click(function () {
  $('#resonate').trigger('play');
  $('#resonate').toggleClass('show');
  $('#pause-btn').toggleClass('show');
  $('#play-btn').toggleClass('invisible');
});

$('#pause-btn').click(function () {
  $('#resonate').removeClass('show');
  $('#pause-btn').removeClass('show');
  $('#play-btn').removeClass('invisible');
  $('#resonate').trigger('pause');
});
// $(function() {
//     var text = $(".text");
//     $(window).scroll(function() {
//       var scroll = $(window).scrollTop();
//   18
//       if (scroll >= 189.6) {
//         text.removeClass("hidden");
//       } else {
//         text.addClass("hidden");
//       }
//     });
//   });

//   jQuery(document).ready(function() {
//     jQuery(window).scroll(function() {
//       if (jQuery(this).scrollTop() > 189.6) {
//         jQuery('#After-ghost').fadeOut(20);
//         jQuery('#A').fadeOut(20);
//       }
//       else {jQuery('#After-ghost').fadeIn(20);
//             jQuery('#A').fadeIn(20);
//       }
//     });
//   });

const wave4 = document.querySelector('#wave4');
const wave5 = document.querySelector('#wave5');
const wave6 = document.querySelector('#wave6');
const wave7 = document.querySelector('#wave7');

const shape2 =
  'M469.539032,263.986786H-0.000001L0,229.890961c310.649475,58.156982,255.61113-98.5,469.539032-65.062302V263.986786z';
const shape3 =
  'M469.539032,263.986786H-0.000001L0,0c226.11113,0,182.887283-0.414484,469.539032,0V263.986786zz';

var wave1 = new TimelineMax({
  repeat: 0,
  repeatDelay: 1,
});
wave1.to(wave4, 0.8, {
  attr: { d: shape2 },
  ease: Power2.easeIn,
});
wave1.to(wave4, 0.8, {
  attr: { d: shape3 },
  ease: Power2.easeOut,
  fill: '#0078b6',
});

wave1.pause();

var wave2 = new TimelineMax({
  repeat: 0,
  repeatDelay: 1,
});
wave2.to(wave5, 0.8, {
  attr: { d: shape2 },
  ease: Power2.easeIn,
});
wave2.to(wave5, 0.8, {
  attr: { d: shape3 },
  ease: Power2.easeOut,
  fill: '#01b4fe',
});

wave2.pause();

var wave3 = new TimelineMax({
  repeat: 0,
  repeatDelay: 1,
});
wave3.to(wave6, 0.8, {
  attr: { d: shape2 },
  ease: Power2.easeIn,
});
wave3.to(wave6, 0.8, {
  attr: { d: shape3 },
  ease: Power2.easeOut,
  fill: '#21dee0',
});

wave3.pause();

var wave = new TimelineMax({
  repeat: 0,
  repeatDelay: 1,
});
wave.to(wave7, 0.8, {
  attr: { d: shape2 },
  ease: Power2.easeIn,
});
wave.to(wave7, 0.8, {
  attr: { d: shape3 },
  ease: Power2.easeOut,
  fill: '#ffffff',
});

wave.pause();

// let slide = document.querySelector('.venture');
// let innerSlide = document.querySelector('.slide-inner');

// let pressed = false;
// let startx;
// let x;

// slide.addEventListener('mousedown', (e) => {
//     pressed = true;
//     startx = e.offsetX - innerSlide.offsetLeft;
//     slide.style.cursor = 'grabbing'
// });

// slide.addEventListener('mouseenter', () => {
//     slide.style.cursor = 'grab'
// });

// slide.addEventListener('mouseup', () => {
//     slide.style.cursor = 'grab'
// });

// window.addEventListener('mouseup', () => {
//     pressed = false;
// });

// slide.addEventListener('mousemove', (e) => {
//     if (!pressed) return;
//     e.preventDefault();

//     x = e.offsetX

//     innerSlide.style.left = `${x - startx}px`;

//     checkboundary()
// })

// function checkboundary() {
//     let outer = slide.getBoundingClientRect();
//     let inner = innerSlide.getBoundingClientRect();

//     if (parseInt(innerSlide.style.left) > 0) {
//         innerSlide.style.left = '0px'
//     } else if (inner.right < outer.right) {
//         innerSlide.style.left = `-${inner.width - outer.width}px`
//     }

// }
