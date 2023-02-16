let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("email");
let nif = document.getElementById("NIF");
let boton = document.getElementById("boton");
let telon = document.getElementById("telon");
let mensaje = document.getElementById("mensaje");
let nombreOK = false;
let apellidoOK = false;
let emailOK = false;
let nifOK = false;
//Validar Nombre
nombre.addEventListener("keyup", validarNombre);
function validarNombre(e) {
    let regexp = /^[A-Z a-z]{2,}$/;
    if (regexp.test(e.target.value)) {
        nombreOK = true;
        nombre.classList.add("verde");
        comprobarCorrectos();
    } else {
        nombreOK = false;
        nombre.classList.remove("verde");
    }
}
//validar Apellidos
apellidos.addEventListener("keyup", validarApellido);
function validarApellido(e) {
    let regexp = /^[A-Z a-z]{2,}$/;
    if (regexp.test(e.target.value)) {
        apellidoOK = true;
        apellidos.classList.add("verde");
        comprobarCorrectos();
    } else {
        apellidoOK = false;
        apellidos.classList.remove("verde");
    }
}
//validar Email
email.addEventListener("keyup",validarEmail);
function validarEmail(e) {
    let regexp=/^[a-z._]+[@][a-z._]+$/;
    if (regexp.test(e.target.value)) {
        emailOK = true;
        email.classList.add("verde");
        comprobarCorrectos();
    } else {
        emailOK = false;
        email.classList.remove("verde");
    }
}
//validar NIF
nif.addEventListener("keyup", validarNif);
function validarNif(e) {
    let patron = /^(([XYZ]|[0-9])[0-9]{7})([A-Z])$/;
    if (patron.test(e.target.value)&&comprobarLetra(e.target.value)) {
        nifOK = true;
        nif.classList.add("verde");
        comprobarCorrectos();
    } else {
        nifOK = false;
        nif.classList.remove("verde");
    }
}
function comprobarLetra(dni) {
    let c1=dni.charAt(0);
    let patronDni="TRWAGMYFPDXBNJZSQVHLCKE";
    if(c1=="X"){
        dni=dni.replace(c1,0);
    }else{
        if (c1=="Y") {
            dni=dni.replace(c1,1); 
        } else {
            if (c1=="Z") {
            dni=dni.replace(c1,2); 
            }   
        }
    }
    let dniSL=dni.replace(dni.charAt(8),'')
    if(dni.charAt(8)==patronDni.charAt(parseInt(dniSL)%23)){
        return true
    }else{
        return false
    }
}
//Si todas las validaciones son correctas
function comprobarCorrectos() {
    if (nombreOK && apellidoOK && emailOK && nifOK) {
        boton.removeAttribute("disabled");
        boton.addEventListener("click", enviarDatos);
        
    }else{
        boton.setAttribute("disabled","");
        boton.removeEventListener("click", enviarDatos);
        
    }
}
function enviarDatos(e) {
    e.preventDefault();
    e.stopPropagation()
    telon.style.display = "block";
    mensaje.style.display = "block";
    mensaje.addEventListener("click",volver);
}

function volver() {
    telon.style.display = "none";
    mensaje.style.display = "none";
    nombre.value="";
    nombreOK=false;
    nombre.classList.remove("verde");
    apellidos.value="";
    apellidoOK=false;
    apellidos.classList.remove("verde");
    email.value="";
    emailOK=false;
    email.classList.remove("verde");
    nif.value="";
    nif.classList.remove("verde");
    nifOK=false;
    comprobarCorrectos();
    mensaje.removeEventListener("click",volver);
}