$(document).ready(function () {
  var number = 3;
  $("#appendBtn").click(function () {
    number++;
    $("#itemList").append("<li>Item " + number + "</li>");
  });
  $("#prependBtn").click(function () {
    number++;
    $("#itemList").prepend("<li>Item " + number + "</li>");
  });
  $("#removeBtn").click(function () { $("#itemList li:last").remove(); });
});
