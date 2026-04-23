/* ============================================================
   EDILINE STUDIO — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── HEADER SCROLL EFFECT ─────────────────────────────── */
  const header = document.querySelector('.site-header');

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run on load in case page is already scrolled
  }

  /* ── MOBILE NAV ───────────────────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links-group');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  /* ── FAQ ACCORDION ────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // close all
      faqItems.forEach(i => i.classList.remove('open'));

      // open clicked (unless it was already open)
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ── SMOOTH SCROLL dla anchor linków ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });

      // zamknij mobile nav jeśli otwarty
      if (navLinks) navLinks.classList.remove('nav-open');
    });
  });

  /* ── FADE-IN ON SCROLL (Intersection Observer) ────────── */
  const fadeEls = document.querySelectorAll(
    '.titanium-card, .service-card, .testimonial-card, .gallery-item, .feature-item'
  );

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
      io.observe(el);
    });
  }

});
