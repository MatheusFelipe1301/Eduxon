// confetti.js - pequena celebração visual (função)
/* FUNCTION: launchConfetti */
function launchConfetti() {
  // cria pequenos círculos por tempo curto
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = 0; container.style.top = 0; container.style.width = '100%'; container.style.height = '100%'; container.style.pointerEvents = 'none'; container.style.zIndex = 9998;
  document.body.appendChild(container);
  for(let i=0;i<30;i++){
    const b = document.createElement('div');
    b.style.position='absolute';
    b.style.left = Math.random()*100 + '%';
    b.style.top = Math.random()*20 + '%';
    b.style.width = b.style.height = (8+Math.random()*12) + 'px';
    b.style.borderRadius = '50%';
    b.style.opacity = '0.95';
    b.style.transform = 'translateY(0)';
    b.style.transition = 'transform 1.2s ease-in, opacity 1s';
    b.style.background = ['#ff6f61','#ffd166','#06d6a0','#4d96ff'][Math.floor(Math.random()*4)];
    container.appendChild(b);
    setTimeout(()=>{ b.style.transform = 'translateY(600px) rotate('+ (Math.random()*360) +'deg)'; b.style.opacity='0'; }, 50 + Math.random()*200);
  }
  setTimeout(()=>{ container.remove(); }, 1500);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('celebrateBtn');
  if(btn) btn.addEventListener('click', ()=> launchConfetti());
});
