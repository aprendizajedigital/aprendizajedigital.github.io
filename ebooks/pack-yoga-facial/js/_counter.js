let _hours = document.querySelectorAll(".o-counter__hours");//lista
let _minuts = document.querySelectorAll(".o-counter__minutes");//lista
let _seconds = document.querySelectorAll(".o-counter__seconds");//lista

// Establecer la fecha objetivo del contador
const fechaObjetivo = new Date('2023-12-31T23:59:59');

function actualizarContador() {
  // Obtener la fecha y hora actual
  const fechaActual = new Date();

  // Calcular la diferencia entre la fecha objetivo y la fecha actual
  const tiempoRestante = fechaObjetivo - fechaActual;

  // Calcular las horas, minutos y segundos restantes
  const horasRestantes = Math.floor((tiempoRestante / 1000 / 60 / 60) % 24);
  const minutosRestantes = Math.floor((tiempoRestante / 1000 / 60) % 60);
  const segundosRestantes = Math.floor((tiempoRestante / 1000) % 60);

  // Actualizar los valores en los elementos del contador
  _hours.forEach(item => item.textContent = pad(horasRestantes)+"h");
  _minuts.forEach(item => item.textContent = pad(minutosRestantes)+"min");
  _seconds.forEach(item => item.textContent = pad(segundosRestantes)+"s");
}

function pad(valor) {
  // Agregar un cero inicial si el valor es menor que 10
  return valor < 10 ? `0${valor}` : valor;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);