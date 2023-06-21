
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

function editarEtiquetaMeta(selector, contenido, atributo) {
    let etiquetaMeta = document.querySelector(selector);
    if (etiquetaMeta !== null) {
      etiquetaMeta.setAttribute(atributo, contenido);
    }
}
  
editarEtiquetaMeta('.og-title-web', ogTitleWebContent, 'content');
editarEtiquetaMeta('.og-description-web', ogDescriptionWebContent, 'content');
editarEtiquetaMeta('.og-type-web', ogTypeWebContent, 'content');
editarEtiquetaMeta('.og-url-web', ogUrlWebContent, 'content');
editarEtiquetaMeta('.og-image-web', ogImageWebContent, 'content');
editarEtiquetaMeta('.og-imageSecureUrl-web', ogImageSecureUrlWebContent, 'content');
editarEtiquetaMeta('.description-web', descriptionWebContent, 'content');

editarEtiquetaMeta('.og-image-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.og-imageSecureUrl-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.og-imageType-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.og-imageWidth-whatsapp', descriptionWebContent, 'content');
editarEtiquetaMeta('.og-imageHeight-whatsapp', descriptionWebContent, 'content');
// FIN - EDITAR META WEB

//INICIO - TITULO
document.title = "Florales Modernos para Negocio 💐";
//FIN - TITULO

function updateElementContent(selector, content) {
  const element = document.querySelector(selector);
  if (element !== null) {
    element.innerHTML = content;
  }
}

//INICIO - ESTUDIANTE INSCRITO
updateElementContent(".notify__subtitle", `Acaba de adquirir el curso "Florales Modernas para Negocio" 💐`);
//FIN - CURSO ESTUDIANTE

//INICIO - TITULO HEADER
updateElementContent(".header--title", `COMIENZA TU <span>PROPIO NEGOCIO</span> FLORAL SIN ALTAS INVERSIONES DE DINERO Y DOMINA LAS TÉCNICAS FLORALES SIN NECESIDAD DE SER UNA <span>UNA EXPERTA</span>🤩`);
//FIN - TITULO HEADER

//INICIO - WARNING HEADER
updateElementContent(".header--warning", `<mark><span>ADVERTENCIA 🚨🖐️:</span> ¡Estas a un paso de descubrir el método innovador que te permitirá <span>GENERAR INGRESOS</span> 🤑<br>creando <span>LUJOSOS ARREGLOS FLORALES</span> 💐, y eso no es todo 👀, también te permitirá emprender un negocio rentable de alta demanda 🤩!</mark>`);
//FIN - WARNING HEADER

//INICIO - PROMESA HEADER
updateElementContent(".header--phrase", `"Los arreglos florales permiten a las mujeres florecer por su <span>BELLEZA</span> propia y lucir <span>únicas</span> y <span>espectaculares</span>" <span style="font-style: normal;">🥰</span>`);
//FIN - PROMESA HEADER

function updateAllElementsContent(selector, contents) {
  const elements = document.querySelectorAll(selector);
  const numElements = elements.length;

  for (let i = 0; i < numElements; i++) {
    elements[i].innerHTML = contents[i]
  }
}

//INICIO - PREGUNTAS HEADER
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

updateAllElementsContent(".header--question", contentsQuestions);
//FIN - PREGUNTAS HEADER

//INICIO MAIN TITLE
const contentsMainTitle = [
  `¿TE SIENTES IDENTIFICADA CON ALGUNA FRASE? <span style="font-style: normal;">😮</span>`,
  `ENTONCES ESTE CURSO ES PARA TI! <span style="font-style: normal;">😉</span>`
];

updateAllElementsContent(".main--title", contentsMainTitle);
//FIN MAIN TITLE

//INICIO - MAIN PROMISE
updateElementContent(".main--promise", `REALIZA EXTRAORDINARIOS ARREGLOS FLORALES CON NUESTRAS CLASES PASO A PASO Y DALE A TU FAMILIA, AMIGOS Y CLIENTES LO MEJOR 🤩 (SE LO MERECEN) 💪`);
//FIN - CURSO ESTUDIANTE

