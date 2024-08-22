/*
/ Condicionales, arrays y sets
/ Clase 3 en vídeo | 24/07/2024
* https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

/// Array

/// Declaración
console.log();
console.log("Declaramos 2 arreglos");
let myArray = []  // Primera forma de crear un array
let myArray2 = new Array() // Segunda forma de crear un array

console.log(myArray)
console.log(myArray2)

/// Inicialización
console.log();
console.log("Los inicializamos");
myArray = [3] // Carga el array con el elemento 3
myArray2 = new Array(3) // Inicializa un array de 3 elementos

console.log(myArray)
console.log(myArray2)

console.log();
console.log("Cargamos algunos elementos");
myArray = [1, 2, 3, 4] // Carga los elementos en el array , piso el que estaba cargado
myArray2 = new Array(1, 2, 3, 4) // Carga los elementos en el array

console.log(myArray)
console.log(myArray2)

console.log();
console.log("Cargamos elementos de diferente tipo");
myArray = ["Brais", "Moure", "mouredev", 37, true]; // Carga elementos de todo tipo en el array
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true) // Carga elementos de todo tipo en el array

console.log(myArray)
console.log(myArray2)


console.log();
console.log("Cargamos un elemento extra al arreglo 2");
myArray2 = new Array(3) // Reservo un espacio para 3 elementos pero mas abajo cargo 4
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

console.log();
console.log("Cargamos un elemento extra al arreglo 1");
myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)



/// Métodos comunes

console.log();
console.log("Metodos comunes");
myArray = []


/// push y pop


/// push()
//- Coloca elementos al final del arreglo
console.log();
console.log("push");
myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)


/// pop()  
//- Elimina el ultimo elemento del array y ademas lo devuelve
console.log();
console.log("pop");
console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)



/// shift y unshift


/// shift() 
//- Elimina el primer elemento del array y ademas lo devuelve
console.log();
console.log("shift");
console.log(myArray.shift()) 
console.log(myArray)


/// unshift 
//- Sirve para agregar uno o mas elementos al principio array
console.log();
console.log("unshift");
myArray.unshift("Brais", "mouredev")
console.log(myArray)


/// length
//- Para devolver la cantidad de elementos del array usamos la propiedad lenght
console.log();
console.log("lenght");

console.log(myArray.length)


/// clear
//- Como funcion no existe proponemos 2 soluciones
console.log();
console.log("Limpiamos el arreglo");

myArray = [] // Primera forma, esta es mas utilizada
myArray.length = 0 // alternativa
console.log(myArray)



/// slice
//- Sirve para devolver una copia de una porcion del arreglo, no modifica el original
console.log();
console.log("slice");

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3) // Nos quedamos con una copia del arreglo desde la posicion 1 hasta la posicion 3 sin incluir

console.log(myArray)
console.log(myNewArray)



/// splice
//- Sirve para eliminar elementos de un arreglo, modifica el original. Ademas se puede agregar un elemento
console.log();
console.log("splice");

myArray.splice(1, 3) // Nos modifica el array original quitando desde el elemento 1 al 3
console.log(myArray)

console.log("Volvemos a cargar los elementos que eliminamos y usamos un splice para agregar un elemento");
myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada") // A partir de la posicion 1 eliminamos 2 elementos y de paso agregamos un elemento nuevo en el tercer parametro
console.log(myArray)