const array = [10, 5, 80, 100];
console.log(resultado(array));

function resultado(numeros){
   
    const final = calculo(dados);

    if(final <=20)
    return 'pronto'

    if(final <=2)
    return 'abobrinha'

    if(final <=45)
    return 'caroço'

    if(final <=93)
    return 'maracutaia'
}



function calculo(array){
    let multi = 0;
    for (let total of array){
        multi *= total;
    }
    return multi*(array.length);
}