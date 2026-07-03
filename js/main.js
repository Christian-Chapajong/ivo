// Countdown to the celebration — 24 Oct 2026, 16:00 Europe/London (BST, UTC+1)
const TARGET_DATE = new Date('2026-10-24T16:00:00+01:00');

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now;

  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
  };

  if (diff <= 0) {
    els.days.textContent = '00';
    els.hours.textContent = '00';
    els.minutes.textContent = '00';
    els.seconds.textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  els.days.textContent = String(days).padStart(2, '0');
  els.hours.textContent = String(hours).padStart(2, '0');
  els.minutes.textContent = String(minutes).padStart(2, '0');
  els.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Lightbox gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.gallery__item').forEach((item) => {
  item.addEventListener('click', () => {
    const fullSrc = item.getAttribute('data-full');
    const altText = item.querySelector('img').getAttribute('alt');
    lightboxImg.setAttribute('src', fullSrc);
    lightboxImg.setAttribute('alt', altText);
    lightbox.classList.add('is-open');
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImg.setAttribute('src', '');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Back-to-top button
const toTopBtn = document.getElementById('to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    toTopBtn.classList.add('is-visible');
  } else {
    toTopBtn.classList.remove('is-visible');
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
