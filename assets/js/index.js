$(function () {
  // 마우스 따라다니는 동그라미
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
});