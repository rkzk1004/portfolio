// gsap 스크롤트리거 등록
gsap.registerPlugin(ScrollTrigger);

// 모든 해상도
function initCommon() {
  // sc-feature 애니메이션
  $('.sc-feature .group-list').each(function () {
    gsap.from(this, {
      scrollTrigger: {
        // markers: true,
        trigger: this,
        start: "0 85%",
        end: "0 0"
      },
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "power4.out"
    })
  })

  // 푸터 - back to top 클릭하면 맨 위로 이동
  $('.btn-top').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 400)
  })
}

// PC 전용
function initPC() {
  // 공통 - 마우스 따라다니는 동그라미
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
  $('.deco-mouse-out').each(function () {
    $(this).hover(function () {
      $cursorEl.addClass('out')
    }, function () {
      $cursorEl.removeClass('out')
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

  // 공통 - 마그네틱 효과
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
}

// 모바일 전용
function initMobile() {
}

// 해상도에 따라 스크립트 실행
function responsiveScripts() {
  initCommon();
  if ($(window).width() >= 1025) {
    initPC();
  } else {
    initMobile();
  }
}

// 문서 준비 완료 시 실행
$(document).ready(function () {
  responsiveScripts();
  $(window).resize(function () {
    responsiveScripts();
  });
});