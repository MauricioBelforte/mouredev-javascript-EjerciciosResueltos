/*
/ Clase 5 en vídeo | 07/08/2024
/ Objetos, desestructuración, propagación y clases
* https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/



//* 1. Usa desestructuración para extraer los dos primeros elementos de un array
console.log();
console.log("1. Usa desestructuración para extraer los dos primeros elementos de un array");
console.log();


let arreglo = ["perro", "gato", "pajaro", "pez", "oso"];
console.log("Vemos que contiene el arreglo : ", arreglo);

//- La desestructuracion de un array se hace con corchetes [ ]
[unPerro, unGato] = arreglo

console.log();
console.log("Imprimimos a ver que tiene el primer elemento: ", unPerro);
console.log("Imprimimos a ver que tiene el segundo elemento: ", unGato);



//* 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log();
console.log("2. Usa desestructuración en un array y asigna un valor predeterminado a una variable");
console.log();

console.log("Vemos que contiene el arreglo : ", arreglo);
console.log("Longitud del arreglo : ", arreglo.length);

//- El ultimo valor del elefante no estaba en el arreglo original
[unPerro, unGato = "gatito", unPajaro, unPez, unOso, unElefante = "elefante"] = arreglo


console.log();
console.log("Imprimimos a ver que tiene el primer elemento: ", unPerro);
console.log("Imprimimos a ver que tiene el segundo elemento: ", unGato);
// No se asigna gatito a la variable unGato
console.log("Imprimimos a ver que tiene el tercer elemento: ", unPajaro);
console.log("Imprimimos a ver que tiene el cuarto elemento: ", unPez);
console.log("Imprimimos a ver que tiene el quinto elemento: ", unOso);
//- Este ultimo elemento se carga con el valor predeterminado
console.log("Imprimimos a ver que tiene el sexto elemento: ", unElefante);

console.log();



//* 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log();
console.log("3. Usa desestructuración para extraer dos propiedades de un objeto");
console.log();


let persona = {

    nombre: "Mauri",
    apellido: "Belfort",
    puntos: 12
}

//- La desestructuracion de un objeto se hace con llaves { }
//- Busca asignar el mismo nombre que tiene la propiedad del objeto y se lo asigna a nuestra variable con ese nombre

//- Le cambio el orden 
let { apellido, puntos, nombre } = persona;

console.log("Vemos que contiene el objeto persona : ", persona);

//- Vamos a ver si se guardan correctamente
console.log("Imprimimos a ver que tiene la variable apellido : ", apellido);
console.log("Imprimimos a ver que tiene la variable puntos : ", puntos);
console.log("Imprimimos a ver que tiene la variable nombre : ", nombre);

console.log();



//* 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
console.log();
console.log("4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes");
console.log();

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

console.log("Vemos que contiene el objeto person : ", person);

//- Renombramos con los dos puntos :
let { age: edad, alias: apodo } = person
console.log("Imprimimos a ver que tiene la variable edad : ", edad);
console.log("Imprimimos a ver que tiene la variable apodo : ", apodo);

console.log();




//* 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log();
console.log("5. Usa desestructuración para extraer dos propiedades de un objeto anidado");
console.log();

let vestimenta = {
    estilo: "Formal",
    zapatos: {
        talle: 37,
        color: "Negro"
    },
    buzo: {
        genero: "Femenino",
        talle: "XL",
        color: "Negro"
    },
    remera: {
        genero: "Femenino",
        talle: "XL",
        color: "Negro"
    },
    pantalon: {
        genero: "Femenino",
        talle: "L",
        color: "Azul"
    },
    cambiarZapatos: function () {
        this.zapatos.color = "Marron",
            this.zapatos.talle = 36
    }


}
console.log("Vemos que contiene el objeto vestimenta : ", vestimenta);
console.log();

//-Desestructuramos 2 objetos anidados y renombramos con dos puntos :
let { remera: { color: colorRemera }, zapatos: { talle: talleZapatos } } = vestimenta

console.log("Imprimimos la propiedad color del objeto anidado remera vestimenta.remera.color : ", vestimenta.remera.color);
console.log("Imprimimos la propiedad talle del objeto anidado zapato vestimenta.zapatos.talle : ", vestimenta.zapatos.talle);
console.log();


console.log("Imprimimos a ver que tiene la variable colorRemera : ", colorRemera);
console.log("Imprimimos a ver que tiene la variable talleZapatos : ", talleZapatos);

console.log();




//* 6. Usa propagación para combinar dos arrays en uno nuevo
console.log();
console.log("6. Usa propagación para combinar dos arrays en uno nuevo");
console.log();

console.log("Vemos que contiene el arreglo1 : ", arreglo);
console.log("Longitud del arreglo1 : ", arreglo.length);

let arreglo2 = [2, "gato", 6, "perro", 9, 4]

console.log("Vemos que contiene el arreglo2 : ", arreglo2);
console.log("Longitud del arreglo2 : ", arreglo2.length);

console.log("Usamos propagacion para combinar ambos");

//- Es como copiar ambos arreglos en uno solo
const otroArreglo = [...arreglo, ...arreglo2];

console.log("Vemos que contiene el nuevo otroArreglo : ", otroArreglo);
console.log("Longitud del otroArreglo combinado : ", otroArreglo.length);

console.log();




//* 7. Usa propagación para crear una copia de un array
console.log();
console.log("7. Usa propagación para crear una copia de un array");
console.log();

console.log("Vemos que contiene el arreglo1 : ", arreglo);
console.log("Longitud del arreglo1 : ", arreglo.length);

let arregloCopiado = [...arreglo]

console.log("Vemos que contiene el arregloCopiado : ", arregloCopiado);
console.log("Longitud del arregloCopiado : ", arregloCopiado.length);

console.log();





//* 8. Usa propagación para combinar dos objetos en uno nuevo
console.log();
console.log("8. Usa propagación para combinar dos objetos en uno nuevo");
console.log();

console.log("Vemos que contiene el objeto vestimenta : ", vestimenta);
console.log();
console.log("Vemos que contiene el objeto persona : ", persona);
console.log();

console.log("Combinamos usando propagacion en objetos");

const objetoCombinado = { ...persona, ...vestimenta }


console.log("Vemos como quedo el objeto objetoCombinado : ", objetoCombinado);

console.log();





//* 9. Usa propagación para crear una copia de un objeto
console.log();
console.log("9. Usa propagación para crear una copia de un objeto");
console.log();


console.log("Vemos que contiene el objeto persona : ", persona);
console.log();

console.log("Creamos una copia del objeto persona usando el operador de propagacion ...");

const objetoCopiado = { ...persona }
console.log("Vemos como quedo el objetoCopiado : ", objetoCopiado);
console.log();





//* 10. Combina desestructuración y propagación
console.log();
console.log("10. Combina desestructuración y propagación");
console.log();



console.log("Lo hacemos en objetos, primer ejemplo. Se logro combinar los 2 objetos y cambiar el orden");

const persona2 = {
    nombre2: 'Juan',
    edad2: 28,
    ocupacion: 'Desarrollador',
    apodo: 'Lio'
};

const direccion = {
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
    codigoPostal: '1000'
};

console.log("Vemos que contiene el objeto persona2 : ", persona2);
console.log();

console.log("Vemos que contiene el objeto direccion : ", direccion);
console.log();



// Combinando los objetos y desestructurando propiedades
//-Este ejemplo es interesante ya que en la desestructuracion esta llevandose el resto de variables en objetos restoPersona y restoDireccion, ademas de las variables
const { nombre2, edad2, ...restoPersona } = persona2;
const { ciudad, ...restoDireccion } = direccion;


console.log("Vamos a ver que hay en el objeto restoPersona", restoPersona);
console.log("Vamos a ver que hay en el objeto restoDireccion", restoDireccion);
console.log();


//- Para crear a la personaCompleta copiamos los 2 arreglos restoPersona y restoDireccion, y copiamos algunas variables que sacamos de la desestructuracion
//- Agregamos 3 variables nombreCompleto edad2 y ciudad
//  Los : para renombrar de este lado funciona alreves
//- Usando propagacion una de las copias se va a llamar nombreCompleto pero se lo asigno desde nombre2 que la saque de la desestructuracion
const personaCompleta = { ...restoPersona, ...restoDireccion, nombreCompleto: nombre2, edad2, ciudad };

console.log("Combinamos desestructuracion y propagacion");
console.log("Vemos que contiene el objeto personaCompleta : ", personaCompleta);

console.log();




console.log();
console.log("Otro ejemplo con objetos. Se logro desestructurar un objeto y del lado izquierdo asignarlo a una copia usando el operador propagacion");

const persona3 = {
    nombre: 'Juan',
    edad: 28,
    ocupacion: 'Desarrollador'
};

const direccion3 = {
    ciudad: 'Buenos Aires',
    pais: 'Argentina',
    codigoPostal: '1000'
};



console.log("Vemos que contiene el objeto persona3 : ", persona3);
console.log();

console.log("Vemos que contiene el objeto direccion3 : ", direccion3);
console.log();

console.log("Combinando los objetos");

// Combinando los objetos y desestructurando propiedades
//- Copio persona3 y direccion3 a personaCompleta3
const personaCompleta3 = { ...persona3, ...direccion3 };
console.log("Vemos que contiene el objeto personaCompleta3 : ", personaCompleta3);

console.log("Desestructurando propiedades");

/// Esta es la parte mas interesante ya que en la desestructuracion de la personaCompleta3 se logro colocar todas las variables usando propagacion en un objeto resto3
//- Aca renombro el nombre y la ciudad porque ya las habia desestructurado en otro objeto y eran del tipo const y no las podia modificar
//- Y como es necesario para desestructurar objetos llamarlas con el mismo nombre entonces como salia undefined tuve que renombrarlas
const { nombre: nombre3, ciudad: ciudad3, ...resto3 } = personaCompleta3;

console.log();

console.log(nombre3); // Juan
console.log(ciudad3); // Buenos Aires
console.log();


console.log("Aca estamos imprimiendo un nuevo objeto resto3");
console.log(resto3);  // { edad: 28, ocupacion: 'Desarrollador', pais: 'Argentina', codigoPostal: '1000' }





console.log();




console.log();

console.log("Vamos a combinar Desestructuracion y Propagacion en arreglos");
console.log();

console.log("Vemos que contiene el arreglo : ", arreglo);
console.log("Longitud del arreglo : ", arreglo.length);
console.log();



console.log("Usando propagacion y desestructuracion en los arreglos");
console.log();

//- Desestructuramos el arreglo, nos quedamos con el primer y segundo elemento y el resto lo guardamos en un nuevo arreglo usando el operador de propagacion
let [primerElemento, segundoElemento, ...restoDelArreglo] = arreglo

console.log("Vemos que contiene el restoDelArreglo : ", restoDelArreglo);
console.log("Longitud del restoDelArreglo : ", restoDelArreglo.length);
console.log();

console.log("Vemos que contiene el primerElemento : ", primerElemento);
console.log("Vemos que contiene el segundoElemento : ", segundoElemento);

console.log();

