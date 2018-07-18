//var valores = [100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150];
var valores = [];
for (i = 0; i < 20; i++) {
    valores[i] = Math.floor(Math.random() * 20);
}

valores.sort(function (a, b) {
    return a - b;
});
console.log(valores);

var resultado = "";
var inicio, fim;
for (i = 0; i < valores.length; i++) {
    if (valores[i] + 1 === valores[i + 1] || valores[i] == valores[i + 1]) {
        inicio = valores[i];
        for (j = i; i < valores.length; j++) {
            if (valores[j] + 1 === valores[j + 1] || valores[j] === valores[j + 1]) {
                fim = valores[j + 1];
            } else {
                i = j;
                break;
            }
        }
        if (inicio != fim) {
            resultado += "[" + inicio + "," + fim + "]";
        } else {
            resultado += "[" + inicio + "]";
        }
    } else {
        inicio = valores[i];
        resultado += "[" + inicio + "]";
    }
}
console.log(resultado);