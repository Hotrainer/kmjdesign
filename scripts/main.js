$(function () {
  if ($(".panel").length > 0) {
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "100%",
      },
    });
    var slides = $(".panel");
    for (var i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i],
      })
        .setPin(slides[i], { pushFollowers: false })
        .addTo(controller);
    }
  }
  if ($(".panel-w").length > 0) {
    var controllerW = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "100%",
      },
    });
    var slidesW = $(".panel-w");
    for (var i = 0; i < slidesW.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slidesW[i],
      })
        .setPin(slidesW[i], { pushFollowers: false })
        .addTo(controllerW);
    }
  }

  const width = $(window).width();

  if (width > 540) {
    $(".calendly").on("mouseenter", function () {
      $(this)
        .find(".before-calendly")
        .addClass("active-before-calendly")
        .removeClass("inactive-before-calendly");
      $(this)
        .find(".after-calendly")
        .addClass("active-after-calendly")
        .removeClass("inactive-after-calendly");
    });
    $(".calendly").on("mouseleave", function () {
      $(this)
        .find(".before-calendly")
        .addClass("inactive-before-calendly")
        .removeClass("active-before-calendly");
      $(this)
        .find(".after-calendly")
        .addClass("inactive-after-calendly")
        .removeClass("active-after-calendly");
    });

    $(".calendly-alt").on("mouseenter", function () {
      $(this)
        .find(".before-calendly-alt")
        .addClass("active-before-alt")
        .removeClass("inactive-before-alt");
      $(this)
        .find(".after-calendly-alt")
        .addClass("active-after-alt")
        .removeClass("inactive-after-alt");
    });
    $(".calendly-alt").on("mouseleave", function () {
      $(this)
        .find(".before-calendly-alt")
        .removeClass("active-before-alt")
        .addClass("inactive-before-alt");
      $(this)
        .find(".after-calendly-alt")
        .removeClass("active-after-alt")
        .addClass("inactive-after-alt");
    });
  }

  if ($("#day-picker").length > 0) {
    $("#day-picker").picker({
      data: [
        "Idea 1",
        "Idea 2",
        "Idea 3",
        "Idea 4",
        "Idea 5",
        "Idea 6",
        "Idea 7",
      ],
      lineHeight: 162,
      selected: 0,
    });
  }
  $(".get-in-touch").on("click", function () {
    window.open("mailto:hello@kmjbydesign.com");
  });

  $(".menu-bar a")
    .eq(5)
    .on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
            $(".text-line").addClass("text-draw");
          }
        );
      }
    });
  $(".open-nav").on("click", function () {
    if (width > 899) {
      $(".sidenav").css({ height: "95%" });
    } else {
      $(".sidenav").css({ height: "100%" });
    }
    $("body").addClass("oh");
    $("header").removeClass("blend");
    $(".close-nav span").addClass("change");
  });
  $(".close-nav, .sidenav a").on("click", function () {
    $(".sidenav").css({ height: 0 });
    $("body").removeClass("oh");
    $(".close-nav span").removeClass("change");
  });

  try {
    $("footer").ripples({
      resolution: 512,
      dropRadius: 20,
      perturbance: 0.04,
    });
  } catch (e) {
    $(".error").show().text(e);
  }
  function flipLetter() {
    setInterval(function () {
      $(".under-hero").find("p").eq(0).find("span").removeClass("flip-letter");
      $(".under-hero").find("p").eq(1).find("span").removeClass("flip-letter");
      $(".under-hero").find("p").eq(2).find("span").removeClass("flip-letter");
      $(".under-hero").find("p").eq(3).find("span").removeClass("flip-letter");
      const qtLettersText1 = $(".under-hero").find("p").eq(0).children();
      const qtLettersText2 = $(".under-hero").find("p").eq(1).children();
      const qtLettersText3 = $(".under-hero").find("p").eq(2).children();
      const qtLettersText4 = $(".under-hero").find("p").eq(3).children();
      const qtLetters1 = qtLettersText1.length;
      const qtLetters2 = qtLettersText2.length;
      const qtLetters3 = qtLettersText3.length;
      const qtLetters4 = qtLettersText4.length;
      const randomNumber1 = Math.floor(Math.random() * qtLetters1);
      const randomNumber2 = Math.floor(Math.random() * qtLetters1);
      const randomNumber3 = Math.floor(Math.random() * qtLetters1);
      const randomNumber12 = Math.floor(Math.random() * qtLetters2);
      const randomNumber22 = Math.floor(Math.random() * qtLetters2);
      const randomNumber32 = Math.floor(Math.random() * qtLetters2);
      const randomNumber13 = Math.floor(Math.random() * qtLetters3);
      const randomNumber23 = Math.floor(Math.random() * qtLetters3);
      const randomNumber33 = Math.floor(Math.random() * qtLetters3);
      const randomNumber14 = Math.floor(Math.random() * qtLetters4);
      const randomNumber24 = Math.floor(Math.random() * qtLetters4);
      const randomNumber34 = Math.floor(Math.random() * qtLetters4);
      $(".under-hero")
        .find("p")
        .eq(0)
        .find("span")
        .eq(randomNumber1)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(0)
        .find("span")
        .eq(randomNumber2)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(0)
        .find("span")
        .eq(randomNumber3)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(1)
        .find("span")
        .eq(randomNumber12)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(1)
        .find("span")
        .eq(randomNumber22)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(1)
        .find("span")
        .eq(randomNumber32)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(2)
        .find("span")
        .eq(randomNumber13)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(2)
        .find("span")
        .eq(randomNumber23)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(2)
        .find("span")
        .eq(randomNumber33)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(3)
        .find("span")
        .eq(randomNumber14)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(3)
        .find("span")
        .eq(randomNumber24)
        .addClass("flip-letter");
      $(".under-hero")
        .find("p")
        .eq(3)
        .find("span")
        .eq(randomNumber34)
        .addClass("flip-letter");
    }, 3000);
  }
  flipLetter();
});

