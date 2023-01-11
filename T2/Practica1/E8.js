var acumP=0;
var acumI=0;
for (let index = 1; index < 100; index++){
    if(index%2==0){
        acumP+=index;
    }else{
        acumI+=index;
    }  
}
alert("Suma de los numeros pares= "+acumP);
alert("Suma de los numeros impares= "+acumI)