// //animate__fadeInLeft
// const animate__fadeInLeft = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('animate__animated');
//       entry.target.classList.add('animate__fadeInLeft');
//     }
//   });
// });

// animate__fadeInLeft.observe(document.querySelector('.main__title'));
// animate__fadeInLeft.observe(document.querySelector('.main__description'));

// //animate__fadeInRight
// const animate__fadeInRight = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('animate__animated');
//       entry.target.classList.add('animate__fadeInRight');
//     }
//   });
// });

// animate__fadeInRight.observe(document.querySelector('.main__subtitle'));
// animate__fadeInRight.observe(document.querySelector('.main__icon'));

//animate__zoomIn
const animate__zoomIn = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__zoomIn');
    }
  });
});

//animate__zoomIn.observe(document.querySelector('.header__title'));

animate__zoomIn.observe(document.querySelector('.main__title'));
animate__zoomIn.observe(document.querySelector('.main__subtitle'));
animate__zoomIn.observe(document.querySelector('.main__description'));
animate__zoomIn.observe(document.querySelector('.main__icon'));
// animate__zoomIn.observe(document.querySelector('.main__button'));

//DESCARGAR EBOOK
setTimeout(function () {
  // alert("5 SEGUNDOS");

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

  link.href = './ebooks-sin-correos/el-negocio-de-la-crianza-tecnificada-de-cuyes/los-4-pasos-para-la-crianza-de-cuyes-que-debes-conocer.pdf';

  link.download = 'los-4-pasos-para-la-crianza-de-cuyes-que-debes-conocer.pdf';

  link.dispatchEvent(new MouseEvent('click'));

}, 10000);

//CONTADOR EBOOK
let contador = document.querySelector(".contador").innerText; //10
let header__title = document.querySelector(".header__title");
let set_interval;

set_interval = setInterval(actualizarTiempo, 1000);

function actualizarTiempo(){
  header__title.innerText = `EN ${contador} SEGUNDOS ESTARÁS RECIBIENDO EL EBOOK ...`
  
  if(contador == 0){
    header__title.innerText = "Tu Mini-Manual se acaba de descargar 🤩";
    clearInterval(set_interval);
  }
  
  contador--;  
}