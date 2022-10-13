//operadores de incremento / drecremento

let n1 = 10, n2 = 2

n1 = n1 + 1
document.write(n1 + "<br>")
document.write(n1 + 1 + "<br>")
document.write(n1++ + "<br>")
document.write(n1 + "<br>")
document.write(--n1 + "<br>")
//let i = 0
//while(i < 5){
   /// document.write("Olá <br>")
  //  i++
//}


// operador relacional
n1 = 10
document.write((n1 > n2) + "<br>")
document.write((n1 < n2) + "<br>")
document.write((n1  != n2) + "<br>")
document.write((n1 == n2) + "<br>")
document.write((n1 >= 10) + "<br>")
document.write((n1 <= 6) + "<br>")
document.write((n1 == "10") + "<br>")

let n3 = "10"
document.write((n1 == n3) + "<br>")
document.write((n1 === n3) + "<br>")

/*operadores lógicos
 & --> And (e)
 Todos os testes devem ser verdadeiros para retornar verdadeiro

 10 > 5  --> True
 10 > 20 --> False
 10 > 5   && 10 > 20  -->  FALSE
 */

document.write("<br><br><br><br>")
document.write(10>5 && 10>20)
document.write("<br>")



 /*
 
 ||  ---> or (ou)

 Se uma expressão for verdadeira, o retorno é verdadeiro
 */

 document.write(10>12 || 10>20)
 document.write("<br>")
 /*
  ! -->   Not (não)
*/

document.write(!true)
document.write("<br>")
document.write(10>5)
document.write("<br>")
document.write(!10>5)
document.write("<br>")
