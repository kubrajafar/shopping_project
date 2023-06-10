const nav_menu = document.querySelector(".nav-menu");
const nav_hamburger = document.querySelector(".nav-hamburger");

nav_hamburger.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
});

