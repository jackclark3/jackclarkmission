// ============================================
// MAIN JAVASCRIPT — Jack Clark Mission Site
// ============================================

// Sticky nav shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}
function closeMobile() {
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

// Re-observe after posts render (they're added dynamically)
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    observer.observe(el);
  });
}, 200);

// Lightbox
let _lbSectionIdx = 0;
let _lbPhotoIdx = 0;

function openLightbox(src, alt, sectionIdx, photoIdx) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  _lbSectionIdx = sectionIdx !== undefined ? sectionIdx : -1;
  _lbPhotoIdx = photoIdx !== undefined ? photoIdx : 0;
  img.src = src;
  img.alt = alt || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  _updateLightboxNav();
}

function _updateLightboxNav() {
  const prev = document.getElementById('lightboxPrev');
  const next = document.getElementById('lightboxNext');
  const counter = document.getElementById('lightboxCounter');
  const photos = (_lbSectionIdx >= 0 && typeof gallerySections !== 'undefined')
    ? gallerySections[_lbSectionIdx].photos : [];
  const show = photos.length > 1;
  if (prev) prev.style.display = show ? 'flex' : 'none';
  if (next) next.style.display = show ? 'flex' : 'none';
  if (counter) counter.textContent = show ? (_lbPhotoIdx + 1) + ' / ' + photos.length : '';
}

function navigateLightbox(dir) {
  if (_lbSectionIdx < 0 || typeof gallerySections === 'undefined') return;
  const photos = gallerySections[_lbSectionIdx].photos;
  _lbPhotoIdx = (_lbPhotoIdx + dir + photos.length) % photos.length;
  const photo = photos[_lbPhotoIdx];
  const img = document.getElementById('lightboxImg');
  if (img) { img.src = encodeURI(photo.src); img.alt = photo.alt || ''; }
  _updateLightboxNav();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navigateLightbox(1);
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
});

// Touch swipe navigation
(function() {
  let _touchStartX = 0;
  document.addEventListener('touchstart', (e) => {
    const lb = document.getElementById('lightbox');
    if (lb && lb.classList.contains('open')) _touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('open')) return;
    const dx = e.changedTouches[0].clientX - _touchStartX;
    if (Math.abs(dx) > 50) navigateLightbox(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

// Read More toggle for story
function toggleStory() {
  const more = document.getElementById('storyMore');
  const btn = document.getElementById('readMoreBtn');
  if (!more || !btn) return;
  const isOpen = more.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.innerHTML = isOpen
    ? 'Read Less <span class="read-more-arrow" style="display:inline-block;transform:rotate(180deg)">&#8595;</span>'
    : 'Read More <span class="read-more-arrow">&#8595;</span>';
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
