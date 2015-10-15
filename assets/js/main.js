$(document).ready(function () {
  var readCookieAndSetButtons;
  readCookieAndSetButtons = function () {
    var LOGGED_IN;
    LOGGED_IN = ($.cookie("edxloggedin") === "true");

    $(".sign_in_up.not_logged_in").toggleClass("hidden", LOGGED_IN);
    $(".sign_in_up.logged_in").toggleClass("hidden", !LOGGED_IN);
  };

  $(document).on("click", ".button.play", function () {
    $(".modal").slideDown();
  });

  $(document).on("click", ".modal .close", function () {
    $('.video iframe').attr('src', $('iframe').attr('src'));
    $(".modal").slideUp();
  });

  $(document).on("click", "#page_header a", function () {
    $(".modal").slideUp();
  });

  $(document).on('click', '.toggle_menu', function() {
    $("#main_navigation").toggle();
  });

  readCookieAndSetButtons();

  setInterval(readCookieAndSetButtons, 1000);
});


