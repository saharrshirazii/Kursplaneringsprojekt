const veronicaImg = document.querySelector("#veronica")

veronicaImg.addEventListener("dblclick", () => {
    // alert("Länk till GitHub: https://github.com/vczarnotta")
    if(confirm("Gå vidare till Veronicas GitHub.")) {
        open("https://github.com/vczarnotta")
    }
})