exibirCoisinhas(15);
function exibirCoisinhas(linhas){
    let normal = '';
    for(let linha = 1; linha <= linhas; linha++){
        normal += '*';
        console.log(normal);
    }
}



exibirCoisinhas(200);
function exibirCoisinhas(colunas){
    let normal = '';
    for(let coluna = 1; coluna <= colunas; coluna++){
        normal += '+';
        console.log(normal);
    }
}

exibirCoisinhas(1);
function exibirCoisinhas(filas){
    let normal = '';
    for(let fila = 1; fila <= filas; fila++){
        normal += '/';
        console.log(normal);
    }
}