document.addEventListener('DOMContentLoaded', () => {

  /* aktuelles Jahr */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* Altersabfrage — einmalig, per localStorage gemerkt */
  const gate = document.getElementById('ageGate');
  if (gate) {
    let confirmed = false;
    try { confirmed = localStorage.getItem('amelner-age-ok') === '1'; } catch (e) { /* privater Modus */ }
    if (!confirmed) {
      gate.classList.add('active');
      document.body.classList.add('gate-locked');
      document.getElementById('ageYes').addEventListener('click', () => {
        try { localStorage.setItem('amelner-age-ok', '1'); } catch (e) { /* ok */ }
        gate.classList.remove('active');
        document.body.classList.remove('gate-locked');
      });
      document.getElementById('ageNo').addEventListener('click', () => {
        document.getElementById('ageMsg').style.display = 'block';
      });
    }
  }

  /* Header-Zustand beim Scrollen.
     Seiten ohne dunklen Hero (Impressum, Datenschutz) tragen header--solid und
     behalten den deckenden Kopf dauerhaft — sonst stuende helle Schrift auf
     hellem Papier. */
  const header = document.getElementById('header');
  if (header && !header.classList.contains('header--solid')) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile Navigation */
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('active', open);
      document.body.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    };
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('active')));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  }

  /* Sanftes Einblenden beim Scrollen */
  const rvEls = document.querySelectorAll('.rv');
  if (rvEls.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    rvEls.forEach(e => obs.observe(e));
  }

  /* Dezente Hero-Parallaxe (nur ohne reduced motion) */
  const heroImg = document.querySelector('.hero-bg img');
  if (heroImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const s = window.scrollY;
      if (s < window.innerHeight) heroImg.style.transform = 'translateY(' + s * 0.18 + 'px)';
    }, { passive: true });
  }

  /* Sanfter Anker-Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

});