$(window).on("scroll", function () {
  const textDraw =
    Math.ceil($(window).scrollTop()) > $(document).height() - 1200;
  if (textDraw) {
    $(".text-line").addClass("text-draw");
  } else {
    $(".text-line").removeClass("text-draw");
  }
  const width = $(window).width();
  if (width < 690) {
    const getInTouchMobile =
      Math.ceil($(window).scrollTop()) > $(document).height() - 1000;
    if (getInTouchMobile) {
      $(".get-in-touch.desk-hide p").addClass("fade-in-get-in-touch");
    } else {
      $(".get-in-touch.desk-hide p").removeClass("fade-in-get-in-touch");
    }
  } else {
    const getInTouchTablet =
      Math.ceil($(window).scrollTop()) > $(document).height() - 1200;
    if (getInTouchTablet) {
      $(".get-in-touch.desk-hide p").addClass("fade-in-get-in-touch");
    } else {
      $(".get-in-touch.desk-hide p").removeClass("fade-in-get-in-touch");
    }
  }

  if ($(".service-top-point").length > 0) {
    const top = $(".service-top-point").offset().top - 400;
    const bottom = top + 700;
    const underTop = $(".fade-trigger").offset().top;
    if ($(this).scrollTop() > top && $(this).scrollTop() < bottom) {
      $(".service-top-point .back-heading").addClass("left-move");
    } else if ($(this).scrollTop() > bottom) {
      $(".service-top-point .back-heading").removeClass("left-move");
    } else {
      $(".service-top-point .back-heading").removeClass("left-move");
    }
  }
  if ($(".service-point").length > 0) {
    const topS = $(".service-point").offset().top - 800;
    const bottomS = topS + 1200;

    if ($(this).scrollTop() > topS && $(this).scrollTop() < bottomS) {
      $(".service-point .back-heading").addClass("left-move");
    } else if ($(this).scrollTop() > bottomS) {
      $(".service-point .back-heading").removeClass("left-move");
    } else {
      $(".service-point .back-heading").removeClass("left-move");
    }
  }
  if ($(".first-content-row").length > 0) {
    const contentTopFirst = $(".first-content-row").offset().top - 600;

    if ($(this).scrollTop() > contentTopFirst) {
      $(".first-content-row").addClass("motion");
    } else {
      $(".first-content-row").removeClass("motion");
    }
  }
  if ($(".second-content-row").length > 0) {
    const contentTopSecond = $(".second-content-row").offset().top - 600;
    if ($(this).scrollTop() > contentTopSecond) {
      $(".second-content-row").addClass("motion-second");
    } else {
      $(".second-content-row").removeClass("motion-second");
    }
  }
  if ($(".third-content-row").length > 0) {
    const contentTopThird = $(".third-content-row").offset().top - 600;
    if ($(this).scrollTop() > contentTopThird) {
      $(".third-content-row").addClass("motion");
    } else {
      $(".third-content-row").removeClass("motion");
    }
  }
  if ($(".fourth-content-row").length > 0) {
    const contentTopFourth = $(".fourth-content-row").offset().top - 600;
    if ($(this).scrollTop() > contentTopFourth) {
      $(".fourth-content-row").addClass("motion-second");
    } else {
      $(".fourth-content-row").removeClass("motion-second");
    }
  }
  if ($(".fifth-content-row").length > 0) {
    const contentTopFourth = $(".fifth-content-row").offset().top - 600;
    if ($(this).scrollTop() > contentTopFourth) {
      $(".fifth-content-row").addClass("motion");
    } else {
      $(".fifth-content-row").removeClass("motion");
    }
  }

  if ($(".sixth-content-row").length > 0) {
    const contentTopFourth = $(".sixth-content-row").offset().top - 600;
    if ($(this).scrollTop() > contentTopFourth) {
      $(".sixth-content-row").addClass("motion-second");
    } else {
      $(".sixth-content-row").removeClass("motion-second");
    }
  }

  if ($(".seventh-content-row").length > 0) {
    const contentTopFourth = $(".seventh-content-row").offset().top - 600;
    if ($(this).scrollTop() > contentTopFourth) {
      $(".seventh-content-row").addClass("motion");
    } else {
      $(".seventh-content-row").removeClass("motion");
    }
  }
  const mainTop = $(".main-index").offset().top;
  if ($(".cite").length > 0) {
    const citeTop = $(".cite").offset().top;
    if ($(this).scrollTop() > citeTop) {
      $("header").removeClass("blend");
      $("header").addClass("no-blend");
    } else {
      $("header").removeClass("no-blend");
    }
  }
  if ($(this).scrollTop() > mainTop) {
    $("header").addClass("blend");
  } else {
    $("header").removeClass("blend");
  }
  if ($(".under-hero").length > 0) {
    const underT = $(".under-hero").offset().top - 800;
    if ($(this).scrollTop() > underT) {
      $(".under-hero p").addClass("under-transition");
    } else if ($(this).scrollTop() > mainTop) {
      $(".under-hero p").removeClass("under-transition");
    } else {
      $(".under-hero p").removeClass("under-transition");
    }
  }
if($('.service-container').length > 0) {
  const blendOutsideT = $('.service-container').offset().top - 400;
  if($(this).scrollTop() > blendOutsideT) {
    $('.outside-menu').addClass('blend-menu');
  } else {
    $('.outside-menu').removeClass('blend-menu');
  }
}
 
});

document.querySelectorAll(".scene").forEach((elem) => {
  const modifier = elem.getAttribute("data-modifier");

  basicScroll
    .create({
      elem: elem,
      from: 0,
      to: 1800,
      direct: true,
      props: {
        "--translateY": {
          from: "0",
          to: `${10 * modifier}px`,
        },
      },
    })
    .start();
});
