function calcular(Conta) {
  const gorjeta = (10/100)*Conta;
  const total = Conta + gorjeta;

  console.log(`Valor da conta: R$ ${Conta}`);
  console.log(`Valor da gorjeta (10%): R$ ${gorjeta}`);
  console.log(`Valor total da conta: R$ ${total}`);
}

calcular(80);