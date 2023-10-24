//generatore di tabelle di moltiplicazioni//
/*const user = prompt('inserire un numero da 1 a 10');
const userNumber = Number(user);
let multiplyVal = 1;
while(multiplyVal<=10){
    console.log(userNumber + 'x' + multiplyVal + '=' + multiplyresult);
    multiplyVal++;
}*/

//sostitutore di parole//
/*let domandaUtente = prompt('scrivi una domanda');
let CreaParole = prompt('parola per rispondere');
let nuovaParola = prompt('nuova parola da usare');
domandaUtente = domandaUtente.replaceAll(CreaParola, nuovaParola)
console.log(domandaUtente);*/


//validatore di siti//
/*let userUrl = prompt('iserisci un URL')
if(userUrl.startsWith("http://") || userUrl.startsWith("https://") && userUrl.endsWith(".com")){
    console.log("URL valido")
}else {
    console.log("non è un URL valido")
}*/

//sfida lancio dato//
let userVince = 0;
let botVince = 0;
do{
    let random1 = Math.random() *6;
    let random2 = Math.random() *6;
    let lancioUser = Math.floor(random) +1;
    let lancioBot = Math.floor(random2) +1;
    let userWin = 0;
    let botWin = 0;
    let matchesTotali = userWin + userBot;

        alert("il tuo risultato è" + lancioUser + "l'altro risultato è" + lancioBot);

    if(lancioUser > lancioBot){
        alert("hai vinto")
    } else if (lancioUser === lancioBot){
        alert("avete pareggiato")
    }else {  
        alert("hai perso")
    }
        alert(userVince + " " + botVince)

    let giocaDiNuovo = prompt("gioca di nuovo?");
        if(giocaDiNuovo === No) {
        break;
    }
}while(true);

//indovinello//
   /*let random = Math.random() *10;
let numeroRandom = Math.floor(random) + 1;
let user = prompt("indovina un numero da 1 a 10");
console.log(numeroRandom)

if(user > numeroRandom){
    alert("indovina un numero più basso")
}else if (user < numeroRandom){
    alert("indovina un numero più alto")
}else if (user === numeroRandom){
    alert("congratulazioni hai vinto")
} */