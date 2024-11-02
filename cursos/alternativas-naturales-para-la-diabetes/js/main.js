const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: "1",
    spaceBetween: 0,

    breakpoints:{
        770:{ 
            slidesPerView: "2",
            spaceBetween: 15
        }
    },

    direction: 'horizontal',
    loop: true,

    autoplay:{
        delay: 3000,
        pauseOnMouseEnter: true
    },

    // effect: "coverflow",

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: "true"
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });