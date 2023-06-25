const c_header__title = document.querySelector(".c-header__title");
const c_our_students__text = document.querySelector(".c-our-students__text");
const c_our_students__img = document.querySelectorAll(".c-our-students__img");
// const c_header__title = document.querySelector(".c-header__title");
// const c_header__title = document.querySelector(".c-header__title");
// const c_header__title = document.querySelector(".c-header__title");
// const c_header__title = document.querySelector(".c-header__title");
// const c_header__title = document.querySelector(".c-header__title");

// variable.style.setProperty('--animate-duration', '10s');

const verificarVisibilidad = (entries) => { //devuelve una lista, por eso se usa el foreach, no importa que sea uno
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__zoomIn");
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
if(c_header__title !== null) observador.observe(c_header__title);
if(c_our_students__text !== null) observador.observe(c_our_students__text);
if(c_our_students__img !== null) c_our_students__img.forEach(item => observador.observe(item));
