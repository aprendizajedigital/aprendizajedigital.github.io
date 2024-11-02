let link_hotmart="[LINK DEL CURSO CON ABREVIATURA HOT.ART]",
    link_vimeo = "https://player.vimeo.com/video/843116828?h=757d719681&portrait=0&byline=0&title=0", //esto solo se cambia en el HTML, lo pongo para tener en lista todos los enlaces que existen
    link_wistia = "r248sz6a82", //esto solo se cambia en el HTML, , lo pongo para tener en lista todos los enlaces que existen
    link_whatsapp = "", //esto solo se cambia en su archivo JS, , lo pongo para tener en lista todos los enlaces que existen
    link_facebook = ""; //esto solo se cambia en su archivo JS, , lo pongo para tener en lista todos los enlaces que existen

document.querySelectorAll(".o-button-pay__btn").forEach(element => {
  element.href = link_hotmart;
});

function updateElementImage(selector, content) {
  const element = document.querySelector(selector);
  if(element !== null){
    element.src = content;
  }else{
    console.log("Elemento no encontrado.");
  }
}

function updateAllElementsImages(selector, contents) {
  const elements = document.querySelectorAll(selector);
  const numElements = elements.length;

  for (let i = 0; i < numElements; i++) {
    elements[i].src = contents[i]
  }
}

function updateElementContent(selector, content) {
  const element = document.querySelector(selector);
  if (element !== null) {
    element.innerHTML = content;
  }
}

function updateAllElementsContent(selector, contents) {
  const elements = document.querySelectorAll(selector);
  const numElements = elements.length;

  for (let i = 0; i < numElements; i++) {
    elements[i].innerHTML = contents[i]
  }
}

//ICONO DE LA PAGINA
document.querySelector(".c-link-icon").href = "./img/ceviche.png"

updateElementContent(".c-title", "[TITULO DEL CURSO]");

updateElementContent(".c-header__title", `[TITULO LLAMATIVO] <span class="c-header__title-span">[ALGO IMPORTANTE]</span> [TITULO LLAMATIVO] <span class="c-header__title-span">[ALGO IMPORTANTE]</span> [TITULO LLAMATIVO] <span class="c-header__title-span">[ALGO IMPORTANTE]</span> [TITULO LLAMATIVO]`);

updateElementContent(".c-header__subtitle", `<mark><span class="c-header__subtitle-span">[ALGO IMPORTANTE]</span> [SUBTITULO LLAMATIVO] <span class="c-header__subtitle-span">[ALGO IMPORTANTE]</span> 🤑<br>[TITULO LLAMATIVO] <span class="c-header__subtitle-span">[ALGO IMPORTANTE]</span> [TITULO LLAMATIVO]</mark>`);

updateElementContent(".c-header__paragraph", `Mira el Video Hasta el Final👇`);

updateElementContent(".c-problems__title", `"[FRASE] <span class="c-problems__title-span">[ALGO IMPORTANTE]</span> [FRASE]" [EMOJIS]`);

