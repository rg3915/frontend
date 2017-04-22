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
