let limites = [
    {tooltip: 'até 200 cards', minimo : 0, maximo: 5000},
    {tooltip: 'até 890 card', minimo: 200, maximo: 5000}
];

function Faixa(tooltip, minimo, maximo){
    return{
       tooltip,
       minimo,
       maximo 
    }
}

let parte = [
    Faixa('d', 1, 500),
    Faixa('e', 500, 5000),
]
console.log(limites);
console.log(parte);