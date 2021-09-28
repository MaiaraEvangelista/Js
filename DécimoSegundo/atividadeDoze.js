//comparação de dados
function Dados(nome, sobrenome, idade, telefone){
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade,
    this.telefone = telefone
}

const dados1 = new Dados('a', 'b', 'c');
const dados2 = new Dados('a', 'b', 'c');


function iguais(dados1,dados2){
    return dados1.nome === dados2.nome &&  dados1.sobrenome === dados2.sobrenome && dados1.idade === dados2.idade && dados1.telefone === dados2.telefone
}
console.log(iguais(dados1, dados2));

function dadosMemoriaIguais(dados1,dados2){
    return dados1 === dados2;
}
console.log(dadosMemoriaIguais(dados1,dados2));