//INICIO - MAIN SUBTITLE

const contentMainSubtitle = [
  `ARREGLOS FLORALES HECHOS POR NUESTROS ESTUDIANTES`,
  `¡TU TAMBIÉN APRENDERÁS TODO ESTO Y MUCHO MÁS! 😁`,
  `¿PERO ES DIFÍCIL? 🤔`,
  `¡NO! TODOS NOS HAN HECHO CREER ESTO, PERO NO ES DIFÍCIL 💁‍♀️`,
  `APRENDERÁS PASO A PASO DE MANERA FÁCIL Y ACCESIBLE 🧐,`,
  `INCLUSO SI ERES UN(A) PRINCIPIANTE EN DISEÑO FLORAL 💐,`,
  `Y SIN LA NECESIDAD DE TENER HABILIDADES TÉCNICAS Y PRÁCTICAS PARA HACER ARREGLOS FLORALES 😉`,
  `IMPORTANTE: Leer la información hasta el final`,

  `PRECIO ESPECIAL DE PRE-LANZAMIENTO, TERMINA EN:`
];

updateAllElementsContent(".main--subtitle", contentMainSubtitle);
//FIN - MAIN SUBTITLE

function updateElementImage(selector, content) {
  const element = document.querySelector(selector);
  element.src = content
}

function updateAllElementsImages(selector, contents) {
  const elements = document.querySelectorAll(selector);
  const numElements = elements.length;

  for (let i = 0; i < numElements; i++) {
    elements[i].src = contents[i]
  }
}

//INICIO - MAIN STUDENT IMG
const contentsStudentIMG = [
  `./img/e1.png`,
  `./img/e2.png`,
  `./img/e3.png`
]

updateAllElementsImages(".estudiante__img", contentsStudentIMG);
//FIN - MAIN STUDENT IMG

//INICO main--container-StudyPlan__item--title
updateAllElementsContent(".main--container-StudyPlan__item--title", [`¿Qué vas a Aprender?`, `Beneficios del Curso`]);
//FIN main--container-StudyPlan__item--title

//INICO main--container-StudyPlan__item--title
const contentsToLearn = [
  `Aprenderás a emprender tu negocio floral <span>sin altas inversiones de dinero.</span>`,
  `Dominarás técnicas florales como base para crear <span>increíbles diseños.</span>`,
  `Conocerás más a fondo el <span>mercado floral</span> y sus llamativos acompañamientos.`,
  `Mediante tips y recomendaciones, <span>evitarás cometer errores</span> dentro de la industria floral.`,
  `<span>Desarrollarás tu marca</span> con importantes diferenciadores, estilos únicos y modernos.`,
  `<span>Despertarás tu criterio armónico</span> para crear composiciones florales.`,
  `Aplicarás <span>técnicas florales</span> que te permitirán ampliar tus servicios y sacarle el máximo provecho.`,
  `Desarrollarás las <span>técnicas florales brindadas en clase</span> paso a paso explicados detenidamente.`,
  `Obtendrás un conocimiento y una <span>visión amplia sobre los arreglos florales</span>, sus diseños y beneficios.`,
  `Tendrás una excelente oportunidad para <span>montar tu propio emprendimiento en el mundo de la florería</span>.`,
  `Aprenderás técnicas de como derretir el <span>chocolate y la decoración de fresas.</span>`,
  `Y mucho <span>más...</span>`,

  `<span>AHORRO GARANTIZADO</span> , la mayoría de los programas presenciales pueden costar entre 200 y 300 dólares mensuales.`,
  `<span>APRENDE A TU PROPIO RITMO</span> , sin presiones, sin horarios y de una forma sencilla y garantizada.`,
  `<span>RECUPERA TU INVERSIÓN</span> rapidamente ofreciendo tus propios arreglos florales y creando tu propio emprendimiento.`,
  `Aprenderás a montar tu propia florería, para emprender un <span>NEGOCIO MUY LUCRATIVO Y DE ALTA DEMANDA</span>.`
];

