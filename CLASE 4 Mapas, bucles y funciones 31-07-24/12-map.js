/*
/ Clase 4 en vídeo | 31/07/2024
/ Mapas, bucles y funciones
* https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// Otra estructura de datos

/// Map
//- Es como un Diccionario. Es una coleccion de elementos pares relacionados clave-valor 
console.log("Map");


/// Declaración
console.log();
console.log("Declaracion de una estructura de tipo Map");
let myMap = new Map()

console.log(myMap)

/// Inicialiación
//- Se coloca doble corchetes, uno para todo el conjunto y otro para cada cada par clave valor

console.log();
console.log("Inicializacion");
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)



/// Métodos y propiedades

console.log();
console.log("Metodos y propiedades");


/// set
//- set() Sirve para actualizar el elemento o agregarlo
// No puede haber clave repetida, si la clave no existe agrega un valor, si la clave existe actualiza el valor
console.log();
console.log("Metodo set() Para actualizar el elemento o eliminarlo ");

console.log("Agrego un alias");
myMap.set("alias", "mouredev")

console.log("Pero si uso una misma clave se modifica el valor");
myMap.set("name", "Brais Moure")

console.log(myMap)



/// get
//- get() Sirve para obtener el valor
console.log();
console.log("Metodo get() Sirve para obtener el valor");
console.log(myMap.get("name"))
// Si no encuentra la clave devuelve undefined
console.log(myMap.get("surname"))



/// has
//- has() Para ver si existe, devuelve un boolean si es que lo contiene
console.log();
console.log("Metodo has() Para ver si existe, devuelve un boolean si es que lo contiene");
console.log(myMap.has("surname"))
console.log(myMap.has("age"))



/// delete
//- delete() Para eliminar un elemento unico 
console.log();
console.log("Metodo delete() Para eliminar un elemento unico");
myMap.delete("email")

console.log(myMap)



/// Propiedades
/// keys
console.log();
console.log("Propiedades");

console.log();
console.log("keys() Devuelve solo las claves");
console.log(myMap.keys())

/// values
console.log();
console.log("values() Devuelve los valores");
console.log(myMap.values())

/// entries
console.log();
console.log("entries() Devuelve todas las claves y valores, pero no en pares sino en un listado");
console.log(myMap.entries())


/// size
console.log();
console.log("size Devuelve el tamaño del Map");
console.log(myMap.size)



/// clear
//- clear() Para limpiar todo el Map , es decir eliminar todo
console.log();
console.log("clear() Para limpiar todo el Map , es decir eliminar todo");
myMap.clear()

console.log(myMap)


