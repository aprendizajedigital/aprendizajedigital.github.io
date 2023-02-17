
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

  //AQUI IBA EL CODIGO DE EMAIL.JS

  setTimeout(() => {
    window.location.href = './gracias-aqui-tienes-tu-libro-digital-de-hacer-pan-paso-a-paso.html';
  }, 2000);
});

// VALIDAR CUANDO PRESIONAMOS UNA TECLA
window.addEventListener("keyup", function (e){

  if(flag==0)
    return false;

  email = document.querySelector("#email").value.trim();
  form_validate(email);
});
// -- FIN ENVIAR CORREO CON EMAIL.JS

// -- INICIO ENVIAR CORREO CON EMAIL.JS (CON NOMBRE Y EMAIL)

// let btn = document.querySelector(".form__button").firstChild; //Obtener el texto del boton
// let first_name;
// let email;
// let flag = 0;

// let valid_first_name = document.querySelector(".valid-first-name");
// let invalid_first_name = document.querySelector(".invalid-first-name");

// let valid_email = document.querySelector(".valid-email");
// let invalid_email = document.querySelector(".invalid-email");

// //FUNCION QUE VALIDA LOS INPUT NOMBRE Y EMAIL
// function form_validate(param_first_name, param_email){
//   if(!(/^(?!\s*$)[a-zA-ZÑñÁáÉéÍíÓóÚúÜüÇç\s]{2,50}$/.test(param_first_name))){
//     invalid_first_name.style.display = "block";
//     valid_first_name.style.display = "none";
//   }else{
//     valid_first_name.style.display = "block";
//     invalid_first_name.style.display = "none";
//   }
   
//   if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(param_email))){
//     invalid_email.style.display = "block";
//     valid_email.style.display = "none";
//   }else{
//     valid_email.style.display = "block";
//     invalid_email.style.display = "none";
//   }
// }

// // VALIDAR CUANDO PRESIONAMOS EL BOTON ENVIAR
// document.querySelector("#form").addEventListener('submit', function (e) {
//   e.preventDefault();

//   flag = 1;

//   first_name = document.querySelector("#first_name").value.trim();
//   email = document.querySelector("#email").value.trim();

//   //--INICIO VALIDANDO FORMULARIO--
//     form_validate(first_name, email);

//     if(invalid_first_name.style.display == "block" || invalid_email.style.display == "block")
//      return false;
//   //--FIN VALIDANDO FORMULARIO--

//   //--INICIO ENVIANDO DATOS--
//   btn.nodeValue = "Enviando..."

//   const serviceID = 'default_service';
//   const templateID = 'template_fc02x9n';

//   emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.nodeValue = 'Listo!';
//       // alert('Tu ebook fue enviado');
//     }, (err) => {
//       // btn.nodeValue = 'Enviado';
//       // alert(JSON.stringify(err));
//     });

//   //--FIN ENVIANDO DATOS--  

//   setTimeout(() => {
//     window.location.href = './gracias-aqui-tienes-tu-libro-digital-de-hacer-pan-paso-a-paso.html';
//   }, 2000);
// });

// // VALIDAR CUANDO PRESIONAMOS UNA TECLA
// window.addEventListener("keyup", function (e){

//   if(flag==0)
//     return false;

//   first_name = document.querySelector("#first_name").value.trim();
//   email = document.querySelector("#email").value.trim();
//   form_validate(first_name, email);
// });
// -- FIN ENVIAR CORREO CON EMAIL.JS (CON NOMBRE Y EMAIL)
