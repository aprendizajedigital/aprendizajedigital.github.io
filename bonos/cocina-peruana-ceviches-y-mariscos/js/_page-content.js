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

function updateAllElementsHrefs(selector, contents) {
  const elements = document.querySelectorAll(selector);
  const numElements = elements.length;

  for (let i = 0; i < numElements; i++) {
    elements[i].href = contents[i]
  }
}

function updateAllElementsImages(selector, contents) {
    const elements = document.querySelectorAll(selector);
    const numElements = elements.length;

    for (let i = 0; i < numElements; i++) {
      elements[i].src = contents[i]
    }
}

function editarEtiquetaMeta(selector, contenido, atributo) {
    let etiquetaMeta = document.querySelector(selector);
    if (etiquetaMeta !== null) {
      etiquetaMeta.setAttribute(atributo, contenido);
    }
}
  
  // INICIO - EDITAR META
  
  //ICONO DE LA PAGINA
  document.querySelector(".c-link-icon").href = "./ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/sabor-peruano-descubre-la-magia-del-ceviche-y-los-mariscos-del-pais/img/caja-de-regalo.png"
  
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
  
  updateElementContent(".c-header__title", `AQUÍ ENCONTRARÁS TODOS TUS BONOS DEL CURSO "PANADERO EN CASA" <span class="c-header__title-span">👨‍🍳🥖</span>`);

  const c_bonds__title = [
    `¡LIBRO 1!`,
    `¡LIBRO 2!`,
    `¡REGALO 1!`,
    `¡REGALO 2!`,
    `¡REGALO 3!`
  ];

  updateAllElementsContent(".c-bonds__title", c_bonds__title);
  
  const c_bonds__subtitle = [
    `EL ÉXITO EN LA PANADERÍA`,
    `PASTELERÍA EXPRÉS`,
    `ROSQUITAS DULCES CON ANÍS`,
    `EMPANADAS DE BODA`,
    `COSTEO DEL PAN`
  ];

  updateAllElementsContent(".c-bonds__subtitle", c_bonds__subtitle);

  const c_bonds__description = [
    `Este libro te ofrecerá los mejores consejos para maximizar las ganancias de tu negocio de panadería.
    <br><br>
    Aprenderás cómo controlar los costos y cómo asegurarte de que tu pan se mantenga fresco y de alta calidad.`,

    `Este libro digital "Pastelería exprés" contiene más de 100 recetas de pasteles deliciosos que se preparan en un máximo de 30 minutos.
    <br><br>
    También te ofrecerá nuevas ideas y originales combinaciones de ingredientes.
    <br><br>
    Las recetas están explicadas paso a paso con fotografías a todo color, y se incluyen trucos para facilitar la preparación de cada pastel.`,

    `Este regalo lo encontrarás dentro de tu curso online "Panadero en casa" 😉`,
    
    `Este regalo lo encontrarás dentro de tu curso online "Panadero en casa" 😉`,
    
    `Este regalo lo encontrarás dentro de tu curso online "Panadero en casa" 😉`
  ];

  updateAllElementsContent(".c-bonds__description", c_bonds__description);
  
  const c_gift__img = [
    `./bonos/cocina-peruana-ceviches-y-mariscos/img/img6.PNG`,
    `./bonos/cocina-peruana-ceviches-y-mariscos/img/img7.PNG`,
    `./bonos/cocina-peruana-ceviches-y-mariscos/img/img3.PNG`,
    `./bonos/cocina-peruana-ceviches-y-mariscos/img/img4_2.png`,
    `./bonos/cocina-peruana-ceviches-y-mariscos/img/img5.PNG`
  ];

  updateAllElementsImages(".c-bonds__img", c_gift__img)

  const c_bonds__btn = [
    `¡DESCARGAR LIBRO <span style="font-style: normal;">😍</span>!`,
    `¡DESCARGAR LIBRO <span style="font-style: normal;">😍</span>!`,
    `¡INGRESAR AL CURSO <span style="font-style: normal;">👩‍🏫</span>!`,
    `¡INGRESAR AL CURSO <span style="font-style: normal;">👩‍🏫</span>!`,
    `¡INGRESAR AL CURSO <span style="font-style: normal;">👩‍🏫</span>!`
  ];

  updateAllElementsContent(".c-bonds__btn", c_bonds__btn);

  const c_bonds__btn_href = [
    `https://aprendizajedigital.github.io/cursos/cocina-peruana-ceviches-y-mariscos/inicio.html`,
    `https://aprendizajedigital.github.io/cursos/el-negocio-de-la-crianza-tecnificada-de-cuyes/inicio.html`,
    `https://aprendizajedigital.github.io/cursos/el-negocio-de-la-crianza-tecnificada-de-cuyes/inicio.html`,
    `https://aprendizajedigital.github.io/cursos/el-negocio-de-la-crianza-tecnificada-de-cuyes/inicio.html`,
    `https://aprendizajedigital.github.io/cursos/el-negocio-de-la-crianza-tecnificada-de-cuyes/inicio.html`
  ];

  updateAllElementsHrefs(".c-bonds__btn", c_bonds__btn_href);

  updateElementContent(".c-footer__text", `TODOS LOS DERECHOS RESERVADOS/APRENDIZAJE DIGITAL/©2023`);



 