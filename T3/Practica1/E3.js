let usuarioCorrecto = false;
var minuscula= false;
var numero = false;
var caracter;
var caracter2;
var mayuscula, caracterespecial = false;
var minusculas = "abcdefghijklmnñopqrstuvwxyz";
var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numeros="0123456789";
do {
    var usuario = prompt("Introduzca el nombre de usuario: (Minusculas y numeros)");
    if (usuario == null) {
        alert("Se ha cancelado el juego");
        break;
    } else {
        for (let index = 0; index < usuario.length; index++) {
            caracter = usuario.charAt(index);
            if (minusculas.includes(caracter)) {
                minuscula=true;
            }
            if(numeros.includes(caracter)){
                numero=true;
            }
        }
    }
    if (!minuscula || !numero) {
        alert("ERROR [a-z0-9]");
    }
} while (!minuscula || !numero);
do {
    var contrasena = prompt("Introduce la contraseña: ");
    if (contrasena == null) {
        alert("Se ha cancelado el juego");
        break;
    } else {
        minuscula=false;
        numero=false; 
        mayuscula=false;  
        caracterespecial=false;
        for (let index2 = 0; index2 < contrasena.length; index2++) {
            caracter2 = contrasena.charAt(index2);
            if (minusculas.includes(caracter2)) {
                minuscula=true;
            }
            if(numeros.includes(caracter2)){
                numero=true;
            }
            if (mayusculas.includes(caracter2)) {
                mayuscula=true;
            }
            if (minusculas.includes(caracter2)==false && mayusculas.includes(caracter2)==false && numeros.includes(caracter2)==false) {
                caracterespecial=true;
            }
        }   
    }
    if (!minuscula || !mayuscula || !numero || !caracterespecial || contrasena.length!=8) {
        alert("ERROR [A-Za-z0-9[*]]");
    }
} while (!minuscula || !mayuscula || !numero || !caracterespecial || contrasena.length!=8 );