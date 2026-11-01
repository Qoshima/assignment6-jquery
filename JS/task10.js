$(document).ready(function () {
  $("#combinedBtn").click(function () {
    $("#combinedBox").stop(true, true)
      .css({ left: 20, top: 20, width: 55, height: 55, opacity: 1 })
      .animate({ left: 160, top: 50, width: 85, height: 85, opacity: 0.35 }, 800);
  });
});
