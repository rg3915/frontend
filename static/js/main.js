// Alterna o texto de um elemento.
$.fn.extend({
  toggleText: function(a, b) {
    return this.text(this.text() == b ? a : b);
  }
});

$(".mybtn").on('click', function(e) {
  e.preventDefault();
  // Pega o próximo elemento, no caso o primeiro parágrafo.
  $(this).next().fadeToggle('slow', 'linear');
  $(this).toggleText('Ocultar', 'Mostrar');
});
