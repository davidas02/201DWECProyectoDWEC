let codigo=document.getElementById("codUsuario");
let descripcion=document.getElementById("descripcion");
let validar=document.getElementById("validar")

//validacion en tiempo de ejecucion
codigo.addEventListener("keyup",validarCodigo)
validar.addEventListener("click",validarDesc);
function validarCodigo(e) {
    let expreg=/^[A-Z]{4}[0-9]{3}$/;
    let contenido=codigo.value;
    if(expreg.test(contenido)){
        codigo.style.backgroundColor="lightgreen";
    }else{
        codigo.style.backgroundColor="red";
    }
}
function validarDesc(e) {
    e.preventDefault();
    let expreg=/^([A-Z]|\ |[a-z]|[0-9]){5,20}$/
    let valor=descripcion.value;
    if(expreg.test(valor)){
        descripcion.style.backgroundColor="lightgreen";
    }else{
        descripcion.style.backgroundColor="red";
    }
}