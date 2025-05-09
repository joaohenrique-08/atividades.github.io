// opção 1: media simples de duas notas
// opção 2: media ponderada de 3 notas com pesos 2, 3, 5.


function mediaSimples(nota01,nota02){
    return (nota01 + nota02) / 2;
} 

function mediaPonderada(n1, n2, n3){
    let m = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    return m;
}

let media;
let opcao = 1;

 switch (opcao) {
  

    case 1:
        media = mediaSimples(100, 50);   
        console.log(`media simples: ${media} pontos`);
        break;

    case 2:
        media = mediaPonderada(60, 70,80);
        console.log(`media ponderada ${media} pontos`);
         break;

    default: 
         console.log('opção invalida');
         break;
         

 }