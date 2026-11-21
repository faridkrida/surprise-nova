// Efek halaman akhir sengaja dibuat ringan agar nyaman dibuka di ponsel.
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.final-card');
  if (card && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    card.animate(
      [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 750, easing: 'ease-out', fill: 'both' }
    );
  }
});
