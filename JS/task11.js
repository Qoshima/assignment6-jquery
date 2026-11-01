$(document).ready(function () {
  $("#galleryThumbs img").click(function () {
    var selectedImage = $(this).attr("src");
    $("#galleryThumbs img").animate({ width: 90 }, 200);
    $(this).stop(true, true).animate({ width: 110 }, 200);
    $("#largeImage").stop(true, true).fadeOut(150, function () {
      $(this).attr("src", selectedImage).fadeIn(200);
    });
  });
  $("#galleryFadeBtn").click(function () {
    $("#galleryThumbs").fadeToggle(300);
  });
});
