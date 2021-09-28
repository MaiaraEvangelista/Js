exibirPrimos(15);
function exibirPrimos(chegou){
    for(let numero = 2; numero <= chegou; numero++){
        let primo = true;

        for(let divisor = 2; divisor <numero; divisor++){
            if (numero % divisor === 0) {
                primo = false;
                break;
            }
        }

        if(primo) console.log(numero);
    }
}


//compostos
exibirCompostos(20);
// function exibirCompostos(chegou){
//     for(let numero = 30; numero <= chegou; numero++){
//         let composto = true;

//         for(let divisor = 30; divisor <numero; divisor++){
//             if (numero % divisor === 0) {
//                 composto = false;
//                 break;
//             }
//         }

//         if(composto) console.log(numero);
//     }
// }