updateAllElementsContent(".main--container-StudyPlan__item--container--description__container--item--text", contentsToLearn);
//FIN main--container-StudyPlan__item--title

//INICIO - MAIN TO LEARN IMG
const contentsToLearIMG = [
  `./img/img1.png`,
  `./img/img2.png`
];

updateAllElementsImages(".main--container-StudyPlan__item--container--description__img", contentsToLearIMG);
//FIN - MAIN TO LEARN IMG

//INICIO - main--container-StudyPlan__item--container--description__text
updateElementContent(".main--container-StudyPlan__item--container--description__text", `<em><u>Inicia el 2023 aumentando tus ingresos.</u></em> ¡Imagínate aprender este negocio de los arreglos florales para sorprender y enamorar a tus clientes, y de esta manera generar ganancias!🤑`);
//FIN - main--container-StudyPlan__item--container--description__text

//INICIO - WARNING HEADER
updateElementContent(".header--warning", `<mark><span>ADVERTENCIA 🚨🖐️:</span> ¡Estas a un paso de descubrir el método innovador que te permitirá <span>GENERAR INGRESOS</span> 🤑<br>creando <span>LUJOSOS ARREGLOS FLORALES</span> 💐, y eso no es todo 👀, también te permitirá emprender un negocio rentable de alta demanda 🤩!</mark>`);
//FIN - WARNING HEADER

//INICIO - MAIN BONDS
updateElementContent(".main--title--bonds", `SOLO POR INSCRIBIRTE HOY AL CURSO OBTENDRÁS 3 BONOS ADICIONALES TOTALMENTE GRATIS`);
//FIN - MAIN BONDS

//INICIO - MAIN TITLE BONDS
const contentsTitlesBonds = [
  `BONO #1 - ACCESO AL GRUPO PRIVADO DE WHATSAPP (EXCLUSIVO PARA ALUMNOS)`,
  `BONO #2 - ACCESO DE POR VIDA + ACTUALIZACIONES`,
  `BONO #3 - CERTIFICADO DE FINALIZACIÓN`
]

updateAllElementsContent(".main--container--bonds__item--title", contentsTitlesBonds);
//FIN - MAIN TITLE BONDS

//INICIO - MAIN TITLE BONDS
const contentsDescriptionsBonds = [
  `Accederás a un grupo privado y exclusivo solo para estudiantes en donde estará presente la maestra y podrá resolver todas tus dudas y la de tus compañeros.<br><br>También podrán compartir y recibir ideas para mejorar sus arreglos florales y mejorar su emprendimiento.`,
  `Tendrás acceso de por vida a nuestro curso y a todas las respectivas actualizaciones que realicemos en el futuro de manera TOTALMENTE GRATIS 🤩.`,
  `Una vez que completes y finalices el curso, podrás descargar e imprimir tu propio certificado de finalización que avala que has culminado el curso con éxito.`
]

updateAllElementsContent(".main--container--bonds__item--description", contentsDescriptionsBonds);
//FIN - MAIN TITLE BONDS

//INICIO - MAIN TITLE GIFS
updateElementContent(".main--gifs--title", `PERO ESPERA AÚN HAY MÁS PARA TÍ`);
//FIN - MAIN TITLE GIFS

//INICIO - MAIN SUBTITLE GIFS
updateElementContent(".main--gifs--subtitle", `ACCEDE A MÁS DE 50 MÓDULOS DONDE APRENDERÁS EL PASO A PASO DE CÓMO EMPRENDER EN ESTE NEGOCIO DE LOS ARREGLOS FLORALES`);
//FIN - MAIN SUBTITLE GIFS

//INICIO - MAIN DESCRIPTION GIFS
updateElementContent(".main--gifs--description", `ADICIONALMENTE RECIBE 5 MÓDULOS DE REGALO`);
//FIN - MAIN DESCRIPTION GIFS

