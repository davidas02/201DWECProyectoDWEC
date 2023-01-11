let entrada=prompt("Introduce una cadena");
let clave;

do {
    clave=prompt("Introduzca una clave(Numero entero)")
} while (isNaN(Number(clave)));
clave=parseInt(clave);
for (const letra of entrada) {
    let cifra=letra.charCodeAt(letra)+clave;
    document.write(String.fromCharCode(cifra));
}