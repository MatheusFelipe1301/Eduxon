// cursor.js - efeito visual de transformação do mouse
// Este arquivo contém código escrito manualmente e também linhas sugeridas pela IA.
// AI_ASSISTED: pequenas sugestões de escolha de easing foram geradas com IA.
(function(){
  const cursor = document.createElement('div');
  cursor.id = 'fancy-cursor';
  Object.assign(cursor.style, {
    position: 'fixed', width: '18px', height: '18px', borderRadius: '50%',
    pointerEvents: 'none', transform: 'translate(-50%,-50%)', zIndex: 9999,
    transition: 'transform 120ms ease, background 200ms ease, width 120ms ease, height 120ms ease'
  });
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // efeito ao clicar
  window.addEventListener('mousedown', ()=>{
    cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
    cursor.style.background = 'rgba(255,111,97,0.9)';
  });
  window.addEventListener('mouseup', ()=>{
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = 'transparent';
  });
})();
