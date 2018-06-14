var alfabeto = ['a', 'b', 'c', 'd', 'e',
                'f', 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o',
                'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y',
                'z'];

var letra = 'f';

diamante(letra);

function diamante(letra) {
    let indexLetra = alfabeto.indexOf(letra);
  
    var asc = alfabeto.slice(0, indexLetra);
    var desc = asc.slice(0, asc.length - 1).reverse();

    imprimir_asc(asc);
    imprimir_desc(desc);
}

function imprimir_asc(letras) {
    for (let i = 0; i < letras.length; i++) {
        
        qtd = new Array(letras.length - i+1).join(" ");
        qtd2 = new Array(i*2).join(" ");
        
        if (i === 0) {
            console.log(qtd + letras[i]); 
        } 
        else{
            console.log(qtd + letras[i] + qtd2 + letras[i]);
        }
    }
}

function imprimir_desc(letras) {
    for (let i = 0, j = letras.length - 1; i < letras.length; i++, j--) {
        
        qtd_m = new Array((j * 2)).join(" ");
        qtd_a = new Array(i + 3).join(" ");
        
        if (i == letras.length - 1) {
            console.log(qtd_a + letras[i]);
        } else {
            console.log(qtd_a + letras[i] + qtd_m + letras[i]);
        }
        
    }
}