const contentsQuestions = [
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌[PROBLEMAS]`,
  `❌¿Quieres un negocio que sea rentable en cada epoca del año y...`,
  `💵 tener <span style="text-decoration: underline;">INGRESOS EXTRAS</span>?`,
  `👩‍🏫 que sea <span style="text-decoration: underline;">FÁCIL DE APRENDER</span>?`,
  `🍤 que sea <span style="text-decoration: underline;">FÁCIL DE VENDER</span>?`,
  `🤩 que te permita empezar con un <span style="text-decoration: underline;">BAJO COSTO</span>?`
];

updateAllElementsContent(".c-problems__text", contentsQuestions);

const contentsMainTitle = [
  `¿TE SIENTES IDENTIFICADA CON ALGUNA FRASE? <span class="c-our-students__emoji">😮</span>`,
  `ENTONCES ESTE CURSO ES PARA TI! <span class="c-our-students__emoji">😉</span>`,
  `PREPARA DELICIOSOS PLATOS DE MARISCOS CON NUESTRAS CLASES PASO A PASO Y BRINDA A TU FAMILIA, AMIGOS Y CLIENTES LO MEJOR 🤩<br>(SE LO MERECEN) 💪`,
  `PLATILLOS MARINOS HECHOS POR NUESTROS ESTUDIANTES`,
  `¡TU TAMBIÉN APRENDERÁS TODO ESTO Y MUCHO MÁS! 😁`,
  `¿PERO ES DIFÍCIL? 🤔`,
  `¡NO! TODOS NOS HAN HECHO CREER ESTO, PERO NO ES DIFÍCIL 💁‍♀️`,
  `APRENDERÁS PASO A PASO DE MANERA FÁCIL Y ACCESIBLE 🧐,`,
  `INCLUSO SI ERES UN(A) PRINCIPIANTE EN LA COCINA 🥣,`,
  `Y SIN LA NECESIDAD DE TENER HABILIDADES TÉCNICAS Y PRÁCTICAS PARA HACER PLATILLOS MARINOS 😉`
];

updateAllElementsContent(".c-our-students__text", contentsMainTitle);

const contentsStudentIMG = [
  `./img/resultado1.png`,
  `./img/resultado2.png`,
  `./img/resultado3.png`
]

updateAllElementsImages(".c-our-students__img", contentsStudentIMG);

updateElementContent(".c-course-information__text", "IMPORTANTE: Leer la información hasta el final");

updateElementContent(".c-course-information__learning-title", `¿Qué vas a Aprender?`);

updateElementContent(".c-course-information__benefits-title", `Beneficios del Curso`);

const contentsToLearn = [
  `Diferenciarás los <span class="c-course-information__learning-text-span">tipos de platos</span> que se preparan dentro de un restaurante de <span class="c-course-information__learning-text-span">pescados y mariscos peruanos</span> o cevicherías, según la distribución de áreas dentro de la cocina.`,
  `Seleccionarás y utilizarás ingredientes justos y necesarios para que tus <span class="c-course-information__learning-text-span">preparaciones</span> queden <span class="c-course-information__learning-text-span">deliciosas</span>.`,
  `Aprenderás como hacer preparaciones de pescados y mariscos de manera <span class="c-course-information__learning-text-span">óptima</span> respetando su <span class="c-course-information__learning-text-span">proceso de elaboración</span>.`,
  `Conocerás el proceso de Mise en place antes de la <span class="c-course-information__learning-text-span">preparación de cada plato</span>.`,
  `Reconocerás los productos apropiados para que la <span class="c-course-information__learning-text-span">preparación</span> quede <span class="c-course-information__learning-text-span">exquisita</span>.`,
  `Aprenderás cómo hacer la <span class="c-course-information__learning-text-span">limpieza y blanqueado de los mariscos</span>.`,
  `Aprenderás cómo hacer la <span class="c-course-information__learning-text-span">limpieza y fileteado de pescado</span>.`,
  `Conocerás las bases y técnicas de las <span class="c-course-information__learning-text-span">preparaciones de los pescados y mariscos con la ayuda de recetas estándar</span>.`,
  `Obtendrás el criterio para implementar, <span class="c-course-information__learning-text-span">innovar</span> y dejar llevar la <span class="c-course-information__learning-text-span">creatividad</span> para hacer combinaciones de platos.`,
  `Desarrollarás las <span class="c-course-information__learning-text-span">recetas brindadas en clase paso a paso</span> explicados detenidamente.`,
  `Tendrás un <span class="c-course-information__learning-text-span">conocimiento amplio</span> sobre la comida marina peruana, productos, insumos, recetas y preparaciones.`,
  `<span class="c-course-information__learning-text-span">Sorprenderás</span> a tus familiares o amigos preparando un almuerzo <span class="c-course-information__learning-text-span">con deliciosos platos de pescados y mariscos</span>.`,
  `<span class="c-course-information__learning-text-span">Ampliarás tu conocimiento culinario</span> y tener ese sentir gastronómico por la comida marina.`,
  `Y mucho <span class="c-course-information__learning-text-span">más...</span>`
];

updateAllElementsContent(".c-course-information__learning-paragraph", contentsToLearn);

updateElementImage(".c-course-information__learning-img", "./img/tv.png");

const contentsToBenefits = [
  `<span class="c-course-information__benefits-text-span">AHORRO GARANTIZADO</span>, la mayoría de los programas presenciales pueden costar entre 200 y 300 dólares mensuales.`,
  `<span class="c-course-information__benefits-text-span">APRENDE A TU PROPIO RITMO</span>, sin presiones, sin horarios y de una forma sencilla y garantizada.`,
  `<span class="c-course-information__benefits-text-span">RECUPERA TU INVERSIÓN</span> rapidamente ofreciendo tus propios platillos marinos y creando tu propio emprendimiento.`,
  `Aprenderás a montar tu propia negocio de mariscos y lograrás un <span class="c-course-information__benefits-text-span">NEGOCIO MUY LUCRATIVO DE ALTA DEMANDA.</span>`,
  `<span class="c-course-information__benefits-last-text-span">Inicia el 2023 aumentando tus ingresos.</span><br>¡Imagínate aprender este negocio de los platillos marinos para sorprender y enamorar a tus clientes, y de esta manera generar ganancias!🤑`
];

updateAllElementsContent(".c-course-information__benefits-paragraph", contentsToBenefits);

updateElementImage(".c-course-information__benefits-img", "./img/img2.png");

updateElementContent(".c-firts-bonds__text", `SOLO POR INSCRIBIRTE HOY AL CURSO OBTENDRÁS 3 BONOS ADICIONALES TOTALMENTE GRATIS`);

const contentsTitlesBonds = [
  `BONO #1 - ACCESO AL GRUPO PRIVADO DE TELEGRAM (EXCLUSIVO PARA ALUMNOS)`,
  `BONO #2 - ACCESO DE POR VIDA + ACTUALIZACIONES`,
  `BONO #3 - CERTIFICADO DE FINALIZACIÓN`
]

