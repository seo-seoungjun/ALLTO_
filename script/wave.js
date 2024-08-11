$(document).ready(function() {
    $(".lettering").lettering();
  
    $('button').click(function() {
      var message = $('.message').val();
      message = message.replace(/\s/g, '&nbsp;');
      $('span').html(message);
      if ($('#select').val() == 'wave') {
        $('span').removeClass();
        $('span').addClass('lettering wave');
        $(".lettering").lettering();
      } 
    });
  });