let salario = 10000;

if (salario <= 1000){
    console.log("alíquota de 7%");  
}
else if (salario > 1000 && salario <= 2500){
    console.log("alíquota de 14%");  
}
else if (salario > 2500 && salario <= 3500){
    console.log("alíquota de 21%");  
}
else if (salario > 3500 && salario <= 9000){
    console.log("alíquota de 27,51%");  
}
else{
    console.log("alíquota de 32%");  
}
