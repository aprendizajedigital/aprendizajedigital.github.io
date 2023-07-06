
//NO ANIMES EL BOTON PORQUE 1. YA NO FUNCIONARÁ LA TRANSITION Y 2. SALE UN ERROR DE JAVASCRIPT QUE DICE QUE YA FUE DECLARADO
//LE COLOCO AL FINAL UNA _ PARA QUE LAS VARIABLES NO SE PELEE CON OTROS ARCHIVOS JS COMO (_loader-page.js y _scroll_anime.js) QUE TAMBIEN TIENEN DECLARADO ESAS VARIABLES
//TE RECOMIENDO CREAR ARCHIVOS PARA LAS VARIABLES LOCALES Y QUE AHI USES TODAS EN LOS OTROS ARCHIVOS.
const c_header__title_ = document.querySelector(".c-header__title");
const c_bonds__title_ = document.querySelectorAll(".c-bonds__title");
const c_bonds__subtitle_ = document.querySelectorAll(".c-bonds__subtitle");
const c_bonds__description_ = document.querySelectorAll(".c-bonds__description");
const c_bonds__img_ = document.querySelectorAll(".c-bonds__img");
const c_footer__text_ = document.querySelector(".c-footer__text");

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

observador.observe(c_header__title_);
c_bonds__title_.forEach(item => observador.observe(item));
c_bonds__subtitle_.forEach(item => observador.observe(item));
c_bonds__description_.forEach(item => observador.observe(item));
c_bonds__img_.forEach(item => observador.observe(item));
observador.observe(c_footer__text_);