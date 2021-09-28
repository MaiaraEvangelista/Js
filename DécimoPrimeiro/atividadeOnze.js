let Venus = {
    gravidade : 8.87 ,
    dia : 116,
    posicao : 'segundo',
    atmosfera : 'densa',
    magnetismo : 'baixo'

};

function mostrarVenus(Venus){
    for(let chave in Venus)
    console.log(chave,Venus[chave]);
}

mostrarVenus(Venus);


//


let Marte ={
    posicao : 'quarto',
    nomenclatura : 'planeta vermelho',
    quantidadeDeLuas: 2
}

function mostrarMarte(Marte){
    for (let chave in Marte)
    console.log(chave,Marte[chave]);
}
mostrarMarte(Marte);

//


let Plutao = {
    conhecido : 'Planeta Anão',
    parteDe : 'Cinturão de Kuiper',
    composicao: 'rocha e gelo',
    descoberto : 1930,
    quantidadeDeLuas: 5
}

function mostrarPlutao(Plutao){
    for (let key in Marte)
    console.log(key,Plutao[key]);
}
mostrarPlutao(Plutao);