var palabra;
var cadena=prompt("Introduce frase").split(" ");

for (let index in cadena) {
    palabra = cadena[index];
    primeraLetra=palabra.charAt(0);
    primeraLetraM=primeraLetra.toUpperCase();
    let palabraC=palabra.slice(1,palabra.length);
    palabra=primeraLetraM.concat(palabraC);
    document.write(palabra+" ");
}