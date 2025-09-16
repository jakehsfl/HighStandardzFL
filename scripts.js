
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    if (nav) nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, {threshold: 0.15});
  document.querySelectorAll('section').forEach(s => { s.classList.add('hidden'); io.observe(s); });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      if (!name) return alert('Please enter your name.');
      if (!phone) return alert('Please enter your phone number.');
      alert('Thanks, ' + (name || 'there') + '! This demo form does client-side validation only.');
      form.reset();
    });
  }
});

// Hero slider
let slides = document.querySelectorAll('.hero-slider .slide');
let idx = 0;
setInterval(() => {
  slides[idx].classList.remove('active');
  idx = (idx + 1) % slides.length;
  slides[idx].classList.add('active');
}, 5000);
