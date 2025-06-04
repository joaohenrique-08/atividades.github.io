let soma = 0;
let quantidade = 0;


for (let i = 1000; i <= 2000; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 10 !== 0) {
    console.log(i);
    soma += i;
    quantidade++;
  }

}

if (quantidade > 0) {
  let media = soma / quantidade;
  console.log("Média dos valores:", media);
} else {
  console.log("Nenhum número encontrado com as condições especificadas.");
}