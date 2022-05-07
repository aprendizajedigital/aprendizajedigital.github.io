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