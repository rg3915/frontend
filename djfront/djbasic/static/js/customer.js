$('form').submit(function(e) {
  e.preventDefault();
  // console.log(this.data('urlredirect')); // TypeError: this.data is not a function
  console.log($(this).attr('data-urlredirect'));
  urlredirect = $(this).data('urlredirect');
  console.log(urlredirect);
  $.ajax({
    type: 'POST',
    url: this.action, // this nativo do JS
    data: $(this).serialize(),
    dataType: 'json',
    success: function(data){
      console.log(data);
      location.href = urlredirect;
    },
    error: function(error, response, settings){
      console.error(settings.url, response, error.toString());
    }
  });
});
