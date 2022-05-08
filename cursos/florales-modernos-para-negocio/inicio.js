
setInterval(function () {
  openNotify();
}, 10000); //TIEMPO PARA QUE APAREZCA LA NOTIFICACION

setInterval(function () {
  closeNotify();
}, 20000); //SUMAS EL TIEMPO PARA QUE APAREZCA + EL TIEMPO DE QUE DESAPAREZCA 

function openNotify() {

  randomUser();

  document.querySelector('.notify__timerBar').style.animationPlayState = 'running'

  if(document.querySelector('.notify').style.display == 'none') {
    document.querySelector('.notify').style.display = '';
  }

  if (!document.querySelector('animate__animated')) {
    document.querySelector('.notify').classList.add('animate__animated');
  }

  if (!document.querySelector('animate__bounceOut')) {
    document.querySelector('.notify').classList.remove('animate__bounceOut');
  }

  document.querySelector('.notify').classList.add('animate__bounceIn');
}

function closeNotify() {

  document.querySelector('.notify__timerBar').style.animationPlayState = 'paused'

  document.querySelector('.notify').classList.remove('animate__bounceIn');
  document.querySelector('.notify').classList.add('animate__bounceOut');
}

function randomUser(){
  // let image = document.querySelector('.notify__img').src.substr(-6);

  let user01 = {name: "John", photo: "01.jpg", country: "Perú"}
  let user02 = {name: "Vanessa", photo: "02.jpg", country: "Bolivia"}
  let user03 = {name: "Lidia", photo: "03.jpg", country: "Colombia"}
  let user04 = {name: "Andre", photo: "04.jpg", country: "Argentina"}
  let user05 = {name: "Oscar", photo: "05.jpg", country: "Paraguay"}
  let user06 = {name: "Franco", photo: "06.jpg", country: "Uruguay"}
  let user07 = {name: "Italo", photo: "07.jpg", country: "Chile"}
  let user08 = {name: "Gonzalo", photo: "08.jpg", country: "Brasil"}
  let user09 = {name: "Valeria", photo: "09.jpg", country: "Ecuador"}
  let user10 = {name: "Andrea", photo: "10.jpg", country: "España"}
  let user11 = {name: "Drucila", photo: "11.jpg", country: "Estados Unidos"} 
  let user12 = {name: "Patricia", photo: "12.jpg", country: "Portugal"}
  let user13 = {name: "Penelope", photo: "13.jpg", country: "Aruba"} 
  let user14 = {name: "Antonella", photo: "14.jpg", country: "Australia"} 
  let user15 = {name: "Susan", photo: "15.jpg", country: "Austria"} 
  let user16 = {name: "Carmen", photo: "16.jpg", country: "Canada"} 
  let user17 = {name: "Olivia", photo: "17.jpg", country: "China"} 
  let user18 = {name: "Clara", photo: "18.jpg", country: "Costa Rica"} 
  let user19 = {name: "Cinthya", photo: "19.jpg", country: "Croacia"} 
  let user20 = {name: "Camila", photo: "20.jpg", country: "Dinamarca"} 
  let user21 = {name: "Mery", photo: "21.jpg", country: "República Dominicana"} 
  let user22 = {name: "Ana", photo: "22.jpg", country: "Egipto"} 
  let user23 = {name: "Flor", photo: "23.jpg", country: "El Salvador"} 
  let user24 = {name: "Vivian", photo: "24.jpg", country: "Estonia"} 
  let user25 = {name: "Ashly", photo: "25.jpg", country: "Francia"} 
  let user26 = {name: "Ruby", photo: "26.jpg", country: "Finlandia"} 
  let user27 = {name: "Nicole", photo: "27.jpg", country: "Alemania"} 
  let user28 = {name: "Abigail", photo: "28.jpg", country: "Haiti"} 
  let user29 = {name: "Alexandra", photo: "29.jpg", country: "Honduras"} 
  let user30 = {name: "Lucia", photo: "30.jpg", country: "India"} 
  let user31 = {name: "Aprile", photo: "31.jpg", country: "Islandia"} 
  let user32 = {name: "Ariana", photo: "32.jpg", country: "Indonesia"} 
  let user33 = {name: "Berenisse", photo: "33.jpg", country: "Irlanda"} 
  let user34 = {name: "Carol", photo: "34.jpg", country: "Italia"} 
  let user35 = {name: "Ruth", photo: "35.jpg", country: "Israel"} 
  let user36 = {name: "Sofia", photo: "36.jpg", country: "Jamaica"} 
  let user37 = {name: "Darian", photo: "37.jpg", country: "Liberia"} 
  let user38 = {name: "Dayhanna", photo: "38.jpg", country: "Nepal"} 
  let user39 = {name: "Diana", photo: "39.jpg", country: "Nigeria"} 
  let user40 = {name: "Diandra", photo: "40.jpg", country: "Nueva Zelanda"} 
  let user41 = {name: "Dina", photo: "41.jpg", country: "Panama"} 
  let user42 = {name: "Dámaris", photo: "42.jpg", country: "Puerto Rico"} 
  let user43 = {name: "Enlusmar", photo: "43.jpg", country: "Rusia"} 
  let user44 = {name: "Esther", photo: "44.jpg", country: "Romania"} 
  let user45 = {name: "Daniela", photo: "45.jpg", country: "Reino Unido"} 
  let user46 = {name: "Fernanda", photo: "46.jpg", country: "Korea del Sur"} 
  let user47 = {name: "Fiorela", photo: "47.jpg", country: "Perú"} 
  let user48 = {name: "Gianela", photo: "48.jpg", country: "Chile"} 
  let user49 = {name: "Gisela", photo: "49.jpg", country: "Colombia"} 
  let user50 = {name: "Glasdeny", photo: "50.jpg", country: "Brasil"} 
   

  let users = [user01, user02, user03, user04, user05, user06, user07, user08, user09, user10, user10, user10, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, user21, user22, user23, user24, user25, user26, user27, user28, user29, user30, user31, user32, user33, user34, user35, user36, user37, user38, user39, user40, user41, user42, user43, user44, user45, user46, user47, user48, user49, user50]

  // let names = [];
  // let users = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg"]

  // let random_user = Math.floor(Math.random() * users.length + 1) + ".jpg";

  let random_number = Math.floor(Math.random() * (users.length + 1))

  if(random_number == users.length){
    random_number = random_number - 1;
  }

  let random_user = users[random_number];

  document.querySelector('.notify__img').src = "./compradores/" + random_user["photo"];
  document.querySelector(".name").innerText = random_user["name"];
  document.querySelector(".country").innerText = random_user["country"];
}
//---------------------------------------------------------------------------------------

