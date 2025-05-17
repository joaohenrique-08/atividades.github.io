function quadrado(n) {
  return n * n;
}


function somaQuadrados(a, b) {
  return quadrado(a) + quadrado(b);
}

let resultado = somaQuadrados(3, 4);
console.log("Soma dos quadrados:", resultado);