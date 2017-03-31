var c = 1;

window.onload = function () {
  var add = document.getElementById('add');
  add.onclick = adicionar;
}

function adicionar() {
  var item = document.createElement('li');
  var textitem = document.createTextNode(c);
  item.appendChild(textitem);
  document.getElementById('lista').appendChild(item);
  console.log(c);
  c++;
}

