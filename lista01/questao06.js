let n = -4;
let par = n%2==0;
let impar = n%2 != 0;

if (n < 0) {
    console.log("Número negativo!");
    if(n % 2 == 0){
        console.log("O número é par");
    }
    else {
        console.log("O número é impar");
    }
} 
else {
    console.log("O número é positivo");
}