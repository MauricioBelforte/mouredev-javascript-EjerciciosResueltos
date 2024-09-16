/*
/ Clase 6 en vídeo | 15/08/2024
/ Clases (continuación) y manejo de errores
* https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/



//* 1. Crea una clase que reciba dos propiedades
console.log();
console.log("1. Crea una clase que reciba dos propiedades");
console.log();

class Participante {
    constructor(nombre, puntos = 1) {
        this.nombre = nombre
        this.puntos = puntos
    }
}

const unParticipante = new Participante("Maury", 3);
const otroParticipante = new Participante("Alan");

console.log("Vemos que hay en unParticipante:", unParticipante);
console.log("Vemos que hay en otroParticipante:", otroParticipante);

console.log();



//* 2. Añade un método a la clase que utilice las propiedades
console.log();
console.log("2. Añade un método a la clase que utilice las propiedades");
console.log();

console.log("Voy a crear una nueva clase para separar los ejercicios");
console.log();

class Participante2 {
    constructor(nombre, puntos = 1) {
        this.nombre = nombre
        this.puntos = puntos
    }

    sumarPunto() {
        this.puntos = this.puntos + 1
    }
}
console.log("Se creo el metodo de clase sumarPunto()");
console.log("Creamos los participantes");
const unParticipante2 = new Participante2("Maury", 3);
const otroParticipante2 = new Participante2("Alan");


//* 3. Muestra los valores de las propiedades e invoca a la función
console.log();
console.log("3. Muestra los valores de las propiedades e invoca a la función");
console.log();

console.log("Accedemos a las propiedades de unParticipante2");
console.log("El nombre de unParticipante2 es:", unParticipante2.nombre);
console.log("Los puntos que tiene unParticipante2 son:", unParticipante2.puntos);
console.log();

console.log("Accedemos a las propiedades de otroParticipante2");
console.log("El nombre de otroParticipante2 es:", otroParticipante2.nombre);
console.log("Los puntos que tiene otroParticipante2 son:", otroParticipante2.puntos);
console.log();


console.log("Invocamos a su funcion sumarPunto()");
console.log();


unParticipante2.sumarPunto();
otroParticipante2.sumarPunto();


console.log("Vemos que hay en unParticipante2:", unParticipante2);
console.log("Vemos que hay en otroParticipante2:", otroParticipante2);

console.log();




//* 4. Añade un método estático a la primera clase
console.log();
console.log("4. Añade un método estático a la primera clase");
console.log();


console.log("Voy a crear una nueva clase para separar los ejercicios");

class Participante3 {



    constructor(nombre, puntos = 1) {
        this.nombre = nombre
        this.puntos = puntos
    }

    sumarPunto() {
        this.puntos = this.puntos + 1
    }

    // Método estático
    //- Cree un metodo estatico para crear todos los participantes a partir de un arreglo que contenga nombres y puntos
    //- El metodo map aplica una funcion a cada uno de los elementos del arreglo y devuelve un arreglo con el resultado de esa funcion a cada uno de los elementos del arreglo
    static crearTodosLosParticipantes(unArregloConDatos) {
        return unArregloConDatos.map(cadaPersona => new Participante3(cadaPersona.nombre, cadaPersona.puntos))
    }


}


console.log();



//* 5. Haz uso del método estático
console.log();
console.log("5. Haz uso del método estático");
console.log();


let arregloConObjetosPersonas = [
    { nombre: "maury", puntos: 2 },
    { nombre: "alan" },
    { nombre: "ema", puntos: 3 },
]


console.log("Usamos el metodo estatico para crear todos los participantes");

//- Aca la clase Participante3 nos nos devuelve un arreglo con todos las instancias de la clase Participante3
let TodosLosParticipantes = Participante3.crearTodosLosParticipantes(arregloConObjetosPersonas);

console.log("Vemos que tiene el arreglo TodosLosParticipantes: ", TodosLosParticipantes);




console.log();




//* 6. Crea una clase que haga uso de herencia
console.log();
console.log("6. Crea una clase que haga uso de herencia");
console.log();


class Participante4 {



    constructor(nombre, puntos = 1) {
        this.nombre = nombre
        this.puntos = puntos
    }

    sumarPunto() {
        this.puntos = this.puntos + 1
    }

    // Método estático
    // Es un metodo que se invoca en el nombre de la clase, no en una instancia de esa clase
    //- Creé un metodo estatico para crear todos los participantes a partir de un arreglo que contenga nombres y puntos
    //- El metodo map aplica una funcion a cada uno de los elementos del arreglo y devuelve un arreglo con el resultado de esa funcion a cada uno de los elementos del arreglo
    static crearTodosLosParticipantes(unArregloConDatos) {
        return unArregloConDatos.map(cadaPersona => new Participante4(cadaPersona.nombre, cadaPersona.puntos))
    }

    mostrarInformacion() {
        return `Nombre:${this.nombre} Puntos: ${this.puntos}`
    }


}


class Solitario extends Participante4 {
    constructor(nombre, puntos) {
        super(nombre, puntos)
    }

}

class EquipoDe2 extends Participante4 {
    //- Cree un constructor que a su vez tiene participantes de la clase Solitario
    //- Es decir tienen nombre y puntos cada uno
    constructor(nombreEquipo, participante1, participante2, puntos) {
        super(nombreEquipo, puntos)
        this.participante1 = participante1
        this.participante2 = participante2
    }

    mostrarInformacion() {
        return `El Equipo ${this.nombre} tiene ${this.puntos} puntos`
    }

}


// Creando instancias de Solitario
const solitario1 = new Solitario("David", 12);
const solitario2 = new Solitario("Eva", 14);

// Creando una instancia de EquipoDe2
const equipo = new EquipoDe2("River Plate", solitario1, solitario2, 20);

console.log(equipo);

console.log(equipo.mostrarInformacion());
/* 

class Partida {

    cruce(primerNombre,segundoNombre){
        if(primerNombre)
    }

    gano(unNombre){
        return true
    }

}

class Partida_1vs1 extends Partida {
    constructor (primerNombre, segundoNombre){

    }
}

class Partida_2vs2 extends Partida {

    constructor (primerNombre, segundoNombre, tercerNombre, cuartoNombre){
        
    }
}
 */


