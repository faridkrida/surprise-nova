document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.getElementById('greeting');
  const message = 'Walau jarak sedang memisahkan, aku tetap ingin ikut membuat harimu terasa istimewa. ✨';
  let index = 0;
  if (greeting) {
    greeting.textContent = '';
    const type = () => {
      if (index < message.length) {
        greeting.textContent += message.charAt(index++);
        window.setTimeout(type, 38);
      }
    };
    type();
  }

  const heartLayer = document.querySelector('.floating-hearts');
  const symbols = ['♡', '💗', '✨', '🌸'];
  if (heartLayer) {
    window.setInterval(() => {
      const heart = document.createElement('span');
      heart.className = 'heart';
      heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.fontSize = `${14 + Math.random() * 20}px`;
      heart.style.animationDuration = `${7 + Math.random() * 5}s`;
      heartLayer.appendChild(heart);
      window.setTimeout(() => heart.remove(), 13000);
    }, 850);
  }

  if (window.gsap) {
    gsap.from('.home-card', { opacity: 0, y: 24, duration: 1, ease: 'power2.out' });
    gsap.from('h1', { opacity: 0, scale: .94, duration: .9, delay: .2 });
  }
});
