let o_counter__title_number = document.querySelectorAll(".o-counter__title-number");

function contadorScroll(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        let contador = 29;
  
        // Actualizar el valor inicial del contador
        entry.target.textContent = contador;
    
        // Reducir el contador cada segundo hasta llegar a 8
        const intervalo = setInterval(() => {
        contador--;
    
        // Actualizar el valor del contador en el elemento HTML
        entry.target.textContent = contador;
    
            if (contador <= 8) {
                // Detener el contador cuando llegue a 8
                clearInterval(intervalo);
            }
        }, 80);

        }
    });
  }
  
  // Crear el observador de la intersección
  const observador_scroll = new IntersectionObserver(contadorScroll, {
    // root: null,
    // rootMargin: "0px",
    // threshold: 0.5
    once: true
  });
   
  // Observar el elemento
  o_counter__title_number.forEach(item => observador_scroll.observe(item));