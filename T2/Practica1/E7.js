do{
n1 = parseInt(prompt("Introduce el numero inicial"));
n2 = parseInt(prompt("Introduce el segundo numero"));
}while(n1<=n2|isNaN(n1)|isNaN(n2));
while (n2 <= n1) {
  if (n2 % 2 == 0) {
    n=(n2 + " ");
    n2 = n2 + 2;
  } else {
    n2++;
  }
  document.write(n)
}
