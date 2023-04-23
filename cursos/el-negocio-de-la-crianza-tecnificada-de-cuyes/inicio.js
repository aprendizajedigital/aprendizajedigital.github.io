//Cantidad de usuarios
let max = 150;
let min = 101;
let resultado = Math.round(Math.random() * (max - min) + min); // el resultado será entre 70 y 
let amount = document.querySelector(".amount");
amount.innerText = resultado;

setInterval(() => {
  resultado = Math.round(Math.random() * (max - min) + min);
  amount.innerText = resultado;
}, 5000);

//Barra de Ciudad
let city = document.querySelector(".city");

fetch("https://ipinfo.io/json")
.then((response) => response.json())
.then((data) => (city.innerText = data.city))

//Costo del curso
// let precio = document.querySelector(".precio");

// fetch("https://ipwhois.app/json/")
// .then((response) => response.json())
// .then((data) => (precio.innerText = data.currency_symbol + (data.currency_rates) * 25))

//Usuarios Globales
let user01 = { name: "John", photo: "01.jpg", country: "Perú" }
let user02 = { name: "Vanessa", photo: "02.jpg", country: "Bolivia" }
let user03 = { name: "Lidia", photo: "03.jpg", country: "Colombia" }
let user04 = { name: "Andre", photo: "04.jpg", country: "Argentina" }
let user05 = { name: "Oscar", photo: "05.jpg", country: "Paraguay" }
let user06 = { name: "Franco", photo: "06.jpg", country: "Uruguay" }
let user07 = { name: "Italo", photo: "07.jpg", country: "Chile" }
let user08 = { name: "Gonzalo", photo: "08.jpg", country: "Brasil" }
let user09 = { name: "Valeria", photo: "09.jpg", country: "Ecuador" }
let user10 = { name: "Andrea", photo: "10.jpg", country: "España" }
let user11 = { name: "Drucila", photo: "11.jpg", country: "Estados Unidos" }
let user12 = { name: "Patricia", photo: "12.jpg", country: "Portugal" }
let user13 = { name: "Penelope", photo: "13.jpg", country: "Perú" }
let user14 = { name: "Antonella", photo: "14.jpg", country: "Australia" }
let user15 = { name: "Susan", photo: "15.jpg", country: "Chile" }
let user16 = { name: "Carmen", photo: "16.jpg", country: "Canadá" }
let user17 = { name: "Olivia", photo: "17.jpg", country: "Brasil" }
let user18 = { name: "Clara", photo: "18.jpg", country: "Costa Rica" }
let user19 = { name: "Cinthya", photo: "19.jpg", country: "Alemania" }
let user20 = { name: "Camila", photo: "20.jpg", country: "Dinamarca" }
let user21 = { name: "Mery", photo: "21.jpg", country: "República Dominicana" }
let user22 = { name: "Ana", photo: "22.jpg", country: "Ecuador" }
let user23 = { name: "Flor", photo: "23.jpg", country: "El Salvador" }
let user24 = { name: "Vivian", photo: "24.jpg", country: "Canadá" }
let user25 = { name: "Ashly", photo: "25.jpg", country: "Francia" }
let user26 = { name: "Ruby", photo: "26.jpg", country: "Honduras" }
let user27 = { name: "Nicole", photo: "27.jpg", country: "Alemania" }
let user28 = { name: "Abigail", photo: "28.jpg", country: "México" }
let user29 = { name: "Alexandra", photo: "29.jpg", country: "Honduras" }
let user30 = { name: "Lucia", photo: "30.jpg", country: "México" }
let user31 = { name: "Aprile", photo: "31.jpg", country: "Colombia" }
let user32 = { name: "Ariana", photo: "32.jpg", country: "México" }
let user33 = { name: "Berenisse", photo: "33.jpg", country: "Ecuador" }
let user34 = { name: "Carol", photo: "34.jpg", country: "Italia" }
let user35 = { name: "Ruth", photo: "35.jpg", country: "Bolivia" }
let user36 = { name: "Sofia", photo: "36.jpg", country: "Argentina" }
let user37 = { name: "Darian", photo: "37.jpg", country: "Chile" }
let user38 = { name: "Dayhanna", photo: "38.jpg", country: "Perú" }
let user39 = { name: "Diana", photo: "39.jpg", country: "Perú" }
let user40 = { name: "Diandra", photo: "40.jpg", country: "Nueva Zelanda" }
let user41 = { name: "Dina", photo: "41.jpg", country: "Panamá" }
let user42 = { name: "Dámaris", photo: "42.jpg", country: "Puerto Rico" }
let user43 = { name: "Enlusmar", photo: "43.jpg", country: "Perú" }
let user44 = { name: "Esther", photo: "44.jpg", country: "Guatemala" }
let user45 = { name: "Daniela", photo: "45.jpg", country: "Reino Unido" }
let user46 = { name: "Fernanda", photo: "46.jpg", country: "Colombia" }
let user47 = { name: "Fiorela", photo: "47.jpg", country: "Perú" }
let user48 = { name: "Gianela", photo: "48.jpg", country: "Chile" }
let user49 = { name: "Gisela", photo: "49.jpg", country: "Colombia" }
let user50 = { name: "Graciela", photo: "50.jpg", country: "Brasil" }
let user51 = { name: "Grace", photo: "51.jpg", country: "Italia" }
let user52 = { name: "Cayetana", photo: "52.jpg", country: "Perú" }
let user53 = { name: "Maria", photo: "53.jpg", country: "Colombia" }
let user54 = { name: "Yumi", photo: "54.jpg", country: "Bolivia" }
let user55 = { name: "Marjorie", photo: "55.jpg", country: "Argentina" }
let user56 = { name: "Margot", photo: "56.jpg", country: "Brasil" }
let user57 = { name: "Yovana", photo: "57.jpg", country: "Reino Unido" }
let user58 = { name: "Kiara", photo: "58.jpg", country: "Ecuador" }
let user59 = { name: "Mery", photo: "59.jpg", country: "Paraguay" }
let user60 = { name: "Yuli", photo: "60.jpg", country: "Uruguay" }
let user61 = { name: "Paula", photo: "61.jpg", country: "Estados Unidos" }
let user62 = { name: "Chris", photo: "62.jpg", country: "España" }
let user63 = { name: "Claudia", photo: "63.jpg", country: "España" }
let user64 = { name: "Robert", photo: "64.jpg", country: "Alemania" }
let user65 = { name: "Jean Pierre", photo: "65.jpg", country: "Uruguay" }
let user66 = { name: "Danilo", photo: "66.jpg", country: "Paraguay" }
let user67 = { name: "Alexander", photo: "67.jpg", country: "Costa Rica" }
let user68 = { name: "Saúl", photo: "68.jpg", country: "Chile" }
let user69 = { name: "Alex", photo: "69.jpg", country: "Perú" }
let user70 = { name: "José", photo: "70.jpg", country: "Perú" }
let user71 = { name: "Renzo", photo: "71.jpg", country: "Brasil" }
let user72 = { name: "Miguel", photo: "72.jpg", country: "Perú" }
let user73 = { name: "Carlos", photo: "73.jpg", country: "Colombia" }
let user74 = { name: "Estefano", photo: "74.jpg", country: "Japón" }
let user75 = { name: "Sebastián ", photo: "75.jpg", country: "Colombia" }
let user76 = { name: "Guillermo", photo: "76.jpg", country: "Japón" }
let user77 = { name: "Rubén", photo: "77.jpg", country: "Chile" }
let user78 = { name: "Aarón", photo: "78.jpg", country: "Italia" }
let user79 = { name: "Jaime", photo: "79.jpg", country: "Perú" }
let user80 = { name: "Iván", photo: "80.jpg", country: "Reino Unido" }
let user81 = { name: "Francisco", photo: "81.jpg", country: "Francia" }
let user82 = { name: "Victor", photo: "82.jpg", country: "Guatemala" }
let user83 = { name: "Rodrigo", photo: "83.jpg", country: "México" }
let user84 = { name: "Héctor", photo: "84.jpg", country: "Italia" }
let user85 = { name: "Darío", photo: "85.jpg", country: "Colombia" }
let user86 = { name: "Samuel", photo: "86.jpg", country: "Honduras" }
let user87 = { name: "Erick", photo: "87.jpg", country: "Guatemala" }
let user88 = { name: "Liam", photo: "88.jpg", country: "Perú" }
let user89 = { name: "Adam", photo: "89.jpg", country: "Francia" }
let user90 = { name: "Jorge", photo: "90.jpg", country: "Italia" }
let user91 = { name: "Nicolas", photo: "91.jpg", country: "Alemania" }
let user92 = { name: "Dylan", photo: "92.jpg", country: "Francia" }
let user93 = { name: "Nicolás", photo: "93.jpg", country: "España" }
let user94 = { name: "Sergio", photo: "94.jpg", country: "Estados Unidos" }
let user95 = { name: "Gino", photo: "95.jpg", country: "Perú" }
let user96 = { name: "Juan", photo: "96.jpg", country: "Bolivia" }
let user97 = { name: "Ángel", photo: "97.jpg", country: "Colombia" }
let user98 = { name: "Alonso", photo: "98.jpg", country: "Argentina" }
let user99 = { name: "Antonio", photo: "99.jpg", country: "Paraguay" }
let user100 = { name: "Thiago", photo: "100.jpg", country: "Uruguay" }
let user101 = { name: "Oliver", photo: "101.jpg", country: "Chile" }
let user102 = { name: "Bruno", photo: "102.jpg", country: "Brasil" }
let user103 = { name: "Marcos", photo: "103.jpg", country: "Ecuador" }
let user104 = { name: "Javier", photo: "104.jpg", country: "España" }
let user105 = { name: "Izan", photo: "105.jpg", country: "Estados Unidos" }
let user106 = { name: "Gabriel", photo: "106.jpg", country: "Portugal" }
let user107 = { name: "Diego", photo: "107.jpg", country: "Canadá" }
let user108 = { name: "Enzo", photo: "108.jpg", country: "Costa Rica" }
let user109 = { name: "Mario", photo: "109.jpg", country: "El Salvador" }
let user110 = { name: "David", photo: "110.jpg", country: "España" }
let user111 = { name: "Adrián", photo: "111.jpg", country: "Brasil" }
let user112 = { name: "Álvaro", photo: "112.jpg", country: "Francia" }
let user113 = { name: "Pablo", photo: "113.jpg", country: "Canadá" }
let user114 = { name: "Alejandro", photo: "114.jpg", country: "Estados Unidos" }
let user115 = { name: "Daniel", photo: "115.jpg", country: "Reino Unido" }
let user116 = { name: "Leo", photo: "116.jpg", country: "Portugal" }
let user117 = { name: "Mateo", photo: "117.jpg", country: "Francia" }
let user118 = { name: "Lucas", photo: "118.jpg", country: "México" }
let user119 = { name: "Martín", photo: "119.jpg", country: "Chile" }
let user120 = { name: "Fausto", photo: "120.jpg", country: "Estados Unidos" }
let user121 = { name: "Tony", photo: "121.jpg", country: "Estados Unidos" }
let user122 = { name: "Luciano", photo: "122.jpg", country: "Perú" }
let user123 = { name: "Manuel", photo: "123.jpg", country: "Perú" }
let user124 = { name: "Hugo", photo: "124.jpg", country: "Perú" }
let user125 = { name: "Lazaro", photo: "125.jpg", country: "Perú" }
let user126 = { name: "Christopher", photo: "126.jpg", country: "Perú" }
let user127 = { name: "Adan", photo: "127.jpg", country: "Perú" }
let user128 = { name: "Alan", photo: "128.jpg", country: "Perú" }
let user129 = { name: "Gerardo", photo: "129.jpg", country: "Chile" }
let user130 = { name: "Jesus", photo: "130.jpg", country: "Argentina" }
let user131 = { name: "Aldo", photo: "131.jpg", country: "Brasil" }

