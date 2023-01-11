var entrada
var suma=0
var noNum=" "
do {
    entrada=prompt("Introduce un numero");
    if (Number(entrada)) {
        suma+=parseInt(entrada);
    } else {
        if (entrada!=undefined) {
            noNum=noNum+entrada
        }         
    }
} while (entrada!=undefined);
document.write(suma+`<br/>`+noNum)