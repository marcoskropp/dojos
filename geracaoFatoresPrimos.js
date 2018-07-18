var valor = Math.floor(Math.random() * 5000);
var i = 2;
var resultado = valor + ' = ';
var flag;
for(;;){
    if(valor % i === 0){
        valor = valor / i;
        if(flag){
            resultado += ' x ' + i;
            i = 2;
        }else{
            resultado += i;
            flag = true;
        }
    }else{
        i++;
    }
    if(i > valor){
        break;
    }
}
console.log(resultado);