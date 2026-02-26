// DRAG SCROLL
const sliders = document.querySelectorAll('.skill-scroll, .work-scroll');

sliders.forEach(slider => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
  });

  slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
});

// SCROLL REVEAL
const reveal = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  reveal.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

reveal.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(60px)';
  sec.style.transition = '0.8s ease';
});
