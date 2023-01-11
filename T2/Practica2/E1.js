document.write("<ol>")
var nR = parseInt(Math.random() * 100) + 1;
var nI
var contInt = 0;
do {
    
    nI = prompt("Introduce un numero(1-100)");
    if (nI==null) {
        document.write("<li>")
        document.write("Juego terminado: NO <br/>")
        document.write("Numero de intentos: "+contInt+"<br/>")
        document.write("Numero acertado: NO <br/>")
        document.write("</li>")
        alert("El juego ha finalizado")
        break;
    }
    nI=parseInt(nI)
    if (isNaN(nI)) {
        alert("ERROR. Solo se admiten caracteres numericos");

    } else {
        if (nI == nR) {
            if (confirm("Enhorabuena,Has ganado ¿Volvemos?")) {
                document.write("<li>")
                document.write("Juego terminado: SI"+"<br/>")
                document.write("Numero de intentos: "+contInt+"<br/>")
                document.write("Numero acertado: SI <br/>")
                document.write("</li>")
                contInt = 0;
                nR = parseInt(Math.random() * 100) + 1;
            } else {
                nI = 0;
            }
        } else {
            if (nI < nR) {
                alert("El numero buscado es mayor que " + nI);
            } else {
                alert("El numero buscado es menor que " + nI);
            }
            contInt++;
        }
        if (contInt == 5) {
            if (confirm("Has perdido, No quedan mas intentos ¿Volvemos?")) {
                document.write("<li>")
                    document.write("Juego terminado: SI <br/>")
                    document.write("Numero de intentos: "+contInt+"<br/>")
                    document.write("Numero acertado: NO <br/>")
                    alert("El numero era "+nR)
                    document.write("</li>")
                contInt = 0;
                nR = parseInt(Math.random() * 100) + 1;
            } else {
                nI=0
                break;
            }
        }
    }
    
} while (nI != nR & contInt <= 5);
document.write("<ol>")