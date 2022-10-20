let filmes = [
    "Star Wars VI - O Retorno do Jedi",
    "Harry Potter e a Pedra Filosofal",
    "Rock V",
    "Homen-Aranha",
    "A Bruxa",
    "Pantera Negra",
    "Vingadores",
    "Senhor dos Anéis"

]

document.getElementById("titulo").innerHTML = "Filmes"
let conteudo = document.getElementById("conteudo")
conteudo.innerHTML = filmes
conteudo.innerHTML += "<br><h3>Número de posição do Array</h3>"
conteudo.innerHTML += filmes.length
conteudo.innerHTML += "<ul>"
/*
let controle = 0
while(controle < 5){
    // Bloco de código
    conteudo.innerHTML += "<li>" + filmes[controle] + "</li>"
    controle++ //controle = controle + 1
}

for (let controle = 0; controle < filmes.length ; controle++){
    conteudo.innerHTML += "<li>" + filmes[controle] + "</li>"
}*/
// conteudo.innerHTML += "<li>" + filmes[1] + "</li>"
// conteudo.innerHTML += "<li>" + filmes[2] + "</li>"
// conteudo.innerHTML += "<li>" + filmes[3] + "</li>"
// conteudo.innerHTML += "<li>" + filmes[4] + "</li>"


//colocar em ordem alfabetica
filmes.sort()
filmes.forEach(function(elemento){
    conteudo.innerHTML += "<li>" + elemento + "</li>"
})




conteudo.innerHTML += "</ul>"
