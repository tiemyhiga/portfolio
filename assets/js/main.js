/* Tiemy Higa — vitrine de projetos · comportamento.
 * Script clássico (sem módulos) para a página funcionar também em file://.
 */
(function (window, document) {
  'use strict';

  const i18n = window.PortfolioI18n;

  /* ------------------------------------------------------------- idioma */

  const langRoot = document.querySelector('[data-lang-switch]');
  const langToggle = document.querySelector('[data-lang-toggle]');
  const langMenu = langRoot && langRoot.querySelector('.lang__menu');

  function closeLangMenu() {
    if (!langMenu) return;
    langMenu.hidden = true;
    langToggle.setAttribute('aria-expanded', 'false');
  }

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = langMenu.hidden;
      langMenu.hidden = !open;
      langToggle.setAttribute('aria-expanded', String(open));
    });

    langMenu.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-lang-option]');
      if (!btn) return;
      i18n.applyLang(btn.getAttribute('data-lang-option'));
      closeLangMenu();
      langToggle.focus();
    });

    document.addEventListener('click', function (e) {
      if (!langRoot.contains(e.target)) closeLangMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLangMenu();
    });
  }

  /* --------------------------------------------------------- menu mobile */

  const burger = document.querySelector('[data-nav-toggle]');
  const mobile = document.getElementById('nav-mobile');

  if (burger && mobile) {
    burger.addEventListener('click', function () {
      const open = mobile.hidden;
      mobile.hidden = !open;
      burger.setAttribute('aria-expanded', String(open));
    });

    mobile.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        mobile.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ----------------------------------------------------------- barra fixa */

  const nav = document.getElementById('nav');
  if (nav) {
    let ticking = false;
    const onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        nav.classList.toggle('is-stuck', window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------- revelação ao rolar */

  const revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    revealables.forEach(function (el, i) {
      // escalona irmãos para a lista cascatear em vez de aparecer de uma vez
      el.style.transitionDelay = (i % 4) * 60 + 'ms';
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------ ano */

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------------------------------------------------------------- boot */

  i18n.applyLang(i18n.detectLang());
})(window, document);
