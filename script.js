/* =============================================================
   script.js — Anabatic Education
   ============================================================= */

/* ── Navigation toggle ─────────────────────────────────────── */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}());

/* ── Testimonial carousel ───────────────────────────────────── */
(function () {
  var track     = document.getElementById('testimonial-track');
  var dotsEl    = document.getElementById('carousel-dots');
  var prevBtn   = document.querySelector('.carousel-btn--prev');
  var nextBtn   = document.querySelector('.carousel-btn--next');

  // Exit early if this page has no carousel
  if (!track || !prevBtn) return;

  var cards   = Array.from(track.children);
  var total   = cards.length;
  var current = 0;

  /* Build one dot per card */
  var dots = cards.map(function (_, i) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', function () { goTo(i); });
    dotsEl.appendChild(dot);
    return dot;
  });

  /* Is the carousel currently active (i.e. controls are visible)? */
  function isActive() {
    return window.getComputedStyle(prevBtn).display !== 'none';
  }

  /* Move to a given index */
  function goTo(index) {
    current = Math.max(0, Math.min(index, total - 1));

    if (isActive()) {
      track.style.transform = 'translateX(' + (-current * 100) + '%)';
    }

    prevBtn.disabled = (current === 0);
    nextBtn.disabled = (current === total - 1);

    dots.forEach(function (dot, i) {
      dot.classList.toggle('is-active', i === current);
    });
  }

  prevBtn.addEventListener('click', function () { goTo(current - 1); });
  nextBtn.addEventListener('click', function () { goTo(current + 1); });

  /* On resize, sync transform with current slide (or clear it on desktop) */
  window.addEventListener('resize', function () {
    if (isActive()) {
      track.style.transform = 'translateX(' + (-current * 100) + '%)';
    } else {
      track.style.transform = '';
    }
  });

  /* Initialise */
  goTo(0);
}());
