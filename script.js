
/* Dark Mode  */
const toggleIcon = document.getElementById('icon');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleIcon.src = 'sun.svg';
}

toggleIcon.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    toggleIcon.src = 'sun.svg';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleIcon.src = 'moon.svg';
    localStorage.setItem('theme', 'light');
  }
});



function togglePopOut(button, text) {
  const popOut = button.nextElementSibling;
  const ljus = button.parentElement; // cirkeln som knappen tillhör

  // Stäng alla andra pop-outs
  document.querySelectorAll('.pop-out').forEach(p => {
    if (p !== popOut) {
      p.classList.remove('show');
    }
  });

  // Sätt pop-out färg till samma som cirkeln
  const ljusFärg = window.getComputedStyle(ljus).backgroundColor;
  popOut.style.backgroundColor = ljusFärg;

  // Toggle aktuell pop-out
  if (popOut.classList.contains('show')) {
    popOut.classList.remove('show');
  } else {
    popOut.innerText = text;
    popOut.classList.add('show');
  }
}

// ------ LÄRANDEMÅL ------
const skillsBtn = document.querySelector("#skills-btn")
const knowledgeBtn = document.querySelector("#knowledge-btn")

const skillsSection = document.querySelector("#skills")
const knowledgeSection = document.querySelector("#knowledge")

skillsBtn.addEventListener("click", () => {
    // Visa färdigheter-innehållet och gör knappen mörkare
    skillsSection.classList.add("active");
    skillsBtn.classList.add("active");

    // Dölj kunskaper-innehållet och gör knappen ljusare om de är aktiva
    knowledgeSection.classList.remove("active");
    knowledgeBtn.classList.remove("active");
})

knowledgeBtn.addEventListener("click", () => {
    // Visa kunskaper-innehållet och gör knappen mörkare
    knowledgeSection.classList.add("active");
    knowledgeBtn.classList.add("active");

    // Dölj färdigheter-innehållet och gör knappen ljusare om de är aktiva
    skillsSection.classList.remove("active");
    skillsBtn.classList.remove("active");
})
 const btn = document.getElementById("menu-toggle");
const nav = document.getElementById("primary-nav");
function openMenu() {
  btn.classList.add("is-open");
  btn.setAttribute("aria-expanded", "true");
  btn.setAttribute("aria-label", "Stäng meny");
  nav.hidden = false;
}
function closeMenu() {
  btn.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-label", "Öppna meny");
  nav.hidden = true;
}
function toggleMenu() {
  const isOpen = btn.classList.contains("is-open");
  isOpen ? closeMenu() : openMenu();
}
btn.addEventListener("click", toggleMenu);
/* ESC-stängning */
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && btn.classList.contains("is-open")) {
    closeMenu();
    btn.focus();
  }
});
/* Klick utanför stänger i mobil och mindre skärmar*/
document.addEventListener("click", (e)=>{
  const clickInside = e.target.closest(".navbar");
  const isDesktop = window.matchMedia("(min-width:768px)").matches;
  if(!clickInside && btn.classList.contains("is-open") && !isDesktop){
    closeMenu();
  }
});
/* Resize-justering för hidden */
const mq = window.matchMedia("(min-width:768px)");
function handleResize(e){
  if(e.matches){
    nav.hidden = false;
  } else if(!btn.classList.contains("is-open")){
    nav.hidden = true;
  }
}
mq.addEventListener("change", handleResize);
handleResize(mq);