updateAllElementsContent(".c-firts-bonds__title", contentsTitlesBonds);

const contentsDescriptionsBonds = [
  `Accederás a un grupo privado y exclusivo solo para estudiantes en donde estará presente el maestro y podrá resolver todas tus dudas y la de tus compañeros.<br><br>También podrán compartir y recibir ideas para mejorar sus platillos y mejorar su emprendimiento.`,
  `Tendrás acceso de por vida a nuestro curso y a todas las respectivas actualizaciones que realicemos en el futuro de manera TOTALMENTE GRATIS 🤩.`,
  `Una vez que completes y finalices el curso, podrás descargar e imprimir tu propio certificado de finalización que avala que has culminado el curso con éxito.`
]

updateAllElementsContent(".c-firts-bonds__description", contentsDescriptionsBonds);

const contentsImgFirstsBonds = [
  `./img/telegram-svgrepo-com.svg`,
  `./img/update-svgrepo-com.svg`,
  `./img/diploma-svgrepo-com.svg`
];

updateAllElementsImages(".c-firts-bonds__icon", contentsImgFirstsBonds)

const contentsSecondsBonds = [
  `PERO ESPERA AÚN HAY MÁS PARA TÍ`,
  `ACCEDE A MÁS DE 50 MÓDULOS DONDE APRENDERÁS EL PASO A PASO DE CÓMO EMPRENDER EN ESTE NEGOCIO DE LOS PLATILLOS MARINOS`,
  `ADICIONALMENTE RECIBIRÁS 5 MÓDULOS MÁS DE REGALO 🤩`
]

updateAllElementsContent(".c-seconds-bonds__text", contentsSecondsBonds);

