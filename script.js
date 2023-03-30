"use strict";

//  BOTONES MELODIA

let melodyButtons = document.querySelectorAll(".melody-button");
//creamos una funcion con argumentos audio y  tiempo de retraso
function reproducirConRetraso(audio, tiempo) {
  // metodo setTimeout retrasa la ejecucion de  la funcion hasta  que no transcurra el tiempo(1000)
  setTimeout(function () {
    audio.play();
  }, tiempo);
}
// Agrego un controlador de eventos onclick a cada botón
melodyButtons.forEach(function (button) {
  button.onclick = function () {
    //cuando click en boton nuevo objeto de audio 
    let audio = new Audio(button.getAttribute("src"));
    //se llama a la funcion para reprodicir el sonido con retraso 1000
    reproducirConRetraso(audio, 500);
  };
});

//////////////////////////////////////////////////////////////////////////////////
//BOTON REDOBLE EMPEZAR
//CREAMOS VARIABLE BOTON
//CREAMOS NUEVO ELEMENTO CON ETIQUETA DE AUDIO
let boton = document.querySelector(".comenzar")
let audioEtiqueta = document.querySelector("audio")
//VARIBLE BOTON, LE DAMOS LISTENER AL EVENTO CLICK
//ETIQUETA AUDIO LE ESTABLECEMOS EL ATRIBUTO SRC DONDE EL NAVAEGADOR LEE EL AUDIO
//ETIQUETA AUDIO LE DAMOS ACCESO AL METODO PLAY

boton.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src", "../Sonidos/redoble.mp3")
  audioEtiqueta.play();
})

////////////////////////////////////////////////////////////////////////////////
//EVENTO DE TECLADO

//definimos funcion que toma cadena tecla como entrada
function reproducirMelodia(tecla) {
  //crea nuevo audio con la ruta del archivo
  let audio = new Audio("Sonidos/" + tecla);
  //llamamos a la funcion reproducir con retraso que tiene el setTimeout
  reproducirConRetraso(audio, 500);
}
//cuando se presiona una tecla EventListener llama a reproducir la melodia
document.addEventListener("keydown", function (event) {

  if (event.key.toLowerCase() === "q") {
    reproducirMelodia("../Sonidos/crash.wav");
  } else if (event.key.toLowerCase() === "w") {
    reproducirMelodia("../Sonidos/hihat-close.wav");
  } else if (event.key.toLowerCase() === "e") {
    reproducirMelodia("../Sonidos/hihat-open.wav");
  } else if (event.key.toLowerCase() === "r") {
    reproducirMelodia("../Sonidos/kick.wav");
  } else if (event.key.toLowerCase() === "t") {
    reproducirMelodia("../Sonidos/ride.wav");
  } else if (event.key.toLowerCase() === "u") {
    reproducirMelodia("../Sonidos/snare.wav");
  } else if (event.key.toLowerCase() === "i") {
    reproducirMelodia("../Sonidos/tom-high.wav");
  } else if (event.key.toLowerCase() === "o") {
    reproducirMelodia("../Sonidos/tom-low.wav");
  } else if (event.key.toLowerCase() === "p") {
    reproducirMelodia("../Sonidos/tom-mid.wav");
  }
});




