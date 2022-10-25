let h1 = document.querySelector('h1')
h1.innerHTML = 'Eventos DOM'
h1.style.fontFamily = 'Arial'
h1.style.fontSize = '1.5em'

let p1 = document.querySelector('#resposta')

p1.addEventListener('mouseenter', entrou)
p1.addEventListener('click', clicou)
p1.addEventListener('mouseout', sair)

function entrou() {
        p1.classList.remove('saiu')
        p1.classList.add('entrou')
        p1.innerHTML = 'Estou dentro'
}

function clicou() {
        p1.classList.add('clicou')
        p1.innerHTML = 'Clicou'
}

function sair() {
        p1.classList.remove('clicou')
        p1.classList.remove('entrou')
        p1.innerHTML = 'Estou forá'
        p1.classList.add('saiu')
}