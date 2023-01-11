var n = parseInt(prompt("numero de filas"))
document.write("Triangulo 1 <br/>")

for (let index1 = 0; index1 < n; index1++) {
    for (let index2 = 0; index2 <= index1; index2++) {
        document.write("*")
    }
    document.write("<br/>")
    
}
document.write("Triangulo 2 <br/>")
for (let index1 = n; index1 > 0; index1--) {

    for (let index2 = index1; index2 > 0; index2--) {
        document.write("*")

    }
    document.write("<br/>")
}
document.write("Triangulo 3 <br/>")
for(let y=1; y<=n ;y++){
    aster=" ";
    for(let b=1;b<=(n-y);b++){
        if(b==1){
            aster="&nbsp";
        }else{
            aster=aster+"&nbsp";
        }
    }
    for(let x=1;x<=y;x++){
        aster=aster+"*";
    }
    document.write(aster+"<br/>");
}
document.write("Triangulo 4 <br/>")
for(let y=n; y>0 ;y--){
    aster=" ";
    for(let b=n-y;b>0;b--){
        if(b==n-y){
            aster="&nbsp";
        }else{
            aster=aster+"&nbsp";
        }
    }
    for(let x=1;x<=y;x++){
        aster=aster+"*";
    }
    document.write(aster+"<br/>");
}