//INICIO - MAIN TITLE BONDS
const contentsTitlesGifs = [
  `REGALO #1 MÓDULO INTRODUCCIÓN Y RECOMENDACIONES PARA CUBRIR FRESAS CON CHOCOLATE<br>(<del><span class="currency">$10</span> <span class="type-currency">DÓLARES</span></del> - GRATIS)`,
  `REGALO #2 MÓDULO TÉCNICA PARA FUNDIR EL CHOCOLATE<br>(<del><span class="currency">$10</span> <span class="type-currency">DÓLARES</span></del> - GRATIS)`,
  `REGALO #3 MÓDULO TÉCNICA DE COLOR Y TOPPINGS PARA FRESAS<br>(<del><span class="currency">$10</span> <span class="type-currency">DÓLARES</span></del> - GRATIS)`,
  `REGALO #4 MÓDULO FRESAS DORADAS<br>(<del><span class="currency">$10</span> <spanclass="type-currency">DÓLARES</spanclass=></del> -GRATIS)`,
  `REGALO #5 MÓDULO OSA DE CHOCOLATE RELLENA DE BROWNIE<br>(<del><span class="currency">$10</span> <span class="type-currency">DÓLARES</span></del> - GRATIS)`
]

updateAllElementsContent(".main--container--gifs__item--title", contentsTitlesGifs);
//FIN - MAIN TITLE BONDS

//INICIO - MAIN DESCRIPTION BONDS
const contentsDescriptionsGifs = [
  `Aprenderás a cubrir fresas con chocolate de una manera práctica sin la necesidad de utilizar grandes instrumentos.`,
  `Aprenderás la técnica para fundir el chocolate y que te quede perfecto.<br><br>También aprenderás a elegir el tipo de chocolate adecuado.`,
  `Aprenderás a aplicarle color a las coberturas de chocolate y así poder cubrir todas tus fresas con aquellas coberturas.<br><br> Además, en este módulo utilizaremos coco y trozos de maní para poder acompañar nuestras fresas.`,
  `Aprenderemos a decorar y a realizar mezclas para poder darle el color dorado a nuestras fresas con la mejores técnicas.`,
  `Aprenderás a realizar una osa de chocolate con relleno de brownie que le dará un gran valor agregado a tus trabajos.`
]

updateAllElementsContent(".main--container--gifs__item--description", contentsDescriptionsGifs);
//FIN - MAIN DESCRIPTION BONDS

//INICIO - MAIN IMG GIFS
const contentsGifsIMG = [
  `./img/img3.png`,
  `./img/img4.png`,
  `./img/img5.png`,
  `./img/img6.png`,
  `./img/img7.png`

];

updateAllElementsImages(".size__gif", contentsGifsIMG);
//FIN - MAIN IMG GIFS

//INICIO - main--offer--title
updateElementContent(".main--offer--title", `¡SOLO POR HOY! CURSO "FLORALES MODERNAS PARA NEGOCIO" + 3 BONOS EXCLUSIVOS + 5 MÓDULOS ADICIONALES`);
//FIN - main--offer--title

//INICIO - headline
// updateElementContent(".main-offer__price", [`$100.00`, `$50.00`, `$25.00`]);
//FIN - headline

//INICIO - main--offer--description
updateAllElementsContent(".main--offer--description", [`UN SÓLO Y ÚNICO PAGO PARA TODA LA VIDA (SIN COBROS POSTERIORES)`, `LA PÁGINA DE PAGOS CONVIERTE AUTOMATICAMENTE A TU MONEDA LOCAL`]);
//FIN - main--offer--description

//INICIO - main--offer--progressBar--description
updateElementContent(".main--offer--progressBar--description", `ÚNICAMENTE 50 CUPOS DISPONIBLES - 40 CUPOS VENDIDOS`);
//FIN - main--offer--progressBar--description

