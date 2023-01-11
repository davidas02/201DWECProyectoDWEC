n = prompt('Numero de alumnos en clase')
acumM=0
acumP=0
acumT=0
acumA=0

for (let index = 0; index < n; index++) {
    nombre = prompt("nombre del alumno")
    
    do {
        exp = prompt("Numero de Expediente")
    } while (!/^\d{4}[a-z]$/.test(exp));

    
    do {
        np = prompt("Introduce nota Practica")
    } while (isNaN(np) || np > 10 || np < 0)
   
    do {
        nt = prompt("Introduce nota Teorica")
    } while (isNaN(nt) || nt > 10 || nt < 0)
    
    do {
        ac = prompt("Introduce Actitud")
    } while (isNaN(ac) || ac > 10 || ac < 0)
    
    mediaA=(np*0.5)+(nt*0.4)+(ac*0.1)
    
    alert(nombre+`\n`+exp+`\n`+"nota practica: "+np+`\n`+
    "nota teorica: "+nt+`\n`+"actitud: "+ac+`\n`+"media: "+mediaA)
    acumM+=mediaA
    acumP+=parseInt(np)
    acumT+=parseInt(nt)
    acumA+=parseInt(ac)
}
alert("Media de los alumnos: "+(acumM/n)+`\n`+
"Media Teorica: "+(acumT/n)+`\n`+
"Media Practica: "+(acumP/n)+`\n`+
"Media Actitud: "+(acumA/n)
)
