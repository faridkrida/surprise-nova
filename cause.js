document.addEventListener('DOMContentLoaded', () => {
  const messages = [
    { text: 'Kamu punya cara sendiri untuk membuat suasana terasa lebih menyenangkan. Semoga kamu selalu dikelilingi orang-orang yang menghargaimu. 💗', gif: 'gif1.gif' },
    { text: 'Semoga semua hal yang sedang kamu usahakan perlahan menemukan jalannya. Jangan lupa bangga pada dirimu sendiri, ya. 🌷', gif: 'gif2.gif' },
    { text: 'Tetap jadi Nova yang ceria, baik, dan punya banyak alasan untuk tersenyum. Dunia butuh lebih banyak energi positif sepertimu. ✨', gif: 'gif1.gif' },
    { text: 'Di hari spesial ini, semoga kesehatan, ketenangan, kebahagiaan, dan kesempatan baik selalu menyertaimu. Selamat bertambah usia! 🎂', gif: 'gif2.gif' }
  ];
  const container = document.getElementById('reasons-container');
  const button = document.getElementById('next-button');
  const counter = document.getElementById('reason-counter');
  const ending = document.getElementById('ending-section');
  let current = 0;

  button.addEventListener('click', () => {
    if (current >= messages.length) return;
    const item = messages[current];
    const card = document.createElement('article');
    card.className = 'reason-card';
    const paragraph = document.createElement('p');
    paragraph.className = 'reason-text';
    paragraph.textContent = item.text;
    const image = document.createElement('img');
    image.src = item.gif;
    image.alt = 'Animasi dekoratif';
    image.loading = 'lazy';
    card.append(paragraph, image);
    if (current === 0) container.replaceChildren();
    container.appendChild(card);
    current += 1;
    counter.textContent = `${current} dari ${messages.length} pesan`;
    if (current < messages.length) {
      button.textContent = 'Buka pesan berikutnya 💌';
    } else {
      button.hidden = true;
      ending.hidden = false;
    }
  });

  // Hiasan hati bergerak; tidak mengganggu tombol atau navigasi.
  window.setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating';
    heart.textContent = ['💗', '✨', '🌸'][Math.floor(Math.random() * 3)];
    heart.style.left = `${Math.random() * 95}vw`;
    heart.style.top = `${70 + Math.random() * 25}vh`;
    document.body.appendChild(heart);
    window.setTimeout(() => heart.remove(), 4500);
  }, 1400);
});
