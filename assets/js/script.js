const menuBtn = document.getElementById("btn-menu")
const menu = document.getElementById("menu-movile")
const sendMail = document.getElementById("send")

menuBtn.addEventListener("click", ()=> {
    if (menuBtn.innerHTML === "Menu") {
        menuBtn.innerHTML = "Cerrar";
    } else {
        menuBtn.innerHTML = "Menu";
    }
    menuBtn.classList.toggle("is-error")

    menu.classList.toggle("hidden-menu")
})
sendMail.addEventListener("click", ()=> {
    sendMail.classList.toggle("is-success")
})