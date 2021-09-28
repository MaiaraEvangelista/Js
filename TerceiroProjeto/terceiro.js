const resultado = fizzBuzz(3);
console.log(resultado);

function fizzbuzz(entrada){
    if (typeof entrada !== 'number') 
        return 'Apenas números são válidos!'
    
    if (entrada % 15 === 0) 
        return 'Fizz';
    
    if (entrada % 7 === 0) 
        return 'Buzz';
    
    if ((entrada % 15 === 0) &&( entrada % 7 === 0) )
        return 'FizzBuzz';
    
    return entrada;
}
