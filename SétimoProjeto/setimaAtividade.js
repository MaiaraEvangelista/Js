somar(820);
function somar(barreira){
    let multi50 = 0;
    let multi45 = 0;
    let multi10 = 0;
    let multi200 = 0;

    for(index = 0; index <= barreira; index++){
        if(index % 50 === 0)
        multi50 += index;

        if(index % 45 === 0 )
        multi45 += index;

        if(index % 10 === 0)
        multi10 += index;

        if(index % 200 === 0 )
        multi200 -= index;
    }

    console.log(multi50 + multi45 + multi10 - multi200);
}

