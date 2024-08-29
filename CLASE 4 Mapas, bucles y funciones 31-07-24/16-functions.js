/*
/ Clase 4 en vídeo | 31/07/2024
/ Mapas, bucles y funciones
* https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

/// Funciones


//- Simple sin parametros
// Palabra reservada function

console.log();
console.log("Funcion Simple sin parametros y la llamo 5 veces");
/// Declaracion
function myFunc() {
    console.log("¡Hola, función!")
}

/// Invoco a la funcion
for (let i = 0; i < 5; i++) {
    myFunc()
}

//- Funcion con parámetros

console.log();
console.log("Funcion con parametros");
// Declaracion
function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

// La llamo 2 veces con parametros distintos
myFuncWithParams("Brais")
myFuncWithParams("MoureDev")




/// Funciones anónimas
//- Si luego de la palabra function no le asigno un nombre se las llama anonimas
//- Se las suele asignar a una variable para luego poder invocarla

console.log();
console.log("Funciones anonimas");
const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)  // log() es una funcion de console
}

//- La variable myFunc2 ahora pasa a funcionar como una funcion y se la llama igual que la funcion
myFunc2("Brais Moure")



/// Arrow functions o funciones flecha
//- Es una forma mas concisa de definir una funcion
//- Se reeplaza la palabra function por la =>
//- Ademas es anonima

console.log();
console.log("Funcion flecha");

/// Declaracion de la funcion flecha
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`) //Las llaves se pueden quitar porque es una sola linea de codigo


/// Invocacion de la funcion flecha
// Totalmente igual
myFunc3("Brais Moure")
myFunc4("Brais Moure")



/// Parámetros
//- Si deseamos pasarle mas parametros a la funcion se separan con comas

console.log();
console.log("Funcion con mas de un parametro");
function sum(a, b) {
    console.log(a + b)
}

//- Invocamos a la funcion
sum(5, 10)
sum(5) // Esta funcion no esta definida devuelve NaN, falta un parametro
sum()  // Esta funcion no esta definida devuelve NaN, faltan parametros



console.log();
console.log("Creamos la funcion con valores por defecto");
/// Por defecto
//- Es una forma de crear funciones , con valores por defecto si es que no les pasamos todos los parametros que requiere

function defaultSum(a = 0, b = 0) { // En la declaracion colocamos los valores por defecto
    console.log(a + b)
}

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)



/// return Retorno de valores
//- Cuando queremos que la funcion devuelva un valor, no solo imprimir

console.log();
console.log("Funcion que retorna la multiplicacion");
function mult(a, b) {
    return a * b
}
// Invocamos la funcion y el valor que devuelve lo asignamos a una variable
let result = mult(5, 10)
console.log(result)




/// Funciones anidadas
//- Declaramos e invocamos una funcion dentro de otra

console.log();
console.log("Funciones anidadas");
function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}
// Invocamos a la funcion externa que declara e invoca a la interna
extern()

//! intern() Error: fuera del scope  
//-Si invocamos a la funcion interna fuera de la funcion externa, entonces tenemos error ya que no la conoce



/// Funciones de orden superior
//- Son funciones que reciben otra funcion como argumento

console.log();
console.log("Funcion de orden superior");
function applyFunc(func, param) {
    func(param) // Aca se invoca a la funcion myFunc4 y se le pasa algun parametro para que sea ejecutada
}

//- Se le pasa la funcion pura
// Aca invoco a la funcion de orden superior con una funcion creada anteriormente como parametro
// Se le pasa como parametro solo el nombre de la funcion, y el dato separado 
applyFunc(myFunc4, "función de orden superior")




/// forEach
//- Entiendo que es una funcion de orden superior propia del lenguaje, recibe la declaracion de una funcion y la ejecuta
//-  foreach() Es una funcion propia de los elementos iterables, array, set ,map
//- Al foreach(callback) se le pasa como parametro un callback

console.log();
console.log("forEach() aplicado en un array");
myArray = [1, 2, 3, 4]


// Esto hace un for en cada elemento del array en el que declara una funcion anonima dentro y el foreach la ejecuta
myArray.forEach(function (value) {
    console.log(value)
})
// Como es  un callback

console.log("Con funcion flecha");
// Esto hace un for en cada elemento del array en el que declara una funcion flecha dentro y el foreach la ejecuta
myArray.forEach((value) => console.log(value))



console.log();
console.log("forEach() aplicado en un Set");
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

// Esto hace un for en cada elemento del Set en el que declara una funcion flecha dentro y el foreach la ejecuta
mySet.forEach((value) => console.log(value))




console.log();
console.log("forEach() aplicado en un Map");
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

// Esto hace un for en cada elemento del Map en el que declara una funcion anonima dentro y el foreach la ejecuta
myMap.forEach((value) => console.log(value))