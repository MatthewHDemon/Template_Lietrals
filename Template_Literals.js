
// Template strings - Pantillas strings
const message = 'FirstLine\n\tSecondLine\nThirdLine'; // comillas simples

const país = 'Colombia';

const apellido = "Patarroyo"; // comillas dobles

const saludo = "Hola, " + apellido + ", ¿Cómo estas?";

const saludo2 = `Hola, ${apellido}, ¿Cómo estas?` // tildes (backticks)
console.log(saludo2);

let sumar = (a,b) => a+b; //se utiliza para sumar

const mensaje = `Hola, ${apellido},

Esta es una carta, desde ${país}.

La suma de 2 y 3 es ${sumar(2,3)} 

Att: Yo, ${apellido}`; 

console.log(mensaje);

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}. `);

alert(message)








