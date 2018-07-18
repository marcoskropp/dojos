var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var letra = 'E';
var resultado = "";
var index = alfabeto.indexOf(letra);
var espacosMeio = 1;

imprimirAscendente();
imprimirDescendente();

function imprimirAscendente() {
    var indexDecremento = index;
    for (i = 0; i <= index; i++) {
        for (j = 0; j < indexDecremento; j++) {
            resultado += " ";
        }
        resultado += alfabeto[i];
        indexDecremento--;
        if (i === 0) {
            console.log(resultado);
        } else {
            for (j = 0; j < espacosMeio; j++) {
                resultado += " ";
            }
            resultado += alfabeto[i];
            console.log(resultado);
            espacosMeio += 2;
        }
        resultado = "";
    }
}

function imprimirDescendente() {
    var indexIncremento = 0;
    espacosMeio -= 4;
    for (i = index - 1; i >= 0; i--) {
        for (j = indexIncremento; j >= 0; j--) {
            resultado += " ";
        }
        resultado += alfabeto[i];
        indexIncremento++;
        if (i === 0) {
            console.log(resultado);
        } else {
            for (j = espacosMeio; j > 0; j--) {
                resultado += " ";
            }
            resultado += alfabeto[i];
            console.log(resultado);
            espacosMeio -= 2;
        }
        resultado = "";
    }
}
