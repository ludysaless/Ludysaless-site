// Contador local de demonstração. Para visitas globais reais, conectaremos um contador/backend.
const key='ludy-visited'; const el=document.getElementById('visits');
if(!localStorage.getItem(key)){localStorage.setItem(key,'1'); el.textContent=String(Number(el.textContent)+1)}
