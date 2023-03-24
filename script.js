"use strict";

let button1 = document.getElementById("button1");
let crash = document.getElementById("crash");

button1.addEventListener("click", () => {
  crash.play();
});

console.log("hola");