let users = [user01, user02, user03, user04, user05, user06, user07, user08, user09, user10, user10, user10, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, user21, user22, user23, user24, user25, user26, user27, user28, user29, user30, user31, user32, user33, user34, user35, user36, user37, user38, user39, user40, user41, user42, user43, user44, user45, user46, user47, user48, user49, user50, user51, user52, user53, user54, user55, user56, user57, user58, user59, user60, user61, user62, user63, user64, user65, user66, user67, user68, user69, user70, user71, user72, user73, user74, user75, user76, user77, user78, user79, user80, user81, user82, user83, user84, user85, user86, user87, user88, user89, user90, user91, user92, user93, user94, user95, user96, user97, user98, user99, user100, user101, user102, user103, user104, user105, user106, user107, user108, user109, user110, user111, user112, user113, user114, user115, user116, user117, user118, user119, user120]

//Enlace de afiliado
const enlace_afiliado = function () {window.open("https://hotm.art/el-negocio-de-la-crianza-tecnificada-de-cuyes")}

const enlace_whatsapp = function () {window.open("https://bit.ly/contactar-con-un-asesor-personal")}

let COUNTRY_CODE = "";
 
//PERU -> ["s/ 388.00", "s/ 194.00", "s/ 97.00"] - ["s/ 394.00", "s/ 197.00", "s/ 98.50"] - ["s/ 398.00", "s/ 199.00", "s/ 99.50"] - ["s/ 408.00", "s/ 204.00", "s/ 102.00"] - ["s/ 410.00", "s/ 205.00", "s/ 102.50"] - ["s/ 414.00", "s/ 207.00", "s/ 103.50"] - ["s/ 418.00", "s/ 209.00", "s/ 104.50"] - ["s/ 420.00", "s/ 210.00", "s/ 105.00"] 
//COLOMBIA -> ["$449.270,00", "$224.635,00", "$112.317,00"] - ["$452.470,00", "$226.235,00", "$113.117,00"] - ["$478.368,00", "$232.257,00", "$116.128,00"] - ["$478.368,00", "$239.184,00", "$119.592,00"]
const TYPE_OF_CURRENCY = {


  // ----VARIA----     ----VARIA----       ----VARIA----                ----VARIA---- ----VARIA---- ---VARIA--- ---VARIA--- ---VARIA---                                                          ----VARIA----
  // PRECIO ALTO (0) | PRECIO MEDIO (1) | PRECIO BAJO (2) | MONEDA (3) | BONO 1 (4) | BONO 2 (5) | BONO 3 (6) | BONO 4 (7) | BONO 5 (8) | COMUNIDAD (9) | MEMBRESIA (10) | CERTIFICADO (11) | PROGRAMA COMPLETO (12)
  
  // "PE" : ["s/ 398.00", "s/ 199.00",    "s/ 99.50",          "SOLES",    "s/ 45.00", "s/ 45.00",  "s/ 50.00",  "s/ 45.00",   "s/ 45.00", "s/ 25.00",        "s/ 25.00",       "s/ 18.50",        "s/ 99.50"],
  // "PE" : ["s/ 400.00", "s/ 200.00",    "s/ 100.00",          "SOLES",    "s/ 45.00", "s/ 45.00",  "s/ 50.00",  "s/ 45.00",   "s/ 45.00", "s/ 25.00",        "s/ 25.00",       "s/ 20.00",        "s/ 100.00"],
  
  "PE" : ["s/ 400.00", "s/ 200.00",    "s/ 100.00",          "SOLES",    "s/ 45.00", "s/ 45.00",  "s/ 50.00",  "s/ 45.00",   "s/ 45.00", "s/ 25.00",        "s/ 25.00",       "s/ 20.00",        "s/ 100.00"],
  "CL" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "MX" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "BR" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "CO" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "AR" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "ES" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "EC" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "BO" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "CR" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "GT" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "PT" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],//(LUEGO LE CAMBIAS A ESTE) - SOLO LOS 3 PRIMEROS
  "DO" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "SV" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "HN" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "UY" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "PY" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"],
  "US" : ["$100.00", "$50.00", "$25.00", "DÓLARES", "$10", "$10", "$10", "$10", "$10", "$10", "$10", "$5", "$25"]
}

