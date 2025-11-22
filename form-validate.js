// form-validate.js - valida form do contato
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');
  if(!form) return;
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = { name: form.cname.value.trim(), email: form.cemail.value.trim(), message: form.cmessage.value.trim() };
    if(data.name.length<2) { result.textContent='Nome inválido'; return; }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)){ result.textContent='Email inválido'; return; }
    result.textContent = 'Mensagem recebida — (simulação). Obrigado, ' + data.name + '!';
    form.reset();
  });
});
