$(document).ready(function(){
  $('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/customer/save/',
      data: $(this).serialize(),
      dataType: 'json',
      success: function(data){
        console.log(data);
        location.href = '/customer/';
      },
      error: function(error, response, settings){
        console.error(settings.url, response, error.toString());
      }
    });
  });
});
