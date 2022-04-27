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

animate__fadeInLeft.observe(document.querySelector('.main__title')); 
animate__fadeInLeft.observe(document.querySelector('.main__description')); 

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
  
  animate__fadeInRight.observe(document.querySelector('.main__subtitle')); 
  animate__fadeInRight.observe(document.querySelector('.main__icon')); 