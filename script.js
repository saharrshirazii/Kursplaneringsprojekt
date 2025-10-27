 Dark-mod-/karam
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
/* Dark Mode */

Principer-för-bedömning-och-betygskriterier-/karam
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
 
