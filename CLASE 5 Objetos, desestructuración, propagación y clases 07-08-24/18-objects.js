/*
/ Clase 5 en vídeo | 07/08/2024
/ Objetos, desestructuración, propagación y clases
* https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

/// Objetos
//- Es una coleccion de datos relacionados o de propiedades relacionadas
//- Es simiar al Map , clave - valor
console.log();
console.log("Objetos");
console.log();


/// Sintaxis
//- Lo instanciamos asi 
let person = {

    name: "Brais",
    age: 37,
    alias: "MoureDev"
}
console.log("Imprimimos el objeto");
console.log('person: ', person);
console.log();



/// Acceso a propiedades
console.log("Acceso a las propiedades: tenemos 2 formas");

/// Notación punto
console.log();
console.log("Imprimo el atributo name con notacion punto: person.name");
console.log(person.name)




/// Notación de corchetes
console.log();
console.log('Imprimo el atributo name con notacion corchetes: person["name"]');
console.log(person["name"])

console.log();



/// Modificación de propiedades
console.log();
console.log("Modificacion de propiedades");
console.log();

console.log("Modificamos person.name reasignandole un nombre");
person.name = "Brais Moure"
console.log(person.name)

console.log();
console.log("Le pedimos el tipo de dato a person.age con typeof");
console.log(typeof person.age)

console.log();
console.log("Modificamos person.age para modificar la edad pero con un tipo de dato string");
person.age = "37"
console.log(person.age)

console.log();
console.log("Le pedimos el nuevo tipo de dato a person.age");
console.log(typeof person.age)
console.log();




/// Eliminación de propiedades
console.log();
console.log("Eliminacion de propiedades");
console.log();

console.log("Eliminamos el atributo person.age con delete");
delete person.age

console.log("Objeto person: ", person)
console.log();



/// Nueva propiedad
console.log();
console.log("Nueva Propiedad");
console.log();
console.log("Agregamos una propiedad nueva person.email");
person.email = "braismoure@mouredev.com"
person["age"] = 37 // Volvemos a colocar age en 37 numerico

console.log("Objeto person:", person)
console.log();



/// Métodos (funciones)
console.log();
console.log("Metodos (funciones)");
console.log();

let person2 = {

    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {     //Aca agregamos como propiedad una funcion anonima pero se asigna a la variable walk
        console.log("La persona camina.")
    }
}
console.log('Creo un nuevo objeto person2: ', person2);
console.log();

console.log("Invoco a la funcion con person2.walk()");
person2.walk()

console.log();


/// Anidación de objetos
console.log();
console.log("Anidacion de objetos");
console.log();

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {      // Colocamos un objeto nuevo como propiedad 
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

console.log('Creamos un nuevo objeto person3 con un objeto nuevo job dentro como propiedad: ', person3)

console.log();
console.log("Imprimimos su atributo person3.name");
console.log(person3.name)

console.log();
console.log("Imprimimos su atributo person3.job que es el nuevo objeto completo");
console.log(person3.job)

console.log();
console.log("Imprimimos el atributo person3.job.name que es el nombre que esta dentro del nuevo objeto");
console.log(person3.job.name)

console.log();
console.log("Invocamos a la funcion del objeto nuevo person3.job.work()");
person3.job.work()


console.log();



/// Igualdad de objetos
console.log();
console.log("Igualdad de objetos");
console.log();
let person4 = {
    name: "Brais Moure",
    alias: "MoureDev",
    email: "braismoure@mouredev.com",
    age: 37
}
console.log("Creamos 2 objetos person y person4 con las mismas propiedades");

console.log("Objeto person: ", person)

console.log("Objeto person4:", person4)

console.log();
console.log("Consultamos person == person4 ?");
console.log(person == person4)
console.log();
console.log("Consultamos person === person4 ?");
console.log(person === person4)
//- Por lo tanto estamos comparando 2 objetos por referencia, por eso dan falso
//- Se esta comparando la direccion de memoria de cada objeto por eso dan falso

console.log();
console.log("Ahora comparamos el valor dentro de cada objeto person.name == person4.name ?");
console.log(person.name == person4.name)


console.log();



/// Iteración
console.log();
console.log("Como se itera un objeto?");
console.log();


console.log("Recorremos el objeto con for in");
console.log();
for (let key in person4) {
    console.log(key + ": " + person4[key]) // key es el atributo y person4[key] es el valor
}


console.log();


/// Funciones como objetos
//- Esto es similar a crear una clase
console.log();
console.log("Funciones como objetos");
console.log();


//-Esto seria el constructor, una funcion constructura
function Person(name, age) { //! Una funcion constructura debería ser convertida en una clase por eso salen los puntitos
    this.name = name
    this.age = age
} //- Esta sintaxis no es la conveniente

//-Creamos una instancia de Person
let person5 = new Person("Brais", 37)

console.log("Vemos si se cargo person5, si se creo una instancia");
console.log(person5)
console.log();


console.log("Vemos el tipo de dato de person5");
console.log(typeof person5)
console.log("Vemos el tipo de dato de person4 para compara si es igual a person5");
console.log(typeof person4)
console.log();

console.log("Imprimimos el nombre person5.name");
console.log(person5.name)



/// Cantidad de propiedades

//- Para obtener la cantidad de propiedades que tiene un objeto, se puede usar el método Object.keys() 
//- que devuelve un array con las claves (nombres de las propiedades) del objeto. Luego, se puede usar la propiedad length de ese array para obtener la cantidad de elementos



const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020
};

const cantidadDePropiedades = Object.keys(coche).length;
console.log(cantidadDePropiedades); // Salida: 3