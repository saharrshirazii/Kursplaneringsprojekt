const btn = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');

function openMenu() {
  btn.classList.add('is-open');
  btn.setAttribute('aria-expanded', 'true');
  btn.setAttribute('aria-label', 'Stäng meny');
  nav.hidden = false;
}

function closeMenu() {
  btn.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Öppna meny');
  nav.hidden = true;
}

function toggleMenu() {
  const isOpen = btn.classList.contains('is-open');
  isOpen ? closeMenu() : openMenu();
}

btn.addEventListener('click', toggleMenu);

/* ESC-stängning */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && btn.classList.contains('is-open')) {
    closeMenu();
    btn.focus();
  }
});

/* Klick utanför stänger i mobil och mindre skärmar*/
document.addEventListener('click', (e)=>{
  const clickInside = e.target.closest('.navbar');
  const isDesktop = window.matchMedia('(min-width:768px)').matches;
  if(!clickInside && btn.classList.contains('is-open') && !isDesktop){
    closeMenu();
  }
});

/* Resize-justering för hidden */
const mq = window.matchMedia('(min-width:768px)');
function handleResize(e){
  if(e.matches){
    nav.hidden = false;
  } else if(!btn.classList.contains('is-open')){
    nav.hidden = true;
  }
}
mq.addEventListener('change', handleResize);
handleResize(mq);
