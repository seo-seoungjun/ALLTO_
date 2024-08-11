$(document).ready(function () {
    $('#autoWidth').lightSlider({
        item:3,
        autoWidth: true,
        loop: true,
        pauseOnHover: true,
        auto: true,
        pager:false,
        speed:500,     
        enableTouch:true,
        enableDrag:true,

        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});