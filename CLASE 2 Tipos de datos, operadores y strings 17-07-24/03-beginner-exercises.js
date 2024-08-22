/*
/ Clase 2 en vídeo | 17/07/2024
/ Tipos de datos, operadores y strings
* https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

//* 1. Escribe un comentario en una línea
    // Este es un comentario en una línea


//* 2. Escribe un comentario en varias líneas
    /* Este es un comentario
    en varias líneas de 
    código */


//* 3. Declara variables con valores asociados a todos los datos de tipo primitivos
    
    /// Hay 7 tipos de datos primitivos

    /// 1- Cadenas de texto (strings) Tres formas de escribirlas
    let nombre = 'Mauricio'
    let alias = "Maury"
    let email = `mauri@gmail.com` // Backticks alt+96

    /// 2- Numeros (number)
    let edad = 35  // Entero
    let altura = 1.75  // Decimal

    /// 3- Booleanos (boolean)
    let esEstudiante = true
    let esProfesor = false

    // Los que vienen no son tan comunes en todos los lenguajes

    /// 4- Undefined
    let variableNoDefinida  // Javascript le asigna un tipo de dato undefined, en algun momento le pondremos algun valor
    console.log(variableNoDefinida)

    /// 5- Null
    let valorNulo = null   // Aca le asignamos un valor tipo nulo , aca quizas queremos indicar que no hay valor intencionalmente, como decir en este momento no tiene valor

    /// 6- Symbol 
    let miSimbolo = Symbol("unSimbolo")

    /// 7- BigInt         // Un numero extremadamente grande
        // Primera forma
        let miEnteroGrande = BigInt(65465428642684268246842684235324387687680581141808)
        // Segunda forma
        let miEnteroGrande2 = 468463546846824682468246841684286418248412864182468141n


   

//* 4. Imprime por consola el valor de todas las variables
    console.log(nombre);
    console.log(alias);
    console.log(email);
    console.log(edad);
    console.log(altura);
    console.log(esEstudiante);
    console.log(esProfesor);
    console.log(variableNoDefinida);
    console.log(valorNulo);
    console.log(miSimbolo);
    console.log(miEnteroGrande);
    console.log(miEnteroGrande2);


//* 5. Imprime por consola el tipo de todas las variables

    console.log(typeof nombre);
    console.log(typeof alias);
    console.log(typeof email);
    console.log(typeof edad);
    console.log(typeof altura);
    console.log(typeof esEstudiante);
    console.log(typeof esProfesor);
    console.log(typeof variableNoDefinida);
    console.log(typeof valorNulo);
    console.log(typeof miSimbolo);
    console.log(typeof miEnteroGrande);  
    console.log(typeof miEnteroGrande2);


//* 6. A continuación, modifica los valores de las variables por otros del mismo tipo

       
       nombre = 'Alan'
       alias = "Cat"
       email = `alan@gmail.com` // Backticks alt+96
  
       edad = 36  
       altura = 1.76 
   
      
       esEstudiante = false
       esProfesor = true
   

   
       // 4- Undefined
       variableNoDefinida  // No le puedo cambiar el tipo si es una variable no definida?
   
       // 5- Null
       valorNulo = null   // Null tambien es unica
   
       // 6- Symbol 
       miSimbolo = Symbol("otroSimbolo")
   
       // 7- BigInt         // Un numero extremadamente grande
           // Primera forma
           miEnteroGrande = BigInt(4686854684684684623345234246546843216841326843214)
           // Segunda forma
           miEnteroGrande2 = 684231681681684526451698412551861891563846841534198416541984165n
   


//* 7. A continuación, modifica los valores de las variables por otros de distinto tipo

        nombre = 55
        alias = true
        email = 41.2 // Backticks alt+96

        edad = "Alan"  
        altura = "Rarmon" 


        esEstudiante = 'Cambie el tipo a string'
        esProfesor = `Puse un string`



        // 4- Undefined
        variableNoDefinida = "Le voy a definir un dato a la variable no definida"  // No le puedo cambiar el tipo si es una variable no definida?

        // 5- Null
        valorNulo = 88   // Null tambien es unica

        // 6- Symbol 
        miSimbolo = 'No es  un simbolo'

        // 7- BigInt         // Un numero extremadamente grande
            // Primera forma
            miEnteroGrande = "Es un string"
            // Segunda forma
            miEnteroGrande2 = 'No es tan grande'



//* 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
   
const nombreConstante = "Mauricio Belforte" 
    const aliasConstante = 'Maurybelfort'
    const emailConstante = 'belymauricio@gmail.com'
    const edadConstante = 36
    const alturaConstante = 1.76
    const esEstudianteConstante = true
    const esProfesorConstante = false 
    // const variableNoDefinidaConstante 
    // En JavaScript, cuando se declara una constante con const, hay que asignarle un valor inmediatamente. Sino obtendremos un error de sintaxis. 
    const valorNuloConstante = null
    const miSimboloConstante = Symbol("unSimboloConstante")
    const miEnteroGrandeConstante = BigInt(46843242684684268426847686824681468426842612)
    const miEnteroGrande2Constante = 8642846846284863484264684568468426845684684568456845n



//* 9. A continuación, modifica los valores de las constantes
//* 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse


/*  
/ Esto se debe a que las constantes no pueden ser reasignadas una vez que se les ha asignado un valor inicial. Si necesitas una variable cuyo valor pueda cambiar, deberías usar let en lugar de const.
    nombreConstante = "Mauricio Gonzales" 
    aliasConstante = 'MauryGonzales'
    emailConstante = 'Gonzamauricio@gmail.com'
    edadConstante = 37
    alturaConstante = 1.78
    esEstudianteConstante = false
    esProfesorConstante = true 
    variableNoDefinidaConstante = 85
    valorNuloConstante = 65
    miSimboloConstante = Symbol("otro")
    miEnteroGrande2Constante = 98429842998429498498429842984298984298n
    miEnteroGrandeConstante = BigInt(4914684296842684268426842684684627462426846246426)

  */