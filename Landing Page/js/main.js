$(".btnToggle").click(toggler);

function toggler() {
  var btnId = $(this).data("id");

  var ElementId = "#toggleIcon" + btnId;

  if ($(ElementId).hasClass("down")) {
    $(ElementId).animate({ rotate: "180deg" }, 300);
    $(ElementId).addClass("up");
    $(ElementId).removeClass("down");
  } else if ($(ElementId).hasClass("up")) {
    $(ElementId).animate({ rotate: "0deg" }, 300);
    $(ElementId).addClass("down");
    $(ElementId).removeClass("up");
  }
}

// ScrollTop Button function
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
