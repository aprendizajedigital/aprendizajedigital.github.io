const c_header__title = document.querySelector(".c-header__title");
const c_wait__title = document.querySelector(".c-wait__title");
const c_wait__subtitle = document.querySelector(".c-wait__subtitle");
const c_wait__description = document.querySelector(".c-wait__description");
// const c_wait__btn = document.querySelector(".c-wait__btn");
const c_footer__text = document.querySelector(".c-footer__text");

const verificarVisibilidad = (entries) => { //devuelve una lista, por eso se usa el foreach, no importa que sea uno
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__zoomIn");
        }
        else{
            //...
        }
    })
}

const observador = new IntersectionObserver(verificarVisibilidad, {
    // root: null,
    // rootMargin: "0px 0px 0px 0px",
    // threshold: 1.0
});

observador.observe(c_header__title);
observador.observe(c_wait__title);
observador.observe(c_wait__subtitle);
observador.observe(c_wait__description);
// observador.observe(c_wait__btn);
observador.observe(c_footer__text);
