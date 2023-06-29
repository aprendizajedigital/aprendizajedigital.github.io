const c_header__title = document.querySelector(".c-header__title");
const c_our_students__text = document.querySelector(".c-our-students__text");
const c_our_students__img = document.querySelectorAll(".c-our-students__img");//lista
const c_course_information__learning_img = document.querySelector(".c-course-information__learning-img");
const c_course_information__benefits_img = document.querySelector(".c-course-information__benefits-img");
const c_firts_bonds__text = document.querySelector(".c-firts-bonds__text");
const c_seconds_bonds__text__color_tonys_pink = document.querySelector(".c-seconds-bonds__text--color-tonys-pink");
const c_seconds_bonds__img = document.querySelectorAll(".c-seconds-bonds__img");//lista
const c_prices__text_1 = document.querySelector(".c-prices__text-1");
const c_study_plan__title = document.querySelectorAll(".c-study-plan__title");//lista
const c_students__title = document.querySelector(".c-students__title");
const c_study_plan__img_certification = document.querySelector(".c-study-plan__img-certification");
const c_study_plan__img_course_inside = document.querySelector(".c-study-plan__img-course-inside");
const c_teacher__title = document.querySelector(".c-teacher__title");
const c_teacher__img = document.querySelector(".c-teacher__img");
const c_recapitulate__title = document.querySelector(".c-recapitulate__title");
const c_recapitulate__img = document.querySelector(".c-recapitulate__img");
const c_recapitulate__text_7 = document.querySelector(".c-recapitulate__text-7");
const c_recapitulate__text_8 = document.querySelector(".c-recapitulate__text-8");
const c_recapitulate__text_9 = document.querySelector(".c-recapitulate__text-9");
const c_recapitulate__text_10 = document.querySelector(".c-recapitulate__text-10");
const c_skills__title = document.querySelector(".c-skills__title");
const c_skills__img = document.querySelectorAll(".c-skills__img");//lista
const c_frequent_questions__title = document.querySelectorAll(".c-frequent-questions__title");//lista

// variable.style.setProperty('--animate-duration', '10s');

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
observador.observe(c_header__title);
observador.observe(c_our_students__text);
c_our_students__img.forEach(item => observador.observe(item));
observador.observe(c_course_information__learning_img);
observador.observe(c_course_information__benefits_img);
observador.observe(c_firts_bonds__text);
observador.observe(c_seconds_bonds__text__color_tonys_pink);
c_seconds_bonds__img.forEach(item => observador.observe(item));
observador.observe(c_prices__text_1);
c_study_plan__title.forEach(item => observador.observe(item));
observador.observe(c_students__title);
observador.observe(c_study_plan__img_certification);
observador.observe(c_study_plan__img_course_inside);
observador.observe(c_teacher__title);
observador.observe(c_teacher__img);
observador.observe(c_recapitulate__title);
observador.observe(c_recapitulate__img);
observador.observe(c_recapitulate__text_7);
observador.observe(c_recapitulate__text_8);
observador.observe(c_recapitulate__text_9);
observador.observe(c_recapitulate__text_10);
observador.observe(c_skills__title);
c_skills__img.forEach(item => observador.observe(item)) ;
c_frequent_questions__title.forEach(item => observador.observe(item));