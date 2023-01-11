let todasLasPalabras = [];
let opcion;
let buscar;
let index;
let todasLasPalabras2=[];
let palabra=prompt("Introduzca una palabra");
let palabraMasLarga=palabra;
let palabraMasCorta=palabra;
while (palabra != undefined){
    if (palabra!=undefined) {
        todasLasPalabras.push(palabra);
        if (palabraMasLarga.length <= palabra.length) {
            palabraMasLarga = palabra;
        }
        if (palabraMasCorta.length >= palabra.length) {
            palabraMasCorta = palabra;
        }
        palabra = prompt("Introduzca una palabra");
    }
}
while (opcion != 9) {
    opcion = prompt("1) Ver primera palabra insertada \n" +
        "2) Ver ultima palabra insertada \n" +
        "3) Ver todas las palabras\n" +
        "4) Ver la palabra mas larga\n" +
        "5) Ver la palabra mas corta\n" +
        "6) Ver el numero de palabras insertadas\n" +
        "7) Buscar una palabra\n" +
        "8) Borrar duplicados\n" +
        "9) Salir\n" +
        "Introduce opcion");
    opcion = parseInt(opcion);
    switch (opcion) {
        case 1:
            alert(todasLasPalabras[0]);
            break;
        case 2:
            alert(todasLasPalabras[todasLasPalabras.length-1]);
            break;
        case 3:
            alert(todasLasPalabras);
            break;
        case 4:
            alert(palabraMasLarga);
            break;
        case 5:
            alert(palabraMasCorta);
            break;
        case 6:
            alert("Numero de palabras insertadas: " + todasLasPalabras.length);
            break;
        case 7:
            buscar = prompt("Introduce palabra a buscar");
            if (todasLasPalabras.includes(buscar)) {
                alert("Palabra encontrada");
            } else {
                alert("Palabra no encontrada");
            }
            break;
        case 8:
            for (index=0;index<todasLasPalabras.length;index++) {
                if(!todasLasPalabras2.includes(todasLasPalabras[index])){
                    todasLasPalabras2.push(todasLasPalabras[index]);
                }
            }
            todasLasPalabras=todasLasPalabras2.slice();
            alert(todasLasPalabras);
            break;
            case 9:
                alert("ADIOS");
                break;
    }
}
