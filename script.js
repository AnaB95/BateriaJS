"use strict";

let button1 = document.getElementById("button1");
let crash = document.getElementById("crash");

button1.addEventListener("click", () => {
  crash.play();
});

let button2 = document.getElementById("button2");
let close = document.getElementById("close");

button2.addEventListener("click", () => {
  close.play();
});

let button3 = document.getElementById("button3");
let open = document.getElementById("open");

button3.addEventListener("click", () => {
  open.play();
});
