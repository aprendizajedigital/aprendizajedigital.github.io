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
  document.querySelector(".c-link-icon").href = "./ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/caja-de-regalo.png"
  
  //INICIO - WEB
  const ogTitleWebContent = "LOS 10 SECRETOS DEL CEVICHE CASERO QUE LOS CHEFS NO QUIEREN QUE SEPAS 😱🤩🍤🐟👨‍🍳👩‍🍳";
  const ogDescriptionWebContent = "¡Evita el error más común al preparar ceviche con el secreto #2!” 😊";
  const ogTypeWebContent = "website";
  const ogUrlWebContent = "https://aprendizajedigital.github.io/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas.html";
  const ogImageWebContent = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/imagen.png";
  const ogImageSecureUrlWebContent = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/imagen.png";
  const descriptionWebContent = "¡Evita el error más común al preparar ceviche con el secreto #2!” 😊";
  //FIN - WEB
  
  //INICIO - WHATSAPP
  const ogImageWhatsapp = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/imagen.png";
  const ogImageSecureUrlWhatsapp = "https://aprendizajedigital.github.io/ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/imagen.png";
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

  updateElementContent(".c-title", "LOS 10 SECRETOS DEL CEVICHE CASERO QUE LOS CHEFS NO QUIEREN QUE SEPAS 😱🤩🍤🐟👨‍🍳👩‍🍳");
  
  updateElementContent(".c-header__title", "LOS 10 SECRETOS DEL CEVICHE CASERO QUE LOS CHEFS NO QUIEREN QUE SEPAS 🍤🐟👨‍🍳👩‍🍳");
  
  updateElementContent(".c-header__subtitle", `¡Evita el error más común al preparar ceviche con el secreto #2!” 😊`);
  
  updateElementImage(".c-gift__img", `./ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/los-10-secretos-del-ceviche-casero-que-los-chefs-no-quieren-que-sepas/img/ebook.png`)

  updateElementContent(".c-gift__title", `¿A QUÉ CORREO TE ENVIAMOS EL EBOOK?`);
  
  updateElementContent(".c-gift__label", `Tu Correo Electrónico <span class="c-gift__label-span">*</span>`);
  
  document.querySelector(".c-gift__input").placeholder = "Ingresa tu correo electrónico";

  updateElementContent(".c-gift__valid-email", `¡Correo válido!`);

  updateElementContent(".c-gift__invalid-email", `Ingresa un correo válido por favor.`);

  updateElementContent(".c-gift__btn", `¡RECIBIR EL EBOOK!`);

  updateElementContent(".c-purpose__title", `MI PROPÓSITO ES...`);

  updateElementContent(".c-purpose__subtitle", `Que puedas convertirte en el/la mejor chef de ceviches y mariscos del mundo. La preparación de ceviches y mariscos es un trabajo creativo que requiere un buen paladar y la habilidad de coordinar lo que imaginas con tus manos.`);

  updateElementContent(".c-footer__text", `TODOS LOS DERECHOS RESERVADOS/APRENDIZAJE DIGITAL/©2023`);



 