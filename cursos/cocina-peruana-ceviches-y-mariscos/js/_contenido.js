let link_hotmart="https://wa.link/nghtsk";

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

function editarEtiquetaMeta(selector, contenido, atributo) {
  let etiquetaMeta = document.querySelector(selector);
  if (etiquetaMeta !== null) {
    etiquetaMeta.setAttribute(atributo, contenido);
  }
}

// INICIO - EDITAR META

//INICIO - WEB
const ogTitleWebContent = "CURSO ONLINE- FLORALES MODERNOS PARA NEGOCIO 😱💐😍";
const ogDescriptionWebContent = "Con el MasterClass FLORALES MODERNOS PARA NEGOCIO, aprenderás a diseñar arreglos florales de estilos únicos y modernos, para emprender un negocio muy lucrativo y de alta demanda.";
const ogTypeWebContent = "website";
const ogUrlWebContent = "https://aprendizajedigital.github.io/cursos/florales-modernos-para-negocio/inicio.html";
const ogImageWebContent = "https://aprendizajedigital.github.io/cursos/florales-modernos-para-negocio/img18.png";
const ogImageSecureUrlWebContent = "https://aprendizajedigital.github.io/cursos/florales-modernos-para-negocio/img18.png";
const descriptionWebContent = "Con el MasterClass FLORALES MODERNOS PARA NEGOCIO, aprenderás a diseñar arreglos florales de estilos únicos y modernos, para emprender un negocio muy lucrativo y de alta demanda.";
//FIN - WEB

//INICIO - WHATSAPP
const ogImageWhatsapp = "https://aprendizajedigital.github.io/cursos/florales-modernos-para-negocio/img19.png";
const ogImageSecureUrlWhatsapp = "https://aprendizajedigital.github.io/cursos/florales-modernos-para-negocio/img19.png";
const ogImageTypeWhatsapp = "image/png";
const ogImageWidthWhatsapp = "300";
const ogImageHeightWhatsapp = "300";
//FIN - WHATSAPP

