console.log("Encontro 2")

// Sintaxe Javascript, variáveis e tipos de dados

// Variáveis

nome = "Vagner"
console.log(nome)
var nome = "José"
console.log(nome)
let sobrenome = "Lourenço"
console.log(sobrenome)

//Tipos de dados

let idade
let apelido

idade = 15
apelido = "Gui"
console.log(typeof idade)
console.log(typeof apelido)

let concorda = true
console.log(typeof concorda)

let carros = ['gol', 'corsa', 'uno']
console.log(typeof carros)

let pessoa = {'nome': 'Vagner', 'iadde' : '4'}
console.log(typeof pessoa)

document.getElementById("titulo").style.backgroundColor = "lightgreen"
document.getElementById("titulo").innerText = "Melhor Sabor"
console.log(titulo)

let tituloDaPagina
tituloDaPagina = document.getElementById("subtitulo")
console.log(tituloDaPagina)

let elementoSubtitulo
elementoSubtitulo = document.getElementById("subtitulo")
console.log(elementoSubtitulo)

elementoSubtitulo.style.backgroundColor = "lightblue"
elementoSubtitulo.innerText = "Seu restaurante certo"

let frutas = ["🍮","🥫","🍕"]
console.log(frutas)
console.dir(frutas)
console.table(frutas)

document.write("<h3>Cardápio</h3>")
document.write(frutas)

alert("Bom dia")
let nomeCompleto = prompt("Qual seu nome?", "Digite aqui")
alert("Olá " + nomeCompleto + " espero que goste")
document.write("<br>nome: " + nomeCompleto)

