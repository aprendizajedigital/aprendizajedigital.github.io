// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (isValidate_name_complete===false || isValidate_email===false) {
            event.preventDefault();
            event.stopPropagation();
          }

          if(isValidate_name_complete===true){
            document.querySelector('#name_complete').classList.add("is-valid");
            document.querySelector('#name_complete').classList.remove("is-invalid");
          }

          else{
            document.querySelector('#name_complete').classList.add("is-invalid");
            document.querySelector('#name_complete').classList.remove("is-valid");
          }

          if(isValidate_email===true){
            document.querySelector('#email').classList.add("is-valid");
            document.querySelector('#email').classList.remove("is-invalid");
          }

          else{
            document.querySelector('#email').classList.add("is-invalid");
            document.querySelector('#email').classList.remove("is-valid");
          }

        }, false);
      });
    }, false);
  })();

  const inputs = document.querySelectorAll('input');

  let isValidate_name_complete = false,
  isValidate_email = false;

  const patterns = {
    // name_complete: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
    name_complete: /^[a-zA-Z ]{2,60}$/,
    // username: /^[a-z\d]{5,12}$/i,
    // password: /^[\d\w@-]{8,20}$/i,
    // email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    email: /[^@]+@[^@]+\.[^@]+/,
    // phone: /^\d{3}-\d{3}-\d{4}$/
  };

  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validate(e.target, patterns[e.target.attributes.id.value]);
    });
  });

  function validate(field, regex) {
    if(field.attributes.id.value == "name_complete"){
      if (regex.test((field.value).trim())) {
        isValidate_name_complete = true;
        console.log("isValidate_name_complete: " + isValidate_name_complete);
      } else {
        isValidate_name_complete = false;
        console.log("isValidate_name_complete: " + isValidate_name_complete);
      }
    }
    
    if(field.attributes.id.value == "email"){
      if (regex.test((field.value).trim())) {
        isValidate_email = true;
        console.log("isValidate_email: " + isValidate_email);
      } else {
        isValidate_email = false;
        console.log("isValidate_email: " + isValidate_email);
      }
    }
  }

  //VALIDAR LIMITE DE CARACTERES
  document.querySelector("#name_complete").addEventListener('keypress', (e) => {
    document.querySelector("#name_complete").maxLength = 60;
    if(document.querySelector("#name_complete").value.length == 60){
      e.preventDefault();  
    }
  });

  document.querySelector("#email").addEventListener('keypress', (e) => {
    document.querySelector("#email").maxLength = 80;
    if(document.querySelector("#email").value.length == 80){
      e.preventDefault();   
    }
  });

  //VALIDAR PASTE
  document.querySelector("#name_complete").addEventListener('paste', (e) => {
    document.querySelector("#name_complete").maxLength = 60;
  });

  document.querySelector("#email").addEventListener('paste', (e) => {
    document.querySelector("#email").maxLength = 80;
  });

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
  
  animate__bounceIn.observe(document.querySelector('.form-container')); 

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

    
    
    