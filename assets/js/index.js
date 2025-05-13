// gsap 스크롤트리거 등록
gsap.registerPlugin(ScrollTrigger);

// ==============================
// 모든 해상도
// ==============================
function initCommon() {
  // 모든 리소스가 로드된 후에 실행
  $(window).on("load", function () {
    ScrollTrigger.refresh();
  });

  // 인트로 애니메이션
  // const introAnimation = gsap.timeline({ delay: 1 })
  // introAnimation
  //   .set("body", { height: "100dvh", overflow: "hidden" })
  //   .to($(".deco-intro span"), { opacity: 1, duration: 1, delay: 0.5 })
  //   .to($(".deco-intro span"), { opacity: 0, duration: 1, delay: 1 })
  //   .to($(".deco-intro"), { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", delay: 0.5, duration: 1 })
  //   .from(".header", { opacity: 0, duration: 0.3, delay: 0.3, ease: "power4.out" }, "b")
  //   .from(".sc-main h2", { opacity: 0, duration: 0.5, ease: "power4.out" }, "b+=0.5")
  //   .from(".sc-main .btn-viewdemo svg", { opacity: 0, duration: 0.5, ease: "power4.out" }, "b+=0.7")
  //   .from(".sc-main .btn-viewdemo i", { opacity: 0, duration: 0.5, ease: "power4.out" }, "b+=0.8")
  //   .from(".sc-main .btn-contact", { opacity: 0, duration: 0.5, ease: "power4.out" }, "b+=0.8")
  //   .set("body", { height: "auto", overflow: "auto" })

  // 공통 h2 애니메이션
  $('.common-title').each(function () {
    gsap.from(this, {
      scrollTrigger: {
        // markers: true,
        trigger: this,
        start: "0 88%",
        end: "0 0"
      },
      y: 100,
      opacity: 0,
      duration: 2.2,
      ease: "power4.out",
    })
  })

  // 메뉴 애니메이션 - 온/오프 효과
  const menuAnimation = gsap.timeline({ paused: true })
  menuAnimation
    .to(".menu", { opacity: 1, duration: 0.3, ease: "power4.out" })
    .from(".menu li", { yPercent: 30, opacity: 0, stagger: 0.1, duration: 0.2, ease: "power4.out" })
  $('.btn-menu').on("click", function () {
    $(this).toggleClass("on");
    $(".deco-mouse").toggleClass("toggle")
    $("body").toggleClass("toggle");
    $(".menu").toggleClass("toggle");
    if ($(".btn-menu").hasClass("on")) {
      menuAnimation.play()
    } else {
      menuAnimation.reverse()
    }
  })

  // 메뉴 애니메이션 - hover시 투명도 조절
  // ㄴ gsap 애니메이션과 css 속성이 겹치면 안되므로 스크립트로 구현
  $(".menu li").each(function () {
    $(this).hover(
      function () {
        $(this).siblings().find("a").css("opacity", "0.4")
      },
      function () {
        $(this).siblings().find("a").css("opacity", "1")
      }
    );
  });

  // 메뉴 애니메이션 - 메뉴 클릭시 사라짐
  $(".menu li").on("click", function () {
    menuAnimation.reverse();
    $(".btn-menu").removeClass("on")
    $(".menu").removeClass("toggle")
    $("body").removeClass("toggle")
  })

  // sc-main 애니메이션 - gruop-text
  gsap.to(".sc-main h2 .group-text", {
    scrollTrigger: {
      // markers: true,
      trigger: ".sc-main",
      start: "0 0",
      end: "50% 0",
      scrub: 1,
    },
    stagger: 0.2,
    yPercent: -80,
    opacity: 0,
  })

  // sc-demos 애니메이션 - group-list
  $('.sc-demos .group-list').each(function () {
    const $demosImg = $(this).find("img");
    const demosAnimaion = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: this,
        start: "0 90%",
        end: "0 0"
      }
    })
    demosAnimaion
      .from(this, { opacity: 0, duration: 2.2, ease: "power4.out" }, "a")
      .from($demosImg, { scale: 1.3, duration: 1.2 }, "a")
  })

  // sc-feature 애니메이션 - group-list
  $('.sc-feature .group-list').each(function () {
    gsap.from($(this), {
      scrollTrigger: {
        // markers: true,
        trigger: $(this),
        start: "0 88%",
        end: "0 0"
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })
  })

  // sc-feature 애니메이션 - and much more
  const $featureBottomText = $(".sc-feature > p");
  gsap.from($featureBottomText, {
    scrollTrigger: {
      // markers: true,
      trigger: $featureBottomText,
      start: "0 88%",
      end: "0 0"
    },
    y: 100,
    opacity: 0,
    duration: 2.2,
    ease: "power4.out"
  })

  // 푸터 애니메이션 - group-contact
  const footerGroupContact = gsap.timeline({
    scrollTrigger: {
      // markers: true,
      trigger: ".footer .group-contact",
      start: "0 70%",
      end: "0 0"
    },
    ease: "power4.out"
  })
  footerGroupContact
    .from("footer .wrap-contact", {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, "a")
    .from("footer .text", {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, "a+=0.35")

  // 푸터 - btn-top
  $('.btn-top').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 400)
  })
}

// ==============================
// PC 전용
// ==============================
function initPC() {
  // 공통 마우스 동그라미 - 따라다니는 효과
  const $cursorEl = $('.deco-mouse');
  $(document).on('mousemove', function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    gsap.to($cursorEl, {
      x: mouseX,
      y: mouseY,
      duration: 0.3
    })
  })

  // 공통 마우스 동그라미 - 클래스 컨트롤
  // ㄴ fade-out : 작아지면서 페이드아웃
  // ㄴ scale-up : 크기가 커짐
  // ㄴ demo-in : demos 리스트에 hover
  // ㄴ contact-in : footer contact 영역에 hover
  $('.deco-mouse-out').each(function () {
    $(this).hover(function () {
      $cursorEl.addClass('fade-out')
    }, function () {
      $cursorEl.removeClass('fade-out')
    })
  })
  $('.btn-menu').hover(function () {
    $cursorEl.addClass('scale-up')
  }, function () {
    $cursorEl.removeClass('scale-up')
  })
  $('.sc-demos .wrap-item').hover(function () {
    $cursorEl.addClass('demo-in')
  }, function () {
    $cursorEl.removeClass('demo-in')
  })
  $('footer .wrap-contact').hover(function () {
    $cursorEl.addClass('contact-in')
  }, function () {
    $cursorEl.removeClass('contact-in')
  })

  // 공통 마그네틱 효과
  const movement = 15; // 이동범위
  $('.ef-magnatic').each(function () {
    const $magnaticEl = $(this);
    $magnaticEl.on('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const moveX = ((relX - centerX) / centerX) * movement;
      const moveY = ((relY - centerY) / centerY) * movement;
      gsap.to($magnaticEl, {
        x: moveX,
        y: moveY,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    $magnaticEl.on('mouseleave', function () {
      gsap.to($magnaticEl, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    });
  });

  // sc-main 애니메이션 - 텍스트 hover시 opacity조절
  $(".sc-main .wrap-text").hover(
    function () {
      $(".sc-main .wrap-text").not(this).css({ opacity: 0.4, filter: "blur(3px)" });
    },
    function () {
      $(".sc-main .wrap-text").css({ opacity: 1, filter: "blur(0px)" });
    }
  );

  // sc-main 애니메이션 - btn-viewdemo
  gsap.to(".sc-main .btn-viewdemo", {
    scrollTrigger: {
      // markers: true,
      trigger: ".sc-main",
      start: "0 0",
      end: "70% 0",
      scrub: 1
    },
    xPercent: -100,
    opacity: 0
  })

  // sc-main 애니메이션 - btn-viewdemo클릭시 스크롤 이동
  $('.sc-main .btn-viewdemo').on("click", function () {
    const demosOffsetY = $('.sc-demos').offset().top;
    $('html, body').animate({ scrollTop: demosOffsetY }, 1500); // 500ms는 애니메이션 시간
  });

  // sc-main 애니메이션 - btn-contact
  gsap.to(".sc-main .btn-contact", {
    scrollTrigger: {
      // markers: true,
      trigger: ".sc-main",
      start: "0 0",
      end: "70% 0",
      scrub: 1
    },
    xPercent: 100,
    opacity: 0
  })

  // sc-main 애니메이션 - btn-contact클릭시 스크롤 이동
  $('.sc-main .btn-contact').on("click", function () {
    const footerOffsetY = $('.footer').offset().top;
    $('html, body').animate({ scrollTop: footerOffsetY }, 1000); // 500ms는 애니메이션 시간
  });
}

// =============================
// 모바일 전용
// =============================
function initMobile() {
}

// ===============================
// 해상도에 따라 스크립트 실행
// ===============================
function responsiveScripts() {
  initCommon();
  if ($(window).width() >= 1025) {
    initPC();
  } else {
    initMobile();
  }
}

// =================================
// 문서 준비 완료 시 실행
// =================================
$(document).ready(function () {
  responsiveScripts();
  $(window).resize(function () {
    responsiveScripts();
  });
});