mostrarTipo(20);
function mostrarTipo(excesso){
    for(let index = 0; index <= excesso; index++){
        if (index % 2 === 0) {
            console.log(index, 'Par');
        } else{
            console.log(index, 'Ímpar')
        }
    }
}


outroTipo(8610);
function outroTipo(limite){
    for(let inicio = 0; inicio <= limite; inicio++){
        if (inicio % 2 === 0) {
            console.log(inicio, 'é PAR');
        }else{
            console.log(inicio, 'é ÍMPAR');
        }
    }
}


// vamosVer(795325);
// function vamosVer(carambolas){
//     for(let index = 0; index => carambolas; index++){
//         if (index % 5 === 0) {
//             console.log(index, 'é ÍMPAR');
//         }else{
//             console.log(index, 'é PAR');
//         }
//     }
// }