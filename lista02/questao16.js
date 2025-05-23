function salarioBruto(n1) {
   
  if (n1 <= 1518) {
    reduz = (5/100);
  } else if (n1 <= 2826.65) {
    reduz = (7.5/100);
  } else if (n1 <= 3751.05) {
    reduz = (15/100);
  } else {
    reduz = (27.5/100);
  }

  let desconto = n1 * reduz;
  let salarioLiquido = n1 - desconto;

  console.log("Salario bruto:",n1);
  console.log("Salario liquido:",salarioLiquido);
  console.log("Descontos:",desconto);
  }
  
  salarioBruto(2000)



  // não entendi se funcionou ou não funcionou.
  
