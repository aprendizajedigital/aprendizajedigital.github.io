
//NO ANIMES EL BOTON PORQUE 1. YA NO FUNCIONA LA TRANSITION Y 2. SALE UN ERROR DE JAVASCRIPT QUE DICE QUE YA FUE DECLARADO

const c_header__title = document.querySelector(".c-header__title");
const c_header__subtitle = document.querySelector(".c-header__subtitle");
const c_gift__img = document.querySelector(".c-gift__img");
const scroll_animatec_gift__form = document.querySelector(".c-gift__form");
const c_purpose__title = document.querySelector(".c-purpose__title");
const c_purpose__subtitle = document.querySelector(".c-purpose__subtitle");
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
observador.observe(c_header__subtitle);
observador.observe(c_gift__img);
observador.observe(scroll_animatec_gift__form); 
observador.observe(c_purpose__title);
observador.observe(c_purpose__subtitle);
observador.observe(c_footer__text);