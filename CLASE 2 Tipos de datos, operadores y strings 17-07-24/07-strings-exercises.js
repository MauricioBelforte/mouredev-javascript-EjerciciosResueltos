/*
/ Clase 2 en vídeo | 17/07/2024
/ Tipos de datos, operadores y strings
* https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

//* 1. Concatena dos cadenas de texto

    let nombre = "Mauricio"
    let apellido = " Belforte"
    console.log("Concatenacion de cadenas"); 
    console.log("Hola " + nombre + apellido); 


//* 2. Muestra la longitud de una cadena de texto

    console.log("Longitud del nombre"); 
    console.log(nombre.length);


//* 3. Muestra el primer y último carácter de un string

    console.log("Primer caracter");
    console.log(nombre[0]);  
    console.log("Ultimo caracter");
    console.log(nombre[nombre.length-1]);  


//* 4. Convierte a mayúsculas y minúsculas un string

    console.log();
    console.log("Convertimos a mayusculas");
    let nombreEnMayusculas = nombre.toUpperCase()
    console.log(nombreEnMayusculas);  
    console.log("Convertimos de mayusculas a minusculas");
    console.log(nombreEnMayusculas.toLowerCase());



//* 5. Crea una cadena de texto en varias líneas

    //- Utilizando Backticks alt+96  ` `

    let unaCadenaDeTexto = `Esto es un mensaje
    en varias lineas
    de texto`

    console.log(unaCadenaDeTexto); 


//* 6. Interpola el valor de una variable en un string
    //  Hay que utilizar template literals (plantillas literales)
    console.log();
    console.log("Utilizamos template literals para interpolar variables");
    console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido} ! ` );



//* 7. Reemplaza todos los espacios en blanco de un string por guiones

    let unString = "Esto es un mensaje en una linea de texto"
    console.log();
    console.log("Reemplazo los espacios en blanco por guiones");
    console.log(unString.replace(" ", "-"));
    console.log(unString.replace(" ", "-"));
    console.log(unString.replace(" ", "-"));
    console.log("Esto no funciona, ya que el replace devuelve otro string, pero no modifica el original");
    console.log();

    console.log("Primera forma de resolverlo");
    console.log(unString.replace(/\s+/g, '-'));

    /*  
        Explicacion  
    :   / y /: Las barras diagonales (/) delimitan el inicio y el final de la expresión regular.
        \s: El \s es un metacaracter que coincide con cualquier espacio en blanco. Esto incluye espacios, tabulaciones (\t), saltos de línea (\n), y otros caracteres de espacio en blanco.
        +: El signo + es un cuantificador que indica “uno o más” de lo que precede. En este caso, significa “uno o más espacios en blanco”.
        g: La g es una bandera (flag) que significa “global”. Esto indica que la búsqueda debe continuar a lo largo de todo el string, no solo detenerse en la primera coincidencia.
            
   */
    
    console.log("Segunda forma de resolverlo");  
    let stringSinGuiones = unString.split(' ');
    console.log(stringSinGuiones.join('-'));

    /*  
        Explicacion   
        split(' '):
        El método split divide el string en un array de subcadenas, utilizando el espacio en blanco ' ' como delimitador.
        Por ejemplo, "Reemplaza todos los espacios en blanco por guiones" se convierte en ["Reemplaza", "todos", "los", "espacios", "en", "blanco", "por", "guiones"].
        
        join('-'):
        El método join une todos los elementos del array en un solo string, utilizando el guion '-' como separador.
        El array ["Reemplaza", "todos", "los", "espacios", "en", "blanco", "por", "guiones"] se convierte en "Reemplaza-todos-los-espacios-en-blanco-por-guiones". 
    */


//* 8. Comprueba si una cadena de texto contiene una palabra concreta

    console.log();
    console.log("Comprobar si se encuentra una palabra concreta"); 
    console.log(unaCadenaDeTexto.includes("un"));
    console.log();
    console.log("Esta en la posicion: "); 
    console.log(unaCadenaDeTexto.indexOf("un"));

//* 9. Comprueba si dos strings son iguales
    console.log("Comprobamos si los strings son iguales");
    stringUno = "Esto es un string"
    stringDos = "Esto es un string"
    stringTres = "Esto es un string diferente"

    console.log(stringUno === stringDos); // Comparamos por valor y tipo
    console.log(stringUno===stringTres);


//* 10. Comprueba si dos strings tienen la misma longitud
    console.log();
    console.log("Comprobamos si los 2 strings tienen la misma longitud");
    console.log(stringUno.length === stringDos.length);
    console.log(stringUno.length === stringTres.length);