const contentsTitlesGifs = [
  `REGALO #1 - TORNEADO Y GLASEADO DEL CAMOTE<br>(<span class="c-seconds-bonds__title-span">s/45.00 SOLES</span> - GRATIS)`,
  `REGALO #2 - SALSA DE LANGOSTINO<br>(<span class="c-seconds-bonds__title-span">s/45.00 SOLES</span> - GRATIS)`,
  `REGALO #3 - SALSA BECHAMEL POTENCIADA<br>(<span class="c-seconds-bonds__title-span">s/50.00 SOLES</span> - GRATIS)`,
  `REGALO #4 - TRES RECETAS ADICIONALES QUE DEBES CONSIDERAR SI ESTÁS PENSANDO COLOCAR TU CEVICHERÍA<br>(<span class="c-seconds-bonds__title-span">s/45.00 SOLES</span> - GRATIS)`,
  `REGALO #5 - LIBRO RECETARIO EL CEVICHE AZUL<br>(<span class="c-seconds-bonds__title-span">s/45.00 SOLES</span> - GRATIS)`
]

updateAllElementsContent(".c-seconds-bonds__title", contentsTitlesGifs);

const contentsDescriptionsGifs = [
  `Aprenderás a darle un toque especial al camote, uno de los ingredientes más icónicos de la cocina peruana.<br><br>Descubrirás técnicas de torneado y glaseado que realzarán su sabor y presentación, convirtiéndolo en un acompañamiento irresistible para tus platos de ceviches y mariscos.`,
  `Aprenderás los secretos para preparar una salsa exquisita que complementará a la perfección tus ceviches y mariscos peruanos.<br><br>Su textura cremosa y su sabor único añadirán un toque especial a tus platos, deleitando a tus comensales.`,
  `Aprenderás a preparar una versión mejorada de esta clásica salsa, añadiéndole nuevos ingredientes y técnicas que la convertirán en el complemento perfecto para tus creaciones culinarias.<br><br>Sorprende a tu paladar y al de tus invitados con esta deliciosa salsa.`,
  `Aprende a preparar platos innovadores y deliciosos que cautivarán a tus clientes.<br><br>Estas recetas te ayudarán a diferenciarte y destacar en el competitivo mundo de la cocina peruana de ceviches y mariscos.`,
  `Lograrás aprender recetas fáciles de seguir.<br><br>También incluye consejos sobre cómo elegir los mejores ingredientes, cómo preparar el ceviche correctamente y cómo servirlo de la manera más atractiva.`
]

updateAllElementsContent(".c-seconds-bonds__description", contentsDescriptionsGifs);

const contentsGifsIMG = [
  `./img/bono1.png`,
  `./img/bono2.png`,
  `./img/bono3.png`,
  `./img/bono4.png`,
  `./img/bono5.png`
];

updateAllElementsImages(".c-seconds-bonds__img", contentsGifsIMG);

updateElementContent(".c-prices__text-1",`¡SOLO POR HOY! CURSO "COCINA PERUANA: CEVICHES Y MARISCOS" + 3 BONOS EXCLUSIVOS + 5 MÓDULOS ADICIONALES`);
updateElementContent(".c-prices__text-2",`PRECIO ESPECIAL DE PRE-LANZAMIENTO, TERMINA EN:`);
updateElementContent(".c-prices__text-3",`ÚNICAMENTE 50 CUPOS DISPONIBLES - 42 CUPOS VENDIDOS`);

updateElementContent(".c-important__paragraph",`<span class="c-important__span">IMPORTANTE:</span>👉 En las próximas horas el curso aumentará de precio y lo seguirá haciendo cuando el contador llegue a cero 😱,<br>
<span class="c-important__span">No es broma Ni estrategia de Marketing</span> ❌.<br>
Creemos y premiamos a los que tomen acción rápida 💪, así que si crees que nuestro curso <span class="c-important__span">COCINA PERUANA: CEVICHES Y MARISCOS</span> puede ayudarte a comenzar o escalar tu futuro negocio 🤩, <span class="c-important__span">TOMA ACCIÓN AHORA</span> 🏃‍♂, porque vas a perder la oferta 😬.`);

const contentsPlanTitle = [
  `CONOCE NUESTRA <span class="c-study-plan__span">MALLA CURRICULAR</span> 🤩`,
  `ESTE SERÁ TU <span class="c-study-plan__span">CERTIFICADO</span> 🤩`,
  `MIRA COMO ES NUESTRO <span class="c-study-plan__span">CURSO</span> POR DENTRO 😉`
];

