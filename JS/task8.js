$(document).ready(function () {
  $("#basicBtn").click(function () {
    $("#basicBox").stop(true, true)
      .css({ left: 20, top: 20, width: 55, height: 55 })
      .animate({ left: 160, width: 90, height: 90 }, 700);
  });
});