const ALLOWED_COUNTRY_CODES = ["PE", "CL", "MX", "BR", "CO", "AR", "ES", "EC", "BO", "CR", "GT", "PT", "DO", "SV", "HN", "UY", "PY", "US"];

let request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co?api-key=68f019edbc34da3d63996660240e36314403d5b8f32da11475612ca9&fields=country_name,country_code'); //API QUE DETECTA EL PAIS (TIENE UN LIMITE PORQUE ESTAS EN LA VERSION GRATUITA) Y LE DIGO QUE ME TRAIGA EL "NOMBRE DEL PAIS" Y EL "CODIGO DEL PAIS"

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () { //ESTO DEMORA UNOS SEGUNDOS EN EJECUTARSE, POR ESO LO PONGO TODO ADENTRO
  if (this.readyState === 4) {
    let ipdata = JSON.parse(this.responseText);

      //EN CASO DE QUE ARROJE "NULL O UNDEFINED" RECIBIRÁ EL VALOR "US"
      if(ipdata.country_code){
        //EN CASO DE QUE ARROJE OTRO PAIS QUE NO ESTE EN LA LISTA PARA QUE MUESTRE POR DEFECTO LA PAGINA EN DOLARES
        if(!ALLOWED_COUNTRY_CODES.includes(ipdata.country_code)){
              COUNTRY_CODE = "US";
            }else{
              COUNTRY_CODE = ipdata.country_code;
            }
      }else{
        COUNTRY_CODE = "US";
      }

      // OCULTAR RECAPITULACION DE PRECIOS PARA TODOS LOS PAISES EXCEPTO PERÚ
      // if(COUNTRY_CODE != "PE") 
      //   document.querySelector(".main--repeatOffer--recapitulate").style.display = "none";
        
      // OCULTAR RECAPITULACION DE PRECIOS PARA TODOS LOS PAISES QUE TENGAN LA MONEDA LOCAL EN EL CHECKOUT DE HOTMART - MENOS PERÚ (EN TOTAL SON 8 PAISES QUE TIENEN SU MONEDA LOCAL EN EL LOCAL DE HOTMART INCLUYENDO PERÚ)
      // if(COUNTRY_CODE == "CL" ||
      //    COUNTRY_CODE == "MX" ||
      //    COUNTRY_CODE == "BR" ||
      //    COUNTRY_CODE == "CO" ||
      //    COUNTRY_CODE == "AR" ||
      //    COUNTRY_CODE == "ES" ||
      //    COUNTRY_CODE == "PT")
      // document.querySelector(".main--repeatOffer--recapitulate").style.display = "none";


      // LOS 3 PRECIOS PRINCIPALES

      document.querySelectorAll(".high-price")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][0];
      document.querySelectorAll(".regular-price")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][1];
      document.querySelectorAll(".low-price")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][2];

      document.querySelectorAll(".high-price")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][0];
      document.querySelectorAll(".regular-price")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][1];
      document.querySelectorAll(".low-price")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][2];

      // LOS PRECIOS EN LA SECCION BONOS

      document.querySelectorAll(".currency")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][4];
      document.querySelectorAll(".type-currency")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".currency")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][5];
      document.querySelectorAll(".type-currency")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".currency")[2].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][6];
      document.querySelectorAll(".type-currency")[2].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".currency")[3].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][7];
      document.querySelectorAll(".type-currency")[3].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".currency")[4].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][8];
      document.querySelectorAll(".type-currency")[4].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      // LOS PRECIOS EN LA SECCION RECAPITULANDO

      document.querySelectorAll(".recapitulate_currency")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][12];
      document.querySelectorAll(".recapitulate_type-currency")[0].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];
      
      document.querySelectorAll(".recapitulate_currency")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][9];
      document.querySelectorAll(".recapitulate_type-currency")[1].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];
      
      document.querySelectorAll(".recapitulate_currency")[2].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][10];
      document.querySelectorAll(".recapitulate_type-currency")[2].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];
      
      document.querySelectorAll(".recapitulate_currency")[3].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][11];
      document.querySelectorAll(".recapitulate_type-currency")[3].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".recapitulate_currency")[4].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][4];
      document.querySelectorAll(".recapitulate_type-currency")[4].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".recapitulate_currency")[5].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][5];
      document.querySelectorAll(".recapitulate_type-currency")[5].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".recapitulate_currency")[6].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][6];
      document.querySelectorAll(".recapitulate_type-currency")[6].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".recapitulate_currency")[7].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][7];
      document.querySelectorAll(".recapitulate_type-currency")[7].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      document.querySelectorAll(".recapitulate_currency")[8].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][8];
      document.querySelectorAll(".recapitulate_type-currency")[8].innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][3];

      // LOS PRECIO TOTALES EN LA SECCION RECAPITULANDO

      document.querySelector(".main--repeatOffer--recapitulate__price_1 span").innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][0];
      document.querySelector(".main--repeatOffer--recapitulate__price_3 span").innerText = TYPE_OF_CURRENCY[COUNTRY_CODE][2];

    }
  }

  request.send();

