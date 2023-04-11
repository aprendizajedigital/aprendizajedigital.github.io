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

// -- INICIO ENVIAR CORREO CON EMAIL.JS

let btn = document.querySelector(".form__button").firstChild; //Obtener el texto del boton
let email;

let flag = 0;

let valid_email = document.querySelector(".valid-email");
let invalid_email = document.querySelector(".invalid-email");

//FUNCION QUE VALIDA LOS INPUT EMAIL
function form_validate(param_email){
  if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(param_email))){
    invalid_email.style.display = "block";
    valid_email.style.display = "none";
  }else{
    valid_email.style.display = "block";
    invalid_email.style.display = "none";
  }
}

// VALIDAR CUANDO PRESIONAMOS EL BOTON ENVIAR
document.querySelector("#form").addEventListener('submit', function (e) {
  e.preventDefault();

  flag = 1;

  email = document.querySelector("#email").value.trim();

  //--INICIO VALIDANDO FORMULARIO--
    form_validate(email);

    if(invalid_email.style.display == "block")
      return false;
  //--FIN VALIDANDO FORMULARIO--
 
  btn.nodeValue = "Enviando..."

  setTimeout(() => {
    btn.nodeValue = 'Listo!';
  }, 1000);

  //INICIO EMAIL.JS
  const serviceID = 'default_service';
  const templateID = 'template_rpqhe0v';  

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      // btn.nodeValue = 'Listo!';
      // alert('Tu ebook fue enviado');
    }, (err) => {
      // btn.nodeValue = 'Enviado';
      //alert(JSON.stringify(err));
  });
  //FIN EMAIL.JS

  setTimeout(() => {
    window.location.href = './gracias.html';
  }, 2000);
});

// VALIDAR CUANDO PRESIONAMOS UNA TECLA
window.addEventListener("keyup", function (e){

  if(flag==0)
    return false;

  email = document.querySelector("#email").value.trim();
  form_validate(email);
});

// document.querySelector(".form__button").addEventListener('click', function () {

//   let timerInterval;
//   if (true) {
//     Swal.fire({
//       title: 'Descargando Ebook...',
//       html: 'Por favor espere <strong></strong> segundos...',
//       imageUrl: './ebooks-sin-correos/florales-modernos-para-negocio/buscando-ebook.jpg',
//       imageWidth: 400,
//       timer: 4000,
//       timerProgressBar: true,
//       allowEscapeKey: false,
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//         const timer_strong = Swal.getHtmlContainer().querySelector('strong')
//         timerInterval = setInterval(() => {
//           timer_strong.textContent = (Swal.getTimerLeft() / 1000).toFixed(0);
//         }, 100);
//       },
//       willClose: () => {
//         clearInterval(timerInterval);
//         window.location.href = './gracias.html';
//       }
//     });
//     // document.querySelector(".form__button").setAttribute("disabled", "disabled");
//     // document.querySelector(".form__button").style.display = "none";
//   }
// });