//animate__fadeInLeft
const animate__fadeInLeft = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__fadeInLeft');
    }
  });
});

animate__fadeInLeft.observe(document.querySelector('.main__title'));
animate__fadeInLeft.observe(document.querySelector('.main__description'));

//animate__fadeInRight
const animate__fadeInRight = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__fadeInRight');
    }
  });
});

animate__fadeInRight.observe(document.querySelector('.main__subtitle'));
animate__fadeInRight.observe(document.querySelector('.main__icon'));

//DESCARGAR EBOOK
setTimeout(function () {
  // alert("5 SEGUNDOS");
  // window.open('./ebooks-sin-correos/florales-modernos-para-negocio/gatillos-mentales.pdf', 'download');

  // let element = document.createElement('a');
  // element.setAttribute('download', 'LOS 10 SECRETOS QUE LAS FLORISTAS NO QUIEREN QUE SEPAS');
  // element.setAttribute('href', './ebooks-sin-correos/florales-modernos-para-negocio/gatillos-mentales.pdf')
  // element.style.display = 'none';
  // document.body.appendChild(element);
  // element.click();
  // document.body.removeChild(element);

  // DownloadFile("gatillos-mentales.pdf");

  // function DownloadFile(fileName) {
  //   //Set the File URL.
  //   var url = "./ebooks-sin-correos/florales-modernos-para-negocio/" + fileName;

  //   //Create XMLHTTP Request.
  //   var req = new XMLHttpRequest();
  //   req.open("GET", url, true);
  //   req.responseType = "blob";
  //   req.onload = function () {
  //     //Convert the Byte Data to BLOB object.
  //     var blob = new Blob([req.response], { type: "application/octetstream" });

  //     //Check the Browser type and download the File.
  //     var isIE = false || !!document.documentMode;
  //     if (isIE) {
  //       window.navigator.msSaveBlob(blob, fileName);
  //     } else {
  //       var url = window.URL || window.webkitURL;
  //       link = url.createObjectURL(blob);
  //       var a = document.createElement("a");
  //       a.setAttribute("download", fileName);
  //       a.setAttribute("href", link);
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //     }
  //   };
  //   req.send();
  // };

  var link = document.createElement('a');

  link.href = './ebooks-sin-correos/florales-modernos-para-negocio/gatillos-mentales.pdf';

  link.download = 'ejemplo.pdf';

  link.dispatchEvent(new MouseEvent('click'));
}, 5000);