updateAllElementsContent(".c-study-plan__title", contentsPlanTitle);

const contentsPlanText = [
  `Aprenderás desde cero paso a paso a realizar tus propios platillos marinos.<br><br>Estudia a tu ritmo con una metodología fácil, práctica y profesionalmente 🍤`,
  `RECOMPENSAMOS TU ESFUERZO 💪<br><br>Una vez que termines todo el curso te brindaremos un certificado digital que avala que has culminado con éxito todo el curso. 🧑‍🎓👩‍🎓`,
  `El curso se actualiza siempre y tendrás acceso de por vida a nuestra aula virtual. 👨‍🏫`
];

updateAllElementsContent(".c-study-plan__text", contentsPlanText);

updateElementImage(".c-study-plan__img-certification", "./img/certificado.png");
updateElementImage(".c-study-plan__img-course-inside", "./img/curso-por-dentro.png");

updateElementContent(".c-students__title", "¿QUE DICEN NUESTROS ESTUDIANTES SOBRE EL CURSO?");

const contentsImgProfile = [
  `./img/t8.jpg`,
  `./img/t2.jpg`,
  `./img/t3.jpg`
]

updateAllElementsImages(".c-students__img-profile", contentsImgProfile);

const contentsStudentsName = [
  `Romina Castro`,
  `Mari Perero`,
  `Lesly Attilano`
]

updateAllElementsContent(".c-students__name", contentsStudentsName);

const contentsStudentsText = [
  `Antes de tomar este curso de ceviches y mariscos, siempre tenía problemas para seleccionar los ingredientes adecuados para cada tipo de plato.
  <br><br>
  Pero gracias a lo que aprendí en el curso, ahora sé como reconocer las características de cada ingrediente y elegir los más adecuados para cada receta.
  <br><br>
  Ya no tengo miedo de preparar ceviches y mariscos deliciosos para cualquier ocasión.
  <br><br>
  Mil gracias maestro Marvin.
  <br><br>
  Miren mis resultados 👇`,

  `Siempre me ha encantado la cocina, pero no sabía cómo cortar y limpiar adecuadamente los mariscos para obtener los mejores resultados.
  <br><br>
  Después de tomar el curso de cocina peruana: ceviches y mariscos, aprendí los trucos para realizar cortes precisos y para limpiar los mariscos de manera profesional.
  <br><br>
  Ahora puedo disfrutar de estos ricos platillos en casa y sacar a mi familia adelante.
  <br><br>
  Gracias por este maravilloso curso maestro Marvin.
  <br><br>
  Les comparto un poco de mi trabajo que logré gracias al curso 👇`,

  `Siempre había querido emprender mi propio negocio en el ámbito culinario, pero no sabía cómo empezar.
  <br><br>
  Gracias al curso de ceviches y mariscos, aprendí a preparar diferentes platos y a utilizar las técnicas adecuadas para resaltar el sabor y la presentación de mis creaciones.
  <br><br>
  Ahora tengo mi propio emprendimiento culinario y genero ingresos extras en cada temporada del año.
  <br><br>
  Aprender a preparar ceviches y mariscos ha sido una experiencia increíble que me ha permitido hacer realidad mi sueño de tener mi propio negocio en el mundo de la cocina peruana.
  <br><br>
  Muchas gracias maestro Marvin.
  <br><br>
  Por aqui les dejo una foto de mis resultados 👇`
]

updateAllElementsContent(".c-students__text", contentsStudentsText);

const contentsStudentsImgWork = [
  `./img/student1.jpg`,
  `./img/student2.jpg`,
  `./img/student3.jpg`
]

updateAllElementsImages(".c-students__img-work", contentsStudentsImgWork);

