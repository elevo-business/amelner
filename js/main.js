document.addEventListener('DOMContentLoaded', () => {

  /* current year */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* scroll progress bar */
  const pb = document.getElementById('scrollProgress');
  if (pb) {
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      pb.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
    }, { passive: true });
  }

  /* header shrink on scroll */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* mobile nav toggle */
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (toggle && nav) {
    const setBars = (open) => {
      const s = toggle.querySelectorAll('span');
      s[0].style.transform = open ? 'rotate(45deg) translate(6px,6px)' : '';
      s[1].style.opacity = open ? '0' : '';
      s[2].style.transform = open ? 'rotate(-45deg) translate(6px,-6px)' : '';
    };
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('active');
      setBars(open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('active');
      setBars(false);
      document.body.style.overflow = '';
    }));
  }

  /* reveal on scroll */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(e => obs.observe(e));
  }

  /* count-up numbers */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cobs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const dur = 1700, start = performance.now();
        const step = now => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toString();
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cobs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(e => cobs.observe(e));
  }

  /* smooth anchor scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});