console.log();




//* 7. Crea una clase que haga uso de getters y setters
console.log();
console.log("7. Crea una clase que haga uso de getters y setters");
console.log();

//Creo una clase nueva con atributos privados

console.log("Hacemos uso de getters y setters y creamos la clase nueva");
console.log();



class Vehiculo {
    tipo;
    modelo;
    ano;

    constructor(unTipo, unModelo, unAno) {
        this.tipo = unTipo;
        this.modelo = unModelo;
        this.ano = unAno;
    }

    get tipo() {
        return this.tipo;
    }


    get modelo() {
        return this.modelo;
    }

    get ano() {
        return this.ano;
    }

    set tipo(unTipo) {
        this.tipo = unTipo;
    }

    set modelo(unModelo) {
        this.modelo = unModelo;
    }

    set ano(unAno) {
        this.ano = unAno;
    }


}

console.log("Creamos una instancia de Vehiculo");

const unVehiculo2 = new Vehiculo("Camioneta", "Rangler", 2000);

console.log("Vemos que tiene esa instancia", unVehiculo2);


console.log();

console.log("El tipo del vehiculo es:", unVehiculo2.tipo);
console.log("El modelo del vehiculo es:", unVehiculo2.modelo);
console.log("El ano del vehiculo es:", unVehiculo2.ano);

console.log();





//* 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log();
console.log("8. Modifica la clase con getters y setters para que use propiedades privadas");
console.log();


class VehiculoPrivado {
    #tipo;
    #modelo;
    #ano;

    constructor(unTipo, unModelo, unAno) {
        this.#tipo = unTipo;
        this.#modelo = unModelo;
        this.#ano = unAno;
    }

    get tipo() {
        return this.#tipo;
    }


    get modelo() {
        return this.#modelo;
    }

    get ano() {
        return this.#ano;
    }

    set tipo(unTipo) {
        this.#tipo = unTipo;
    }

    set modelo(unModelo) {
        this.#modelo = unModelo;
    }

    set ano(unAno) {
        this.#ano = unAno;
    }


}

console.log("Creamos una instancia de Vehiculo");

const unVehiculo = new VehiculoPrivado("Auto", "Eco Sport", 97);

console.log("Vemos que tiene esa instancia de VehiculoPrivado", unVehiculo);

console.log("Como son todos los atributos privados no se pueden ver a simple vista");
console.log("Es necesario ver las propiedades con getters");
console.log();






//* 9. Utiliza los get y set y muestra sus valores
console.log();
console.log("9. Utiliza los get y set y muestra sus valores");
console.log();

console.log("Vemos las propiedades utilizando los getters");
console.log();

console.log("El tipo del vehiculo es:", unVehiculo.tipo);
console.log("El modelo del vehiculo es:", unVehiculo.modelo);
console.log("El ano del vehiculo es:", unVehiculo.ano);

console.log();

console.log("Cambiamos el tipo usando el setter");
unVehiculo.tipo = "Camioneta";
console.log("Vemos el tipo como quedo: ", unVehiculo.tipo);

console.log();




//* 10. Sobrescribe un método de una clase que utilice herencia
console.log();
console.log("10. Sobrescribe un método de una clase que utilice herencia");
console.log();


//- Voy a sobreescribir un metodo de la clase Participante5
//- Voy a colocar el metodo sumarPunto() en la clase EquipoDe2 para que sobreescriba el metodo de su superclase que tenia por defecto



class Participante5 {



    constructor(nombre, puntos = 1) {
        this.nombre = nombre
        this.puntos = puntos
    }

    sumarPunto() {
        this.puntos = this.puntos + 1
    }


    static crearTodosLosParticipantes(unArregloConDatos) {
        return unArregloConDatos.map(cadaPersona => new Participante4(cadaPersona.nombre, cadaPersona.puntos))
    }

    mostrarInformacion() {
        return `Nombre:${this.nombre} Puntos: ${this.puntos}`
    }


}


class SolitarioModificado extends Participante5 {
    constructor(nombre, puntos) {
        super(nombre, puntos)
    }

}

class EquipoDe2Modificado extends Participante5 {
    constructor(nombreEquipo, participante1, participante2, puntos) {
        super(nombreEquipo, puntos)
        this.participante1 = participante1
        this.participante2 = participante2
    }

    //-Aca piso la superclase
    sumarPunto() {
        this.puntos = this.participante1.puntos + this.participante2.puntos;

    }

    mostrarInformacion() {
        return `El Equipo ${this.nombre} tiene ${this.puntos} puntos`
    }

}


// Creando instancias de SolitarioModificado
const solitario3 = new SolitarioModificado("David", 12);
const solitario4 = new SolitarioModificado("Eva", 14);

// Creando una instancia de EquipoDe2Modificado
const equipo4 = new EquipoDe2Modificado("River Plate", solitario3, solitario4, 20);




console.log(equipo4);

console.log("Sumamos un punto en el equipo para ver como funciona el metodo sobreescrito sumarPunto()");
equipo4.sumarPunto();

console.log(equipo4.mostrarInformacion());
