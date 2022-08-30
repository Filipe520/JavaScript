function carregar() {
    let agora = new Date()
    let hora = agora.getHours()
    
    if (hora > 0 && hora < 12) {
        window.document.body.style.backgroundColor = 'rgb(228, 206, 148)'

        //Bom dia!
    
        let usuario = window.document.getElementById('img_usuario')
    
        usuario.style.display = "block"
    
        let horario = window.document.getElementById('horario')
        horario.innerHTML = `Agora são ${hora} horas.`;
    }
    
    else if (hora >= 12 && hora < 19) {
        window.document.body.style.backgroundColor =  'rgb(209, 163, 133)'

        //Boa tarde!
    
        let usuario2 = window.document.getElementById('img_usuario2')
    
        usuario2.style.display = "block"
    
        horario.innerHTML = `Agora são ${hora} horas.`;
    }
    
    else if (hora >= 19 && hora < 24) {
        window.document.body.style.backgroundColor = 'rgb(60, 61, 65)'

        //Boa Noite
    
        let usuario3 = window.document.getElementById('img_usuario3')
    
        usuario3.style.display = "block"
    
        horario.innerHTML = `Agora são ${hora} horas.`;
    }
}
