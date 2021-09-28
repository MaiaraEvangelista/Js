verRapidez(100);

function verRapidez(velocidade) {
    if (velocidade <=60) {
        console.log('passa');
    }else{
        console.log((velocidade - 60)/5);
        const pontos = Math.floor( ((velocidade - 60)/5));

        if (pontos >= 10) {
            console.log('perdeu playba!');
        }else{
            console.log('Pontos', pontos);
        }
    }
}


verQuantidade (95);

function verQuantidade(quantidade){
    if (quantidade <=70) {
        console.log('é isso');
    }else{
        console.log((quantidade - 70)-25);
        const combos = Math.floor(((quantidade - 70)-25));
   
    if (combos >= 57) {
        console.log('acho que já deu');
    }else{
        console.log('Combos', combos);
    }
}
}