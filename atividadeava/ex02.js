function simularPoupanca(valorMensal, taxaJuros, meses) {
    let total = 0;
    let jurosmensal = taxaJuros/100

    for (let i = 1; i <= meses; i++) {
        total = (total + valorMensal)*( 1 + jurosmensal); 
    }  
    console.log(total.toFixed(2));
}
simularPoupanca(1000,0.48, 18);
