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
  $(".col-md-3").mouseenter(function () {
    $(".del1").show();
  });
  $(".col-md-3").mouseleave(function () {
    $(".del1").hide();
  });
});
$(document).ready(function () {
  $(".img-port_2").mouseenter(function () {
    $(".del2").show();
  });
  $(".img-port_2").mouseleave(function () {
    $(".del2").hide();
  });
});
$(document).ready(function () {
  $(".img-port_3").mouseenter(function () {
    $(".del3").show();
  });
  $(".img-port_3").mouseleave(function () {
    $(".del3").hide();
  });
});
$(document).ready(function () {
  $(".img-port_4").mouseenter(function () {
    $(".del4").show();
  });
  $(".img-port_4").mouseleave(function () {
    $(".del4").hide();
  });
});
$(document).ready(function () {
  $(".img-port_5").mouseenter(function () {
    $(".del5").show();
  });
  $(".img-port_5").mouseleave(function () {
    $(".del5").hide();
  });
});
$(document).ready(function () {
  $(".img-port_6").mouseenter(function () {
    $(".del6").show();
  });
  $(".img-port_6").mouseleave(function () {
    $(".del6").hide();
  });
});
$(document).ready(function () {
  $(".img-port_7").mouseenter(function () {
    $(".del7").show();
  });
  $(".img-port_7").mouseleave(function () {
    $(".del7").hide();
  });
});
$(document).ready(function () {
  $(".img-port_8").mouseenter(function () {
    $(".del8").show();
  });
  $(".img-port_8").mouseleave(function () {
    $(".del8").hide();
  });
});
