const password = document.querySelector(".password");
const copy = document.querySelector(".copy");
let length = document.querySelector(".length");
let range = document.querySelector(".range");
const checkupp = document.querySelector(".upp");
const checklow = document.querySelector(".low");
const checknum = document.querySelector(".num");
const checksyn = document.querySelector(".syn");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const btn = document.querySelector(".generate");
const error1 = document.querySelector(".error1");
const diff = document.querySelector(".dificult");
let valor = 0;
let cantidad = 0;
let mayusculas = [];
let minusculas = [];
let numeros = [];
let simbolos = [];
let checkeados = 0;
let contraseña = " ";

range.addEventListener("input", () => {
  cantidad = range.value;
  length.textContent = cantidad;
});

checkupp.addEventListener("click", () => {
  if (checkupp.checked) {
    mayusculas = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    console.log(mayusculas);
    checkeados++;
  } else {
    mayusculas = [];
    console.log(mayusculas);
    checkeados--;
  }
});

checklow.addEventListener("click", () => {
  if (checklow.checked) {
    minusculas = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    console.log(minusculas);
    checkeados++;
  } else {
    minusculas = [];
    console.log(minusculas);
    checkeados--;
  }
});

checknum.addEventListener("click", () => {
  if (checknum.checked) {
    numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log(numeros);
    checkeados++;
  } else {
    numeros = [];
    console.log(numeros);
    checkeados--;
  }
});

checksyn.addEventListener("click", () => {
  if (checksyn.checked) {
    simbolos = ["!", "%", "$", "#", "@"];
    console.log(simbolos);
    checkeados++;
  } else {
    simbolos = [];
    console.log(simbolos);
    checkeados--;
  }
});

copy.addEventListener("click", () => {
  navigator.clipboard
    .writeText(contraseña)
    .then(() => {
      console.log("Contraseña copiada al portapapeles!");
    })
    .catch((err) => {
      console.error("Error al copiar la contraseña: ", err);
    });
});

btn.addEventListener("click", () => {
  const combinado = mayusculas.concat(minusculas, numeros, simbolos);
  console.log(combinado);
  let pass = " ";
  if (combinado.length >= 1) {
    if (cantidad >= 1) {
      for (let i = 0; i < cantidad; i++) {
        const index = Math.floor(Math.random() * combinado.length);
        pass += combinado[index];
      }
      password.textContent = pass;
      password.classList.add("pass-active");
      error1.classList.remove("error-active");
      contraseña = pass;
    } else {
      console.log(cantidad);
      error1.innerHTML = "Error:Please select any cant";
      error1.classList.add("error-active");
    }
  } else {
    error1.innerHTML = "Error:Please select any check";
    error1.classList.add("error-active");
  }
});
