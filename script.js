// scroll back at the top
function backTopFunction() {
  $(window).scrollTop(0);
}

$(document).ready(function () {
  // to open images
  $(".image").click(function () {
    let src = $(this).attr("src");
    let alt = $(this).attr("alt");
    $(".modal").css("display", "block");
    $(".modal-content").attr("src", src);
    $(".caption").text(alt);
  });
  // to close
  $(".close").click(function () {
    $(".modal").css("display", "none");
  });

  // allows me to create the animation of the list by adding a class "slide-left"
  $(window).on("scroll", function () {
    //console.log($(window).height());
    let scroll_pos = $(window).scrollTop() + $(window).height();
    let element_pos = $(".group").offset().top + $(".group").height();
    if (scroll_pos > element_pos) {
      $(".group").addClass("slide-left");
    }
  });

  // this function check when the window pass the condition to show the button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 650) {
      $("#back-top").css("display", "block");
    } else {
      $("#back-top").css("display", "none");
    }
  });
});
