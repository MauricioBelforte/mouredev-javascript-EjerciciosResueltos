/*
/ Clase 5 en vídeo | 07/08/2024
/ Objetos, desestructuración, propagación y clases
* https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/



//* 1. Crea un objeto con 3 propiedades
console.log();
console.log("1. Crea un objeto con 3 propiedades");
console.log();

let persona = {

    nombre: "Mauri",
    apellido: "Belfort",
    puntos: 12
}

console.log('Objeto persona: ', persona);

console.log();



//* 2. Accede y muestra su valor
console.log();
console.log("2. Accede y muestra su valor");
console.log();

console.log('Nombre de la persona: ', persona.nombre);
console.log('Apelliod de la persona: ', persona.apellido);
console.log('Puntos de la persona: ', persona.puntos);

console.log();



//* 3. Agrega una nueva propiedad
console.log();
console.log("3. Agrega una nueva propiedad");
console.log();

persona.edad = 34;

console.log('Edad de la persona: ', persona.edad);

console.log();



//* 4. Elimina una de las 3 primeras propiedades
console.log();
console.log("4. Elimina una de las 3 primeras propiedades");
console.log();

console.log("Eliminamos con delete el apellido");

delete persona.apellido


console.log("\nVemos como quedo el objeto\n");

console.log('Objeto persona: ', persona);


console.log();



//* 5. Agrega una función e invócala
console.log();
console.log("5. Agrega una función e invócala");
console.log();

persona.sumarPunto = function () {
    this.puntos = this.puntos + 1;   // También se puede usar this.puntos += 1
}

console.log("Funcion que suma un punto");
persona.sumarPunto();

console.log();
console.log('Como quedo el objeto persona: ', persona);
// Segun copilot que sumarPunto() quede guardada dentro del objeto como una funcion anonima no interfiere en ningun aspecto


console.log();





//* 6. Itera las propiedades del objeto
console.log();
console.log("6. Itera las propiedades del objeto");
console.log();

console.log("Se puede usar un for in para iterar un objeto");
console.log("Imprimimos cada una de las propiedades de persona");
console.log();

//- Vamos recorriendo el objeto persona por cada una de sus propiedades o atributos que se llaman key
//- Uso una notacion template literals (o template strings) con comillas francesas ` ` y dentro uso interpolacion de variables ${ }

for (const key in persona) {

    console.log(`${key}: ${persona[key]}`);

}

console.log();


//* 7. Crea un objeto anidado
console.log();
console.log("7. Crea un objeto anidado");
console.log();

console.log("Voy a crear un nuevo objeto pero ahora como una declaracion, no lo voy a agregar");

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

console.log();
console.log('Vemos como esta compuesto el objeto vestimenta: ', vestimenta);
console.log();

console.log("Tiene un objeto dentro de otro, y de paso vamos a cambiarle los zapatos con la funcion");

vestimenta.cambiarZapatos()

console.log();
console.log('Vemos como quedo compuesto el objeto vestimenta: ', vestimenta);
console.log();






//* 8. Accede y muestra el valor de las propiedades anidadas
console.log();
console.log("8. Accede y muestra el valor de las propiedades anidadas");
console.log();

console.log("Vemos que hay dentro de zapatos, buzo y pantalon");

console.log("Zapatos:", vestimenta.zapatos);
console.log("Buzo:", vestimenta.buzo);
console.log("Remera:", vestimenta.remera);
console.log("Pantalon:", vestimenta.pantalon);

console.log();

console.log("Y vemos que hay por ejemplo dentro de zapatos");
console.log("talle:", vestimenta.zapatos.talle);
console.log("color:", vestimenta.zapatos.color);

console.log();




//* 9. Comprueba si los dos objetos creados son iguales
console.log();
console.log("9. Comprueba si los dos objetos creados son iguales");
console.log();

console.log("Son iguales persona y vestimenta?");
//- Igualdad Debil: == realiza conversión de tipos antes de comparar.
//- Igualdad Estricta: === no realiza conversión de tipos y solo devuelve true si los valores y tipos son exactamente iguales.

console.log(persona == vestimenta);
console.log(persona === vestimenta);


console.log();




//* 10. Comprueba si dos propiedades diferentes son iguales
console.log();
console.log("10. Comprueba si dos propiedades diferentes son iguales");
console.log();


console.log("Compruebo si la propiedad de vestimenta remera es igual a buzo");

console.log(vestimenta.zapatos == vestimenta.pantalon);

console.log();
console.log("Compruebo si el talle de la remera es igual al del buzo ");
console.log(vestimenta.buzo.talle === vestimenta.remera.talle);