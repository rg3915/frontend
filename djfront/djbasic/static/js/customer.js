// Save Customer
$('#customer-form').submit(function(e) {
  e.preventDefault();
  // console.log(this.data('urlredirect')); // TypeError: this.data is not a function
  console.log($(this).attr('data-urlredirect'));
  var urlredirect = $(this).data('urlredirect');
  console.log(urlredirect);
  $.ajax({
    url: this.action, // this nativo do JS
    type: 'POST',
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

// Preenchendo o form '#customer-form-edit'.
$(".tr-customer").on('click', '.js-customer-edit', function(e) {
  e.preventDefault();
  // $(this) is '.js-customer-edit'
  $("#modal-customer").remove();
  $("#modal-customer-edit").modal('show');
  // Carregando os valores no form a partir da linha atual.
  let name = $(this).closest('.tr-customer').find('td').first().text();
  let email = $(this).closest('.tr-customer').find('td').first().next().text();
  $("#id_name").val(name);
  $("#id_email").val(email);
  // Definindo data-id e data-url com os valores de js-customer-edit.
  $("#customer-form-edit").attr('data-id', $(this).data('id'));
  $("#customer-form-edit").attr('data-url', $(this).data('url'));
});

// Edit Customer
$("#customer-form-edit").submit(function(e) {
  e.preventDefault();
  var id = $(this).data('id');
  var url = $(this).data('url');
  var urlredirect = $(this).data('urlredirect');
  $.ajax({
    url: url,
    type: 'POST',
    data: $(this).serialize() + "&customer_id=" + id,
    dataType: 'json',
    success: function(data){
      location.href = urlredirect;
    },
    error: function(error, response, settings){
      console.error(settings.url, response, error.toString());
    }
  });
});

// O this não funciona (vira Window) se for .on('submit', ...
// $("#customer-form-edit").submit(function(e) {
//   e.preventDefault();
//   edit_customer();
// });

// function edit_customer() {
//   // Aqui o this vira Window.
//   var $this = $("#customer-form-edit")
//   var id = $this.data('id');
//   var url = $this.data('url');
//   var urlredirect = $this.data('urlredirect');
//   $.ajax({
//     url: url,
//     type: 'POST',
//     data: $this.serialize() + "&customer_id=" + id,
//     dataType: 'json',
//     success: function(data){
//       location.href = urlredirect;
//     },
//     error: function(error, response, settings){
//       console.error(settings.url, response, error.toString());
//     }
//   });
// };

// Abrindo o modal para confirmar o delete
$(".tr-customer").on('click', '.js-customer-delete', function() {
  // Definindo data-id com os valores de .tr-customer
  // $(this).data('id', $(this).closest('.tr-customer').data('id'));
  // Inserindo classe
  $(this).addClass('deactive');
  // Abrindo modal
  $("#modal-customer-delete").modal('show');
  // Definindo data-id e data-url com os valores de js-customer-delete.
  // Não use attr('data-id') pois ele não atualiza a cada clique.
  $("#customer-form-delete").data('id', $(this).data('id'));
  $("#customer-form-delete").data('url', $(this).data('url'));
  // Pegando o nome do cliente.
  let customer_name = $(this).closest('.tr-customer').find('td').first().text();
  $("#customer-form-delete span").append(customer_name);
});

// Delete Customer
$("#customer-form-delete").submit(function(e) {
  e.preventDefault();
  var id = $(this).data('id');
  var url = $(this).data('url');
  $.ajax({
    url: url,
    type: 'POST',
    data: {customer_id: id},
    success: function(data){
      console.log('Deleted');
      $("#modal-customer-delete").modal('hide');
      $(".deactive").closest('.tr-customer').fadeTo('slow', 0.5, function() {
        $(this).remove();
      });
    },
    error: function(error, response, settings){
      console.error(settings.url, response, error.toString());
    }
  });
});
