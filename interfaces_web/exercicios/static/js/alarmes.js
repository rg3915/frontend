window.setTimeout(function () {
  console.log("timeout 300");
}, 300);

var c = 1;

window.setInterval(function () {
  console.log(c);
  c++;
}, 100);