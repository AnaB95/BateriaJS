"use strict";

//  BOTONES MELODIA

let melodyButtons = document.querySelectorAll(".melody-button");

function reproducirConRetraso(audio, tiempo) {
  setTimeout(function () {
    audio.play();
  }, tiempo);
}

melodyButtons.forEach(function (button) {
  button.onclick = function () {
    let audio = new Audio(button.getAttribute("src"));
    reproducirConRetraso(audio, 500);
  };
});

//BOTON REDOBLE EMPEZAR

let boton = document.querySelector(".comenzar");
let audioEtiqueta = document.querySelector("audio");

boton.addEventListener("click", () => {
  audioEtiqueta.setAttribute("src", "../Sonidos/redoble.wav");
  audioEtiqueta.play();
});

//EVENTO DE TECLADO

let audioArray = [];
function reproducirMelodia(tecla) {
  let audio = new Audio("Sonidos/" + tecla);
  audioArray.push(audio);
}

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

  if (audioArray.length > 0) {
    let delay = 500;
    audioArray.forEach(function (audio) {
      reproducirConRetraso(audio, delay);
    });
    audioArray = [];
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
