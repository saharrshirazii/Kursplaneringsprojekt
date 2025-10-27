const davidpic = document.getElementById("davidpic")

const davidGitLink = "https://github.com/Gagipose"

davidpic.addEventListener("dblclick", () => {
    confirm(`länk till github: ${davidGitLink}`)
    if (true) {
        window.open(davidGitLink)
    }
})