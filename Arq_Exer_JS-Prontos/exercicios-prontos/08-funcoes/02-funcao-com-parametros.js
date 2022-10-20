//Declarando a função
function Soma(a, b){
     return a + b;
}

// Declarando as variáveis
var num1 = 0, num2 = 0;

// Solicitando os valores para o usuário
num1 = parseInt(prompt('Digite um número', ''));
num2 = parseInt(prompt('Digite outro número', ''));

// Mostrando o resultado na tela
document.getElementById('teste').innerHTML += Soma(num1, num2);