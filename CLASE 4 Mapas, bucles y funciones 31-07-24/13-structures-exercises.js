/*
/ Clase 4 en vídeo | 31/07/2024
/ Mapas, bucles y funciones
* https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/


//* 1. Crea un array que almacene cinco animales
console.log();
console.log("1. Crea un array que almacene cinco animales");

let arreglo = ["perro", "gato", "pajaro", "pez", "oso"];
console.log(arreglo);



//* 2. Añade dos más. Uno al principio y otro al final
console.log();
console.log("2. Añade dos más. Uno al principio y otro al final");

console.log();
console.log("Añado al final con push('zorro')");
arreglo.push("zorro");
console.log('arreglo: ', arreglo);

console.log();
console.log("Añado al comienzo con unshift('gallina')");
arreglo.unshift("gallina");
console.log('arreglo: ', arreglo);




//* 3. Elimina el que se encuentra en tercera posición
console.log();
console.log("3. Elimina el que se encuentra en tercera posición");

arreglo.splice(2, 1) // Elimina el que esta en la posicion 3 ya que cuenta el primero como cero, el segundo parametro indica cuantos eliminar
console.log('arreglo: ', arreglo);


//* 4. Crea un set que almacene cinco libros
console.log();
console.log("4. Crea un set que almacene cinco libros");

// El set no admite repetidos y se colocan todos entre corchetes [ ]
let unSet = new Set(["El principito", "Don Quijote de la Mancha", "Matar a un ruiseñor", "Orgullo y prejuicio", "El gran Gatsby"])
console.log('unSet: ', unSet);



//* 5. Añade dos más. Uno de ellos repetido
console.log();
console.log("5. Añade dos más. Uno de ellos repetido");

unSet.add("En busca del tiempo perdido")
console.log('unSet: ', unSet);

console.log("Agrego otro repetido");
unSet.add("El principito")
console.log('unSet: ', unSet); // No lo agrega



//* 6. Elimina uno concreto a tu elección
console.log();
console.log("6. Elimina uno concreto a tu elección");

unSet.delete("Orgullo y prejuicio") // Es necesario indicar el valor para que lo busque y lo elimine
console.log('unSet: ', unSet);


//* 7. Crea un mapa que asocie el número del mes a su nombre
console.log();
console.log("7. Crea un mapa que asocie el número del mes a su nombre");

let unMap = new Map([["1", "Enero"], ["2", "Febrero"], ["3", "Marzo"], ["4", "Abril"], ["5", "Mayo"], ["6", "Junio"], ["7", "Julio"], ["8", "Agosto"], ["9", "Septiembre"], ["10", "Octubre"], ["11", "Noviembre"], ["12", "Diciembre"]])
console.log('unMap: ', unMap);




//* 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log();
console.log("8. Comprueba si el mes número 5 existe en el map e imprime su valor");

console.log();
console.log("Preguntamos si existe la clave usando has() , devuelve un booleano si existe la clave");
console.log(unMap.has("5"));


console.log();
console.log("Ya sabemos que existe entonces obtenemos el dato usando un get() buscando por la clave ");
console.log(unMap.get("5")); //get(llave) devuelve el valor



//* 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log();
console.log("9. Añade al mapa una clave con un array que almacene los meses de verano");

let mesesVerano = ["Diciembre", "Enero", "Febrero", "Marzo"]
console.log("Para agregar un par uso set,con clave y valor");
unMap.set("Verano", mesesVerano)
console.log('unMap: ', unMap);


//* 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log();
console.log("10. Crea un Array, transfórmalo a un Set y almacénalo en un Map");
console.log();

console.log("Creo un arreglo");
ropaArray = ["pantalon", "remera", "buzo", "campera", "zapatos", "vestido"]

console.log('ropaArray: ', ropaArray);

console.log();
console.log("Se crea un Set y se pasa el array como argumento");
let ropaSet = new Set(ropaArray)

console.log('ropaSet: ', ropaSet);

console.log();
// No entiendo bien la consigna pero voy a almacenar todo el ropaSet en una llave
console.log("Se almacena el Set dentro de un map con llave ropa");

let ropaMap = new Map([["ropa", ropaSet]]) // Doble corchetes aunque haya un solo elemento 
console.log('ropaMap: ', ropaMap);

