const menuopen = document.querySelector(".icon-user")
const menuclose = document.querySelector(".close")
const overlay = document.querySelector(".overlay")

menuopen.addEventListener("click", () => {
    overlay.classList.add("overlay-active")
})

menuclose.addEventListener("click", () => {
    overlay.classList.remove("overlay-active")
})

function changeimg(anything) {
    document.querySelector(".img-user-perfil").src = anything
    document.querySelector(".img-user").src = anything
}

const nameuser = document.querySelector(".name-user");
    function changetext(text) {
        nameuser.innerHTML = text;
}