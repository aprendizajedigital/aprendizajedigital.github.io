//Cantidad de ventas

//new Date().getMonth() + 1 -> Sumamos 1 porque los meses en JavaScript van de 0 a 11

let sale = document.querySelector(".c-first-information__text-17-span");
let resultado = new Date().getDate() + new Date().getMonth() + 1 + new Date().getFullYear();
sale.textContent = resultado;

