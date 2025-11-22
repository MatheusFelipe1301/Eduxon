// ageFilter.js - alterna conteúdo por faixa etária (função)
/* FUNCTION: toggleAgeGroup */
function toggleAgeGroup(){
  const key = 'ageGroup';
  const current = localStorage.getItem(key) || '3-6';
  const next = current === '3-6' ? '7-10' : '3-6';
  localStorage.setItem(key, next);
  return next;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('ageToggle');
  const note = document.querySelector('.note');
  function reflect(){
    const g = localStorage.getItem('ageGroup') || '3-6';
    if(note) note.textContent = 'Conteúdo ajustado para faixa: ' + g;
  }
  reflect();
  if(btn) btn.addEventListener('click', ()=>{ const g = toggleAgeGroup(); reflect(); showNotification('Faixa trocada para ' + g); });
});
