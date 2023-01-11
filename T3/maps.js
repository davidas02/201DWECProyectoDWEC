//Crecion conjunto
const nombres=new Set(["Luis","Ricardo","Manuel","Josué","Alejandro","Apa"]);
//Añadir elemento
nombres.add("Alberto");
//Borrar elemento
nombres.delete("Manuel");
//Comprobar que el elemento existe
//Existe
let esta=nombres.has("Alberto");
console.log("Está Alberto? "+esta);
//No existe
esta=nombres.has("Manuel");
console.log("Está Manuel? "+esta);
//recorrer con entries
const entradas=nombres.entries();
let nombre=entradas.next().value
while(nombre!=null){
    console.log(nombre);
    nombre=entradas.next().value;
}
//clave
const clave=nombres.keys();
nombre=clave.next().value
while(nombre!=null){
    console.log(nombre);
    nombre=clave.next().value;
}
//valor
console.log("values");
const valores=nombres.values();
nombre=valores.next().value
while(nombre!=null){
    console.log(nombre);
    nombre=valores.next().value;
}
console.log("ForEach");
nombres.forEach((element) => {
    console.log(element);
 });
 //MAPAS
 console.log("mapa");
let mapa=new Map([[1,'Manuel'],
[2,"Luis"],
[3,"Ricardo"],
[4,"Josué"],
[5,"Alejandro"],
[6,"Apa"]
]);
console.log(mapa);
console.log("Tamaño del mapa "+mapa.size);
mapa.set(7,"alberto");
console.log(mapa);
console.log(mapa.get(5));
console.log("Esta Manuel: "+mapa.has(1));
mapa.delete(4);
mapa.forEach (function(value, key) {
    console.log(value);
  });
for (const clave of mapa.keys()) {
    console.log(clave);
}
for (const valor of mapa.values()) {
    console.log(valor);
}
for (const entrada of mapa.entries()) {
    console.log(entrada);
}