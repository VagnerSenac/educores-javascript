
function menssagem(){
    alert("Olá, seja bem vindo")
}
function somar(){
    let v1, v2
    v1 = parseFloat(document.getElementById("valor1").value) 
    v2 = parseFloat(document.getElementById("valor2").value)
    document.getElementById("resultado").value = v1 + v2

}