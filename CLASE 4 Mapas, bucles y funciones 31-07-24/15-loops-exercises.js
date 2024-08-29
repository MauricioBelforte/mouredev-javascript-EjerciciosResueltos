/*
/ Clase 4 en vídeo | 31/07/2024
/ Mapas, bucles y funciones
* https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios
//* 1. Crea un bucle que imprima los números del 1 al 20
console.log();
console.log("1. Crea un bucle que imprima los números del 1 al 20");
console.log();



console.log("Se imprimen los numeros con un bucle for");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

console.log();
console.log("Se imprimen los numeros con un bucle while");
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

console.log();
console.log("Se imprimen los numeros con un bucle do while");

i = 1
do {
    console.log(i);
    i++
} while (i <= 20)




//* 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log();
console.log("2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado");
console.log();

console.log("Creamos el bucle con for: Suma del 1 al 100");

let suma = 0

for (let i = 1; i <= 100; i++) {
    suma = suma + i;

}
console.log('suma: ', suma);


console.log("Creamos el bucle con while: Suma del 1 al 100");

suma = 0
i = 1
while (i <= 100) {
    suma = suma + i;
    i++;
}

console.log('suma: ', suma);




//* 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log();
console.log("3. Crea un bucle que imprima todos los números pares entre 1 y 50");
console.log();

console.log("Lo creo con un for : Imprime pares del 1 al 50");

for (let i = 0; i <= 50; i = i + 2) {
    console.log(i);

}
console.log();
console.log("Lo creo con un while : Imprime pares del 1 al 50");

i = 0;
while (i <= 50) {
    console.log(i);
    i = i + 2;
}

//* 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log();
console.log("4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola");
console.log();

const nombres = [
    "Juan", "María", "Pedro", "Ana", "Luis", "Carmen", "José", "Laura", "Carlos", "Elena",
    "Miguel", "Sofía", "Jorge", "Lucía", "Andrés", "Marta", "Raúl", "Isabel", "Fernando", "Patricia"
];

console.log("Imprimo el arreglo");
console.log(nombres);

console.log();
console.log("Imprimo cada nombre usando un for");

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

console.log();
console.log("Imprimo cada nombre usando un for of");

//- for of puede ser utilizado para cualquier objeto iterable
for (let nombre of nombres) {
    console.log(nombre);
}


//* 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log();
console.log("5. Escribe un bucle que cuente el número de vocales en una cadena de texto");
console.log();

console.log("Voy a utilizar un for of para recorrer el string y un switch para analizar cada vocal");
let cadenaTexto = "Esta es una cadena de texto"
let contador = 0;
cadenaTexto = cadenaTexto.toLocaleLowerCase();
for (let letra of cadenaTexto) {


    switch (letra) {
        case 'a':

            contador++;
            break;

        case 'e':

            contador++;
            break;

        case 'i':

            contador++;
            break;

        case 'o':

            contador++;
            break;

        case 'u':

            contador++;
            break;

        default:

            break;
    }
}
console.log(`La cantidad de vocales de la cadena de texto es: ${contador}`);




//* 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log();
console.log("6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto");
console.log();

console.log("Lo resuelvo con un for ");
let arrayNumeros = [2, 4, 7, 5, 2]
let productoria = 1;
for (i = 0; i < arrayNumeros.length; i++) {
    productoria = productoria * arrayNumeros[i];
}

console.log(`La productoria es: ${productoria} `);




//* 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log();
console.log("7. Escribe un bucle que imprima la tabla de multiplicar del 5");
console.log();

console.log("Lo resuelvo con un while");
let multiplicador = 1;

while (multiplicador <= 10) {
    console.log(`5 X ${multiplicador} = ${5 * multiplicador}`);
    multiplicador++
}



//* 8. Usa un bucle para invertir una cadena de texto
console.log();
console.log("8. Usa un bucle para invertir una cadena de texto");
console.log();

let unTexto = "Vamos a invertir este texto"

console.log("Vemos la longitud del texto");
console.log(unTexto.length);

console.log();
console.log("Lo resuelvo concatenando en un string cada caracter usando un for con i--");
let textoInvertido = ""
for (let i = unTexto.length - 1; i >= 0; i--) {
    textoInvertido = textoInvertido + unTexto[i];
}

console.log(textoInvertido);




//* 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log();
console.log("9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci");
console.log();

i = 0;
let numeroAnterior = 0;
let numeroActual = 1;
let numeroSiguiente = 0;

while (i <= 10) {

    console.log(numeroAnterior);
    numeroSiguiente = numeroAnterior + numeroActual;
    console.log('numeroAnterior: ', numeroAnterior);
    console.log('numeroActual: ', numeroActual);
    console.log('numeroSiguiente: ', numeroSiguiente);
    numeroAnterior = numeroActual;
    numeroActual = numeroSiguiente;
    i++;
}




//* 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log();
console.log("10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10");
console.log();

console.log("Resuelvo el ejercicio utilizando un for of");
let arrayDenumeros = [0, 23, 1, 45, 67, 9, 12, 89, 5, 34, 10, 56, 8, 78, 90, 11, 4];

let nuevoArray = []
for (let numero of arrayDenumeros) {

    if (numero > 10)
        nuevoArray.push(numero);

}

console.log('nuevoArray: ', nuevoArray);
