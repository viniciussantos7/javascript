var agora = new Date() //pega a hora exata que está agora.
var hora = agora.getHours
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) { //abaixo de meio-dia é bom dia
    console.log('Bom dia!')
} else if (hora <= 18) { // se for ABAIXO ou MENOR que 18 é boa tarde (else if porque pegamos if acima para colocarmos dentro do else)
    console.log('Boa Tarde!')
} else { //caso não seja nenhuma das opções acima é boa noite.
    console.log('Boa Noite')
}