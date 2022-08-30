function verificar() {
    // DATA
    let data = new Date()
    let ano = data.getFullYear()
    // ano de nascimento
    let nasc = window.document.getElementById('nasc')
    // resultado
    let res = window.document.getElementById('res')
    
    if (nasc.value.lenght == 0 || Number(nasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        let msex = document.getElementsByName('radsex')
        let idade = ano - Number(nasc.value)
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //HOMEN
        let gênero = ''
        if (msex[0].checked) {
            //CRIANÇA
            if (idade >= 0 && idade <= 10) {
                gênero = 'Criança'
                img.setAttribute('src', 'image/sex-masculino/crianca-m.png')
            }
            // JOVEM
            else if (idade < 21) {
                gênero = 'Jovem'
                img.setAttribute('src', 'image/sex-masculino/jovem-m.png')
            }
            //ADULTO
            else if (idade < 50) {
                gênero = 'Homen'
                img.setAttribute('src', 'image/sex-masculino/adulto-m.png')
            }
            //IDOSO
            else {
                gênero = 'Idoso'
                img.setAttribute('src', 'image/sex-masculino/idoso-m.png')
            }
        }
        
         // MULHER
        else if (msex[1].checked) {
            gênero = ''
            //CRIANÇA
            if (idade >= 0 && idade < 10) {
                gênero = 'Criança'
                img.setAttribute('src', 'image/sex-feminino/crianca-f.png')
            }
            //JOVEM
            else if (idade < 21) {
                gênero = 'Jovem'
                img.setAttribute('src', 'image/sex-feminino/jovem-f.png')
            }
            //ADULTO
            else if (idade < 50) {
                gênero = 'Mulher'
                img.setAttribute('src', 'image/sex-feminino/adulto-f.png')
            }
            //IDOSA
            else {
                gênero = 'Idosa'
                img.setAttribute('src', 'image/sex-feminino/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}