//-------USUARIOS FALSOS-------

let intervalID;

function startNotify() {
  intervalID = setInterval(() => {
    openNotify();
    setTimeout(closeNotify, 10000);
  }, 900000);//15 minutos
}

function stopNotify() {
  clearInterval(intervalID);
}

startNotify();

//------------------------------

function openNotify() {

  randomUser();

  document.querySelector('.notify__timerBar').style.display = '';
  document.querySelector('.notify__timerBar').style.animationPlayState = 'running'

  if (document.querySelector('.notify').style.display == 'none') {
    document.querySelector('.notify').style.display = '';
  }

  if (!document.querySelector('animate__animated')) {
    document.querySelector('.notify').classList.add('animate__animated');
  }

  if (!document.querySelector('animate__bounceOut')) {
    document.querySelector('.notify').classList.remove('animate__bounceOut');
  }

  document.querySelector('.notify').classList.add('animate__bounceIn');
}

function closeNotify() {

  document.querySelector('.notify__timerBar').style.display = 'none';
  document.querySelector('.notify__timerBar').style.animationPlayState = 'paused'

  document.querySelector('.notify').classList.remove('animate__bounceIn');
  document.querySelector('.notify').classList.add('animate__bounceOut');
}

function randomUser() {
  // let image = document.querySelector('.notify__img').src.substr(-6);

  
  // let names = [];
  // let users = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg"]

  // let random_user = Math.floor(Math.random() * users.length + 1) + ".jpg";

  let random_number = Math.floor(Math.random() * (users.length + 1))

  if (random_number == users.length) {
    random_number = random_number - 1; //pongo -1 porque se empieza a contar desde 0 los arreglos
  }

  let random_user = users[random_number];

  document.querySelector('.notify__img').src = "./compradores/" + random_user["photo"];
  document.querySelector(".name").innerText = random_user["name"];
  document.querySelector(".country").innerText = random_user["country"];

  // console.log(random_user["name"]);
  // console.log(random_user["photo"]);
  // console.log(random_user["country"]);
}
//---------------------------------------------------------------------------------------

