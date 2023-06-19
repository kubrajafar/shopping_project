const nav_menu = document.querySelector(".nav-menu");
const nav_hamburger = document.querySelector(".nav-hamburger");

nav_hamburger.addEventListener("click", () => {
  nav_menu.classList.toggle("active");
});

const animate__fadeInLeftBig = document.querySelectorAll(
  ".animate__fadeInLeftBig"
);

document.addEventListener("scroll", (e) => {
  if (window.scrollY.toFixed(2) > 400 && window.scrollY.toFixed(2) < 800) {
    animate__fadeInLeftBig[0].classList.add("animate__animated")
    console.log(window.scrollY.toFixed(2));
  }
  if (window.scrollY.toFixed(2) > 400 && window.scrollY.toFixed(2) < 800) {
    animate__fadeInLeftBig[1].classList.add("animate__animated")
  }
  if (window.scrollY.toFixed(2) >400 && window.scrollY.toFixed(2) < 800) {
    animate__fadeInLeftBig[2].classList.add("animate__animated")
  }
});



