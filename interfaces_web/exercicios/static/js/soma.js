var soma = function () {
  var soma = 0;
  for (var i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }
  return soma;
};

var r = soma(2,4,5,6,1);
console.log(r);