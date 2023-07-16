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

  function updateElementImage(selector, content) {
    const element = document.querySelector(selector);
    if(element !== null){
      element.src = content;
    }else{
      console.log("Elemento no encontrado.");
    }
  }
  
  // INICIO - EDITAR META
  
  //ICONO DE LA PAGINA
  document.querySelector(".c-link-icon").href = "./ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/gracias-sabor-peruano-descubre-la-magia-del-ceviche-y-los-mariscos-del-pais/img/caja-de-regalo.png"
  
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
  
  updateElementContent(".c-header__title", `LA GUÍA A SIDO ENVIADA A TU CORREO <span class="c-header__title-span">😉</span>, EN CASO DE QUE NO LO ENCUENTRES REVISA LA BANDEJA DE SPAM`);

  updateElementContent(".c-wait__title", `¡ESPERA!`);
  
  updateElementContent(".c-wait__subtitle", `ESTO ES LO QUE NECESITAS PARA CONVERTIRTE EN LA MEJOR FLORISTA DEL MUNDO 😱💐😍`);

  updateElementContent(".c-wait__description", `Toca en este momento el botón y conoce el curso online que está ayudando a miles de floristas a "generar ingresos" con su pasión:`);

  updateElementContent(".c-wait__btn", `¡QUIERO MÁS INFORMACIÓN <span style="font-style: normal;">😍</span>!`);

  updateElementContent(".c-footer__text", `TODOS LOS DERECHOS RESERVADOS/APRENDIZAJE DIGITAL/©2023`);



 