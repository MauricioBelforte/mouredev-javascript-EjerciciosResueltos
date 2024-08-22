/*
/ Clase 3 en vídeo | 24/07/2024
/ Condicionales, arrays y sets
* https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

/// if/else/else if/ternaria


//* 1. Imprime por consola tu nombre si una variable toma su valor
    console.log();    
    console.log("Imprime el nombre si la variable toma su valor");
    let nombre = "Mauricio"
    
    if(nombre== "Mauricio"){
        console.log(nombre);
    }


//* 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
    let usuario = "Mauricio"
    let contraseña = "Belforte"
    console.log();
    console.log("Imprime un mensaje si el usuario y contraseña coinciden con los establecidos");
    
    if(usuario=="Mauricio" && contraseña=="Belforte"){
        console.log("Usuario y contraseña correctos");

    }else
        console.log("Usuario y contraseña incorrectos");


//* 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    console.log();
    console.log("Verificamos si el numero es positivo, negativo o es cero");
    let numero = 0

    if(numero>0){
        console.log("El numero es positivo");
    }else if(numero<0){
        console.log("El numero es negativo");
    }else
        console.log("El numero es cero");


//* 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
    let edad = 10
    console.log();
    console.log("Verificamos si la persona es mayor de edad, mayor que 18 años");

    if(edad>=18){
        console.log("Es mayor de edad, puede votar");
    }else {
        console.log("Es menor de edad,no puede votar, le faltan: " + (18-edad) + " años");
    }


//* 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//*    dependiendo de la edad 
    
    console.log();
    console.log(`Usamos el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad `);

    // Operador ternario // Retorna lo que cumple la condicion
    let adultoOrMenor
    (edad>=18) ? adultoOrMenor = "adulto" : adultoOrMenor = "menor";
    console.log("La persona es: " + adultoOrMenor);


    console.log("Lo resolvemos de otra manera resumida");
    let adultoOrMenor2 = (edad>=18) ? "adulto" : "menor"
    console.log("La persona es: " + adultoOrMenor2);



//* 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
  
    console.log();
    console.log("Muestra en que estación del año nos encontramos dependiendo del valor de una variable mes, con else if");

    let mes = "Agosto"; // Cambiar el valor para probar diferentes meses
    let dia = 15; // Cambiar el valor para probar diferentes días
    
    if (mes === "Enero") {
        console.log("Verano");
    } else if (mes === "Febrero") {
        console.log("Verano");
    } else if (mes === "Marzo") {
        if (dia < 21) {
            console.log("Verano");
        } else {
            console.log("Otoño");
        }
    } else if (mes === "Abril") {
        console.log("Otoño");
    } else if (mes === "Mayo") {
        console.log("Otoño");
    } else if (mes === "Junio") {
        if (dia < 21) {
            console.log("Otoño");
        } else {
            console.log("Invierno");
        }
    } else if (mes === "Julio") {
        console.log("Invierno");
    } else if (mes === "Agosto") {
        console.log("Invierno");
    } else if (mes === "Septiembre") {
        if (dia < 21) {
            console.log("Invierno");
        } else {
            console.log("Primavera");
        }
    } else if (mes === "Octubre") {
        console.log("Primavera");
    } else if (mes === "Noviembre") {
        console.log("Primavera");
    } else if (mes === "Diciembre") {
        if (dia < 21) {
            console.log("Primavera");
        } else {
            console.log("Verano");
        }
    } else {
        console.log("Mes no válido");
    }
    

//* 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

    console.log();
    console.log("Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior");

    if (mes === "Enero") {
        console.log(mes + " tiene 31 días");
    } else if (mes === "Febrero") {
        console.log(mes + " tiene 28 o 29 días si es año bisiesto");
    } else if (mes === "Marzo") {
        console.log(mes + " tiene 31 días");
    } else if (mes === "Abril") {
        console.log(mes + " tiene 30 días");
    } else if (mes === "Mayo") {
        console.log(mes + " tiene 31 días");
    } else if (mes === "Junio") {
        console.log(mes + " tiene 30 días");
    } else if (mes === "Julio") {
        console.log(mes + " tiene 31 días");
    } else if (mes === "Agosto") {
        console.log(mes + " tiene 31 días");
    } else if (mes === "Septiembre") {
        console.log(mes + " tiene 30 días");
    } else if (mes === "Octubre") {
        console.log(mes + " tiene 31 días");
    } else if (mes === "Noviembre") {
        console.log(mes + " tiene 30 días");
    } else if (mes === "Diciembre") {
        console.log(mes + " tiene 31 días");
    } else {
        console.log("Mes no válido");
    }
    

/// switch




//* 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
    console.log();
    console.log("Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma");

   let idioma = "Italiano";

    switch (idioma) {
        case "Español":
            console.log("Este es un mensaje en " + idioma);
            break;
        case "English":
            console.log("This is a message in " + idioma);
            break;
        case "Français":
            console.log("Ceci est un message en " + idioma);
            break;
        case "Italiano":
            console.log("Questo è un messaggio in " + idioma);
            break;
        case "Русский":
            console.log("Это сообщение на " + idioma);
            break;
        default:
            console.log("Idioma no soportado");
    }

//* 9. Usa un switch para hacer de nuevo el ejercicio 6

    console.log();
    console.log("La estacion del año en la que nos encontramos dependiendo del valor de una variable mes, pero usando mes como un numero, y ademas usando switch");
    let estacion
    mes = 2
    switch (mes) {
        case 0:
            estacion = "Verano"
            break;
        case 1:
            estacion = "Verano"
            break;
        case 2:
            estacion = "Verano/Otoño"
            break;
        case 3:
            estacion = "Otoño"
            break;
        case 4:
            estacion = "Otoño"
            break;
        case 5:
            estacion = "Otoño/Invierno"
            break;
        case 6:
            estacion = "Invierno"
            break;
        case 7:
            estacion = "Invierno"
            break;
        case 8:
            estacion = "Invierno/Primavera"
            break;
        case 9:
            estacion = "Primavera"
            break;
        case 10:
            estacion = "Primavera"
            break;
        case 11:
            estacion = "Primavera/Verano"
            break;

        default:
            estacion = "Mes ingresado incorrecto"
            break;
    }

    console.log("La estacion del año es: " + estacion);

    //Segunda opcion mejorada

    console.log();
    console.log("La estacion del año en la que nos encontramos dependiendo del valor de una variable mes, utilizando strings, y ademas usando switch");

    mes = "Marzo";
    switch (mes) {
        case "Enero":
            estacion = "Verano";
            break;
        case "Febrero":
            estacion = "Verano";
            break;
        case "Marzo":
            estacion = "Verano/Otoño";
            break;
        case "Abril":
            estacion = "Otoño";
            break;
        case "Mayo":
            estacion = "Otoño/Invierno";
            break;
        case "Junio":
            estacion = "Invierno";
            break;
        case "Julio":
            estacion = "Invierno";
            break;
        case "Agosto":
            estacion = "Invierno/Primavera";
            break;
        case "Septiembre":
            estacion = "Primavera";
            break;
        case "Octubre":
            estacion = "Primavera";
            break;
        case "Noviembre":
            estacion = "Primavera/Verano";
            break;
        case "Diciembre":
            estacion = "Verano";
            break;
        default:
            estacion = "Mes ingresado incorrecto";
            break;
    }

    console.log("La estacion del año es: " + estacion);

    // Tercera opcion agregando una variable dia y agrupando los casos repetidos
    console.log();
    console.log("En esta opcion agregamos una variable dia y agrupamos los casos repetidos, y ademas usando switch");
    mes = "Diciembre";
    dia = 25; // Elegimos una fecha

    switch (mes) {
        case "Enero":
        case "Febrero":
            estacion = "Verano";
            break;
        case "Marzo":
            if (dia <= 20) {
                estacion = "Verano";
            } else {
                estacion = "Otoño";
            }
            break;
        case "Abril":
        case "Mayo":
            estacion = "Otoño";
            break;
        case "Junio":
            if (dia <= 20) {
                estacion = "Otoño";
            } else {
                estacion = "Invierno";
            }
            break;
        case "Julio":
            estacion = "Invierno";
            break;
        case "Agosto":
            if (dia <= 20) {
                estacion = "Invierno";
            } else {
                estacion = "Primavera";
            }
            break;
        case "Septiembre":
        case "Octubre":
            estacion = "Primavera";
            break;
        case "Noviembre":
            if (dia <= 20) {
                estacion = "Primavera";
            } else {
                estacion = "Verano";
            }
            break;
        case "Diciembre":
            if (dia <= 20) {
                estacion = "Primavera";
            } else {
                estacion = "Verano";
            }
            break;
        default:
            estacion = "Mes ingresado incorrecto";
            break;
    }

    console.log(`En el dia ${dia} de ${mes} , la estación es ${estacion}.`);


//* 10. Usa un switch para hacer de nuevo el ejercicio 7
    console.log();
    console.log("Muestra el número de días que tiene un mes dependiendo de la variable mes pero usando switch");


    switch (mes) {
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            console.log(mes + " tiene 31 días");
            break;
        case "Febrero":
            console.log(mes + " tiene 28 o 29 días si es año bisiesto");
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            console.log(mes + " tiene 30 días");
            break;
        default:
            console.log("Mes no válido");
    }
