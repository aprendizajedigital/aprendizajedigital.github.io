let c_gift__btn = document.querySelector(".c-gift__btn").firstChild, //Obtener el texto del boton
    c_gift__input = document.querySelector(".c-gift__input"),
    flag = 0, // usamos el flag para que NO SALGA SI EL MENSAJE DE CORREO VALIDO O INVALIDO, SOLO APARECERÁ DESPUES DE DAR CLICK AL BOTON ENVIAR
    c_gift__valid_email = document.querySelector(".c-gift__valid-email"),
    c_gift__invalid_email = document.querySelector(".c-gift__invalid-email"),
    c_gift__form = document.querySelector(".c-gift__form");

function form_validate(param_email){
    //la funcion lo que hace es validar y colocoar el mensaje valido o invalido
    if(!(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(param_email))){
      c_gift__invalid_email.style.display = "block";
      c_gift__valid_email.style.display = "none";
    }else{
      c_gift__valid_email.style.display = "block";
      c_gift__invalid_email.style.display = "none";
    }
}

c_gift__form.addEventListener('submit', function (e) {
  e.preventDefault();

  flag = 1;

  form_validate(c_gift__input.value.trim()); //aqui imprime el mensaje

  if(c_gift__invalid_email.style.display == "block") //verificamos la impresion del mensaje
    return false;
 
  c_gift__btn.nodeValue = "Enviando..."

  setTimeout(() => {
    c_gift__btn.nodeValue = 'Listo!';
  }, 1000);

  //INICIO EMAIL.JS
  const serviceID = 'service_741jh8j';
  const templateID = 'template_fc02x9n';  

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    }, (err) => {
      //en caso de que de error, deja que igual lo redirija a la pagina de "GRACIAS" y por ende darán clic a la landing page
  });
  //FIN EMAIL.JS

  setTimeout(() => {
    window.location.href = 'https://aprendizajedigital.github.io/gracias-los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas.html';
  }, 2000);
});

// VALIDAR CUANDO PRESIONAMOS UNA TECLA
window.addEventListener("keyup", function (e){

  if(flag==0)
    return false;

  form_validate(c_gift__input.value.trim()); // nunca se imprimirá hasta que el flag sea 1
});