//animate__zoomIn
const animate__zoomIn = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__zoomIn');
      return;
    }

    entry.target.classList.remove('animate__animated');
    entry.target.classList.remove('animate__zoomIn');
  });
});

for (let i = 0; i < document.querySelectorAll('.main--container--gifs__item--title').length; i++) {
  animate__zoomIn.observe(document.querySelectorAll(".main--container--gifs__item--title")[i]);
}

//---------------------------------------------------------------------------------------

//EFECTO auto_increment
const auto_increment = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      // entry.target.classList.add('animate__animated');
      // entry.target.classList.add('animate__fadeIn');

      let x = 1;
      const intervalo = setInterval(function () {
        document.querySelector('.auto_increment').innerText = x;
        if (x === 10) clearInterval(intervalo);
        x++;
      }, 100);

    }
  });
});

auto_increment.observe(document.querySelector('.auto_increment'));

//Acordeon
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

  //Contador -- OJO: ESTE ES UN SCRIPT PARA 2 CONTADORES , SI INTESTA USAR SOLO UNO O MÁS DE 2 PUEDE FALLAR
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
      nextYear = yyyy,
      dayMonth = "05/05/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.querySelectorAll(".days")[0].innerText = Math.floor(distance / (day)),
          document.querySelectorAll(".hours")[0].innerText = Math.floor((distance % (day)) / (hour)),
          document.querySelectorAll(".minutes")[0].innerText = Math.floor((distance % (hour)) / (minute)),
          document.querySelectorAll(".seconds")[0].innerText = Math.floor((distance % (minute)) / second);

        document.querySelectorAll(".days")[1].innerText = Math.floor(distance / (day)),
          document.querySelectorAll(".hours")[1].innerText = Math.floor((distance % (day)) / (hour)),
          document.querySelectorAll(".minutes")[1].innerText = Math.floor((distance % (hour)) / (minute)),
          document.querySelectorAll(".seconds")[1].innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.querySelectorAll(".headline")[0].innerText = "Expiró la Oferta - Cupos Llenos";
          document.querySelectorAll(".countdown")[0].style.display = "none";
          document.querySelectorAll(".content")[0].style.display = "block";

          document.querySelectorAll(".headline")[1].innerText = "Expiró la Oferta - Cupos Llenos";
          document.querySelectorAll(".countdown")[1].style.display = "none";
          document.querySelectorAll(".content")[1].style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());