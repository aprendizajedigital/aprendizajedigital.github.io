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
  // animate__zoomIn.observe(document.querySelector('.main__button'));
  
  //DESCARGAR EBOOK
  // setTimeout(function () {
  
  //   var link = document.createElement('a');
  
  //   link.href = './ebooks-sin-correos/florales-modernos-para-negocio/los-10-secretos-que-las-floristas-NO-quieren-que-sepas.pdf';
  
  //   link.download = 'los-10-secretos-que-las-floristas-NO-quieren-que-sepas.pdf';
  
  //   link.dispatchEvent(new MouseEvent('click'));
  
  // }, 10000);