editarEtiquetaMeta('.c-meta-og-title-web', ogTitleWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-description-web', ogDescriptionWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-type-web', ogTypeWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-url-web', ogUrlWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-image-web', ogImageWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-image-secure-url-web', ogImageSecureUrlWebContent, 'content');
editarEtiquetaMeta('.c-meta-description-web', descriptionWebContent, 'content');

editarEtiquetaMeta('.c-meta-og-image-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-image-secure-url-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-image-type-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-image-tidth-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.c-meta-og-image-height-whatsapp', descriptionWebContent, 'content');

updateElementContent(".c-title", "Florales Modernos para Negocio 💐");

updateElementContent(".c-header__title", `COMIENZA TU <span>PROPIO NEGOCIO</span> FLORAL SIN ALTAS INVERSIONES DE DINERO Y DOMINA LAS TÉCNICAS FLORALES SIN NECESIDAD DE SER UNA <span>UNA EXPERTA</span>🤩`);

updateElementContent(".c-header__subtitle", `<mark><span>ADVERTENCIA 🚨🖐️:</span> ¡Estas a un paso de descubrir el método innovador que te permitirá <span>GENERAR INGRESOS</span> 🤑<br>creando <span>LUJOSOS ARREGLOS FLORALES</span> 💐, y eso no es todo 👀, también te permitirá emprender un negocio rentable de alta demanda 🤩!</mark>`);

updateElementContent(".c-header__paragraph", `Mira el Video Hasta el Final👇`);

updateElementContent(".c-problems__title", `"Los arreglos florales permiten a las mujeres florecer por su <span class="c-problems__title-span">BELLEZA</span> propia y lucir <span class="c-problems__title-span">únicas</span> y <span class="c-problems__title-span">espectaculares</span>" <span class="c-problems__emoji">🥰</span>`);

const contentsQuestions = [
  `❌¿Tienes dificultad para seleccionar las flores adecuadas para cada tipo de arreglo?`,
  `❌¿No sabes cómo cortar y cuidar las flores para que duren más tiempo?`,
  `❌¿Desconoces cómo combinar diferentes tipos de flores y colores de manera armoniosa?`,
  `❌¿Careces de habilidades para crear arreglos de diferentes tamaños y formas?`,
  `❌¿No sabes cómo utilizar los materiales y herramientas necesarias para hacer arreglos florales?`,
  `❌¿Tienes dificultad para crear arreglos que se adapten a diferentes ocasiones y estilos de decoración?`,
  `❌¿Te falta experiencia en la creación de arreglos florales para eventos especiales como bodas, cumpleaños y funerales?`,
  `❌¿Eres incapaz de solucionar problemas durante el proceso de creación de arreglos, como flores marchitas o mal cortadas?`,
  `❌¿No sabes cómo presentar y empaquetar los arreglos de manera atractiva?`,
  `❌¿Te falta experiencia y práctica para crear y mejorar arreglos más complejos y elaborados?`,
  `❌¿Quieres aprender a realizar increíbles arreglos florales sin necesidad de ser una experta?`,
  `❌¿Te gustaría tener tu propio negocio floral, pero no sabes como empezar?`,
  `❌¿Quieres generar ingresos extras y tener tu propio emprendimiento?`,
  `❌¿Quieres un negocio que sea rentable en cada epoca del año y...`,
  `💵 tener <span style="text-decoration: underline;">INGRESOS EXTRAS</span>?`,
  `👩‍🏫 que sea <span style="text-decoration: underline;">FÁCIL DE APRENDER</span>?`,
  `💐 que sea <span style="text-decoration: underline;">FÁCIL DE VENDER</span>?`,
  `🤩 que te permita empezar con un <span style="text-decoration: underline;">BAJO COSTO</span>?`
];

updateAllElementsContent(".c-problems__text", contentsQuestions);

const contentsMainTitle = [
  `¿TE SIENTES IDENTIFICADA CON ALGUNA FRASE? <span class="c-our-students__emoji">😮</span>`,
  `ENTONCES ESTE CURSO ES PARA TI! <span class="c-our-students__emoji">😉</span>`,
  `REALIZA EXTRAORDINARIOS ARREGLOS FLORALES CON NUESTRAS CLASES PASO A PASO Y DALE A TU FAMILIA, AMIGOS Y CLIENTES LO MEJOR 🤩 (SE LO MERECEN) 💪`,
  `ARREGLOS FLORALES HECHOS POR NUESTROS ESTUDIANTES`,
  `¡TU TAMBIÉN APRENDERÁS TODO ESTO Y MUCHO MÁS! 😁`,
  `¿PERO ES DIFÍCIL? 🤔`,
  `¡NO! TODOS NOS HAN HECHO CREER ESTO, PERO NO ES DIFÍCIL 💁‍♀️`,
  `APRENDERÁS PASO A PASO DE MANERA FÁCIL Y ACCESIBLE 🧐,`,
  `INCLUSO SI ERES UN(A) PRINCIPIANTE EN DISEÑO FLORAL 💐,`,
  `Y SIN LA NECESIDAD DE TENER HABILIDADES TÉCNICAS Y PRÁCTICAS PARA HACER ARREGLOS FLORALES 😉`
];

updateAllElementsContent(".c-our-students__text", contentsMainTitle);

const contentsStudentIMG = [
  `./img/e1.png`,
  `./img/e2.png`,
  `./img/e3.png`
]

updateAllElementsImages(".c-our-students__img", contentsStudentIMG);

updateElementContent(".c-course-information__text", "IMPORTANTE: Leer la información hasta el final");

updateElementContent(".c-course-information__learning-title", `¿Qué vas a Aprender?`);

updateElementContent(".c-course-information__benefits-title", `Beneficios del Curso`);

const contentsToLearn = [
  `Aprenderás a emprender tu negocio floral <span class="c-course-information__learning-text-span">sin altas inversiones de dinero.</span>`,
  `Dominarás técnicas florales como base para crear <span class="c-course-information__learning-text-span">increíbles diseños.</span>`,
  `Conocerás más a fondo el <span class="c-course-information__learning-text-span">mercado floral</span> y sus llamativos acompañamientos.`,
  `Mediante tips y recomendaciones, <span class="c-course-information__learning-text-span">evitarás cometer errores</span> dentro de la industria floral.`,
  `<span class="c-course-information__learning-text-span">Desarrollarás tu marca</span> con importantes diferenciadores, estilos únicos y modernos.`,
  `<span class="c-course-information__learning-text-span">Despertarás tu criterio armónico</span> para crear composiciones florales.`,
  `Aplicarás <span class="c-course-information__learning-text-span">técnicas florales</span> que te permitirán ampliar tus servicios y sacarle el máximo provecho.`,
  `Desarrollarás las <span class="c-course-information__learning-text-span">técnicas florales brindadas en clase</span> paso a paso explicados detenidamente.`,
  `Obtendrás un conocimiento y una <span class="c-course-information__learning-text-span">visión amplia sobre los arreglos florales</span>, sus diseños y beneficios.`,
  `Tendrás una excelente oportunidad para <span class="c-course-information__learning-text-span">montar tu propio emprendimiento en el mundo de la florería.</span>`,
  `Aprenderás técnicas de como derretir el <span class="c-course-information__learning-text-span">chocolate y la decoración de fresas.</span>`,
  `Y mucho <span class="c-course-information__learning-text-span">más...</span>`
];

updateAllElementsContent(".c-course-information__learning-paragraph", contentsToLearn);

updateElementImage(".c-course-information__learning-img", "./img/img1.png");

const contentsToBenefits = [
  `<span class="c-course-information__benefits-text-span">AHORRO GARANTIZADO</span>, la mayoría de los programas presenciales pueden costar entre 200 y 300 dólares mensuales.`,
  `<span class="c-course-information__benefits-text-span">APRENDE A TU PROPIO RITMO</span>, sin presiones, sin horarios y de una forma sencilla y garantizada.`,
  `<span class="c-course-information__benefits-text-span">RECUPERA TU INVERSIÓN</span> rapidamente ofreciendo tus propios arreglos florales y creando tu propio emprendimiento.`,
  `Aprenderás a montar tu propia florería, para emprender un <span class="c-course-information__benefits-text-span">NEGOCIO MUY LUCRATIVO Y DE ALTA DEMANDA.</span>`,
  `<span class="c-course-information__benefits-last-text-span">Inicia el 2023 aumentando tus ingresos.</span><br>¡Imagínate aprender este negocio de los arreglos florales para sorprender y enamorar a tus clientes, y de esta manera generar ganancias!🤑`
];

updateAllElementsContent(".c-course-information__benefits-paragraph", contentsToBenefits);

updateElementImage(".c-course-information__benefits-img", "./img/img2.png");

updateElementContent(".c-firts-bonds__text", `SOLO POR INSCRIBIRTE HOY AL CURSO OBTENDRÁS 3 BONOS ADICIONALES TOTALMENTE GRATIS`);

const contentsTitlesBonds = [
  `BONO #1 - ACCESO AL GRUPO PRIVADO DE WHATSAPP (EXCLUSIVO PARA ALUMNOS)`,
  `BONO #2 - ACCESO DE POR VIDA + ACTUALIZACIONES`,
  `BONO #3 - CERTIFICADO DE FINALIZACIÓN`
]

updateAllElementsContent(".c-firts-bonds__title", contentsTitlesBonds);

const contentsDescriptionsBonds = [
  `Accederás a un grupo privado y exclusivo solo para estudiantes en donde estará presente la maestra y podrá resolver todas tus dudas y la de tus compañeros.<br><br>También podrán compartir y recibir ideas para mejorar sus arreglos florales y mejorar su emprendimiento.`,
  `Tendrás acceso de por vida a nuestro curso y a todas las respectivas actualizaciones que realicemos en el futuro de manera TOTALMENTE GRATIS 🤩.`,
  `Una vez que completes y finalices el curso, podrás descargar e imprimir tu propio certificado de finalización que avala que has culminado el curso con éxito.`
]

updateAllElementsContent(".c-firts-bonds__description", contentsDescriptionsBonds);

const contentsImgFirstsBonds = [
  `./img/whatsapp-svgrepo-com (1).svg`,
  `./img/update-svgrepo-com.svg`,
  `./img/diploma-svgrepo-com.svg`
];

updateAllElementsImages(".c-firts-bonds__icon", contentsImgFirstsBonds)

const contentsSecondsBonds = [
  `PERO ESPERA AÚN HAY MÁS PARA TÍ`,
  `ACCEDE A MÁS DE 50 MÓDULOS DONDE APRENDERÁS EL PASO A PASO DE CÓMO EMPRENDER EN ESTE NEGOCIO DE LOS ARREGLOS FLORALES`,
  `ADICIONALMENTE RECIBE 5 MÓDULOS DE REGALO`
]

updateAllElementsContent(".c-seconds-bonds__text", contentsSecondsBonds);

const contentsTitlesGifs = [
  `REGALO #1 MÓDULO INTRODUCCIÓN Y RECOMENDACIONES PARA CUBRIR FRESAS CON CHOCOLATE<br>(s/ 45.00 SOLES - GRATIS)`,
  `REGALO #2 MÓDULO TÉCNICA PARA FUNDIR EL CHOCOLATE<br>(s/ 45.00 SOLES - GRATIS)`,
  `REGALO #3 MÓDULO TÉCNICA DE COLOR Y TOPPINGS PARA FRESAS<br>(s/ 50.00 SOLES - GRATIS)`,
  `REGALO #4 MÓDULO FRESAS DORADAS<br>(s/ 45.00 SOLES - GRATIS)`,
  `REGALO #5 MÓDULO OSA DE CHOCOLATE RELLENA DE BROWNIE<br>(s/ 45.00 SOLES - GRATIS)`
]

updateAllElementsContent(".c-seconds-bonds__title", contentsTitlesGifs);

const contentsDescriptionsGifs = [
  `Aprenderás a cubrir fresas con chocolate de una manera práctica sin la necesidad de utilizar grandes instrumentos.`,
  `Aprenderás la técnica para fundir el chocolate y que te quede perfecto.<br><br>También aprenderás a elegir el tipo de chocolate adecuado.`,
  `Aprenderás a aplicarle color a las coberturas de chocolate y así poder cubrir todas tus fresas con aquellas coberturas.<br><br>Además, en este módulo utilizaremos coco y trozos de maní para poder acompañar nuestras fresas.`,
  `Aprenderemos a decorar y a realizar mezclas para poder darle el color dorado a nuestras fresas con la mejores técnicas.`,
  `<p class="c-seconds-bonds__title">REGALO #5 MÓDULO OSA DE CHOCOLATE RELLENA DE BROWNIE<br>(s/ 45.00 SOLES - GRATIS)</p>`,
  `Aprenderás a realizar una osa de chocolate con relleno de brownie que le dará un gran valor agregado a tus trabajos.`
]

updateAllElementsContent(".c-seconds-bonds__description", contentsDescriptionsGifs);

const contentsGifsIMG = [
  `./img/img3.png`,
  `./img/img4.png`,
  `./img/img5.png`,
  `./img/img6.PNG`,
  `./img/img7.PNG`
];

updateAllElementsImages(".c-seconds-bonds__img", contentsGifsIMG);

updateElementContent(".c-prices__text-1",`¡SOLO POR HOY! CURSO "FLORALES MODERNAS PARA NEGOCIO" + 3 BONOS EXCLUSIVOS + 5 MÓDULOS ADICIONALES`);
updateElementContent(".c-prices__text-2",`PRECIO ESPECIAL DE PRE-LANZAMIENTO, TERMINA EN:`);
updateElementContent(".c-prices__text-3",`ÚNICAMENTE 50 CUPOS DISPONIBLES - 40 CUPOS VENDIDOS`);

updateElementContent(".c-important__paragraph",`<span class="c-important__span">IMPORTANTE:</span>👉 En las próximas horas el curso aumentará de precio y lo seguirá haciendo cuando el contador llegue a cero 😱,<br>
<span class="c-important__span">No es broma Ni estrategia de Marketing</span> ❌.<br>
Creemos y premiamos a los que tomen acción rápida 💪, así que si crees que nuestro curso <span class="c-important__span">FLORALES MODERNOS PARA NEGOCIO</span> puede ayudarte a comenzar o escalar tu futuro negocio 🤩, <span class="c-important__span">TOMA ACCIÓN AHORA</span> 🏃‍♂, porque vas a perder la oferta 😬.`);

const contentsPlanTitle = [
  `CONOCE NUESTRA <span class="c-study-plan__span">MALLA CURRICULAR</span> 🤩`,
  `ESTE SERÁ TU <span class="c-study-plan__span">CERTIFICADO</span> 🤩`,
  `MIRA COMO ES NUESTRO <span class="c-study-plan__span">CURSO</span> POR DENTRO 😉`
];

updateAllElementsContent(".c-study-plan__title", contentsPlanTitle);

const contentsPlanText = [
  `Aprenderás desde cero paso a paso a realizar tus propios arreglos florales.<br><br>Estudia a tu ritmo con una metodología fácil, práctica y profesionalmente 💐`,
  `RECOMPENSAMOS TU ESFUERZO 💪<br><br>Una vez que termines todo el curso te brindaremos un certificado digital que avala que has culminado con éxito todo el curso. 🧑‍🎓👩‍🎓`,
  `El curso se actualiza siempre y tendrás acceso de por vida a nuestra aula virtual. 👨‍🏫`
];

updateAllElementsContent(".c-study-plan__text", contentsPlanText);

updateElementImage(".c-study-plan__img-certification", "./img/certificado.jpg");
updateElementImage(".c-study-plan__img-course-inside", "./img/curso-por-dentro.png");

updateElementContent(".c-students__title", "¿QUE DICEN NUESTROS ESTUDIANTES SOBRE EL CURSO?");

const contentsImgProfile = [
  `./img/t1.jpg`,
  `./img/t2.jpg`,
  `./img/t3.jpg`
]

updateAllElementsImages(".c-students__img-profile", contentsImgProfile);

const contentsStudentsName = [
  `Hector Navarro`,
  `Claudia Ramírez`,
  `Lorena Risco`
]

updateAllElementsContent(".c-students__name", contentsStudentsName);

const contentsStudentsText = [
  `Antes de tomar el curso de arreglos florales, siempre tenía problemas para seleccionar las flores adecuadas para cada tipo de arreglo.
  <br><br>
  Pero gracias a lo que aprendí en el curso, ahora sé cómo reconocer las características de cada flor y elegir las más adecuadas para cada ocasión.
  <br><br>
  Ya no tengo miedo de crear arreglos florales impresionantes para cualquier evento.
  <br><br>
  Mil gracias maestra Jenny
  <br><br>
  Miren mis resultados 👇`,

  `Siempre me ha encantado trabajar con flores, pero no sabía cómo cortar y cuidarlas para que duraran más tiempo.
  <br><br>
  Después de tomar el curso de arreglos florales, aprendí los trucos para cortar las flores en el ángulo adecuado y para hidratarlas correctamente.
  <br><br>
  Ahora puedo disfrutar de arreglos florales frescos y hermosos durante mucho más tiempo.
  <br><br>
  Gracias por este maravilloso curso maestra Jenny
  <br><br>
  Les comparto un poco de mi trabajo que logré gracias al curso 👇`,

  `Siempre había querido tener mi propio negocio floral, pero no sabía cómo empezar.
  <br><br>
  Gracias al curso de arreglos florales, aprendí a crear arreglos de diferentes tamaños y formas, a utilizar las herramientas necesarias y a presentar los arreglos de manera atractiva.
  <br><br>
  Ahora tengo mi propio negocio floral y genero ingresos extras en cada época del año.
  <br><br>
  Aprender a crear arreglos florales ha sido una experiencia increíble que me ha permitido hacer realidad mi sueño de tener mi propio negocio.
  <br><br>
  Muchas gracias maestra Jenny
  <br><br>
  Por aqui les dejo una foto de mis resultados 👇`
]

updateAllElementsContent(".c-students__text", contentsStudentsText);

const contentsStudentsImgWork = [
  `./img/img10.jpg`,
  `./img/img11.jpg`,
  `./img/img12.jpg`
]

updateAllElementsImages(".c-students__img-work", contentsStudentsImgWork);

updateElementContent(".c-teacher__title", "¿CON QUIÉN APRENDERÁS?")
updateElementImage(".c-teacher__img", "./img/img13.png")
updateElementContent(".c-teacher__text", "Desarrollado por JENNY PAOLA BECERRA, florista experta hace 5 años, creadora de una reconocida marca floral a nivel local, la cual ha obtenido gran éxito debido a su trabajo visualmente armonioso acompañando las flores con los chocolates como plus en sus composiciones florales.")

updateElementContent(".c-recapitulate__title","¡RECAPITULEMOS 😍!");
updateElementContent(".c-recapitulate__text-1","¡TODO ESTO TE LLEVARÁS EL DÍA DE HOY CON TU INSCRIPCIÓN 👇!");

const contentsRecapitulateParagraph = [
  `El programa completo de "FLORALES MODERNOS PARA NEGOCIO" (<span class="c-recapitulate__span">s/ 100.00 SOLES</span>)`,
  `Grupo Privado de Estudiantes (<span class="c-recapitulate__span">s/ 25.00 SOLES</span>)`,
  `Membresía con acceso para toda la vida (<span class="c-recapitulate__span">s/ 25.00 SOLES</span>)`,
  `Certificado de participación en el programa (<span class="c-recapitulate__span">s/ 20.00 SOLES</span>)`,
  `Regalo adicional #1: Módulo introducción y recomendaciones para cubrir fresas con chocolate (<span class="c-recapitulate__span">s/ 45.00 SOLES</span>)`,
  `Regalo adicional #2: Módulo técnica para fundir el chocolate (<span class="c-recapitulate__span">s/ 45.00 SOLES</span>)`,
  `Regalo adicional #3: Módulo técnica de color y toppings para fresas (<span class="c-recapitulate__span">s/ 50.00 SOLES</span>)`,
  `Regalo adicional #4: Módulo fresas doradas (<span class="c-recapitulate__span">s/ 45.00 SOLES)</span>`,
  `Regalo adicional #5: Módulo osa de chocolate rellena de brownie (<span class="c-recapitulate__span">s/ 45.00 SOLES</span>)`
];

updateAllElementsContent(".c-recapitulate__paragraph", contentsRecapitulateParagraph);

updateElementContent(".c-recapitulate__hours", `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img class="c-recapitulate__icon" src="./img/arrow-right-svgrepo-com.svg">&nbsp;clases de contenido (+6 horas en video HD)`);

updateElementContent(".c-recapitulate__text-2",`TOTAL <span class="c-recapitulate__span-text-2">s/ 400.00</span>`);
updateElementContent(".c-recapitulate__text-3",`PERO HOY PODRAS ACCEDER POR:`);
updateElementContent(".c-recapitulate__text-4",`s/ 100.00`);
updateElementContent(".c-recapitulate__text-5",`¿QUÉ ESTÁS ESPERANDO?`);
updateElementContent(".c-recapitulate__text-6",`¡Más de 4000 alumnos de todo el mundo han transformado sus vidas gracias a los arreglos florales!💐
                                                <br><br>
                                                ¡Con nuestro programa, tú también puedes iniciar tu camino hacia una nueva pasión!
                                                <br><br>
                                                ¡No hay nada más poderoso que eso! Accede ahora mismo y descubre todo lo que necesitas para comenzar. 👇`);
updateElementContent(".c-recapitulate__text-7",`Imagina ¿Cómo sería tu vida si dominaras el arte de la florería? 🤩`);
updateElementContent(".c-recapitulate__text-8",`¿Qué pasaría si, además, consigues tener la habilidad para aprender a comercializar tus propios arreglos florales de alta calidad y tener un negocio rentable? 🙊`);
updateElementContent(".c-recapitulate__text-9",`¿Cuánto vale para ti conseguir todo esto?<br>No esperes más…`);
updateElementContent(".c-recapitulate__text-10",`¡COMIENZA HOY MISMO!`);

updateElementImage(".c-recapitulate__img", "./img/img14.png");

updateElementContent(".c-skills__title",`¿TE IMAGINAS ADQUIRIR ESTAS HABILIDADES?`);

const contentsSkillsGroupImg = [
  "./img/img20.png",
  "./img/img21.png",
  "./img/img22.png",
  "./img/img23.png",
  "./img/img24.png",
  "./img/img25.png",
  "./img/img26.png",
  "./img/img27.png",
  "./img/img28.png",
  "./img/img29.png",
  "./img/img30.png",
  "./img/img31.png"
];

updateAllElementsImages(".c-skills__img", contentsSkillsGroupImg);

updateElementContent(".c-frequent-questions__title", "PREGUNTAS FRECUENTAS");

updateElementContent(".c-footer__text", `© 2023 – DESCARGOS DE RESPONSABILIDAD IMPORTANTES - TODOS LOS DERECHOS RESERVADOS<br>
Este sitio no es parte del sitio web de Facebook o Facebook, Inc. Además, este sitio no está respaldado por Facebook de ninguna manera.<br>
FACEBOOK es una marca registrada de FACEBOOK, Inc.`);

//OBJETOS

updateElementContent(".o-notify__subtitle", `Acaba de adquirir el curso "Florales Modernas para Negocio" 💐`);

const contentsAccordionSummary = [
  `MÓDULO 1 - COMPOSICIÓN FLORAL CON ROSAS FRESCAS`,
  `MÓDULO 2 - SECADO Y PRESERVACIÓN DE ROSAS`,
  `MÓDULO 3 - ELABORACIÓN DE ROSAS EN CINTA DE TELA`,
  `MÓDULO 4 - MATERIAL ADICIONAL - BONOS`,
  `MÓDULO 5 - VIDEO RESPUESTA`,

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
  `◉ ¿Por qué es rentable el negocio?`,
  `◉ Tips y recomendaciones (b).`,
  `◉ Bouquet moderno (a).`,
  `◉ Bouquet moderno (B).`,
  `◉ Bouquet moderno (B).`,
  `◉ Bouquet de novia.`,
  `◉ Bouquet collage.`,
  `◉ Botella floral (a).`,
  `◉ Botella floral (b).`,
  `◉ Botella frutal (a).`,
  `◉ Botella frutal (b).`,
  `◉ Diseño floral redondo (a).`,
  `◉ Diseño floral redondo (b).`,
  `◉ Diseño jardín (a).`,
  `◉ Diseño jardín (b).`,
  `◉ Errores comunes en bases florales (a).`,
  `◉ Errores comunes en bases florales (b).`,

  `◉ Técnica y secado de rosas.`,
  `◉ Diseño con rosas secas (a).`,
  `◉ Diseño con rosas secas (b).`,

  `◉ Diseño con rosas tela (a).`,
  `◉ Diseño con rosas tela (b).`,

  `◉ Presentación fresas con chocolate.`,
  `◉ Técnica para fundir el chocolate.`,
  `◉ Técnica de color y toppings para fresas.`,
  `◉ Fresas doradas.`,
  `◉ Moldes de chocolate.`,
  `◉ Osa rellana de brownie.`,

  `◉ ¿Cómo hidratar un oasis en una composición floral?`,

  `No te preocupes el pago es realizado de forma 100% segura por medio de Hotmart, la plataforma de venta de productos digitales más grande y segura de habla hispana.
  <br><br>
  El pago se lo haces directamente a ellos y son ellos los encargados de enviarte de inmediato el acceso para ver el curso en la misma plataforma de Hotmart, así que no hay riesgo alguno.
  <br><br>
  Inmediatamente haces el pago te llega al correo un usuario y contraseña para acceder a la plataforma.
  <br><br>
  Puedes inscribirte ahora haciendo click aquí >> <a class="js-set-link-hotmart" href="${link_hotmart}">Si quiero inscribirme</a>`,


  `Claro que sí, todas las técnicas son muy sencillas de realizar y el curso está diseñado para que puedas aprender desde casa perfectamente por medio de videos paso a paso. Además cuentas con el apoyo y soporte de la profesora JENNY en nuestro grupo privado de whatsapp 😉.
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


//VALIDAR LOS SUMARYS PARA QUE ESTE ABIERTO SOLO UNO
const summaries = document.querySelectorAll('summary');

    summaries.forEach((summary) => {
      summary.addEventListener('click', () => {
        summaries.forEach((s) => {
          if (s !== summary) {
            s.parentNode.removeAttribute('open');
          }
        });
      });
    });