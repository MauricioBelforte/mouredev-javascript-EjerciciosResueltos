/*
/ Clase 3 en vídeo | 24/07/2024
/ Condicionales, arrays y sets
* https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

/// Set
//- La principal diferencia entre set y array es que set no admite duplicados.
//- Por eso no se puede buscar por la posicion. Cada elemento es unico

/// Declaración
console.log();
console.log("Declaracion de Set");

let mySet = new Set()

console.log(mySet)

/// Inicialización
//-No olvidemos que los datos van entre corchetes

console.log();
console.log("Inicializamos un Set con valores");
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)



/// Métodos comunes
console.log();
console.log("Metodos comunes");


/// add y delete

/// add 
//- Agrega elementos al final del set
console.log();
console.log("add");
mySet.add("https://moure.dev")

console.log(mySet)

/// delete
//- Elimina el elemento que pasamos por parametro, es necesario indicar un valor, no la variable , no un idice
//- Ademas la funcion delete() devuelve un boolean si el elemento existe y puede ser eliminado

console.log();
console.log("delete");
mySet.delete("https://moure.dev") // 

console.log(mySet)

console.log();
console.log("Borramos con delete() otro elemento pero lo ponemos dentro del console.log(), para que devuelva un boolean");
console.log(mySet.delete("Brais")) // delete() ademas devuelve un boolean
console.log(mySet.delete(4))  // delete() ademas devuelve un boolean

console.log(mySet)



/// has
//- Para comprobar si existe el elemento, devuelve un boolean

console.log();
console.log("Verificamos si existen los elementos con has()");
console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))



/// size
//- Para comprobar la cantidad de elementos del set. Es como lenght pero para set

console.log();
console.log("Vamos a consultar cuantos elementos hay con la propiedad size");
console.log(mySet.size)


/// from
//- Convertir un set a array, usando la funcion from() que es propia de Array

console.log();
console.log("Convertimos un set en un array usando la funcion de Array from()");
let myArray = Array.from(mySet) 
console.log(myArray)



/// Set
//- Convertir un array a set, creo un set y le paso un array como argumento

console.log();
console.log("Convertimos el array en set, instanciando un nuevo set");
mySet = new Set(myArray) // Pasamos como argumento el array
console.log(mySet)



/// No admite duplicados
//- La principal propiedad de set es que no admite duplicados

console.log();
console.log("Vamos a agregar elementos repetidos para ver si se agregan");
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)