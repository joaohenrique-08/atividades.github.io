// faça uma função que receba o salario de um trabalhador e o emprestimo,verifique se o emprestimo e de ate 20% do salario do trabalhador.


function emprestimos(salario, emprestimo) {
    
    if (emprestimo <= (20 / 100) * salario) {
        console.log("emprestimo concedido");
    }
    else {
        console.log("emprestimo não concedido");
    }
}

emprestimos(1000,201);