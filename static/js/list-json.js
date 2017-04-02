$(document).ready(function() {
  $("#btn-dynamic-component").click(function() {
    // Reinicia a ul
    $('#ul_id li').remove();
    var data = '{"red": "#f00", "green": "#0f0", "blue": "#00f", "cyan": "#0ff", "magenta": "#f0f", "yellow": "#ff0", "black": "#000", "grey": "#eee"}'
    var result = $.parseJSON(data);
    $.each(result , function(key, value) {
      $('#ul_id').append("<li>" + key + " - " + value + "</li>");
    })
  });
})
