// game-memory.js - jogo da memória simples (não exige backend)
// Código organizado e sem erros
document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('memoryBoard');
  const status = document.getElementById('memoryStatus');
  if (!board) return;

  const items = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];

  // Embaralhar
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  let open = [];
  let matched = [];

  function showNotification(msg) {
    if (status) status.textContent = msg;
  }

  items.forEach((val) => {
    const c = document.createElement('div');
    c.className = 'card';
    c.dataset.val = val;
    c.textContent = '?';

    c.addEventListener('click', () => {
      if (open.includes(c) || matched.includes(c)) return;

      // Revelar carta
      c.textContent = val;
      open.push(c);

      // Comparar quando houver duas abertas
      if (open.length === 2) {
        const [c1, c2] = open;
        if (c1.dataset.val === c2.dataset.val) {
          matched.push(c1, c2);
          showNotification('Par encontrado!');
        } else {
          showNotification('Tente novamente...');
          setTimeout(() => {
            c1.textContent = '?';
            c2.textContent = '?';
          }, 700);
        }

        open = [];

        // Verificar vitória
        if (matched.length === items.length) {
          showNotification('Você ganhou!');
        }
      }
    });

    board.appendChild(c);
  });
});
