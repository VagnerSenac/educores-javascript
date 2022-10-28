let cliente = {
    'nome':'João',
    'sobrenome':'Silva',
    'anoNascimento': 1980,
    'estado':'SP',
    'NomeCompleto': function(){
        return this.nome + ' ' + this.sobrenome
    },
    'Idade' : function(){
        let data = new Date()
        let anoAtual = data.getFullYear()
        return anoAtual - this.anoNascimento
    },
    'MontarCartao':function(){
            let cartao = ''
            cartao += '<h4>' + this.NomeCompleto() + '</h4>'
            cartao += '<em>' + this.estado.toUpperCase() + ' - '
            cartao += this.Idade() + ' anos </em>'
            return cartao
    
    }
}


document.querySelector("#resultado").innerHTML = cliente.MontarCartao()

console.log(cliente)

document.querySelector("#botao-claro").addEventListener('click',function(){
    document.querySelector('#pagina').className = 'claro'
})
document.querySelector("#botao-escuro").addEventListener('click',function(){
    document.querySelector('#pagina').className = 'escuro'
})



document.querySelector("#modo").addEventListener('click',function(){
    let nomeClasse = document.querySelector('#pagina').className
    if (nomeClasse == 'claro' || nomeClasse == '') {
        document.querySelector('#pagina').className = 'escuro' 
        this.innerHTML = 'Modo Claro' 
    } else if (nomeClasse == 'escuro'){
        document.querySelector('#pagina').className = 'claro' 
        this.innerHTML = 'Modo Escuro' 
    }
   
})


document.querySelector('#botaoCadastrar').addEventListener ('click', function(){
    validacao()
})

function validacao(){
let nome = document.querySelector('#nome')
let telefone = document.querySelector('#telefone')
let msgErro = ''

if(nome.value.length <= 3){
    nome.style = 'border: 1px solid red'
    msgErro += 'O nome deve possuir mais de 3 letras<br>'
}else{
    nome.style='border: 1px solid green'
}
if(telefone.value.length <= 9){
    telefone.style = 'border: 1px solid red'
    msgErro += 'O telefone deve possuir mais de 9 letras<br>'
}else{
    telefone.style='border: 1px solid green'
}
document.querySelector('.erro').innerHTML = msgErro
document.querySelector('.erro').style = 'color:red'
}