updateElementContent(".c-teacher__title", "¿CON QUIÉN APRENDERÁS?")
updateElementImage(".c-teacher__img", "./img/img13.png")
updateElementContent(".c-teacher__text", `Desarrollado por MARVIN GIL, Licenciado en Gastronomía, Técnico en cocina y amante de la buena comida, con una amplia experiencia en el sector gastronómico y de pescados y mariscos.<br><br>Graduado de la Institución de Cocina de Pachacútec, institución fundada por Gastón Acurio, chef y empresario reconocido a nivel nacional e internacional; titulado como Licenciado en Gastronomía de la Universidad Nacional de Educación “Enrique Guzmán y Vallle”; ex cevichero, chicharronero, ensaladero y cocinero de restaurantes reconocidos de su ciudad; anterior Segundo Jefe de Cocina en el restaurante “Segundo Muelle”, marca registrada nacional e internacionalmente; y previo administrador del restaurant – cevichería “El Pez On”.`)

updateElementContent(".c-recapitulate__title","¡RECAPITULEMOS 😍!");
updateElementContent(".c-recapitulate__text-1","¡TODO ESTO TE LLEVARÁS EL DÍA DE HOY CON TU INSCRIPCIÓN 👇!");

const contentsRecapitulateParagraph = [
  `El programa completo de "COCINA PERUANA: CEVICHES Y MARISCOS" (<span class="c-recapitulate__span">s/100.00 SOLES</span>)`,
  `Grupo Privado de Estudiantes (<span class="c-recapitulate__span">s/25.00 SOLES</span>)`,
  `Membresía con acceso para toda la vida (<span class="c-recapitulate__span">s/25.00 SOLES</span>)`,
  `Certificado de participación en el programa (<span class="c-recapitulate__span">s/20.00 SOLES</span>)`,
  `Regalo adicional #1: TORNEADO Y GLASEADO DEL CAMOTE (<span class="c-recapitulate__span">s/45.00 SOLES</span>)`,
  `Regalo adicional #2: SALSA DE LANGOSTINO (<span class="c-recapitulate__span">s/45.00 SOLES</span>)`,
  `Regalo adicional #3: SALSA BECHAMEL POTENCIADA (<span class="c-recapitulate__span">s/50.00 SOLES</span>)`,
  `Regalo adicional #4: TRES RECETAS ADICIONALES QUE DEBES CONSIDERAR SI ESTÁS PENSANDO COLOCAR TU CEVICHERÍA (<span class="c-recapitulate__span">s/45.00 SOLES</span>)`,
  `Regalo adicional #5: LIBRO RECETARIO CEVICHE AZUL (<span class="c-recapitulate__span">s/45.00 SOLES</span>)`
];

updateAllElementsContent(".c-recapitulate__paragraph", contentsRecapitulateParagraph);

updateElementContent(".c-recapitulate__hours", `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class="c-recapitulate__icon" src="./img/arrow-right-svgrepo-com.svg">&nbsp;clases de contenido (+6 horas en video HD)`);

updateElementContent(".c-recapitulate__text-2",`TOTAL <span class="c-recapitulate__span-text-2">s/400.00</span>`);
updateElementContent(".c-recapitulate__text-3",`PERO HOY PODRAS ACCEDER POR:`);
updateElementContent(".c-recapitulate__text-4",`s/100.00`);
updateElementContent(".c-recapitulate__text-5",`¿QUÉ ESTÁS ESPERANDO?`);
updateElementContent(".c-recapitulate__text-6",`¡Más de 4000 alumnos de todo el mundo han transformado sus vidas gracias a los ceviches y mariscos!🍤
                                                <br><br>
                                                ¡Con nuestro programa, tú también puedes iniciar tu camino hacia una nueva pasión!
                                                <br><br>
                                                ¡No hay nada más poderoso que esto! Accede ahora mismo y descubre todo lo que necesitas para comenzar. 👇`);
updateElementContent(".c-recapitulate__text-7",`Imagina ¿Cómo sería tu vida si dominaras el arte de los mariscos? 🤩`);
updateElementContent(".c-recapitulate__text-8",`¿Qué pasaría si, además, consigues tener la habilidad para aprender a comercializar tus propios platillos de alta calidad y tener un negocio rentable? 🙊`);
updateElementContent(".c-recapitulate__text-9",`¿Cuánto vale para ti conseguir todo esto?<br>No esperes más…`);
updateElementContent(".c-recapitulate__text-10",`¡COMIENZA HOY MISMO!`);

