// Declarando a função
function Media(a, b, c, d) {
     return (a+b+c+d) / 4;
}


// Criando as variáveis
var nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0;


// Mensagem para o usuário
alert('Informe as 4 notas do(a) aluno(a)');


// Solicitando as notas para o usuário
nota1 = parseFloat(prompt('Digite a primeira nota'));
nota2 = parseFloat(prompt('Digite a segunda nota'));
nota3 = parseFloat(prompt('Digite a terceira nota'));
nota4 = parseFloat(prompt('Digite a quarta nota'));

// Mostrando o resultado
document.getElementById('teste').innerHTML += Media(nota1, nota2, nota3, nota4);
