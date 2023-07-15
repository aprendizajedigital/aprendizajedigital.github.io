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
  
  updateElementContent(".c-header__title", "LOS 10 SECRETOS QUE LAS FLORISTAS NO QUIEREN QUE CONOZCAS😱💐😍");
  
  updateElementContent(".c-header__subtitle", `¡La 5 Podría Salvar La Vida De Tus Flores!`);
  
  updateElementImage(".c-gift__img", `./ebooks-sin-correos/cocina-peruana-ceviches-y-mariscos/sabor-peruano-descubre-la-magia-del-ceviche-y-los-mariscos-del-pais/img/ebook.png`)

  updateElementContent(".c-gift__title", `¿A QUÉ CORREO TE ENVIAMOS EL EBOOK?`);
  
  updateElementContent(".c-gift__label", `Tu Correo Electrónico <span class="c-gift__label-span">*</span>`);
  
  document.querySelector(".c-gift__input").placeholder = "Ingresa tu correo electrónico";

  updateElementContent(".c-gift__valid-email", `¡Correo válido!`);

  updateElementContent(".c-gift__invalid-email", `Ingresa un correo válido por favor.`);

  updateElementContent(".c-gift__btn", `¡RECIBIR EL EBOOK!`);

  updateElementContent(".c-purpose__title", `MI PROPÓSITO ES...`);

  updateElementContent(".c-purpose__subtitle", `Que puedas convertirte en la mejor florista del mundo. El diseño floral es un trabajo creativo que requiere un buen ojo para el diseño y la habilidad de coordinar lo que imaginas con tus manos.`);

  updateElementContent(".c-footer__text", `TODOS LOS DERECHOS RESERVADOS/APRENDIZAJE DIGITAL/©2023`);



 