updateElementImage(".c-recapitulate__img", "./img/full-course.png");

updateElementContent(".c-skills__title",`¿TE IMAGINAS ADQUIRIR ESTAS HABILIDADES?`);

const contentsSkillsGroupImg = [
  "./img/skill-1.jpg",
  "./img/skill-2.jpg",
  "./img/skill-3.jpg",
  "./img/skill-4.jpg",
  "./img/skill-5.jpg",
  "./img/skill-6.jpg",
  "./img/skill-7.jpg",
  "./img/skill-8.jpg",
  "./img/skill-9.jpg",
  "./img/skill-10.jpg",
  "./img/skill-11.jpg",
  "./img/skill-12.jpg"
];

updateAllElementsImages(".c-skills__img", contentsSkillsGroupImg);

updateElementContent(".c-frequent-questions__title", "PREGUNTAS FRECUENTAS");

updateElementContent(".c-footer__text", `© 2023 – DESCARGOS DE RESPONSABILIDAD IMPORTANTES - TODOS LOS DERECHOS RESERVADOS<br>
Este sitio no es parte del sitio web de Facebook o Facebook, Inc. Además, este sitio no está respaldado por Facebook de ninguna manera.<br>
FACEBOOK es una marca registrada de FACEBOOK, Inc.`);

//OBJETOS

updateElementContent(".o-notify__subtitle", `Acaba de adquirir el curso "Ceviches y Mariscos" 🍤`);

const contentsAccordionSummary = [
  `GENERALIDADES`,
  `MÓDULO 1 - PLATILLOS FRÍOS`,
  `MÓDULO 2 - SOPAS`,
  `MÓDULO 3 - ARROCES`,
  `MÓDULO 4 - PESCADOS Y FILETES`,
  `MÓDULO 5 - CHICHARRONES Y FRITURAS`,
  `MÓDULO 6 - PLATILLOS CRIOLLOS`,
  `MÓDULO 7 - IDEAS DE COMBINACIONES DE PLATOS REALIZADOS EN CLASE`,
  `MÓDULO 8 - BONOS`,

  `Me da miedo hacer pagos online`,
  `No sé si online se aprende perfectamente`,
  `No tengo tiempo de ver el curso`,
  `¿Cómo me llega el acceso al curso?`,
  `¿Tengo Acceso Ilimitado a las Clases?`,
  `¿Cuándo Comienzan las Clases?`,
  `¿Necesito Mucho Dinero Para Hacer el Curso?`,
  `No Tengo Experiencia ¿Este Curso es Para mi?`, 
  `¿Qué Formas de Pago Aceptan?`
];

updateAllElementsContent(".o-accordion__summary", contentsAccordionSummary);

