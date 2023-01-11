const TAM_FILAS = 10;
const TAM_COLUMNAS = 10;
let tablero = new Array(TAM_FILAS);
for (let x = 0; x < TAM_FILAS; x++) {
    tablero[x] = new Array(TAM_COLUMNAS);
    for (let y = 0; y < TAM_COLUMNAS; y++) {
        tablero[x][y] = false;
    }
}
for (let index = 0; index < 2; index++) {
    nuevoBarco(tablero,4);
}
for (let index = 0; index < 3; index++) {
    nuevoBarco(tablero,3);
}
for (let index = 0; index < 3; index++) {
    nuevoBarco(tablero,2);
}
for (let index = 0; index < 2; index++) {
    nuevoBarco(tablero,1);
}
pintarTablero(tablero);
function pintarTablero(tabla) {
    document.write("<table><tbody>");
    for (let k = 0; k < tabla.length; k++) {
        document.write("<tr>");
        for (let l = 0; l < tabla.length; l++) {
            if (tabla[k][l] != false) {
                document.write("<th class='falso'></th>");
            } else {
                document.write("<th class='verdadero'></th>");
            }
        }
        document.write("</tr>");
    }
    document.write("</tbody></table>");
}
//Fragata
/*
function funcionApa(tablero) {
    let posX = 0;
    let posY = 0;
    let pos = tablero[posX][posY];
    let cont=0;
    while(cont<2){
    do {
        posX = parseInt(Math.random()*10);
        posY = parseInt(Math.random()*10);
        pos = tablero[posX][posY];
        if (!pos) {
            if (posX == 0) {
                if (posY == 0) {
                    der = tablero[posX][posY + 1];
                    abajo = tablero[posX + 1][posY];
                    derAb = tablero[posX + 1][posY + 1];
                    if (!der & !abajo & !derAb) {
                        pos = true;
                    } else { pos = false; }
                } else {
                    if (posY == 9) {
                        der = tablero[posX][posY + 1];
                        izq = tablero[posX][posY - 1];
                        abajo = tablero[posX + 1][posY];
                        izqAb = tablero[posX - 1][posY - 1];

                        if (!izq & !der & !abajo & !izqAr & !derAr) {
                            pos = true;
                        } else { pos = false; }
                    } else {
                        izq = tablero[posX][posY - 1];
                        der = tablero[posX][posY + 1];
                        abajo = tablero[posX + 1][posY];
                        izqAb = tablero[posX + 1][posY - 1];
                        derAb = tablero[posX + 1][posY + 1];
                        if (!izq & !der & !abajo & !izqAb & !derAb) {
                            pos = true;
                        } else { pos = false; }
                    }
                }
            } else {
                if (posX == 9) {
                    if (posY == 0) {
                        der = tablero[posX][posY + 1];
                        arriba = tablero[posX - 1][posY];
                        derAr = tablero[posX - 1][posY + 1];
                        if (!der & !arriba & !derAr) {
                            pos = true;
                        } else { pos = false; }
                    } else {
                        if (posY == 9) {
                            izq = tablero[posX][posY - 1];
                            arriba = tablero[posX - 1][posY];
                            izqAr = tablero[posX - 1][posY - 1];

                            if (!izq & !arriba & !izqAr) {
                                pos = true;
                            } else { pos = false; }
                        } else {
                            izq = tablero[posX][posY - 1];
                            arriba = tablero[posX - 1][posY];
                            izqAr = tablero[posX - 1][posY - 1];
                            der = tablero[posX][posY + 1];
                            derAr = tablero[posX - 1][posY + 1];
                            if (!izq & !der & !arriba  & !izqAr & !derAr) {
                                pos = true;
                            } else { pos = false; }
                        }
                    }
                } else {
                    if (posY == 0) {
                        der = tablero[posX][posY + 1];
                        arriba = tablero[posX - 1][posY];
                        abajo = tablero[posX + 1][posY];
                        derAr = tablero[posX - 1][posY + 1];
                        derAb = tablero[posX + 1][posY + 1];
                        if (!der &!arriba & !abajo &!derAr& !derAb) {
                            pos = true;
                        } else { pos = false; }
                    } else {
                        if (posY == 9) {
                            izq = tablero[posX][posY - 1];
                            arriba = tablero[posX - 1][posY];
                            abajo = tablero[posX + 1][posY];
                            izqAr = tablero[posX - 1][posY - 1];
                            izqAb = tablero[posX + 1][posY - 1];
                            if (!izq & !abajo & !arriba & !izqAr & !izqAb) {
                                pos = true;
                            } else { pos = false; }
                        } else {
                            izq = tablero[posX][posY - 1];
                            der = tablero[posX][posY + 1];
                            arriba = tablero[posX - 1][posY];
                            abajo = tablero[posX + 1][posY];
                            izqAr = tablero[posX - 1][posY - 1];
                            izqAb = tablero[posX + 1][posY - 1];
                            derAr = tablero[posX - 1][posY + 1];
                            derAb = tablero[posX + 1][posY + 1];
                            if (!izq & !der & !arriba & !abajo & !izqAb & !izqAr & !derAb & !derAr) {
                                pos = true;
                            } else { pos = false; }
                        }
                    }
                }
            }
        } else {
            pos = false;
        }
    } while (!pos);
    if (pos) {
        tablero[posX][posY] = true;
    }
    cont++;
}
}
*/
//Cualquier barco
function nuevoBarco(tablero,tamanio){   
    let ok=true;
    do {
        var lista=[];
        let index=-1;
        okCant=0;
        var posX=parseInt(Math.random()*10);
        var posY=parseInt(Math.random()*10); 
    switch (parseInt(Math.random()*4)) {//
        case 0:
            //norte
            dif=posY-tamanio;
            for(let y=1+posY;y>dif-1;y--){
                for(let x=posX-1;x<=posX+1;x++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                        break;
                    }
                }
            }
            if(dif>=0 && dif<10 ){
                for (let n=posY;n>dif;n--){
                    if(tablero[n][posX]!=false){
                        break;
                    }else{
                        lista[++index]=n+""+posX;
                    }
                }
                ok=false;
            }
            break;
        case 1:
            //este
            dif=posX+tamanio;
            for(let x=posX-1;x<dif+1;x++){
                for(let y=posY-1;y<=posY+1;y++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                    }
                }
            }
            if(dif>=0 && dif<10){
                for (let e=posX;e<dif;e++){
                    if(tablero[posY][e]!=false){
                        break;
                    }else{
                        lista[++index]=posY+""+e;
                    }
                }
                ok=false;
            }
            break;
        case 2:
            //sur
            dif=posY+tamanio;
            for(let y=posY-1;y<dif+1;y++){
                for(let x=posX-1;x<=posX+1;x++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                    }
                }
            }
            if(dif>=0 && dif<10){
                for (let s=posY;s<dif;s++){
                    if(tablero[s][posX]!=false){
                        break;
                    }else{
                        lista[++index]=s+""+posX;
                    }
                }
                ok=false;
            }
            break;
        case 3:
            //oeste
            dif=posX-tamanio;
            for(let x=posX+1;x>dif-1;x--){
                for(let y=posY-1;y<=posY+1;y++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                    }
                }
            }
            if(dif>=0 && dif<10){
                for (let o=posX;o>dif;o--){
                    if(tablero[posY][o]!=false){
                        break;
                    }else{
                        lista[++index]=posY+""+o;
                    }
                }
                ok=false;
            }
            break;
    }
    } while (ok);
    //console.log(lista);
    for (const pos of lista) {
        tablero[pos[0]][pos[1]]=true;
    }
}