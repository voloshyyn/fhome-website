const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header-nav__menu-btn");
const navLinks = document.querySelector(".header-nav__menu-container");

btnSub.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    header.classList.toggle("nav-visible");
})

navLinks.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    header.classList.remove("nav-visible");
})