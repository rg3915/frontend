$(document).ready(function() {
  $(".bestPrice").on('click', function() {
    var price = $(this).closest('.vacation').data('price');
    $(this).closest('.vacation').append(price);
    $(this).remove();
  });
});