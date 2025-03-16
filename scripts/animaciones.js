
/*Scroll del navbar*/
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
