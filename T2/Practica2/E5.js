var cuadros=2000
document.write("<div style= position: fixed; top:0%; right:0%>")
for (let index = 0; index < cuadros; index++) {
    let verde=parseInt(Math.random()*256);
    let rojo=parseInt(Math.random()*256);
    let azul=parseInt(Math.random()*256);
    var posD=parseInt(Math.random()*100)
    var posA=parseInt(Math.random()*100)
    document.write(
        `<div id='fondo' `+
        `style='background-color:rgb(${rojo},${verde},${azul});
        height: 50px;width:50px; top:${posA}%;left:${posD}%; position:fixed;
        '></div>` 
     )
}
document.write("</div>")
