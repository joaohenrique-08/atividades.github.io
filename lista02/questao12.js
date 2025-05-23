function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

function mostrar(n) {
  if (n === 0) return;
  mostrar(n - 1);
  console.log(fibonacci(n - 1));
}

mostrar(7); 
