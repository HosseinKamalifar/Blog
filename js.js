$(function functionName() {
  $(".my-picture").click(function functionName() {
    var src = $(this).attr("src");
    $(".frame ").attr("src",src);
    $(".frame").fadeIn();
    $(".overlay").fadeIn();
  });
});
