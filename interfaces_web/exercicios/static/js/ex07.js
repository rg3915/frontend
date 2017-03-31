penultimo = 0
ultimo = 1
console.log(penultimo);
console.log(ultimo);

for (var i = 0; i <30; i++) {
  var proximo = penultimo + ultimo;
  console.log(i, proximo);

  penultimo = ultimo;
  ultimo = proximo;
}
