$(document).ready(function () {
  $("#nameInput, #emailInput").on("input", function () {
    $("#liveName").text($("#nameInput").val());
    $("#liveEmail").text($("#emailInput").val());
  });
});
