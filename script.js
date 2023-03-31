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
let boton = document.querySelector(".comenzar");
let audioEtiqueta = document.querySelector("audio");
//VARIBLE BOTON, LE DAMOS LISTENER AL EVENTO CLICK
//ETIQUETA AUDIO LE ESTABLECEMOS EL ATRIBUTO SRC DONDE EL NAVAEGADOR LEE EL AUDIO
//ETIQUETA AUDIO LE DAMOS ACCESO AL METODO PLAY

boton.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src", "../Sonidos/redoble.mp3");
  audioEtiqueta.play();
});

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

//Pantalla INICIO

let botonComenzar = document.getElementById("comenzar");
let instrucciones = document.querySelector(".instrucciones");
let contenido = document.getElementById("contenido");

botonComenzar.addEventListener("click", function () {
  instrucciones.classList.add("ocultar");
  contenido.classList.remove("ocultar");
});

//ANIMACIÓN GRABAR Y REPRODUCIR

let recButton = document.getElementById("recButton");
let grabarButton = document.getElementById("grabar");

grabarButton.addEventListener("click", function () {
  if (recButton.classList.contains("Rec")) {
    recButton.classList.remove("Rec");
    recButton.classList.add("notRec");
    recButton.classList.add("recButton");
  } else {
    recButton.classList.remove("notRec");
    recButton.classList.add("Rec");
  }
});

let repButton = document.getElementById("repButton");
let reproducirButton = document.getElementById("reproducir");

reproducirButton.addEventListener("click", function () {
  if (repButton.classList.contains("Rep")) {
    repButton.classList.remove("Rep");
    repButton.classList.add("notRep");
    repButton.classList.add("repButton");
  } else {
    repButton.classList.remove("notRep");
    repButton.classList.add("Rep");
  }
});

//TECLADO O RATÓN

let teclado = document.getElementById("teclado");
let estado = false;

teclado.addEventListener("click", function () {
  estado = !estado;
  teclado.innerHTML = estado ? "USAR RATON" : "USAR TECLADO";
  let teclas = document.getElementsByClassName("tecla");
  for (let i = 0; i < teclas.length; i++) {
    teclas[i].classList.toggle("ocultar");
    teclas[i].classList.toggle("mostrar");
  }
});
