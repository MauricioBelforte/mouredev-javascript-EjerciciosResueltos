/*
/ Clase 3 en vídeo | 24/07/2024
/ Condicionales, arrays y sets
* https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

/// Set

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
console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)



/// has
//- Para comprobar si existe el elemento, devuelve un boolean

console.log();
console.log("Verificamos si existen los elementos con has()");
console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))



/// size
//- 

console.log();
console.log("");
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)



/// Convertir un array a set
//-
mySet = new Set(myArray)
console.log(mySet)



/// No admite duplicados
//-

console.log();
console.log("");
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)