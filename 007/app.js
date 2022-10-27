function somar(n1,n2=0){
  
    let total = n1 + n2
    document.write(total)
    document.write('<br>')
}

somar(10,9)
somar(5,3)
somar(100,88)
somar(10)

function listarfilmes(filmes){
    for(let i=0; i < filmes.length; i++){
    document.write(filmes[i])
    document.write('<br>')
}
}
let arrayFilmes = ['Batman', 'Era do Gelo', 'Superman']
listarfilmes(arrayFilmes)

// adicionar evento para um botão
document.getElementById('botao-somar').addEventListener('click',function(){
    let valor1 = parseFloat(document.getElementById('valor1').value)
    let valor2 = parseFloat(document.getElementById('valor2').value)
    somar(valor1,valor2)
})


//objetos

let classificacao = [3,5,4]
let filmes = ['Batman', 'Era do Gelo', 'Superman']
for(let i = 0; i <filmes.length; i++){
    document.write(filmes[i] + ' Nota: ' + classificacao[i] + '<br>')
}

