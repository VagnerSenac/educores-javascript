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

$('#resultado').html(cliente.MontarCartao())

$('#botao-claro').on('click',function(){
    $('#pagina').attr('class','claro')
})
$('#botao-escuro').on('click',function(){
    $('#pagina').attr('class','escuro')
})

$("#modo").on('click',function(){ 
    $('#pagina').toggleClass('escuro')
    let nomeClasse = $('#pagina').attr('class')
    this.innerHTML  = (nomeClasse == 'claro escuro') ? 'Modo Claro' : 'Modo Escuro'
})


$('#botaoCadastrar').on('click', function(){
    validacao()
})

function validacao(){
let msgErro = ''


if($('#nome').val().length <= 3){
    $('#nome').css('border', '1px solid red')
    msgErro += 'O nome deve possuir mais de 3 letras<br>'
}else{
    $('#nome').css('border', 'border: 1px solid green')
}
if($('#telefone').val().length <= 9){
    $('#telefone').css('border', '1px solid red')
    msgErro += 'O telefone deve possuir mais de 9 letras<br>'
}else{
    $('#telefone').css('border', 'border: 1px solid green')
}
$('.erro').innerHTML = msgErro
$('.erro').css('color', 'red')
if(msgErro == ''){
    $('.cadastro').fadeOut();
    $('<p>Cadastrado com sucesso</p>').insertAfter('.cadastro').css('display','none').slideToggle();
}
}


$('#mudar').on('click',function(){
    $('#link').attr('href', 'https://sp.senac.br/americana')
    $('#link').text('Senac Americana')
    $('#link').attr('target','_blank')
    $('#fotos').attr('src','https://picsum.photos/100/100')
})