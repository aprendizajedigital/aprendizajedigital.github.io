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

setTimeout(() => {
  //--INICIO ENVIANDO DATOS--

  const serviceID = 'default_service';
  const templateID = 'template_fc02x9n';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // btn.nodeValue = 'Listo!';
      // alert('Tu ebook fue enviado');
    }, (err) => {
      // btn.nodeValue = 'Enviado';
      alert(JSON.stringify(err));
  });

  //--FIN ENVIANDO DATOS--
}, 10000);