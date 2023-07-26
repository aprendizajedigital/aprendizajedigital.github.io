
//Cantidad de usuarios
const max = 150;
const min = 101;
let result = Math.round(Math.random() * (max - min) + min); // el resultado será entre 101 y 150
let amount = document.querySelector(".js-set-amount");
amount.innerText = result;

setInterval(() => {
  result = Math.round(Math.random() * (max - min) + min);
  amount.innerText = result;
}, 10000);

//Barra de Ciudad
let city = document.querySelector(".js-set-city");

// fetch("https://ipinfo.io/json")
// .then((response) => response.json())
// .then((data) => (city.innerText = data.city))

//TODO - IPDATA - BARRA CIUDAD

let request_ip_data = new XMLHttpRequest();

request_ip_data.open('GET', 'https://api.ipdata.co?api-key=68f019edbc34da3d63996660240e36314403d5b8f32da11475612ca9&fields=city'); //API QUE DETECTA EL PAIS (TIENE UN LIMITE PORQUE ESTAS EN LA VERSION GRATUITA) Y LE DIGO QUE ME TRAIGA EL "NOMBRE DEL PAIS" Y EL "CODIGO DEL PAIS"

request_ip_data.setRequestHeader('Accept', 'application/json');

request_ip_data.onreadystatechange = function () { //ESTO DEMORA UNOS SEGUNDOS EN EJECUTARSE, POR ESO LO PONGO TODO ADENTRO
  if (this.readyState === 4) {
    let ipdata = JSON.parse(this.responseText);

      //EN CASO DE QUE ARROJE "NULL O UNDEFINED" RECIBIRÁ EL VALOR "USA"
      if(!ipdata.city){
        city.innerText = "Tu Ciudad";
      }else{
        city.innerText = ipdata.city;
      }
    }
  }

request_ip_data.send();

