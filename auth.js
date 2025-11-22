// auth.js - simula uma autenticação simples e captura dados (função)
// Metade dos scripts exigidos devem ser funções: esta é uma delas.
/* FUNCTION: simulateLogin */
function simulateLogin(name, age){
  if(!name || !age) return { ok:false, message:'Preencha os campos' };
  const user = { name: String(name), age: Number(age), date: new Date().toISOString() };
  localStorage.setItem('sim_user', JSON.stringify(user));
  return { ok:true, user };
}

document.addEventListener('DOMContentLoaded', ()=>{
  const modal = document.getElementById('loginModal');
  const open = document.getElementById('openLogin');
  const close = document.getElementById('closeLogin');
  const form = document.getElementById('loginForm');
  if(open) open.addEventListener('click', ()=>{ modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); });
  if(close) close.addEventListener('click', ()=>{ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); });
  if(form) form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const age = form.age.value;
    const res = simulateLogin(name, age); // função usada
    const msg = res.ok ? `Bem-vindo, ${res.user.name}!` : res.message;
    alert(msg);
    if(res.ok){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); }
  });
});
