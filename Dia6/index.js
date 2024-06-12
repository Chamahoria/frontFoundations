let x = 0;
const nombre = "Naranja";

// alcance de las variables dentro de la función...
// solo se pueden acceder dentro de las llaves de la función...
function fn() {
  let z = 0;
  console.log(z);
  const nombreDos = "Mandarina";
  console.log(nombreDos);
}

x = 2;

// para ejecutar el contenido de una funcion toca llamarla de esta manera...
// fn();

function imprimirElNombre() {
  console.log(nombre);
}

// imprimirElNombre();

let a = 1;
let b = 2;

function sumarAyB() {
  console.log("suma", a + b);
}

// sumarAyB();

function restarAyB() {
  let resultado = b - a;
  console.log("resta", resultado);
}

// restarAyB();

function dividirAyB() {
  console.log("div", b / a);
}

// dividirAyB();

function multiplicarAyB() {
  console.log("mult", b * a);
}

// multiplicarAyB();

function string() {
  let numeroASumar = 1;
  let stringASumar = "Hola";
  let resultado = stringASumar + numeroASumar;
  console.log(resultado);
}

// string();