//INICIO - main--offer--img
updateElementImage(".main--offer--img", "./img/img8.PNG")
//FIN - main--offer--img

//INICIO - button-pay
const contentsPayButton = [
  `<i class="bi bi-box-arrow-in-up-left"></i><span>INSCRÍBETE AL <br>PROGRAMA AQUÍ <small>CUPOS LIMITADOS</small></span>`,
  `<i class="bi bi-box-arrow-in-up-left"></i><span>INSCRÍBETE AL <br>PROGRAMA AQUÍ <small>CUPOS LIMITADOS</small></span>`,
  `<i class="bi bi-box-arrow-in-up-left"></i><span>INSCRÍBETE AL <br>PROGRAMA AQUÍ <small>CUPOS LIMITADOS</small></span>`
];

updateAllElementsContent(".button-pay", contentsPayButton);
//FIN - button-pay

//INICIO main--offer--containerPay--description
updateElementContent(".main--offer--containerPay--description", "Compra 100% Segura")
//FIN main--offer--containerPay--description

//INICIO main__take-action
updateElementContent(".main__take-action", `<span>IMPORTANTE:👉</span> En las próximas horas el curso aumentará de precio y lo seguirá haciendo cuando el contador llegue a cero 😱,<br><span>No es broma Ni estrategia de Marketing ❌.</span><br>Creemos y premiamos a los que tomen acción rápida 💪, así que si crees que nuestro curso <span>FLORALES MODERNOS PARA NEGOCIO</span> puede ayudarte a comenzar o escalar tu futuro negocio 🤩, <span>TOMA ACCIÓN AHORA</span> 🏃‍♂, porque vas a perder la oferta 😬.`);
//FIN main__take-action

//INICIO main--warranty--text__title
updateElementContent(".main--warranty--text__title", `CONOCE NUESTRA <span>MALLA CURRICULAR</span>🤩`);
//FIN main--warranty--text__title

//INICIO main--warranty--text__title
updateElementContent(".main--warranty--text__description", `Aprenderás desde cero paso a paso a realizar tus propios arreglos florales. <br><br> Estudia a tu ritmo con una metodología fácil, práctica y profesionalmente 💐`);
//FIN main--warranty--text__title

//INICIO - question
const contentQuestions = [
  `MÓDULO 1 - COMPOSICIÓN FLORAL CON ROSAS FRESCAS`,
  `MÓDULO 2 - SECADO Y PRESERVACIÓN DE ROSAS`,
  `MÓDULO 3 - ELABORACIÓN DE ROSAS EN CINTA DE TELA`,
  `MÓDULO 4 - MATERIAL ADICIONAL - BONOS`,
  `MÓDULO 5 - VIDEO RESPUESTA`
];

updateAllElementsContent(".question", contentQuestions);
//FIN - question

//INICIO - answer
const contentAnswers = [
  `◉ ¿Por qué es rentable el negocio? <br>
  ◉ Tips y recomendaciones (a).<br>
  ◉ Tips y recomendaciones (b).<br>
  ◉ Bouquet moderno (a).<br>
  ◉ Bouquet moderno (B).<br>
  ◉ Bouquet de novia.<br>
  ◉ Bouquet collage.<br>
  ◉ Botella floral (a).<br>
  ◉ Botella floral (b).<br>
  ◉ Botella frutal (a).<br>
  ◉ Botella frutal (b).<br>
  ◉ Diseño floral redondo (a).<br>
  ◉ Diseño floral redondo (b).<br>
  ◉ Diseño jardín (a).<br>
  ◉ Diseño jardín (b).<br>
  ◉ Errores comunes en bases florales (a).<br>
  ◉ Errores comunes en bases florales (b).<br>`,

  `◉ Técnica y secado de rosas.<br>
  ◉ Diseño con rosas secas (a).<br>
  ◉ Diseño con rosas secas (b).<br>`,

  `◉ Rosas en cinta de tela (a).<br>
  ◉ Rosas en cinta de tela (b).<br>`,

  `◉ Presentación fresas con chocolate.<br>
  ◉ Técnica para fundir el chocolate.<br>
  ◉ Técnica de color y toppings para fresas.<br>
  ◉ Fresas doradas.<br>
  ◉ Moldes de chocolate.<br>
  ◉ Osa rellana de brownie.<br>`,

  `◉ ¿Cómo hidratar un oasis en una composición floral?`
];

