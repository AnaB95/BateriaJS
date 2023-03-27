"use strict";

//  BOTONES MELODIA
let melodyButtons = document.querySelectorAll(".melody-button");

// Agregar un controlador de eventos onclick a cada botón
melodyButtons.forEach(function (button) {
  button.onclick = function () {
    // Crear un objeto de audio y establecer su propiedad src en la ruta del archivo de sonido correspondiente
    let audio = new Audio(button.getAttribute("src"));
    // Reproducir el sonido
    //metodo setTimeout dos argumentos funcion para ejecutar el retraso y tiempo de retraso
    setTimeout(function () {
      audio.play();
    }, 1000);
  };
});




////////////////////////////////////////////////////////////////////////////////
//EVENTO DE TECLADO

//definimos funcion que toma cadena tecla como entrada
function reproducirMelodia(tecla) {
  //crea nuevo audio con la ruta del archivo
  let audio = new Audio("Sonidos/" + tecla);
  //play para reproducir el archivo de audio
  //metodo setTimeout dos argumentos funcion para ejecutar el retraso y tiempo de retraso
  setTimeout(function () {
    audio.play();
  }, 1000);
  console.log("Estas reproduciendo la melodía de la tecla " + tecla);
}
//cuando se presiona una tecla EventListener llama a reproducir la melodia
document.addEventListener("keydown", function (event) {

  if (event.key.toLowerCase() === "q") {
    reproducirMelodia("/crash.wav");
  } else if (event.key.toLowerCase() === "w") {
    reproducirMelodia("/hihat-close.wav");
  } else if (event.key.toLowerCase() === "e") {
    reproducirMelodia("/hihat-open.wav");
  } else if (event.key.toLowerCase() === "r") {
    reproducirMelodia("/kick.wav");
  } else if (event.key.toLowerCase() === "t") {
    reproducirMelodia("/Ride.wav");
  } else if (event.key.toLowerCase() === "u") {
    reproducirMelodia("/Snare.wav");
  } else if (event.key.toLowerCase() === "i") {
    reproducirMelodia("/Tom-high.wav");
  } else if (event.key.toLowerCase() === "o") {
    reproducirMelodia("/Tom-low.wav");
  } else if (event.key.toLowerCase() === "p") {
    reproducirMelodia("/Tom-mid.wav");
  }
});

