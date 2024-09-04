/*
/ Clase 5 en vídeo | 07/08/2024
/ Objetos, desestructuración, propagación y clases
* https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/
console.log("Traemos un array y un objeto");
console.log();

let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

console.log("Obtenemos de a un dato de myArray");
let myValue = myArray[1]
console.log(myValue)

console.log("Obtenemos de a un dato del objeto person");
let myName = person.name
console.log(myName)

/// Desestructuración
//- Sirve para extraer valores y asignaros a variables de manera concisa
//- Rapidamente con una variable obtener varios valores

console.log();
console.log("Desestructuracion de arrays");
console.log();


/// Sintaxis arrays
console.log("Sintaxis de arrays");
console.log();

console.log("Vemos que tiene myArray: ", myArray);

//- Aca desestructuramos myArray, y obtenemos cada uno de sus valores
//- Se desestructura con corchetes []
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
//- Como se puede ver los nombres de las variables que creamos pueden tener cualquier nombre ya que es un array con valores. En los objetos no es igual

console.log("Vemos que se cargo en cada una de las variables myValue que creamos");
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4) //Aca este devuelve undefined porque no hay ningun dato

console.log();



/// Sintaxis arrays con valores predeterminados
console.log("\nSintaxis de arrays con valores por defecto\n");

console.log("Vemos nuevamente que tiene el myArray: ", myArray);

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log("Al predefinir los valores en cero, si no existe valor en la desestructuracion, se lo asigna")
console.log("Vemos que se cargo en cada una de las variables que creamos");
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9) // Este se cargo con 0
console.log("Podemos ver que el ultimo elemento que era undefined paso a ser 0");

console.log();


/// Ignorar elementos array
console.log("\nIgnorar elementos del array\n");
console.log("Desestructuramos solo los elementos que necesitamos");

let [myValue10, , , myValue13] = myArray
//- Se ignoran los espacios que estan entre las comas, es decir dejando un espacio vacio donde iria un elemento

console.log("Vemos que se ignoraron 2 elementos de myArray:", myArray);

console.log(myValue10)
console.log(myValue13)

console.log();



/// Desestructuracion de objetos
console.log();
console.log("Desestructuracion de objetos");

/// Sintaxis objects
console.log();
console.log("\nSintaxis de objetos\n");

console.log("Vemos que tenemos en el objeto person: ", person);
//- Se desestructura con llaves {}
let { nombre, age, alias } = person
//- En los objetos se suele desestructurar con el mismo nombre que tenian las propiedades del objeto
//- Sin embargo, si colocamos cualquier nombre a las variables que creamos, va por orden de desestructuracion

console.log("Vemos que se cargo en cada una de las variables que creamos");
console.log(nombre)
console.log(age)
console.log(alias)

console.log();



/// Sintaxis objects con valores predeterminados
console.log();
console.log("Sintaxis de objetos con valores predeterminados");
console.log();

console.log("Vemos que tenemos en el objeto person: ", person);

let { name2, age2, alias2, email = "email@email.com" } = person
console.log("Vemos que se cargo en cada una de las variables que creamos");
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(alias2)  // No existe
console.log(email)
//- Se cargo solo el email 
console.log("Vemos que se cargo solo el email ");

console.log();



/// Sintaxis objects con nuevos nombres de variables
console.log();
console.log("Sintaxis de objetos con nuevos nombres de variables");
console.log();

console.log("Vemos que tenemos en el objeto person: ", person);
//- De esta forma desestructuramos por el nombre de la propiedad del objeto pero las renombramos como nos guste despues de los dos puntos :
let { alias: alias3, name: name3, age: age3 } = person


console.log("Vemos que se cargo en cada una de las variables que creamos");
console.log(name3)
console.log(age3)
console.log(alias3)
//-Podemos ver que desestructura y busca automaticamente los mismos nombres de las propiedades de person y las variables que creamos
//-Lo vemos porque se cambio el orden y sin embargo las asigna bien
console.log("Se desestructuro bien a pesar de tener otro orden");
console.log();



/// Objects anidados
console.log();
console.log("Objetos anidados");
console.log();

console.log("Traemos el objeto person3");
let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

console.log("Vemos que tenemos en person3: ", person3);
console.log();

console.log("Desestructuramos el objeto anidado");
let { name: name4, job: { name: jobName } } = person3
//- Desestructuramos por el nombre de la propiedad original name y job
//- Y doble llaves para desestructurar dentro de una propiedad
//- Para renombrar usamos los : y escribimos el nombre que le vamos a asignar

console.log("Le pedimos el name del objeto: ", name4)
console.log("Le pedimos el name del job del objeto: ", jobName)

console.log();


/// Copia de arrays
//- Usamos una copia de myArray por ejemplo
console.log("Vemos que tiene myArray: ", myArray);
console.log();

console.log("Copiamos en myArray3 el arreglo ...myArray ");
let myArray3 = [...myArray]
console.log();
console.log("Vemos que tiene myArray3: ", myArray3);
console.log("Se creo una copia");

console.log();



/// Propagación (...)
/// Operador de propagacion ...

console.log("\nPropagacion\n");


/// Sintaxis arrays
//- Se prpaga usando puntos suspensivos ...

//- Es decir se copia y ademas agrega mas valores
let myArray2 = [...myArray, 5, 6]
console.log("Vemos que tiene myArray: ", myArray);

console.log("Propagamos myArray en myArray2 usando una copia de myArray mas 5 y 6");

console.log("Vemos como quedo myArray2: ", myArray2);


console.log();






/// Combinación de arrays

console.log("\nCombinacion de arrays\n");
console.log("Vemos que tiene myArray: ", myArray);
console.log("Vemos que tiene myArray2: ", myArray2);
console.log("Vemos que tiene myArray3: ", myArray3);
console.log();

console.log("Combinamos o propagamos los 3 arrays en myArray4");
let myArray4 = [...myArray, ...myArray2, ...myArray3]

console.log("Vemos como quedo myArray4");
console.log(myArray4)

console.log();




/// Sintaxis objects


console.log("Propagamos objetos");

console.log("Vemos que tiene el objeto person: ", person);
let person4 = { ...person, email: "braismoure@mouredev.com" }
console.log("Combinamos o propagamos el objeto person, y agregamos el email como extra ");

console.log("Vemos como quedo person4");
console.log(person4)
console.log();




/// Copia de objects
console.log("Copia de objetos");

console.log("Vemos que tiene el objeto person: ", person);
let person5 = { ...person }


console.log("\nCopiamos un nuevo objeto person5 a partir del objeto ...person \n");
console.log(person5)