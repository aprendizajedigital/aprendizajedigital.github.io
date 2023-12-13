const o_summary_information__button = document.querySelectorAll(".o-button-pay__button");//lista

o_summary_information__button.forEach((entry) => {
    entry.style.animationDuration = '2s';// solo es la duyracion de la animacion en segundos, NO es por cada repeticion, para eso te recomiendo un setTimeOut 
    entry.style.animationIterationCount = 'infinite';
    entry.classList.add("animate__animated");
    entry.classList.add("animate__headShake");
});

//---

const c_first_information__text_1 = document.querySelector(".c-first-information__text-1");
const c_first_information__img_1 = document.querySelector(".c-first-information__img-1");
const c_first_information__img_2 = document.querySelector(".c-first-information__img-2");
const c_first_information__img_3 = document.querySelector(".c-first-information__img-3");
const c_first_information__group_ebook_img = document.querySelectorAll(".c-first-information__group-ebook-img");//lista
const c_first_information__text_5 = document.querySelector(".c-first-information__text-5");
const c_first_information__text_6 = document.querySelector(".c-first-information__text-6");
const c_first_information__text_7 = document.querySelector(".c-first-information__text-7");
const c_first_information__text_13 = document.querySelector(".c-first-information__text-13");
const c_first_information__text_14 = document.querySelector(".c-first-information__text-14");
const c_first_information__text_15 = document.querySelector(".c-first-information__text-15");
const o_summary_information__group = document.querySelectorAll(".o-summary-information__group");//lista



const verificarVisibilidad = (entries) => { //devuelve una lista, por eso se usa el foreach, no importa que sea uno
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__zoomIn");
            //entry.style.transformOrigin = "top";
        }
        else{
            // entry.target.classList.remove("animate__zoomIn")
            // entry.target.classList.add("c-header__title--visible")
        }
    })
}

const observador = new IntersectionObserver(verificarVisibilidad, {
    // root: null,
    // rootMargin: "0px 0px 0px 0px",
    // threshold: 1.0
});

//Entradas validadas
observador.observe(c_first_information__text_1);
observador.observe(c_first_information__img_1);
observador.observe(c_first_information__img_2);
observador.observe(c_first_information__img_3);
c_first_information__group_ebook_img.forEach(item => observador.observe(item));
o_summary_information__group.forEach(item => observador.observe(item));
observador.observe(c_first_information__text_5);
observador.observe(c_first_information__text_6);
observador.observe(c_first_information__text_7);
observador.observe(c_first_information__text_13);
observador.observe(c_first_information__text_14);
observador.observe(c_first_information__text_15);