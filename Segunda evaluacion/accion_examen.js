window.addEventListener("load", examen);
function examen() {
    provincias = new Map();
    provincias.set("GA", ["La Coruña", "Lugo", "Orense", "Pontevedra"]);
    provincias.set("CL", ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]);
    provincias.set("EX", ["Badajoz", "Cáceres"]);
    provincias.set("PV", ["Álava", "Vizcaya", "Guipúzcoa"]);

    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    edad = document.getElementById("edad");
    comunidades = document.getElementById("ccaa");
    provincia = document.getElementById("provincia");
    destinoArrastrable = document.querySelector(".resultado");
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    botonEnviar = document.getElementById("enviar");
    captcha = document.getElementById("captcha");
    formulario = document.getElementById("formulario");
    botonWeb = document.getElementById("btnweb");
    botonDOM = document.getElementById("btndom");
    botonInformacion = document.getElementById("btninfo");
    cuadroDOM = document.getElementById("DOM");
    cuadroInformacion = document.getElementById("informacion");
    pie = document.getElementById("pie");

    validarNombre = /^\w{3}/;
    validarApellidos = /^\w{2,}\s\w{2,}/;
    validarEdad = /^(10\d|110)|^(\d{1,2})$/;

    nombre.addEventListener("keyup", comprobarNombre);
    nombre.addEventListener("focusout", mayusculas);
    function comprobarNombre(e) {
        if (validarNombre.test(e.target.value)) {
            e.target.classList.remove("error");
            e.target.classList.add("correcto");
        } else {
            e.target.classList.remove("correcto");
            e.target.classList.add("error");
        }
    }

    apellidos.addEventListener("keyup", comprobarApellidos);
    apellidos.addEventListener("focusout", mayusculas);
    function comprobarApellidos(e) {
        if (validarApellidos.test(e.target.value)) {
            e.target.classList.remove("error");
            e.target.classList.add("correcto");
        } else {
            e.target.classList.remove("correcto");
            e.target.classList.add("error");
        }
    }
    function mayusculas(e) {
        e.target.value = e.target.value.toUpperCase();
    }


    edad.addEventListener("keyup", comprobarEdad);
    function comprobarEdad(e) {
        if (validarEdad.test(e.target.value)) {
            e.target.classList.remove("error");
            e.target.classList.add("correcto");
        } else {
            e.target.classList.remove("correcto");
            e.target.classList.add("error");
        }
    }
    botonWeb.addEventListener("click", mostrarMiWeb);
    function mostrarMiWeb(e) {
        let features = "width=1000,height=500";
        let ventana = window.open("https:daw201.ieslossauces.es/DWEC/index.html", "", features);
        let cerrar = document.createElement("button");
        cerrar.classList.add("cerrar");
        cerrar.classList.add("cerrarWEB");
        cerrar.textContent = ("Cerrar mi web");
        pie.append(cerrar);
        cerrar.addEventListener("click", (e) => {
            ventana.close();
            pie.removeChild(cerrar);
        });
    }
    botonDOM.addEventListener("click", abrirDOM);
    function abrirDOM(e) {
        if (document.getElementsByClassName("cerrarDOM").length < 1) {
            let cerrar = document.createElement("button");
            cerrar.classList.add("cerrar");
            cerrar.classList.add("cerrarDOM");
            cerrar.textContent = ("Cerrar DOM");
            pie.append(cerrar);
            cerrar.addEventListener("click", (e) => {
                cuadroDOM.textContent = "";
                cuadroDOM.style.display = "none";
                pie.removeChild(cerrar);
            });
        }
        cuadroDOM.textContent = document.head.innerHTML + "----------BODY-----------" + document.body.innerHTML;
        cuadroDOM.style.display = "block";

    }
    comunidades.addEventListener("change", listarProvincias);
    function listarProvincias(e) {
        provincia.selected = provincia.children[0];
        let com = provincias.get(e.target.value);
        let prov = document.getElementsByClassName("provincia");
        if (prov.length > 1) {
            do {
                let borrar = prov[0];
                provincia.removeChild(borrar);
            } while (prov.length > 0);
        }
        if (com != undefined && com.length > 0) {
            for (let iterator of com) {
                opcion = document.createElement("option");
                opcion.classList.add("provincia");
                opcion.textContent = iterator;
                provincia.appendChild(opcion);
            }
        }
    }
    document.getElementById("enviar").addEventListener("click", comprobarCampos);

    function comprobarCampos(e) {
        e.preventDefault()
        let fCorrecto = true
        let pCorrecto = true
        if (document.getElementsByClassName("correcto").length < 3) {
            fCorrecto = false
            alert("Formato Incorrecto")
        }
        if (provincia.value == 0) {
            pCorrecto = false;
            alert("Se debe elegir una Comunidad y una provincia.");
        }
        if (fCorrecto && pCorrecto) {
            captcha.style.display = "block";
            let opciones = document.getElementsByClassName("opcaptcha");
            let n1 = parseInt(Math.random() * 10);
            let n2 = parseInt(Math.random() * 10);
            let res = n1 + n2
            document.getElementById("num1").textContent = n1;
            document.getElementById("num2").textContent = n2;
            let opCorrecta = parseInt(Math.random() * 3);
            console.log(opCorrecta + " " + n1 + " " + n2);
            for (const iterator of opciones) {
                iterator.setAttribute("draggable", "true");
                let n=parseInt(Math.random() * 19)
                while (n==res) {
                    n=parseInt(Math.random() * 19)
                }
                iterator.textContent = n;
                iterator.addEventListener("dragstart", (e) => {
                    iterator.style.opacity = 0.5;
                    iterator.classList.add("movimiento");
                });
                iterator.addEventListener("dragend", (e) => {
                    iterator.style.opacity = 1;
                    iterator.classList.remove("movimiento");
                });
            }
            opciones[opCorrecta].textContent = res;
            let resultado = document.getElementsByClassName("resultado")[0];
            resultado.addEventListener("dragenter", (e) => {
                resultado.style.backgroundColor = "yellow";
                resultado.textContent = "";
            });
            resultado.addEventListener("dragover", (e) => { e.preventDefault() });
            resultado.addEventListener("dragleave", (e) => {
                resultado.style.backgroundColor = "transparent";
                resultado.textContent = "";
            });
            resultado.addEventListener("drop", comprobarCorrecto);
            function comprobarCorrecto(e) {
                let escogido = document.getElementsByClassName("movimiento")[0];
                if (escogido.textContent == res) {
                    resultado.style.backgroundColor = "green";
                    resultado.textContent = "OK";
                    setTimeout(() => {
                        let p = captcha.getElementsByTagName("p")[0];
                        p.textContent = 'ENHORABUENA, NO ERES UN ROBOT';
                    }, 2000);
                    setTimeout(() => {
                        console.log("enviar");
                        document.forms[0].submit();
                    }, 4000);
                } else {
                    resultado.style.backgroundColor = "red";
                    resultado.textContent = "NO";
                }
            }
        } else {
            captcha.style.display = "none";
        }
    }

    botonInformacion.addEventListener("click", mostrarInformacion);
    function mostrarInformacion(e) {
        if (document.getElementsByClassName("cerrarInfo").length < 1) {
            let tit = document.createElement("h1");
            tit.textContent = "INFORMACIÓN DE MI PÁGINA";
            cuadroInformacion.appendChild(tit);
            let parrafos = document.createElement("p");
            parrafos.innerHTML = "<b>Número de Párrafos:</b>" + document.getElementsByTagName("p").length;
            cuadroInformacion.appendChild(parrafos);
            let botones = document.createElement("p");
            botones.innerHTML = "<b>Número de Botones:</b>" + document.getElementsByTagName("button").length;
            cuadroInformacion.appendChild(botones);
            let div = document.createElement("p");
            div.innerHTML = "<b>Número de Botones:</b>" + document.getElementsByTagName("div").length;
            cuadroInformacion.appendChild(div);
            let ancho = document.createElement("p");
            ancho.innerHTML = "<b>Ancho Ventana:</b>" + window.innerWidth;
            cuadroInformacion.appendChild(ancho);
            let alto = document.createElement("p");
            alto.innerHTML = "<b>Alto ventana:</b>" + window.innerHeight;
            cuadroInformacion.appendChild(alto);
            let historial = document.createElement("p");
            historial.innerHTML = "<b>Paginas en el historial:</b>" + window.history.length;
            cuadroInformacion.appendChild(historial);
            let version = document.createElement("p");
            version.innerHTML = "<b>Version del Navegador:</b>" + navigator.appVersion;
            cuadroInformacion.appendChild(version);
            let motor = document.createElement("p");
            motor.innerHTML = "<b>Motor del Navegador:</b>" + navigator.product;
            cuadroInformacion.appendChild(motor);
            let idioma = document.createElement("p");
            idioma.innerHTML = "<b>Version del Navegador:</b>" + navigator.language;
            cuadroInformacion.appendChild(idioma);
            cuadroInformacion.style.display = "block";
            let cerrar = document.createElement("button");
            cerrar.classList.add("cerrar");
            cerrar.classList.add("cerrarInfo");
            cerrar.textContent = ("Cerrar Info");
            pie.append(cerrar);
            cerrar.addEventListener("click", (e) => {
                cuadroInformacion.style.display = "none";
                do {
                    cuadroInformacion.removeChild(cuadroInformacion.children[0]);
                } while (cuadroInformacion.children.length > 0);
                pie.removeChild(cerrar);
            });
        }
    }
    let limpiar = document.getElementById("button");
         limpiar.addEventListener("click", limpiarCampos);
          function limpiarCampos(e) {
            
            captcha.style.display = "none";
            nombre.classList.remove("correcto");
            nombre.classList.add("error");
            apellidos.classList.remove("correcto");
            apellidos.classList.add("error");
            edad.classList.remove("correcto");
            edad.classList.add("error");
        }
}