const contentsAccordionText = [
  `◉ Limpieza y corte del Pescado.`,
  `◉ Limpieza y blanqueado de Mariscos.`,
  `◉ Picado de Verduras.`,

  `◉ Ceviche de Pescado Tradicional.`,
  `◉ Ceviche Mixto.`,
  `◉ Leche de Tigre de Pescado.`,
  `◉ Leche de Tigre Mixta.`,
  `◉ Leche de Tigre Premium.`,
  `◉ Tiradito de Pescado al natural.`,
  `◉ Tiradito de Pescado a la Huancaína.`,
  `◉ Tiradito Bicolor.`,
  `◉ Causa de Langostino.`,
  `◉ Choritos a la Chalaca.`,
  `◉ Pulpo al Olivo.`,
  `◉ Tiradito Nikkei.`,

  `◉ Fondo de Pescado / Fumet.`,
  `◉ Chilcano de Pescado.`,
  `◉ Sudado de Pescado.`,
  `◉ Parihuela.`,
  `◉ Chupe de Langostinos.`,
  `◉ Aguadito de Pescado.`,
  
  `◉ Arroz con Mariscos.`,
  `◉ Arroz con Mariscos al Cilantro.`,
  `◉ Arroz con Mariscos Cremoso.`,
  `◉ Arroz Chaufa de Mariscos.`,
  `◉ Arroz Chaufa al Estilo Capón.`,

  `◉ Pescado a la Plancha.`,
  `◉ Pescado a la Meuniere.`,
  `◉ Pescado a la Chorrillana.`,
  `◉ Escabeche de Pescado.`,
  `◉ Pescado a lo Macho.`,
  `◉ Cabrilla al Plato.`,

  `◉ Salsa para Chicharrón.`,
  `◉ Chicharrón de Pescado.`,
  `◉ Chicharrón Mixto.`,
  `◉ Jalea Mixta.`,
  `◉ Chicharrón de Pota.`,
  `◉ Wantanes Rellenos de Mariscos.`,
  `◉ Brochetas de Pescado.`,
  `◉ Conchitas a la Parmesana.`,

  `◉ Pescado Saltado.`,
  `◉ Puré de frejol para Tacu tacu.`,
  `◉ Tacu tacu con Pescado a la Plancha.`,
  `◉ Tacu tacu con Picante de Mariscos.`,
  `◉ Tacu tacu con Pescado Saltado.`,
  `◉ Tallarín Criollo Saltado de Mariscos.`,

  `◉ Combinaciones de Platos Hechos en Clase`,

  `◉ BONO DE REGALO 1: Torneado y Glaseado del Camote.`,
  `◉ BONO DE REGALO 2: Salsa de Langostino.`,
  `◉ BONO DE REGALO 3: Salsa Bechamel Potenciada.`,
  `◉ BONO DE REGALO 4: Tres recetas adicionales que debes considerar si estás pensando colocar tu cevichería.`,
  `◉ BONO DE REGALO 5: Libro Recetario "El ceviche azul".`,

  `No te preocupes el pago es realizado de forma 100% segura por medio de Hotmart, la plataforma de venta de productos digitales más grande y segura de habla hispana.
  <br><br>
  El pago se lo haces directamente a ellos y son ellos los encargados de enviarte de inmediato el acceso para ver el curso en la misma plataforma de Hotmart, así que no hay riesgo alguno.
  <br><br>
  Inmediatamente haces el pago te llega al correo un usuario y contraseña para acceder a la plataforma.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `Claro que sí, todas las técnicas son muy sencillas de realizar y el curso está diseñado para que puedas aprender desde casa perfectamente por medio de videos paso a paso. Además cuentas con el apoyo y soporte del maestro Marvin en nuestro grupo privado de telegram 😉.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,
  

  `No te preocupes, el curso no tiene un horario fijo, tu podrás ingresar a la plataforma en el horario que tu quieras e ir viendo los videos a tu propio ritmo, tendrás acceso de por vida a la plataforma.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `Una vez realizado tu pago, recibirás un correo electrónico con las instrucciones para acceder al área privada de alumnos.
  <br><br>
  Este curso también podrás estudiarlo dentro de la plataforma de Hotmart, la misma plataforma con la que realizas el pago.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `¡Sí! Luego de que realices la compra vas a poder acceder a las clases cuando y donde quieras. El curso se queda contigo para siempre.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `Todo el contenido es 100% en línea, con clases pregrabadas a las que tendrás acceso, luego de la compra del curso recibirás un correo electrónico para acceder a la plataforma del curso y comenzar inmediatamente. ¡Puedes iniciarlo y desarrollarlo a tu propio ritmo, la plataforma del curso esta respaldada por Hotmart una empresa líder en cursos online desde 2011.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `El curso esta diseñado para empezar con poco presupuesto y usar herramientas económicas, para que así puedas sacarle el máximo potencial al curso sin necesidad de invertir miles de dólares.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `Claro que sí, este curso esta diseñado para llevarte desde cero paso a paso, no necesitas tener experiencia previa para empezar.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `Puedes pagar con tarjeta de debito/credito, PAYPAL, OXXO, Pago Efectivo, Sencillito, Venmo, Sepa, PIX, Efecty, PSE, entre otros.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`
];

updateAllElementsContent(".o-accordion__text", contentsAccordionText);

updateElementContent(".o-notify__subtitle", `Acaba de adquirir el curso "Ceviches y Mariscos" 🐟`);