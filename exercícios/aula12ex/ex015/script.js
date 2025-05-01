function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados  e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'homem'
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'menino.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-homem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'homem-adulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
       } else if (fsex[1].checked) {
         genero = 'mulher'
         if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'menina.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'jovem-mulher.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'mulher-adulta.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}