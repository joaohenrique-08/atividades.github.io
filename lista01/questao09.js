let ano = 1992;

if (ano % 400 == 0) {
  console.log("Bissexto");
} else if (ano % 4 == 0 && ano % 100 != 0) {
  console.log("Bissexto");
} else {
  console.log("Não é bissexto");
}