/*
/ Clase 2 en vídeo | 17/07/2024
/ Tipos de datos, operadores y strings
* https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/


// * 1. Crea una variable para cada operación aritmética 

    /// Operadores aritméticos

    let suma = 4+5
    let resta = 8-3
    let multiplicacion = 5*4
    let division = 150/36

    let modulo = 54%5
    let exponente = 2**5
    
    console.log();
    console.log("Valores de Operadores aritmeticos")
    console.log(suma)
    console.log(resta)
    console.log(multiplicacion)
    console.log(division)
    console.log(modulo)
    console.log(exponente)

//* 2. Crea una variable para cada tipo de operación de asignación,
//*    que haga uso de las variables utilizadas para las operaciones aritméticas

    let asignacionSimple
    let sumaAsignacion = 0
    let restaAsignacion = 0
    let multiplicacionAsignacion = 1
    let divisionAsignacion = 1
    let moduloAsignacion = 5
    let exponenteAsignacion = 2

    // Un detalle que acabo de notar es que si bien se llaman operadores de asignacion no son lo mismo que una asignación.
    // Por ejemplo, si yo no inicializo las variables, le estoy sumando algo a una variable no definida, por lo que me da como resultado NaN
    
    /// Operadores de asignación
    
    asignacionSimple = 5
    sumaAsignacion += suma
    restaAsignacion -= resta
     
    multiplicacionAsignacion *= multiplicacion
    divisionAsignacion /= division
    moduloAsignacion %= modulo
    exponenteAsignacion **= exponente
     
    console.log();
    console.log("Valores de Operadores de asignacion")
    console.log(asignacionSimple)
    console.log(sumaAsignacion)
    console.log(restaAsignacion)
    console.log(multiplicacionAsignacion)
    console.log(divisionAsignacion)
    console.log(moduloAsignacion)
    console.log(exponenteAsignacion)
    
    
//* 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

    /// Operadores de comparacíon

    console.log();
    console.log("Valores de Operadores de comparacion")
    console.log(10>5); // Mayor que
    console.log(5<8); // Menor que
    console.log(9>=9); // Mayor igual que
    
    console.log(5 != 2); // Distinto que
    console.log(5==5);  // Igualdad por valor
    console.log(5=="5") // JavaScrip considera que el numero 5 es igual al string 5


//* 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log(5<4);
    console.log(5==="5"); // Igualdad valor y tipo es decir identidad
    console.log(1==false);
    console.log(1>2); // Mayor que
    console.log(0<="Hola")



//* 5. Utiliza el operador lógico and
    console.log();
    //Las 2 expresiones tienen que ser verdaderas para que sea verdadero
    console.log("Operador logico and");  
    console.log(5>4 && 10<12); 
    console.log(5<4 && 10<12); 
    console.log(5>4 && 10>12); 


//* 6. Utiliza el operador lógico or
    console.log(); 
    // Con que una de las 2 expresiones sea verdadera es verdadero
    console.log("Operador logico or"); 
    console.log(3<6 || 6==6); 
    console.log(3>6 || 6==6); 
    console.log(3>6 || 6<6); 

//* 7. Combina ambos operadores lógicos
    console.log();
    console.log("Combinamos ambos operadores");
    console.log(5>9 && 910<3 || 40>9); 


//* 8. Añade alguna negación
    console.log(); 
    console.log("Negacion");
    console.log(!true);
    console.log(!0);
    console.log(! 3>6);     // Aca me niega el numero 3
    console.log(! (3>6));    // Aca niega la comparacion


//* 9. Utiliza el operador ternario
    console.log(); 
    console.log("Operador ternario");
    console.log( 30>5 ? true: false); 
    console.log( (30>5) ? true: false); 

    const estaLloviendo = true

    estaLloviendo ? console.log("Esta lloviendo"): console.log("No esta lloviendo"); ; 



//* 10. Combina operadores aritméticos, de comparáción y lógicas

    console.log(); 
    console.log("Combinacion de operadores aritmeticos de comparacion y logicos"); 
    console.log( (3+5) > (5-1) ); 
    console.log( ((3+5) > (5-1)) && (100 != 50 ) ); 
    console.log( ((3+5) > (5-1)) && (100 != 50 ) || (200>=90) ); 

    console.log( (3+5) < (5-1) ); 
    console.log( ((3+5) < (5-1)) && (100 != 50 ) ); 
    console.log( ((3+5) < (5-1)) && (100 != 50 ) || (200>=90) ); 