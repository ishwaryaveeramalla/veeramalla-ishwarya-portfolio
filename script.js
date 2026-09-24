document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',()=>document.querySelector('nav').classList.remove('open'));
});
