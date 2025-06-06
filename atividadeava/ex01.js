
function anoNovo(minutos) {
    let segundos = minutos * 60;

    for (let i = segundos; i >= 0; i--) {
        console.log("Falta", i, "segundos");
        if (i == 5) {
            console.log("feliz ano novo!!");
        }
    }
}

anoNovo(2)










