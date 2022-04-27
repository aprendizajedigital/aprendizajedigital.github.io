    
   //-----------------------------------------ACTIVAR ANIMACIONES CUANDO ESTAN EN VIEWPORT---------------------------------------
  
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
  
  animate__fadeInLeft.observe(document.querySelector('.header__container-img__img')); 
  animate__fadeInLeft.observe(document.querySelector('.header-img'));
  animate__fadeInLeft.observe(document.querySelector('.learn__img'));
  animate__fadeInLeft.observe(document.querySelector('.lessons__title'));

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

  animate__fadeInRight.observe(document.querySelector('.embed-responsive'));
  animate__fadeInRight.observe(document.querySelector('.quotas__img'));

  //animate__slideInUp
  const animate__slideInUp = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__slideInUp');
      }
    });
  });

  for (let i = 0; i < document.querySelectorAll('.seal-container__img').length; i++) {
    animate__slideInUp.observe(document.querySelectorAll(".seal-container__img")[i]);
  }

  //animate__backInDown
  const animate__backInDown = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__backInDown');
      }
    });
  });

  animate__backInDown.observe(document.querySelector('.lessons__title'));

  //animate__bounceInLeft
  const animate__bounceInLeft = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__animated');
        entry.target.classList.add('animate__bounceInLeft');
      }
    });
  });

  animate__bounceInLeft.observe(document.querySelector('.achieve__title'));
  animate__bounceInLeft.observe(document.querySelector('.learn__title'));

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

animate__zoomIn.observe(document.querySelector('.opinions__title'));

  //----------------------------------------------------------CONTADOR------------------------------------------------------
  
    //CONTADOR -- OJO: ESTE ES UN SCRIPT PARA 2 CONTADORES , SI INTESTA USAR SOLO UNO O MÁS DE 2 PUEDE FALLAR
    (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy //yyyy + 1,
            dayMonth = "05/13/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
                document.querySelector(".countdown__days").innerText = Math.floor(distance / (day)),
                document.querySelector(".countdown__hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.querySelector(".countdown__minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.querySelector(".countdown__seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                document.querySelector(".container-clock__headline").innerText = "Expiró la Oferta - Cupos Llenos";
                document.querySelector(".countdown").style.display = "none";
                document.querySelector(".container-clock__final-message").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());