updateAllElementsContent(".answer", contentAnswers);
//FIN - answer

//INICIO certificacion__title
updateElementContent(".certificacion__title", `ESTE SERÁ TU <span>CERTIFICADO</span> 🤩`);
//FIN main--warranty--text__title

//INICIO certificacion__description
updateElementContent(".certificacion__description", `RECOMPENSAMOS TU ESFUERZO 💪 <br> Una vez que termines todo el curso te brindaremos un certificado digital que avala que has culminado con éxito todo el curso. 🧑‍🎓👩‍🎓`);
//FIN certificacion__description

//INICIO - certification__img
updateElementImage(".certification__img", "./img/certificado.jpg")
//FIN - certification__img

//INICIO course-inside__title
updateElementContent(".course-inside__title", `MIRA COMO ES NUESTRO <span>CURSO</span> POR DENTRO 😉`);
//FIN main--warranty--text__title

//INICIO course-inside__description
updateElementContent(".course-inside__description", `El curso se actualiza siempre y tendrás acceso de por vida a nuestra aula virtual. 👨‍🏫`);
//FIN certificacion__description

//INICIO - course-inside__img
updateElementImage(".course-inside__img", "./img/curso-por-dentro.png")
//FIN - course-inside__img

//INICIO main--opinions--title
updateElementContent(".main--opinions--title", `¿QUE DICEN NUESTROS ESTUDIANTES SOBRE EL CURSO?`);
//FIN main--opinions--title

//INICIO - contentsCustomerName
const contentsCustomerName = [
  `Hector Navarro`,
  `Claudia Ramírez`,
  `Lorena Risco`
];

updateAllElementsContent(".customer__name", contentsCustomerName);
//FIN - contentsCustomerName

//INICIO - contentsCustomerName
const contentsCustomerDescription = [
  `Antes de tomar el curso de arreglos florales, siempre tenía problemas para
  seleccionar las flores adecuadas para cada tipo de arreglo.<br><br>Pero gracias a lo
  que
  aprendí en el curso, ahora sé cómo reconocer las características de cada flor y
  elegir las más adecuadas para cada ocasión.<br><br>Ya no tengo miedo de crear
  arreglos
  florales impresionantes para cualquier evento.<br><br>
  Mil gracias <strong>maestra Jenny</strong> <br><br>
  Miren mis resultados 👇`,

  `Siempre me ha encantado trabajar con flores, pero no sabía cómo cortar y cuidarlas
  para que duraran más tiempo.<br><br>Después de tomar el curso de arreglos florales,
  aprendí
  los trucos para cortar las flores en el ángulo adecuado y para hidratarlas
  correctamente.<br><br>Ahora puedo disfrutar de arreglos florales frescos y hermosos
  durante
  mucho más tiempo.<br><br>
  Gracias por este maravilloso curso <strong>maestra Jenny</strong> <br><br>
  Les comparto un poco de mi trabajo que logré gracias al curso 👇`,

  `Siempre había querido tener mi propio negocio floral, pero no sabía cómo
  empezar.<br><br>
  Gracias al curso de arreglos florales, aprendí a crear arreglos de diferentes
  tamaños y formas, a utilizar las herramientas necesarias y a presentar los arreglos
  de manera atractiva.<br><br>Ahora tengo mi propio negocio floral y genero ingresos
  extras
  en cada época del año.<br><br>Aprender a crear arreglos florales ha sido una
  experiencia
  increíble que me ha permitido hacer realidad mi sueño de tener mi propio
  negocio.<br><br>
  Muchas gracias <strong>maestra Jenny</strong> <br><br>
  Por aqui les dejo una foto de mis resultados 👇`
];

