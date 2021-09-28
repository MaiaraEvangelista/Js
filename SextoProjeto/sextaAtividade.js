const quadro ={
    pintor : 'Leonardo da Vinci',
    nomeQuadro : 'Monalisa',
    ano : 1053
}
mostrarCaracteristicas(quadro);

function mostrarCaracteristicas(obj){
    for(prop in obj)
    if  (typeof prop === 'string')
    console.log(prop, obj[prop])
}

//

const teorias = {
    fisico : 'Einstein',
    nomeTeoria : 'Vórtice Gravitacional',
  
}

mostrarInfo(teorias);
function mostrarInfo(obj){
    for(prop in obj)
    if (typeof prop === 'string') {
        console.log(prop, obj[prop])
    }
}

//