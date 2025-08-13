document.querySelectorAll(".toggleBtn").forEach((boton) => {
  boton.addEventListener("click", function() {
    const contenido = this.nextElementSibling; // El div .contenido que está después del botón

    if (contenido.style.display === "block") {
      contenido.style.display = "none";
      this.textContent = "Leer más";
    } else {
      contenido.style.display = "block";
      this.textContent = "Ocultar";
    }
  });
});

