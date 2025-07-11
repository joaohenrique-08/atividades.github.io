let carro = [];

carro.push('corolla');
carro.push('sw4');
carro.push('onix');
carro.push('fusca');

carro[2] = "civic";

console.log(carro);

// removendo

carro.pop();

// adicionando elementos 

carro.push('l200');
carro.push('palio');

// percorrendo o array

for (let i = 0; i < array.length; i++){
    
    console.log("indice:" + (i + 1));
    console.log("valor:" + carro[i]);
    console.log();
    
}

