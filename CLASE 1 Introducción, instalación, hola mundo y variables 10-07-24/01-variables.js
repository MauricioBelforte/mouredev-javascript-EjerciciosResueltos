/*
/ Clase 1 en vídeo | 10/07/2024
/ Introducción, instalación, hola mundo y variables
* https://www.twitch.tv/videos/2194200202?t=00h14m43s
*/

//- Almacenamos valores en memoria: Variables
//- Para los nombres de las variables utilizamos lower cammelCase, comenzamos con minuscula y la próxima palabra comienza con mayúscula

//- Tenemos 3 palabras reservadas var, let y const para declarar las variables


/// var
// No es recomendable utilizar var, ya que es como una variable global y podemos cometer errores
var helloWorld = "¡Hola, JavaScript!" 
console.log(helloWorld)
// Podemos volver a cambiar el valor en tiempo de ejecucion
helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)


/// let
// En vez de var es conveniente usar let, ya que tiene alcance de bloque
let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)
// Se puede cambiar el valor en tiempo de ejecucion
helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)


/// const
// Se utiliza cuando queremos que el valor no sea modificado en ningun momento, su valor es constante
const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)
// No se puede modificar , si queremos da error
// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)