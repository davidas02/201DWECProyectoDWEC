
n1 = parseInt(prompt("Introduce el numero inicial"));
n2 = parseInt(prompt("Introduce el segundo numero"));
while (n1 > n2 || !Number(n1) || !Number(n2)) {
    alert("Error")
    n1 = parseInt(prompt("Introduce el numero inicial"));
    n2 = parseInt(prompt("Introduce el segundo numero"));
}
acumP = 0;
acumI = 0;
for (let index = n1 + 1; index < n2; index++) {
    if (index % 2 == 0) {
        acumP += index;
    } else {
        acumI += index;
    }
}

alert("Suma de los numeros pares= " + acumP);
alert("Suma de los numeros impares= " + acumI);