/*
/ Clase 4 en vídeo | 31/07/2024
/ Mapas, bucles y funciones
* https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

/// Loops o bucles

/// for
//- Para ejecutar una instruccion un numero repetido de veces 
//- Cuando conocemos a priori el numero exacto de veces que queremos repetir el codigo

// i es la variable que representa el indice desde donde se comienza a evaluar
// i<5 Evalua si se cumple la condicion
// i++ Actualiza la variable

console.log();
console.log("Ejemplo de Ciclo for , se imprimen 5 mensajes incrementando en 1");
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

console.log();
console.log("Recorremos un arreglo con for");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

/// while
//- Para ejecutar una instruccion un numero repetido de veces.
//- Cuando no conocemos de antemano la cantidad exacta de veces que se va a repetir el codigo
//- El while evalua la condicion antes de ejecutar el codigo


console.log();
console.log("Ejemplo con while");
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

//! Revisar siempre que de no crear un Bucle infinito
// while(true) {
// }

/// do while
//- El do while ejecuta un bloque de codigo por lo menos una vez, y luego evalua la condicio


console.log();
console.log("Ejemplo con do while");
i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)



/// for of
//- Recorrer valores de algo que sea iterable, es decir alguna estructura de datos y hasta con algun dato primitivo
//- Ejemplo array, set , map y string

console.log();
console.log("Vamos a ver ejemplos con for of");

console.log();
console.log("Ejemplo de for of con Array");
myArray = [1, 2, 3, 4]

for (let value of myArray) {
    console.log(value)
}

console.log();
console.log("Ejemplo de for of con Set");
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

for (let value of mySet) {
    console.log(value)
}


console.log();
console.log("Ejemplo de for of con Map");
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

for (let value of myMap) {
    console.log(value)
}


console.log();
console.log("Ejemplo de for of con string");
myString = "¡Hola, JavaScript!"
for (let value of myString) {
    console.log(value)
}



/// break y continue
//- Cuando queremos crear cosas concretas segun pase algo
//- continue para saltar a una nueva ejecucion , no importa lo que sigue en esa vuelta del recorrido del bucle
//- break para salir de la ejecucion completamente


console.log();
console.log("Ejemplo de como cortar un for con break y continue");
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue    // Se saltea el ciclo en el 5
    } else if (i == 7) {
        break       // Sale de la ejecucion en el 7
    }
    console.log(`Hola ${i}`)
}