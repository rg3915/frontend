$(document).ready(function () {
  $("#div1").css({
    "border": "2px solid black",
    "width": "800px",
    "height": "200px",
    "margin": "15px",
    "padding": "15px"
  });

  $("#addClass").click(function () {
    $("#div1").addClass("destaque");
  });

  $("#removeClass").click(function () {
    $("#div1").removeClass("destaque");
  });

  $("#toggleClass").click(function () {
    $("#div1").toggleClass("destaque");
  });

  $("#hasClass").click(function () {
    var destaque = $("#div1").hasClass("destaque");
    alert(destaque ? "Com destaque" : "Sem destaque");
  });

  $("#after").click(function () {
    $("#p1").remove();
    $("#div1").after("<p id='p1'>after</p>");
  });

  $("#before").click(function () {
    $("#p1").remove();
    $("#div1").before("<p id='p1'>before</p>");
  });

  $("#insertAfter").click(function () {
    $("#p1").remove();
    $("<p id='p1'>insertAfter</p>").insertAfter("#div1");
  });

  $("#insertBefore").click(function () {
    $("#p1").remove();
    $("<p id='p1'>insertBefore</p>").insertBefore("#div1");
  });

  $("#append").click(function () {
    $("#p1").remove();
    $("#div1").append("<p id='p1'>append</p>");
  });

  $("#prepend").click(function () {
    $("#p1").remove();
    $("#div1").prepend("<p id='p1'>prepend</p>");
  });

  $("#appendTo").click(function () {
    $("#p1").remove();
    $("<p id='p1'>appendTo</p>").appendTo("#div1");
  });

  $("#prependTo").click(function () {
    $("#p1").remove();
    $("<p id='p1'>prependTo</p>").prependTo("#div1");
  });

  $("#height").click(function () {
    $("#p1").remove();
    var height = $("#div1").height();
    $("#div1").after("<p id='p1'>height: " + height + "</p>");
  });

  $("#width").click(function () {
    $("#p1").remove();
    var width = $("#div1").width();
    $("#div1").after("<p id='p1'>width: " + width + "</p>");
  });

  $("#innerHeight").click(function () {
    $("#p1").remove();
    var innerHeight = $("#div1").innerHeight();
    $("#div1").after("<p id='p1'>innerHeight: " + innerHeight + "</p>");
  });

  $("#innerWidth").click(function () {
    $("#p1").remove();
    var innerWidth = $("#div1").innerWidth();
    $("#div1").after("<p id='p1'>innerWidth: " + innerWidth + "</p>");
  });

  $("#outerHeight").click(function () {
    $("#p1").remove();
    var outerHeight = $("#div1").outerHeight();
    $("#div1").after("<p id='p1'>outerHeight: " + outerHeight + "</p>");
  });

  $("#outerWidth").click(function () {
    $("#p1").remove();
    var outerWidth = $("#div1").outerWidth();
    $("#div1").after("<p id='p1'>outerWidth: " + outerWidth + "</p>");
  });

})