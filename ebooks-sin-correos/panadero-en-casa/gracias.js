//animate__zoomIn
const animate__zoomIn = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__zoomIn');
    }
  });
});

animate__zoomIn.observe(document.querySelector('.main__title'));
animate__zoomIn.observe(document.querySelector('.main__subtitle'));
animate__zoomIn.observe(document.querySelector('.main__description'));
animate__zoomIn.observe(document.querySelector('.main__icon'));

//SI PENSASTE QUE SE ENVIE EL CORREO DESPUES DE 10 O MÁS SEGUNDOS, NO SE PUEDE, PORQUE NECESITAS PASAR UNA VARIABLE. NECESITAS CREAR UN INPUT TEXT EN EL FORM Y ENVIAR ESE DATO QUE COLOCA EL USUARIO
//TAMPOCO SE PUEDE PROGRAMAR EL ENVIO DE UN CORREO, SE NECESITA PHP