//animate__zoomIn LOOP
setInterval(function () {

  //-----------------------ESTO SIRVE PARA LA GARANTIA SE MUESTRE CADA 5 SEGUNDOS-----------------------

  //.main--warranty--text__title .animate__animated .animate__zoomIn

  //document.querySelector(".main--warranty--text__title").classList.toggle('animate__animated');
  //document.querySelector(".main--warranty--text__title").classList.toggle('animate__zoomIn');

  //main--warranty--text__description span

  //document.querySelector(".main--warranty--text__description").classList.toggle('animate__animated');
  //document.querySelector(".main--warranty--text__description").classList.toggle('animate__zoomIn');

  //-------------------------------------------------------------------------------------------------------

  //.main--container--gifs__item--title .animate__animated .animate__zoomIn
  for (let i = 0; i < document.querySelectorAll('.main--container--gifs__item--title').length; i++) {
    document.querySelectorAll(".main--container--gifs__item--title")[i].classList.toggle('animate__animated');
    document.querySelectorAll(".main--container--gifs__item--title")[i].classList.toggle('animate__zoomIn');
  }

}, 5000);

//animate__zoomIn NO LOOP
const animate__zoomIn__no__loop = new IntersectionObserver(entries => {
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

for (let i = 0; i < document.querySelectorAll('.main--frequentQuestions--title').length; i++) {
  animate__zoomIn__no__loop.observe(document.querySelectorAll(".main--frequentQuestions--title")[i]);
}

for (let i = 0; i < document.querySelectorAll('.student').length; i++) {
  animate__zoomIn__no__loop.observe(document.querySelectorAll(".student")[i]);
}

for (let i = 0; i < document.querySelectorAll('.main--container-StudyPlan__item--container--description__img').length; i++) {
  animate__zoomIn__no__loop.observe(document.querySelectorAll(".main--container-StudyPlan__item--container--description__img")[i]);
}

/*ESTO SE ACTIVA CUANDO SE OCULTA LA GARANTÍA*/

for (let i = 0; i < document.querySelectorAll('.main--warranty--text__title').length; i++) {
  animate__zoomIn__no__loop.observe(document.querySelectorAll(".main--warranty--text__title")[i]);
}

/*--------------------------------------------*/

animate__zoomIn__no__loop.observe(document.querySelector(".main--subtitle"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--repeatOffer--set--img"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--title--bonds"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--gifs--title"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--offer--title"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--teacher--container--img"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--opinions--title"));
animate__zoomIn__no__loop.observe(document.querySelector(".main--teacher--title"));
animate__zoomIn__no__loop.observe(document.querySelector(".header--title"));

//---------------------------------------------------------------------------------------

//EFECTO auto_increment
const auto_increment = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      // entry.target.classList.add('animate__animated');
      // entry.target.classList.add('animate__fadeIn');

      let x = 1;
      const intervalo = setInterval(function () {
        document.querySelector('.auto_increment').innerText = x;
        if (x === 10) clearInterval(intervalo);
        x++;
      }, 100);

    }
  });
});

