/*
/ Clase 4 en vídeo | 31/07/2024
/ Mapas, bucles y funciones
* https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

//* 1. Crea una función que reciba dos números y devuelva su suma
console.log();
console.log("1. Crea una función que reciba dos números y devuelva su suma");
console.log();


// Declaro la funcion
function suma(num1, num2) {
    return num1 + num2
}

let num1 = 3
let num2 = 4

// La llamo dentro del console.log()
console.log(`La suma de ${num1} + ${num2} es: `, suma(num1, num2));


//* 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log();
console.log("2. Crea una función que reciba un array de números y devuelva el mayor de ellos");
console.log();

let numeros = [23, 45, 67, 12, 89, 110, 34, 56, 78, 90, 11];
console.log('numeros: ', numeros);


function mayor(arrayNumeros) {
    let numMayor = 0;
    for (let index = 0; index < arrayNumeros.length; index++) {

        if (arrayNumeros[index] > numMayor) {
            numMayor = arrayNumeros[index]
        }


    }
    return numMayor
}
// Llamo a la funcion mayor y le paso como parametro el arreglo de numeros
console.log('El numero mas grande del array es: ', mayor(numeros));


//* 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log();
console.log("3. Crea una función que reciba un string y devuelva el número de vocales que contiene");
console.log();

// Declaramos la funcion
function numeroDeVocales(unString) {
    let contador = 0;
    unString = unString.toLowerCase();


    for (const letra of unString) {
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

    return contador;

}

let unString = "Esto es un mensaje que se pasa a la funcion para que cuente las vocales"
console.log('unString: ', unString);

console.log();
console.log("Invocamos a la funcion que cuenta las vocales del string");


console.log("Cantidad de vocales: ", numeroDeVocales(unString));




// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log();
console.log("Cambio el switch por un if ingenioso");


// Declaramos la función
function numeroDeVocales2(unString) {
    let contador = 0;
    unString = unString.toLowerCase();

    for (const letra of unString) {
        if ('aeiou'.includes(letra)) {  //Lo hago al reves, me fijo si cada letra del string esta incluida en el string aeiou
            contador++;
        }
    }

    return contador;
}

let unString2 = "Esto es un mensaje que se pasa a la función para que cuente las vocales";

console.log();
console.log("Invocamos a la función que cuenta las vocales del string pero con if");

console.log("Cantidad de vocales: ", numeroDeVocales2(unString));





//* 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log();
console.log("4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas");
console.log();


function pasarAMayusculas(unArray) {
    let arrayEnMayusculas = []
    for (let mensaje of unArray) {
        mensaje = mensaje.toUpperCase()
        arrayEnMayusculas.push(mensaje)
    }

    return arrayEnMayusculas
}


let stringUno = "El prImeR menSaje";
let stringDos = "El seGundo MensaJe";
let stringTres = "El teRceR MensaJe";
let stringCuatro = "El cuaRto MensaJe";
let stringCinco = "El quInto MensaJe";
let stringSeis = "El seXto MensaJe";
let stringSiete = "El séPtimo MensaJe";
let stringOcho = "El oCtavo MensaJe";
let stringNueve = "El noVeno MensaJe";
let stringDiez = "El décImo MensaJe";


let unArreglo = [

    stringUno,
    stringDos,
    stringTres,
    stringCuatro,
    stringCinco,
    stringSeis,
    stringSiete,
    stringOcho,
    stringNueve,
    stringDiez
];

console.log('Arreglo original: ', unArreglo);
console.log("Imprime el array en mayusculas", pasarAMayusculas(unArreglo));




//* 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log();
console.log("5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario");
console.log();

function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    // Verificamos si el número tiene divisores distintos de 1 y de sí mismo
    // Comprobamos hasta la raiz cuadrada del numero con eso alcanza para encontrar si es o no primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; // Si encontramos un divisor, no es primo
        }
    }

    return true; // Si no encontramos divisores, es primo
}

// Ejemplo de uso
let numero = 4;
console.log(`¿El número ${numero} es primo? ${esPrimo(numero)}`);



//* 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log();
console.log("6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos");
console.log();


function elementoComunes(unArray, otroArray) {
    let arrayResultante = []
    for (const elementArray1 of unArray) {
        for (const elementArray2 of otroArray) {
            if (elementArray1 == elementArray2) {
                arrayResultante.push(elementArray1)
            }
        }
    }
    return arrayResultante
}

array1 = ["gato", "perro", 5, "pajaro", 36, "vaca", "termo", 22];
array2 = ["oso", 22, "alpargatas", "vaca", "termo", "perro", "ternero"];

console.log("Arreglo 1: ", array1);
console.log("Arreglo 2:", array2);
console.log();

console.log(`Los elementos que tienen ambos en comun estan en el siguiente array: `, elementoComunes(array1, array2));




//* 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log();
console.log("7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares");
console.log();


function sumaPares(unArray) {
    let suma = 0;
    for (const numero of unArray) {
        if (numero % 2 == 0) {
            suma = suma + numero;
        }
    }
    return suma
}

let arregloNumeros = [23, 2, 57, 6, 89, 12, 34, 76, 45, 90, 11, 68, 54, 32, 77, 19, 85, 61, 29, 48, 73, 99];
console.log('arregloNumeros: ', arregloNumeros);


console.log('La suma de los numeros pares es: ', sumaPares(arregloNumeros));



//* 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log();
console.log("8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado");
console.log();

function elevaAlCuadrado(unArray) {
    arrayAlCuadrado = []
    for (const numero of unArray) {
        arrayAlCuadrado.push(numero * numero)

    }
    return arrayAlCuadrado
}

console.log('arregloNumeros: ', arregloNumeros);
console.log("El arreglo con todos los numeros al cuadrado");
console.log(elevaAlCuadrado(arregloNumeros));





//* 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log();
console.log("9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso");
console.log();
/// split() 
//split() funcion de los strings
/// join()
// join() funcion de los arrays

function textoInverso(unString) {

    let arrayDelString = []
    let arrayDePalabrasInvertidas = []
    let stringInvertido = ""

    //- Convierto el string original en un array con la funcion propia de los strings llamada split() que separa las palabras en el caracter que le pasamos por parametro
    arrayDelString = unString.split(' ');
    console.log("Vemos como queda el arrayDelString luego de usar split(' ') que las separa");
    console.log('arrayDelString: ', arrayDelString);
    console.log();



    //- Uso un for of para recorrer el arrayDelString y los voy colocando al principio de mi nuevo array con unshift ()

    for (const palabra of arrayDelString) {
        arrayDePalabrasInvertidas.unshift(palabra)

    }

    console.log("Vemos como queda compuesto el arrayDePalabrasInvertidas usando unshif() las colocamos al reves");

    console.log('arrayDePalabrasInvertidas: ', arrayDePalabrasInvertidas);

    //- Finalmente una vez conseguido el array con todas las palabras separadas e invertidas usamos la funcion de los arreglos join() para juntar las palabras segun el parametro que pasamos
    // join(' ') unimos las palabras por el caracter de espacio
    stringInvertido = arrayDePalabrasInvertidas.join(' ')
    console.log();
    console.log("Vemos como queda finalmente el texto con las palabras invertidas");
    return stringInvertido
}


let unTexto = "Creamos un string de palabras para invertirlas a todas"
console.log("String original:", unTexto);
console.log();

console.log("Invocamos a la funcion textoInverso() para ver la frase invertida: ");
console.log();


console.log(textoInverso(unTexto));




//* 10. Crea una función que calcule el factorial de un número dado
console.log();
console.log("10. Crea una función que calcule el factorial de un número dado");
console.log();


function factorial(numero) {
    let resultadoFactorial = 1;
    for (i = 1; i <= numero; i++) {
        resultadoFactorial = resultadoFactorial * i;
    }

    return resultadoFactorial;
}

let numeroFactorial = 5


console.log(`Invocamos a la funcion factorial() para que calcule el factorial de ${numeroFactorial}`);
console.log(factorial(numeroFactorial));