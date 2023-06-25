
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

fetch("https://ipinfo.io/json")
.then((response) => response.json())
.then((data) => (city.innerText = data.city))