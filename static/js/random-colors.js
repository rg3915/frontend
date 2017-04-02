function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

$('.color_me').css("background-color", getRandomColor); 
$('.color_me_hover').text(getRandomColor); 

$('#change-color').click(function() {
  // $(this).css("background-color", getRandomColor); 
  // $(this).children().text(getRandomColor); 
  $('.color_me').css("background-color", getRandomColor); 
  $('.color_me_hover').text(getRandomColor); 
});