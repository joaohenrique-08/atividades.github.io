

function contarVogais(texto, i = 0, c = 0) {
  let Vogais = "aeiouAEIOU";
  if (i >= texto.length) return c;
  if (Vogais.indexOf(texto[i]) !== -1) c++;
  return contarVogais(texto, i + 1, c);
}

function exibirResultado(txt) {
  console.log("Vogais:", contarVogais(txt));
}

exibirResultado("sou um programador");