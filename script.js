// toggle effect
$(document).ready(function () {
  $(".img_1").click(function () {
    $(this).toggle(function () {
      $(".design").toggle();
    });
  });
  $(".design").click(function () {
    $(this).toggle(function () {
      $(".img_1").toggle();
    });
  });
});

$(document).ready(function () {
  $(".img_2").click(function () {
    $(this).toggle(function () {
      $(".development").toggle();
    });
  });
  $(".development").click(function () {
    $(this).toggle(function () {
      $(".img_2").toggle();
    });
  });
});

$(document).ready(function () {
  $(".img_3").click(function () {
    $(this).toggle(function () {
      $(".product").toggle();
    });
  });
  $(".product").click(function () {
    $(this).toggle(function () {
      $(".img_3").toggle();
    });
  });
});

// hover effect porfolio
$(document).ready(function () {
  $("#img-port_1").mouseenter(function () {
    $(".del1").show();
  });
  $("#img-port_1").mouseleave(function () {
    $(".del1").hide();
  });
});

$(document).ready(function () {
  $("#image2").mouseenter(function () {
    $(".del2").show();
  });
  $("#image2").mouseleave(function () {
    $(".del2").hide();
  });
});

$(document).ready(function () {
  $("#image3").mouseenter(function () {
    $(".del3").show();
  });
  $("#image3").mouseleave(function () {
    $(".del3").hide();
  });
});
$(document).ready(function () {
  $("#image4").mouseenter(function () {
    $(".del4").show();
  });
  $("#image4").mouseleave(function () {
    $(".del4").hide();
  });
});
$(document).ready(function () {
  $("#image5").mouseenter(function () {
    $(".del5").show();
  });
  $("#image5").mouseleave(function () {
    $(".del5").hide();
  });
});
$(document).ready(function () {
  $("#image6").mouseenter(function () {
    $(".del6").show();
  });
  $("#image6").mouseleave(function () {
    $(".del6").hide();
  });
});
$(document).ready(function () {
  $("#image7").mouseenter(function () {
    $(".del7").show();
  });
  $("#image7").mouseleave(function () {
    $(".del7").hide();
  });
});
$(document).ready(function () {
  $("#image8").mouseenter(function () {
    $(".del8").show();
  });
  $("#image8").mouseleave(function () {
    $(".del8").hide();
  });
});
$(document).ready(function () {
  $("#button").click(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var comment = $("#comment").val();

    if (name === "" || email === "" || comment === "") {
      alert("Fill all the fields");
    } else {
      alert("Thank you " + name + ". for reaching out to us : ");
    }
  });
});
