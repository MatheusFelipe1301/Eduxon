// sounds.js - simples reprodução de som ao clicar
(function(){
  const audio = new Audio();
  // AI_ASSISTED: este arquivo foi sugerido parcialmente por IA para exemplos de UX.
  audio.src = 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3';
  document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('playSound');
    if(btn) btn.addEventListener('click', ()=>{ audio.currentTime = 0; audio.play().catch(()=>{ console.log('playback blocked'); }); });
  });
})();
