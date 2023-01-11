function funcionApa(tablero) {
    let posX = 0;
    let posY = 0;
    let pos = tablero[posX][posY];
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
}