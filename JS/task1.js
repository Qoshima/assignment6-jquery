$(document).ready(function () {
  $("#changeText").click(function () {
    $("#idExample").text("Changed using an ID selector!");
    $(".classExample").html("Changed with <b>HTML</b> using a class selector.");
    $("h2").css("color", "#2765ba");
  });
});
