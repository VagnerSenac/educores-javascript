// Declarando a função
function Media(a, b, c, d) {
     var media = (a+b+c+d) / 4;
     if(media >= 7) {
          return 'aprovado(a) com média: ' + media;
     }
     else{
          return 'reprovado(a) com média: ' + media;
     }
}

// Criando as variáveis
var nome = '';
var nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0;

// Solicitando ao usuário o nome do(a) aluno(a)
nome = prompt('Digite o nome do(a) aluno(a)','');
// Mensagem para o usuário
alert('Informe as 4 notas do(a) aluno(a)');

// Solicitando as notas ao usuário
nota1 = parseFloat(prompt('Digite a primeira nota', ''));
nota2 = parseFloat(prompt('Digite a segunda nota', ''));
nota3 = parseFloat(prompt('Digite a terceira nota', ''));
nota4 = parseFloat(prompt('Digite a quarta nota', ''));

// Mostrando o resultado
document.getElementById('teste').innerHTML += 'O(a) aluno(a) ' + 
nome + ' está ' + Media(nota1, nota2, nota3, nota4);