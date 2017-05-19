var nav= "#navbar li";

$(document).ready(function () {
  $(nav).click(function () {
    $(this).addClass("active");
  });
});
