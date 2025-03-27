document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".carrusel-slides");
  const slideItems = document.querySelectorAll(".carrusel-slide");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let Index = 0;

  function moveCarrusel() {
    /*slides.style.transform = `translateX(-${Index * 100}%)`;*/
    let gapSize = 20; // Tamaño del gap en px
    let slideWidth = slideItems[0].offsetWidth + gapSize; // Ancho del slide + gap
    slides.style.transform = `translateX(-${Index * slideWidth}px)`;
  }

  /*Escucha el evento resize y recalcular slideWidth*/ 
    window.addEventListener("resize", () => {
    slideWidth = slideItems[0].offsetWidth + gapSize;
    moveCarrusel();
   })

  prevBtn.addEventListener("click", () => {
    Index = (Index - 1 + slideItems.length) % slideItems.length;
    moveCarrusel();
  });

  nextBtn.addEventListener("click", () => {
    Index = (Index + 1) % slideItems.length;
    moveCarrusel();
  });




  // Agregar control táctil para móviles
  let touchStartX = 0;
  let touchEndX = 0;

  slides.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  });

  slides.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      nextBtn.click();
    } else if (touchEndX - touchStartX > 50) {
      prevBtn.click();
    }
  });
});
