function simularPoupanca(valorMensal, taxaJuros, meses) {

    let total = 0;

    for (let i = 0; i <= meses; i++) {
        total += valorMensal;         
        total *=(1 + taxaJuros / 100); 
    }
    
    console.log(total.toFixed(2));
}
simularPoupanca(1000,0.48, 18);
