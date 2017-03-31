$(document).ready(function () {
  /* fadeIn */
  $("#fadeIn").click(function () {
    $("#div").fadeIn();
  });

  /* fadeOut */
  $("#fadeOut").click(function () {
    $("#div").fadeOut();
  });

  /* fadeToggle */
  $("#fadeToggle").click(function () {
    $("#div").fadeToggle();
  });

  /* fadeTo1 */
  $("#fadeTo1").click(function () {
    $("#div").fadeTo("fast", 0.5);
  });

  /* fadeTo2 */
  $("#fadeTo2").click(function () {
    $("#div").fadeTo("fast", 1.0);
  });

  /* hide */
  $("#hide").click(function () {
    $("#div").hide();
  });

  /* show */
  $("#show").click(function () {
    $("#div").show();
  });

  /* toggle */
  $("#toggle").click(function () {
    $("#div").toggle();
  });

  /* slideDown */
  $("#slideDown").click(function () {
    $("#div").slideDown();
  });

  /* slideUp */
  $("#slideUp").click(function () {
    $("#div").slideUp();
  });

  /* slideToggle */
  $("#slideToggle").click(function () {
    $("#div").slideToggle();
  });

  /* animate1 */
  $("#animate1").click(function () {
    $("#div").animate({
      "border-width": "5px",
      "margin-top": "100px"
    });
  });

  /* animate2 */
  $("#animate2").click(function () {
    $("#div").animate({
      "border-width": "1px",
      "margin-top": "0"
    });
  });
});