$(document).ready(function () {
  $("#sequenceBtn").click(function () {
    $("#sequenceBox").stop(true, true)
      .css({ left: 20, top: 20, width: 55, height: 55 })
      .animate({ left: 160 }, 350)
      .animate({ top: 85 }, 350)
      .animate({ width: 30, height: 30 }, 350)
      .animate({ left: 20, top: 20, width: 55, height: 55 }, 350);
  });
});
