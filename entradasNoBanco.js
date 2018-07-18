var pessoas = 0;
for (; ;) {
    var tempo = new Date();
    var esperar = Math.floor(Math.random() * 5000);
    sleep(esperar);
    var horas = Math.floor(Math.random() * 25); // Valores aleatórios até 24
    tempo.setHours(horas);
    if (tempo.getHours() >= 10 && tempo.getHours() < 16) {
        console.log("[" + tempo.getFullYear() + "-" + tempo.getMonth() + "-" + tempo.getDate() + " " +
            tempo.getHours() + ":" + tempo.getMinutes() + ":" + tempo.getSeconds() + "] - Abertura da Porta OK");
        pessoas++;
    }else if(tempo.getHours() > 16){
        console.log("Pessoas que entraram no Banco: " + pessoas);
        break;
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}