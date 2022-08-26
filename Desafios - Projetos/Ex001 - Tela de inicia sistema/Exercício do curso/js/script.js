function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    //var hora = 15

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'image/foto1.png'
        document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'image/foto2.png'
        document.body.style.background = '#b9846f'
    }

    else {
        //Boa noite!
        img.src = 'image/foto3.png'
        document.body.style.background = '#515154'
    }
}