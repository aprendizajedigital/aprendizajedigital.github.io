
  //animate__bounceIn
  const animate__bounceIn = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__bounceIn');
      }
    });
  });
  
  animate__bounceIn.observe(document.querySelector('.form__button')); 

    //animate__fadeInLeft
    const animate__fadeInLeft = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInLeft');
        }
      });
    });
    
    animate__fadeInLeft.observe(document.querySelector('.container-ebook')); 

    //animate__fadeInRight
    const animate__fadeInRight = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__fadeInRight');
        }
      });
    });

    animate__fadeInRight.observe(document.querySelector('.form-container'));

    //-------------------------------------------Sweet Alert en Accion-------------------------------------------
    
    document.querySelector(".form__button").addEventListener('click', function () {
      
      if(isValidate_email === true && isValidate_name_complete === true){
        Swal.fire({
          title: 'Cargando...',
          html: 'Por favor espere...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        });

        document.querySelector(".form__button").setAttribute("disabled", "disabled");
        document.querySelector(".form__button").style.display = "none";
      }
    })