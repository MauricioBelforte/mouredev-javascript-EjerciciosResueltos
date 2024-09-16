/*
/ Clase 5 en vídeo | 07/08/2024
/ Objetos, desestructuración, propagación y clases
* https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/


/// Clases
//- Es un objeto complejo, sirve para crear plantillas de objetos
//- Para mi es un generador de objetos de un tipo definido anteriormente
// Se usa Upper CamelCase como los componentes de react

class Person {

    // Se suele llamar por convencion el mismo nombre del parametro que la propiedad del objeto
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

console.log();

/// Sintaxis
console.log("Creamos dos objetos a partir de la misma clase");
console.log();

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")


console.log("Vemos que tiene el objeto person : ", person)
console.log();

console.log("Vemos que tiene el objeto person2 : ", person2)

console.log();
console.log("Vemos de que tipo es person");
console.log(typeof person)

console.log();


/// Valores por defecto

console.log();


console.log("Creamos la clase DefaultPerson con valores por defecto");
console.log();

class DefaultPerson {
    //- Agregamos valores por defecto al constructor, en los parametros, por si queremos crear objetos new con algunos argumentos o ninguno
    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}


console.log("Creamos una instancia de la clase DefaultPerson y le pasamos solo 2 argumentos");
let person3 = new DefaultPerson("Brais", 37)

console.log(person3)

console.log();





/// Acceso a propiedades

console.log("Accesoa propiedades");
console.log();
console.log("Accedemos al alias de person3 de esta manera person3.alias");
console.log(person3.alias)
console.log();

console.log("Accedemos al alias de person3 de otra manera person3['alias']");
console.log(person3["alias"])
console.log();


person3.alias = "MoureDev"

console.log("Asignamos un valor a person3.alias='Mouredev' ");
console.log(person3.alias)

console.log();



/// Funciones en clases

console.log();
console.log("Funciones de clases, para mi metodos de la clase");
console.log();


class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

console.log("Creamos una instancia de la clase PersonWithMethod ");
let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
console.log();

console.log("Llamamos al metodo de la clase walk");
person4.walk()

console.log();



/// Propiedades privadas
//- Se colocan con # delante de la variable
//- Solo la clase tiene visibilidad de esa propiedad

console.log();
console.log("Propiedades privadas #");
console.log();


class PrivatePerson {
    //-Es necesario definirla de antemano, en cambio las otras solo las creamos como this.
    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    pay() {
        this.#bank
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log("Creamos una instancia de la clase PrivatePerson y vemos si existe #bank ");
console.log(person5)
console.log();

console.log("Vemos si podemos imprimir person5.bank");
console.log(person5.bank)
// No podemos acceder
console.log();



person5.bank = "new IBAN123456789" // bank no es #bank
console.log("Asignamos un valor a la propiedad bank a ver si la modifica ");
console.log();

console.log("Vemos que hay en el objeto person5: ", person5)
console.log("Si bien se agrego un valor a bank no es la propiedad privada #bank");


console.log();



/// Getters y Setters
console.log();
console.log("Obtenemos y establecemos los valores con get y set");
console.log();

console.log("Creamos una clase GetSetPerson con todas sus propiedades privadas usando #");
console.log();

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    /* Esto es para probar si se modifico la propiedad privada con set bank   
      get bank() {
          return this.#bank
      }
    */

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log("Creamos una instancia de GetSetPerson y vemos que tiene");
console.log(person6)
console.log();

console.log("Consultamos el valor del name con person6.name");
console.log(person6.name)
//- El get si nos permite poder acceder con el punto a la variable privada



person6.bank = "new IBAN123456789"
// console.log(person6.bank); // Para probar esta linea hay que tocar la propiedad get bank que esta comentada

console.log();




/*
/ Clase 6 en vídeo | 15/08/2024
/ Clases (continuación) y manejo de errores
* https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

console.log();

cconsole.log("Clase 6");
console.log();


/// Herencia
//- Para pasar propiedades y comportamiento a los hijos
console.log("Herencia");
console.log();

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

//- Dog hereda de Animal
class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    //- super() Invoca al contructor de su superclase con el metodo super(name) y se pasa name como argumento al constructor de la super clase Animal
    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}


//- Para crear una instancia de Dog es necesario pasar un argumento para name
//- La clase Dog no tiene contructor, la hereda de la clase Animal que tiene un constructor que recibe un parametro name
console.log("Creamos una instancia de Dog");
console.log();

let myDog = new Dog("MoureDog")
console.log("La instancia de myDog invoca a su metodo run() que esta implementado en su clase Dog");
myDog.run()

console.log("La instancia de myDog invoca a su metodo sound() que esta implementado en su clase Dog");
myDog.sound()


console.log();


console.log();
console.log("Creamos una instancia de Fish");
console.log();

//- Para crear una instancia de Fish es necesario pasar dos argumentos, para name y para size
//- La clase Fish tiene un constructor que recibe 2 parametros, name y size
//- Ademas dentro del constructor de Fish se invoca a la suberclase Animal que tiene un constructor que recibe un parametro name
let myFish = new Fish("MoureFish", 10)


console.log("La instancia de myFish invoca a su metodo swim() que esta implementado en su clase Fish");
myFish.swim()


console.log("La instancia de myFish invoca a su metodo sound() pero no esta implementado en su clase Fish sino que la busca en su superclase Animal ");
myFish.sound()

console.log();





/// Métodos estáticos
//- 
console.log();
console.log("Metodos estaticos");
console.log();


class MathOperations {
    //- static establece que el metodo es propio de la clase
    //- Es decir no hace falta instanciar un objeto de la clase, sino que se invoca al metodo directamente en la clase 

    static sum(a, b) {
        return a + b
    }
}

//- Aca podemos ver que el metodo sum se invoca directamente en la clase MathOperations
console.log("Invocamos al metodo de clase sum(a,b) de la clase MathOperations");
console.log(MathOperations.sum(5, 10))