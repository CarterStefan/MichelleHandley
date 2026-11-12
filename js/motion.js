/* ==========================================================================
   Michelle Handley · motion.js, loaded with defer
   --------------------------------------------------------------------------
   Three small enhancements. The page is complete without any of them:
   1. The header goes compact once the page has moved, and steps aside when
      the footer's logo comes into view (two logos never share a screen).
   2. Elements marked data-reveal fade and rise into view, staggered with
      whatever arrives alongside them.
   3. data-reveal="draw" (the stave) plays once when it enters view.
   The timings and the easing curve are custom properties in the stylesheet.
   With reduced motion, 2 and 3 are skipped and everything is simply shown.
   ========================================================================== */

const root = document.documentElement;
const stillPlease = window.matchMedia('(prefers-reduced-motion: reduce)');

// 1. Header ---------------------------------------------------------------------
const header = document.querySelector('.site-header');

if (header) {
  let queued = false;
  const update = () => {
    queued = false;
    header.classList.toggle('is-compact', window.scrollY > 24);
  };
  window.addEventListener('scroll', () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();

  // The footer carries its own logo and gold icons, so the bar leaves once
  // the footer has a fifth of the screen
  const footer = document.querySelector('.site-footer');
  if (footer && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      header.classList.toggle('is-away', entry.isIntersecting);
    }, { rootMargin: '0px 0px -20% 0px' }).observe(footer);
  }
}

// 2 and 3. Reveals --------------------------------------------------------------
const targets = [...document.querySelectorAll('[data-reveal]')];
const show = (el) => el.classList.add('is-in');

if (stillPlease.matches || !('IntersectionObserver' in window)) {
  targets.forEach(show);
} else {
  const decorative = (el) => el.dataset.reveal === 'draw';
  const onScreen = (el) => {
    const box = el.getBoundingClientRect();
    return box.top < window.innerHeight && box.bottom > 0;
  };

  // Text that's already on screen stays put: nothing a visitor can see is
  // ever hidden and shown again. The stave still plays.
  targets.filter((el) => !decorative(el) && onScreen(el)).forEach(show);
  root.classList.add('has-motion');

  const observer = new IntersectionObserver((entries) => {
    // Whatever arrives together is staggered together, top to bottom, left to right
    entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        || a.boundingClientRect.left - b.boundingClientRect.left)
      .forEach((entry, index) => {
        entry.target.style.setProperty('--i', Math.min(index, 8));
        show(entry.target);
        observer.unobserve(entry.target);
      });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });

  targets.filter((el) => !el.classList.contains('is-in')).forEach((el) => observer.observe(el));

  // If someone turns reduced motion on mid-visit, show whatever is left
  stillPlease.addEventListener('change', () => {
    if (stillPlease.matches) targets.forEach(show);
  });
}
