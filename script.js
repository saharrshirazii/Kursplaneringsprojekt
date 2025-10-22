// ------ LÄRANDEMÅL ------
const skillsBtn = document.querySelector("#skills-btn")
const knowledgeBtn = document.querySelector("#knowledge-btn")

const skillsSection = document.querySelector("#skills")
const knowledgeSection = document.querySelector("#knowledge")

skillsBtn.addEventListener("click", () => {
    // Visa färdigheter-innehållet och gör knappen mörkare
    skillsSection.classList.toggle("active");
    skillsBtn.classList.toggle("active");

    // Dölj kunskaper-innehållet och gör knappen ljusare om de är aktiva
    knowledgeSection.classList.remove("active");
    knowledgeBtn.classList.remove("active");
})

knowledgeBtn.addEventListener("click", () => {
    // Visa kunskaper-innehållet och gör knappen mörkare
    knowledgeSection.classList.toggle("active");
    knowledgeBtn.classList.toggle("active");

    // Dölj färdigheter-innehållet och gör knappen ljusare om de är aktiva
    skillsSection.classList.remove("active");
    skillsBtn.classList.remove("active");
})