


$(window).on('load',function(){
  $('.allto_loding').fadeOut();
});


AOS.init();



Morris.Donut({
    element: 'myChart1',
    data: [
      {value: 40, label: 'NOT SURE'},
      {value: 20, label: 'FASHION '},
      {value: 20, label: 'PYRAMID '},
      {value: 8, label: 'NATIONAL '},
      {value: 5, label: 'ALAND '},
      {value: 3, label: 'FENDI '},
      {value: 2, label: 'PIZZA '},
      {value: 2, label: 'WATER TANK'},
    ],
    backgroundColor: '#000000',
    labelColor: '#ffffff',
    colors: [
      '#85bbff',
      '#5d83b3',
      '#507099',
      '#435e80',
      '#354b66',
      '#28384d',
      '#1b2533',
      '#0e131a',
    ],
    formatter: function (x) { return x + "%"}
  });

Morris.Donut({
    element: 'myChart2',
    data: [
      {value: 85, label: 'NO'},
      {value: 15, label: 'YES'},
    ],
    backgroundColor: '#000000',
    labelColor: '#ffffff',
    colors: [
      '#85bbff',
      '#507099',
    ],
    formatter: function (x) { return x + "%"}
  });

  Morris.Donut({
    element: 'myChart3',
    data: [
      {value: 75, label: 'JUST PASSING BY'},
      {value: 15, label: 'LIKED THE DESIGN'},
      {value: 10, label: ' FOR COUPLE PHONECASE '},
    ],
    backgroundColor: '#000000',
    labelColor: '#ffffff',
    colors: [
      '#85bbff',
      '#507099',
      '#354b66',
    ],
    formatter: function (x) { return x + "%"}
  });

$("#inner-1-item1").hover(function () {
    $("#inner-1").toggleClass("show");
    $("#inner-1-item1").toggleClass("show");
    $("#background-img1").toggleClass("show");
    $("#inner-2").toggleClass("none");
    $("#inner-3").toggleClass("none");
});

$("#inner-1-item2").hover(function () {
    $("#inner-1").toggleClass("show");
    $("#inner-1-item2").toggleClass("show");
    $("#background-img2").toggleClass("show");
    $("#inner-2").toggleClass("none");
    $("#inner-3").toggleClass("none");
});

$("#inner-2").hover(function () {
    $("#inner-2").toggleClass("show");
    $("#background-img3").toggleClass("show");
});

$("#inner-3-item1").hover(function () {
    $("#inner-3").toggleClass("show");
    $("#inner-3-item1").toggleClass("show");
    $("#background-img4").toggleClass("show");
    $("#inner-2").toggleClass("none");

});

$("#inner-3-item2").hover(function () {
    $("#inner-3").toggleClass("show");
    $("#inner-3-item2").toggleClass("show");
    $("#background-img5").toggleClass("show");
    $("#inner-2").toggleClass("none");

});

const trigger1 = new ScrollTrigger.default({
  trigger: {
      once: false,
      offset: {
          element: {
            x: 0,
            y: (trigger, rect, direction) => {
                // You can add custom offsets according to callbacks, you
                // get passed the trigger, rect (DOMRect) and the scroll
                // direction, a string of either top, left, right or
                // bottom.
                return 0.5
            }
          }
      },
      toggle: {
          // The class(es) that should be toggled
          class: {
              in: 'visible', // Either a string, or an array of strings
              out: ['invisible']
          },
          
          callback: {
              in: () => { 
                  // $('.c2').css({'background-color':'#11111b'});
              },
              out: () => { 
                  // $('.c2').css({'background-color':'#63f3f4'});
              }
          }
      },
  }
});


trigger1.add('[data-trigger1]');

// Copyright (c) 2013, Olly Smith
// All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:

// 1. Redistributions of source code must retain the above copyright notice, this
// list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation
// and/or other materials provided with the distribution.

// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
// ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// $(Window).load(function(){
//   $('.loading').delay(2000).fadeOut();
// });


// The MIT License (MIT)

// Copyright (c) 2015 Michał Sajnóg

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.