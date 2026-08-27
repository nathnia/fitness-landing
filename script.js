// ===== Mobile nav toggle =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let open = false;
hamburger.addEventListener('click', () => {
  open = !open;
  mobileMenu.style.maxHeight = open ? '260px' : '0px';
  hamburger.setAttribute('aria-expanded', open);
  hamburger.querySelectorAll('span').forEach((s, i) => {
    if (i === 0) s.style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
    if (i === 1) s.style.opacity = open ? '0' : '1';
    if (i === 2) s.style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
  });
});
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  open = false;
  mobileMenu.style.maxHeight = '0px';
}));

// ===== Active nav link — click + scroll sync =====
const navAnchors = document.querySelectorAll('.nav-link');
const mobileAnchors = document.querySelectorAll('.nav-link-mobile');
const sections = document.querySelectorAll('section[id]');

function setActive(id) {
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
  });
}

navAnchors.forEach(a => {
  a.addEventListener('click', () => {
    setActive(a.getAttribute('href').replace('#', ''));
  });
});
mobileAnchors.forEach(a => {
  a.addEventListener('click', () => {
    setActive(a.getAttribute('href').replace('#', ''));
  });
});

function syncActiveOnScroll() {
  let current = sections[0]?.id;
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  setActive(current);
}
window.addEventListener('scroll', syncActiveOnScroll);
setActive('home'); // default state saat page load

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ===== Play button =====
document.getElementById('playBtn').addEventListener('click', () => alert('Video coming soon!'));