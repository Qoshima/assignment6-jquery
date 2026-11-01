$(document).ready(function () {
  $("#changeImageBtn").click(function () {
    $("#attributeImage").attr("src", "images/scene2.svg");
  });
  $("#changeLinkBtn").click(function () {
    $("#changeableLink").attr("href", "https://api.jquery.com/");
    $("#changeableLink").text("Open jQuery API");
  });
});
