/* Inabilita el click secundario*/ /*Fastidioso para el usuario
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, false);*/

/* Solo protegemos las imagenes*/
document.querySelectorAll("img, .protegido").forEach((el) => {
  el.addEventListener("contextmenu", (e) => e.preventDefault());
});

document.addEventListener("dragstart", function (e) {
  e.preventDefault();
}, false);