updateAllElementsContent(".customer__description", contentsCustomerDescription);
//FIN - contentsCustomerName

//INICIO - customer__picture
const contentsCustomerProfileIMG = [
  `./img/t1.jpg`,
  `./img/t2.jpg`,
  `./img/t3.jpg`
];

updateAllElementsImages(".customer__picture", contentsCustomerProfileIMG);
//FIN - customer__picture

//INICIO - customer__picture
const contentsCustomerResultIMG = [
  `./img/img10.jpg`,
  `./img/img11.jpg`,
  `./img/img12.jpg`
];

updateAllElementsImages(".customer__result", contentsCustomerResultIMG);
//FIN - customer__picture

//INICIO main--opinions--title
updateElementContent(".main--teacher--title", `¿CON QUIÉN APRENDERÁS?`);
//FIN main--opinions--title

//INICIO main--opinions--title
updateElementContent(".main--teacher--container--description", `Desarrollado por JENNY PAOLA BECERRA,
florista experta hace 5 años, creadora de una reconocida marca floral a nivel local, la
cual ha obtenido gran éxito debido a su trabajo visualmente armonioso acompañando las
flores con los chocolates como plus en sus composiciones florales.`);
//FIN main--opinions--title

//INICIO main--teacher--container--img
updateElementImage(".main--teacher--container--img", "./img/img13.png")
//FIN main--teacher--container--img

//INICIO main--repeatOffer--recapitulate__title
updateElementContent(".main--repeatOffer--recapitulate__title", `¡RECAPITULEMOS 😍!`);
//FIN main--repeatOffer--recapitulate__title

//INICIO main--repeatOffer--recapitulate__subtitle
updateElementContent(".main--repeatOffer--recapitulate__subtitle", `¡TODO ESTO TE LLEVARÁS EL DÍA DE HOY CON TU INSCRIPCIÓN 👇!`);
//FIN main--repeatOffer--recapitulate__subtitle

