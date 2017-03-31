# Lendo dados de um JSON com jQuery

Basicamente eu criei um `li` no HTML com um id.

```html
<button id="btn-dynamic-component" class="btn btn-primary">Clique aqui</button>
<ul id="ul_id"></ul>
```

E no `<script>` usei o jQuery:

```js
<script>
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
</script>

```

Você pode validar o JSON em [jsonlint.com](http://jsonlint.com/).