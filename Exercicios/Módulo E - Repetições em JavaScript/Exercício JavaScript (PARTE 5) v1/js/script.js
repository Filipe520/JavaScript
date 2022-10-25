function contar() {
    let inicio = document.getElementById('txtI')
    let fim = document.getElementById('txtF')
    let passo = document.getElementById('txtP')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        
        // window.alert('[ERRO] Faltam dados!')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        res.innerHTML = 'Contando: <br>'

        if (i < f) {
            // Contagem crescente
            for (let cont = i; cont <= f; cont += p) {
                res.innerHTML += `${cont} &#9755; `
            } 
            res.innerHTML += '&#10003;'
        } else {
            // Contagem regressiva
            for (let cont02 = i; cont02 >= f; cont02 -= p) {
                res.innerHTML += `${cont02} &#9755; `
            } 
            res.innerHTML += '&#10003;'
        }
    }
}

function clicou01() {
    let inicio = document.getElementById('txtI')

    inicio.classList.add('blocoAnimacao')
}

function saiuInicio() {
    let inicio02 = document.getElementById('txtI')
    inicio02.classList.remove('blocoAnimacao')
    inicio02.style.transition = '1s'
}

function clicou02() {
    let fim = document.getElementById('txtF')

    fim.classList.add('blocoAnimacao')
}

function saiuFim02() {
    let fim = document.getElementById('txtF')
    fim.classList.remove('blocoAnimacao')
    fim.style.transition = '1s'
}

function clicou03() {
    let passo = document.getElementById('txtP')

    passo.classList.add('blocoAnimacao')
}

function saiuPasso03() {
    let passo = document.getElementById('txtP')

    passo.classList.remove('blocoAnimacao')
    
    passo.style.transition = '1s'
}

