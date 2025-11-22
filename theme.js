// theme.js - alternador de tema (função obrigatória)
/* FUNCTION: toggleTheme */
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle('theme-dark');
  localStorage.setItem('themeDark', isDark ? '1' : '0');
  return isDark;
}

document.addEventListener('DOMContentLoaded', ()=>{
  // restaura preferência
  const prefer = localStorage.getItem('themeDark') === '1';
  if(prefer) document.body.classList.add('theme-dark');

  const btn = document.getElementById('themeToggle');
  if(btn) btn.addEventListener('click', ()=>{
    const now = toggleTheme();
    showNotification(now ? 'Tema escuro ativado' : 'Tema claro ativado');
  });

  // Toggle mobile menu
  const menuToggleBtn = document.querySelector('.menu-toggle');
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }
});
