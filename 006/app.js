let data = new Date()
let resposta = document.getElementById("resposta")
resposta.innerHTML = data
resposta.innerHTML += `<br>Dia da Semana: <b> ${data.getDay()}`

//SE
if (data.getDay() == 0) {
    resposta.innerHTML += "<br>Domingo"
} else if (data.getDay() == 1) {
    resposta.innerHTML += "<br>Segunda"
} else if (data.getDay() == 2) {
    resposta.innerHTML += "<br>Terça"
} else if (data.getDay() == 3) {
    resposta.innerHTML += "<br>Quarta"
} else if (data.getDay() == 4) {
    resposta.innerHTML += "<br>Quinta"
} else if (data.getDay() == 5) {
    resposta.innerHTML += "<br>Sexta"
} else if (data.getDay() == 6) {
    resposta.innerHTML += "<br>Sábado"
}

//Caso
switch (data.getDay()) {
    case 0:
        resposta.innerHTML += "<br>Domingo"
        break
    case 1:
        resposta.innerHTML += "<br>Segunda"
        break
    case 2:
        resposta.innerHTML += "<br>Terça"
        break
    case 3:
        resposta.innerHTML += "<br>Quarta"
        break
    case 4:
        resposta.innerHTML += "<br>Quinta"
        break
    case 5:
        resposta.innerHTML += "<br>Sexta"
        break
    case 6:
        resposta.innerHTML += "<br>Sábado"
        break

}

//Array
let diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]
resposta.innerHTML += `<br> ${diasDaSemana[data.getDay()]}`