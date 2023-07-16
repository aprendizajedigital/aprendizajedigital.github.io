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
  document.querySelector(".c-link-icon").href = "./ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/gracias-los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/caja-de-regalo.png"
  
  //INICIO - WEB
  const ogTitleWebContent = "LOS 10 SECRETOS DEL CEVICHE CASERO QUE LOS CHEFS NO QUIEREN QUE SEPAS 😱🤩🍤🐟👨‍🍳👩‍🍳";
  const ogDescriptionWebContent = "¡Evita el error más común al preparar ceviche con el secreto #2!” 😊";
  const ogTypeWebContent = "website";
  const ogUrlWebContent = "https://aprendizajedigital.github.io/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas.html";
  const ogImageWebContent = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/gracias-los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/portada-web.png";
  const ogImageSecureUrlWebContent = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/gracias-los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/portada-web.png";
  const descriptionWebContent = "¡Evita el error más común al preparar ceviche con el secreto #2!” 😊";
  //FIN - WEB
  
  //INICIO - WHATSAPP
  const ogImageWhatsapp = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/gracias-los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/portada-whatsapp.png";
  const ogImageSecureUrlWhatsapp = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/gracias-los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/portada-whatsapp.png";
  const ogImageTypeWhatsapp = "image/png";
  const ogImageWidthWhatsapp = "600";
  const ogImageHeightWhatsapp = "600";
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

  updateElementContent(".c-title", "Gracias 🥳");
  
  updateElementContent(".c-header__title", `LA GUÍA A SIDO ENVIADA A TU CORREO <span class="c-header__title-span">😉</span>, EN CASO DE QUE NO LO ENCUENTRES REVISA LA BANDEJA DE SPAM`);

  updateElementContent(".c-wait__title", `¡ESPERA!`);
  
  updateElementContent(".c-wait__subtitle", `ESTO ES LO QUE NECESITAS PARA CONVERTIRTE EN EL/LA MEJOR CHEF PROFESIONAL 😱👩‍🍳👨‍🍳😍`);

  updateElementContent(".c-wait__description", `Toca en este momento el botón y conoce el curso online que está ayudando a miles de personas a "generar ingresos" con su pasión:`);

  updateElementContent(".c-wait__btn", `¡QUIERO MÁS INFORMACIÓN <span style="font-style: normal;">😍</span>!`);

  document.querySelector(".c-wait__btn").href = "https://aprendizajedigital.github.io/cursos/cocina-peruana-ceviches-y-mariscos/inicio.html";

  updateElementContent(".c-footer__text", `TODOS LOS DERECHOS RESERVADOS/APRENDIZAJE DIGITAL/©2023`);



 