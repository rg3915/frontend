// Alterna o texto de um elemento.
$.fn.extend({
  toggleText: function(a, b) {
    return this.text(this.text() == b ? a : b);
  }
});

// Alterna botão
$("#btn-dynamic-component").click(function(e) {
  e.preventDefault();
  $(this).next().fadeToggle('slow', 'linear');
});

// Alterna div
$("#btn_id").click(function(e) {
  e.preventDefault();
  $("#ul_id").toggle();
  $(this).toggleText('Ocultar', 'Mostrar');
});

$(".btn_class").on('click', function(e) {
  e.preventDefault();
  // Pega o próximo elemento, no caso o primeiro parágrafo.
  $(this).next().fadeToggle('slow', 'linear');
  $(this).toggleText('Ocultar', 'Mostrar');
});
