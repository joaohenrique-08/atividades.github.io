let laranjas = 15;
let preco;

if (laranjas <= 12){
 preco = 1.30;
}
else{
 preco = 1; 
}

let custoTotal = preco * laranjas;

console.log("O valor total é: R$",custoTotal)