auto_increment.observe(document.querySelector('.auto_increment'));

//Acordeon
let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

  //Contador -- OJO: ESTE ES UN SCRIPT PARA 2 CONTADORES , SI INTESTA USAR SOLO UNO O MÁS DE 2 PUEDE FALLAR
  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      dayMonth = "12/12/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;

        document.querySelectorAll(".days")[0].innerText = Math.floor(distance / (day)),
          document.querySelectorAll(".hours")[0].innerText = Math.floor((distance % (day)) / (hour)),
          document.querySelectorAll(".minutes")[0].innerText = Math.floor((distance % (hour)) / (minute)),
          document.querySelectorAll(".seconds")[0].innerText = Math.floor((distance % (minute)) / second);

        document.querySelectorAll(".days")[1].innerText = Math.floor(distance / (day)),
          document.querySelectorAll(".hours")[1].innerText = Math.floor((distance % (day)) / (hour)),
          document.querySelectorAll(".minutes")[1].innerText = Math.floor((distance % (hour)) / (minute)),
          document.querySelectorAll(".seconds")[1].innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.querySelectorAll(".headline")[0].innerText = "Expiró la Oferta - Cupos Llenos";
          document.querySelectorAll(".countdown")[0].style.display = "none";
          document.querySelectorAll(".content")[0].style.display = "block";

          document.querySelectorAll(".headline")[1].innerText = "Expiró la Oferta - Cupos Llenos";
          document.querySelectorAll(".countdown")[1].style.display = "none";
          document.querySelectorAll(".content")[1].style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


