function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas. ${bom}`
    if (hora >= 0 && hora < 12 ) {
        //de dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#fee86d'
    } else if (hora >- 12 && hora < 18) {
        //de tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#d18f37'
    } else {
        // de noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#14192e'
    }
 }