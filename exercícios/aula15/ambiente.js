let num = [5, 8, 2, 9, 3] //array
num.sort()
num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}



//num[3]=6 altera o índice do conteúdo
//num.push(1) adiciona um novo elemento já com o índice nele
//num.sort() adiciona os elementos em ordem crescente
