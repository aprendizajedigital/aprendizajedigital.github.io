
// //animate__bounceIn
// const animate__bounceIn = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('animate__animated');
//       entry.target.classList.add('animate__bounceIn');
//     }
//   });
// });

// animate__bounceIn.observe(document.querySelector('.form__button')); 

//   //animate__fadeInLeft
//   const animate__fadeInLeft = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('animate__animated');
//         entry.target.classList.add('animate__fadeInLeft');
//       }
//     });
//   });

//   animate__fadeInLeft.observe(document.querySelector('.container-ebook')); 

//   //animate__fadeInRight
//   const animate__fadeInRight = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('animate__animated');
//         entry.target.classList.add('animate__fadeInRight');
//       }
//     });
//   });

//   animate__fadeInRight.observe(document.querySelector('.form-container'));

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

animate__zoomIn.observe(document.querySelector('.container-ebook'));
animate__zoomIn.observe(document.querySelector('.form-container'));
animate__zoomIn.observe(document.querySelector('.form__button'));

//-------------------------------------------Sweet Alert en Accion-------------------------------------------

document.querySelector(".form__button").addEventListener('click', function () {

  let timerInterval;
  if (true) {
    Swal.fire({
      title: 'Descargando Ebook...',
      html: 'Por favor espere <strong></strong> segundos...',
      imageUrl: './ebooks-sin-correos/florales-modernos-para-negocio/buscando-ebook.jpg',
      imageWidth: 400,
      timer: 4000,
      timerProgressBar: true,
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        const timer_strong = Swal.getHtmlContainer().querySelector('strong')
        timerInterval = setInterval(() => {
          timer_strong.textContent = (Swal.getTimerLeft() / 1000).toFixed(0);
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        window.location.href = './gracias.html';
      }
    });
    // document.querySelector(".form__button").setAttribute("disabled", "disabled");
    // document.querySelector(".form__button").style.display = "none";
  }
})