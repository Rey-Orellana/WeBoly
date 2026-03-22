// Menú hamburguesa - Versión CORREGIDA
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");
    let menuAbierto = false;
  
    // Verificar que los elementos existen
    if (!menuBtn || !navMenu) {
      console.error("No se encontraron los elementos del menú");
      return;
    }
  
    // Click en botón hamburguesa
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      menuAbierto = !menuAbierto;
  
      if (menuAbierto) {
        navMenu.classList.add("active");
        menuBtn.textContent = "✕";
        // Prevenir scroll del body
        document.body.style.overflow = "hidden";
      } else {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
        document.body.style.overflow = "";
      }
    });
  
    // Click en enlaces del menú
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
        menuAbierto = false;
        document.body.style.overflow = "";
      });
    });
  
    // Click fuera del menú para cerrar
    document.addEventListener("click", function (e) {
      if (
        menuAbierto &&
        !navMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
        menuAbierto = false;
        document.body.style.overflow = "";
      }
    });
  
    // Cerrar menú al redimensionar a desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
        menuAbierto = false;
        document.body.style.overflow = "";
      }
    });
  
    // Smooth scroll para los enlaces (opcional)
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href === "#") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      });
    });
  });
  
  // Validación simple del formulario
  const form = document.querySelector(".contacto-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Obtener valores
      const nombre = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const mensaje = this.querySelector("textarea").value;
  
      // Validación básica
      if (nombre && email && mensaje) {
        alert("¡Mensaje enviado con éxito! Te contactaremos pronto.");
        this.reset();
      } else {
        alert("Por favor, completa todos los campos");
      }
    });
  }
  
  // Animación suave al hacer scroll (opcional)
  const observerOptions = {
    threshold: 0.1,
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);
  
  // Observar tarjetas de productos
  document.querySelectorAll(".producto-card, .caracteristica").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
  