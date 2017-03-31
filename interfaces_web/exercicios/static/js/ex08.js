var array = new Array(10);

for (var i = 0; i < array.length; i++) {
  array[i] = i;
}

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var i = 0; i < 10; i++) {
  var posicao1 = Math.floor(Math.random() * 10);
  var posicao2 = Math.floor(Math.random() * 10);
  var aux = array[posicao1];

  array[posicao1] = array[posicao2];
  array[posicao2] = aux;
}

console.log("---------------------");

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
