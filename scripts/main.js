
/* Scroll del navbar */
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/*Alternar entre modo oscuro y claro*/
function toggleTheme() {
  document.body.classList.toggle('dark-mode');/*cambia el tema*/
  localStorage.setItem("theme", document.body.classList.contains('dark-mode') ? "dark" : "light");/*guarda el tema*/
}
/*Cargar el tema guardado*/
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add('dark-mode');
  }
});