//INICIO - recapitulate__item
const contentsRecapitulateItem = [
  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
  style="color: white;"></i>El
programa completo de "FLORALES MODERNOS PARA NEGOCIO"
(<del><span class="recapitulate_currency">$25</span> <span
      class="recapitulate_type-currency">DÓLARES</span></del>)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
  class="bi bi-chevron-right" style="color: white"></i> clases de contenido (+6
horas en video HD)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
  style="color: white;"></i>Grupo Privado de Estudiantes (<del><span
      class="recapitulate_currency">$10</span> <span
      class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
  style="color: white;"></i>Membresía con acceso para toda la vida (<del><span
      class="recapitulate_currency">$10</span> <span
      class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
                                        style="color: white;"></i>Certificado de participación en el programa
                                    (<del><span class="recapitulate_currency">$5</span> <span
                                            class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
                                        style="color: white;"></i>Regalo adicional #1: Módulo introducción y recomendaciones para cubrir fresas con chocolate
                                    (<del><span class="recapitulate_currency">$10</span> <span
                                            class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
                                        style="color: white;"></i>Regalo adicional #2: Módulo técnica para fundir el chocolate (<del><span
                                            class="recapitulate_currency">$10</span> <span
                                            class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
  style="color: white;"></i>Regalo adicional #3: Módulo técnica de color y toppings para fresas (<del><span
      class="recapitulate_currency">$10</span> <span
      class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
  style="color: white;"></i>Regalo adicional #4: Módulo fresas doradas
(<del><span class="recapitulate_currency">$10</span> <span
      class="recapitulate_type-currency">DÓLARES</span></del>)`,

  `<i class="bi bi-check-circle main--container-StudyPlan__item--container--description__container--item--icon"
  style="color: white;"></i>Regalo adicional #5: Módulo osa de chocolate rellena de brownie (<del><span
      class="recapitulate_currency">$10</span> <span
      class="recapitulate_type-currency">DÓLARES</span></del>)`

];

updateAllElementsContent(".recapitulate__item", contentsRecapitulateItem);
//FIN - contentsCustomerName

//INICIO - main--repeatOffer--recapitulate__price
const contentsRecapitulatePrice = [
  `TOTAL <span>$200USD</span>`,
  `PERO HOY PODRAS ACCEDER POR:`,
  `<span>$25 USD</span>`
];

updateAllElementsContent(".main--repeatOffer--recapitulate__price", contentsRecapitulatePrice);
//FIN - main--repeatOffer--recapitulate__price

//INICIO main--repeatOffer--tittle
updateElementContent(".main--repeatOffer--tittle", `¿QUÉ ESTÁS ESPERANDO?`);
//FIN main--repeatOffer--tittle

//INICIO main--repeatOffer--subtittle
updateElementContent(".main--repeatOffer--subtittle", `¡Más de 4000 alumnos de todo el mundo han transformado
sus vidas gracias a los arreglos florales!💐<br><br> ¡Con nuestro programa, tú también puedes iniciar
tu camino hacia una nueva pasión!<br><br> ¡No hay nada más poderoso que eso! Accede ahora mismo y
descubre todo lo que necesitas para comenzar. 👇`);
//FIN main--repeatOffer--subtittle

//INICIO main--repeatOffer--set--img
updateElementImage(".main--repeatOffer--set--img", "./img/img14.png")
//FIN main--repeatOffer--set--img

//INICIO main--repeatOffer--tittle
updateElementContent(".main--repeatOffer--tittle", `¿QUÉ ESTÁS ESPERANDO?`);
//FIN main--repeatOffer--tittle

//INICIO - main--repeatOffer--description
const contentsRepeatOfferDescription = [
  `Imagina ¿Cómo sería tu vida si dominaras el arte de la florería? 🤩`,
  `¿Qué pasaría si, además, consigues tener la habilidad para aprender a comercializar tus propios arreglos florales de alta calidad y tener un negocio rentable? 🙊`,
  `¿Cuánto vale para ti conseguir todo esto? <br> No esperes más…`,
  `¡COMIENZA HOY MISMO!`
];

updateAllElementsContent(".main--repeatOffer--description", contentsRepeatOfferDescription);
//FIN - main--repeatOffer--description

//INICIO main--repeatOffer__item
const contentsMainRepeatOfferItem = [
  `PAGO ÚNICO, SIN COBROS POSTERIORES`,
  `<span class="high-price">$100.00</span> <span class="regular-price">$50.00</span> <span class="low-price">$25.00</span>`,
  `LA PÁGINA DE PAGOS CONVIERTE AUTOMATICAMENTE A TU MONEDA LOCAL`            
];

updateAllElementsContent(".main--repeatOffer__item", contentsMainRepeatOfferItem);
//FIN main--repeatOffer__item

//INICIO main--repeatOffer--img
updateElementImage(".main--repeatOffer--img", "./img/img8.png")
//FIN main--repeatOffer--img

//INICIO main--repeatOffer--containerPay--description
updateElementContent(".main--repeatOffer--containerPay--description", `Compra 100% Segura`);
//FIN main--repeatOffer--containerPay--description

//INICIO main--frequentQuestions--title
updateElementContent(".main--frequentQuestions--title", `¿TE IMAGINAS ADQUIRIR ESTAS HABILIDADES?`);
//FIN main--frequentQuestions--title

//INICIO - estudiante__img
const contentsEstudianteIMG = [
  `./img/img20.png`,
  `./img/img21.png`,
  `./img/img22.png`,
  `./img/img23.png`,
  `./img/img24.png`,
  `./img/img25.png`,
  `./img/img26.png`,
  `./img/img27.png`,
  `./img/img28.png`,
  `./img/img29.png`,
  `./img/img30.png`,
  `./img/img31.png`
];

updateAllElementsImages(".student__img", contentsEstudianteIMG);
//FIN - estudiante__img