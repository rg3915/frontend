var array = new Array(10);

for (var i = 0; i < array.length; i++) {
  array[i] = Math.floor(Math.random() * 10);
}

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.sort();

console.log("---------------------");

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
