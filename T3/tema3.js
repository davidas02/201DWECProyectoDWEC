/*var cadena = "Buenos días!! Que tal estáis?";
console.log(cadena);
console.log("La longitud de la cadena es = " + cadena.length +" y su último caracter es = "+cadena[(cadena.length)-1]);
//la longitud de la cadena es desde 0. Osea, uno menos que el length.
console.log("La longitud de la cadena es = " + cadena.length +" y su último caracter es = "+cadena[12]);
var a ="ana";
var b = "Juan";
//A continuación el resultado de comparar si cadena a es mayor en base a su valor que cadena b.
//Las minúsculas tienen mayor valor que las mayúsculas y la z tiene mayor valor que la a.
console.log(a<b);
//localeCompare() método de string's
console.log(a.localeCompare(b));
//devuelve -1 si b>a, 0 si a=b, 1 si a>b.
/**Este método no tiene en cuenta las mayúsculas, por lo tanto, lo ordena alfabéticamente.
 * Según los navegadores puede devolver (ejemplo) -2 en lugar de -1,o 2 en vez de 1; así qué
 * es mejor al usarlo en comparaciones el buscar valores mayores o menores que 0.
 */
/*console.log("Resultado de comparar cadena b con cadena a. Ha de devolver 1, pues la J de Juan tiene\n"
+" un valor menor que la a de ana. Resultado evaluación ="+b.localeCompare(a));
console.log("Resultado de comparar cadena b con cadena b. Ha de devolver 0, pues estamos\n"
+" comparando la misma cadena. Resultado evaluación ="+b.localeCompare(b));
console.log("Resultado de comparar cadena a con cadena b. Ha de devolver -1, pues la a de ana tiene\n"
+" un valor menor que la J de Juan. Resultado evaluación ="+a.localeCompare(b));
//si queremos forzar que coja una configuración distinta a la local, hay que añadirle un segundo parámetro
//especificando el lenguaje deseado.
console.log(a.localeCompare(b,"en"));
//charAt x[2] ==x.charAt(2). Arrojan el mismo resultado, pero el primero se recomienda solo para arrays.
console.log(`La cadena ${cadena} en su posición 5 tiene el siguiente caracter = `+cadena.charAt(5));
//charCodeAt
console.log(`La cadena ${cadena} en su posición 5 tiene el  caracter = ${cadena.charAt(5)} con valor unicode = `+cadena.charCodeAt(5));
//convertir mayúsculas y minúsculas
console.log(`La cadena ${cadena} convertida a mayúsculas con el método toLocaleUpperCase() sería = `+cadena.toLocaleUpperCase());
console.log(`La cadena ${cadena} convertida a minúsculas con el método toLocaleLowerCase() sería = `+cadena.toLocaleLowerCase());
console.log(`La cadena ${cadena} convertida a mayúsculas con el método toUpperCase() sería = `+cadena.toUpperCase());
console.log(`La cadena ${cadena} convertida a minúsculas con el método toLowerCase() sería = `+cadena.toLowerCase());
//métodos de búsqueda de caracteres. Devuelve la primera aparición del carácter pasado como parámetro.
console.log(`La primera letra 's' de la cadena ${cadena} aparece en la posición = `+cadena.indexOf("s"));
//se le puede pasar un segundo parámetro para indicarle a partir de que posición ha de buscar.
console.log(`Estamos buscando el carácter 's' dentro de ${cadena} a partir de la posición 6 y se encuentra en posición = `+cadena.indexOf("s",6));
console.log(`Última aparición de la letra 's' dentro de ${cadena} en la posición = `+cadena.lastIndexOf("s"));
//si se le pasa un parámetro que no encuentra, devuelve un -1.
console.log(`Estamos buscando la primera aparicion de la letra 'x' dentro de ${cadena}, al no existir ninguna, el valor devuelto será =`+cadena.indexOf("x"));
console.log(`Estamos buscando la última aparicion de la letra 'x' dentro de ${cadena}, al no existir ninguna, el valor devuelto será =`+cadena.lastIndexOf("x"));
//En lastIndexOf , si se le lpasa un segundo parámetro, este será hasta el tope que se puede buscar.
console.log(`Última aparición del carácter 's' a partir de la posicion 10 de la cadena ${cadena} = `+cadena.lastIndexOf("s",10));
//el siguiente devuelve false porque la cadena no acaba en "tal"
console.log(`Con endsWith buscamos si la cadena ${cadena} termina con la subcadena'tal', como no es así devolverá = `+cadena.endsWith("tal"));
//a continuación devolverá true porque "cadena si acaba así."
console.log(`Seguimos buscando con el método endsWith() si la cadena = ${cadena} termina en 'is?. Devolverá `+cadena.endsWith("is?") +" porque si termina con esta subcadena.");
//también hay startsWith
console.log(`Buscando si la cadena ${cadena} comienza con 'jue' con el método startsWith. Devolución = `+cadena.startsWith("jue")+" porque no termina con la citada subcadena.");
console.log(`Buscando si la cadena ${cadena} comienza con 'Bue' con el método startsWith. Devolución = `+cadena.startsWith("Bue")+" porque si termina con dicha subcadena");
//también admite parámetros. Devuelve true porque en la posición 11 está !
console.log(`Pasando un segundo parámetro de tipo entero al método startsWith(en este caso 11) y como primer parámetro\n
el carácter '!' nos devolverá = `+cadena.startsWith("!",11) +" porque efectívamente en esa posición hay una !");
//includes() es sensible a mayúsculas minúsculas.
console.log(`Con el método includes() pasándole como parámetro una subcadena (que) en este caso, nos devuelve `+cadena.includes("que")+` \
pues no la detecta en ${cadena} pues es sensible a mayúsculas/minúsculas.`);
//devuelve la posición del texto dentro de la cadena.
console.log(`Con search() pasándole como parámetro la subcadena 'días' nos devuelve que aparece en la posición = ${cadena.search("días")}\n
dentro de la cadena ${cadena}`);
//Extraer y modificar subcadenas.
//cambia la primera cadena por la segunda solo en la primera ocasión. No modifica el original.
console.log(`El método replace() pasándole como primer parámetro la cadena que queremos sustituir y como segundo la cadena que queremos \n
que la sustituya. Cadena antes de la sustitucion ${cadena}. Cadena después de la sustitución `+cadena.replace("ue","xx"));
//trim no modifica la cadena original.
console.log(`A continuacion, muestro la cadena a la que acabo de añadir espacios al principio y el final de la misma.`);
cadena = "   Buenos días!! Que tal estáis?    ";
console.log(cadena);
console.log(`El método trim() elimina los espacios en blanco del final y el principio de la cadena.`);
console.log(`A continuación, cadena con el método trim() aplicado.`)
console.log(+cadena.trim());
console.log(`Sin embargo, la variable cadena no ha cambiado al aplicarle trim(), la muestro en la siguiente línea para comprobarlo.`)
console.log(cadena);
cadena = "Buenos días!! Que tal estáis?";
console.log("He vuelto a cambiar cadena a su valor original sin espacios para los siguientes métodos.");
console.log(`Cadena =${cadena}`);
//nos extrae la cadena entre estos índices. Incluidos ambos extremos.
console.log(`Método slice() con dos parámetros, el primero indica donde vamosa comenzar a extraer la subcadena,\n
el segundo hasta donde la vamos a extraer. Han de ser de tipo entero y ambos están incluidos. En este caso cadena.slice(3,10) = `+cadena.slice(3,10));
//si el segundo parámetro es negativo,empieza a contar desde el final hasta el primer parámetro.
console.log('si el segundo parámetro es negativo,empieza a contar desde el final hasta el primer parámetro.\n'+cadena.slice(3,-6));
//igual que slice pero no admite números negativos.
console.log(cadena.substring(3,10));

function triple(n) {
    return n*3;
}
var doble=function(n) {
    return n*2;
}
const cuadruple=(n)=>n*4;
console.log(triple(9));
console.log(doble(9));
console.log(cuadruple(9));

function f(){
    const a=1;
    let b=2;
    var c=3;
}
//document.write(factorial(prompt("Introduce un numero"))+"<br/>");
//document.write(facrecursivo(prompt("Introduce un numero")));
function factorial(numero){
    let resultado=1
    for (let index = 1; index <= numero; index++) {
        resultado*=index 
    }
    return resultado;
}
function escribe(dato,func){
    console.log(func(dato));
}
escribe("5",function(x){
console.log(x*2);}); 
escribe(5,(x)=> x*2);
function facrecursivo(n) {
    if(n<=1){
        return 1;
    }else{
        return n*facrecursivo(n-1);
    }
    
}*/
let palabras=["clase","ordenador","ratón","botella","telefono"];
function ordenPersonal(a,b){
    return a.length-b.length
}
//palabras.sort((a,b)=>a.localeCompare(b.localeCompare()));
palabras.forEach((valor,indice)=>{console.log("la palabra numero "+indice+" es "+valor)});

console.log(palabras);