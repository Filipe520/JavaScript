function mainCima() {
    document.getElementById('valor01').style.color = 'white'
    document.getElementById('parag01').style.marginLeft = '70px';    
    document.getElementById('parag01').style.transition = '1s'

    document.getElementById('valor02').style.color = 'white'
    document.getElementById('parag02').style.marginLeft = '70px'
    document.getElementById('parag02').style.transition = '1s'

    document.getElementById('valor03').style.color = 'white'
    document.getElementById('parag03').style.marginLeft = '70px'
    document.getElementById('parag03').style.transition = '1s'
}
function mainFora() {
    document.getElementById('parag01').style.marginLeft = '0px'
    document.getElementById('valor01').style.color = 'rgb(167, 167, 167)'
    
    document.getElementById('parag02').style.marginLeft = '0px'
    document.getElementById('valor02').style.color = 'rgb(167, 167, 167)'

    document.getElementById('parag03').style.marginLeft = '0px'
    document.getElementById('valor03').style.color = 'rgb(167, 167, 167)'
}
function valor01() {
    document.getElementById('valor01').classList.add('bloco')
}

function mauseFora01() {
    document.getElementById('valor01').style.transition = '1s'
    document.getElementById('valor01').classList.remove('bloco')
}

function valor02() {
    document.getElementById('valor02').classList.add('bloco')
}

function mauseFora02() {
    document.getElementById('valor02').style.transition = '1s'
    document.getElementById('valor02').classList.remove('bloco')
}

function valor03() {
    document.getElementById('valor03').classList.add('bloco')
}

function mauseFora03() {
    document.getElementById('valor03').style.transition = '1s'
    document.getElementById('valor03').classList.remove('bloco')
}


function butaoD(e) {
    if (e.type == 'click') {
        
        document.getElementById('butao').classList.add('butao')
        document.getElementById('butao').style.backgroundColor = 'rgb(68, 68, 68)'
        document.getElementById('butao').style.width = '100px'
        
        let enter01 = document.getElementById('valor01').value
        let enter02 = document.getElementById('valor02').value
        let enter03 = document.getElementById('valor03').value
        

                        // A VEREÁVEL ESTÁ VAZIA?
        if (enter01 == '' || enter02 == '' || enter03 == ""|| enter03 == 0 || enter01 > enter02) {
            
            // Ser tiver vazia não vai exercutar o programa.
            let res01 = document.getElementById('valorResultado')
            res01.innerHTML = 'Por favor digite um valor <strong id="strong01">VALIDO!</strong>'
            res01.style.fontSize = '1.2em'
        } else {

            // Agora ser tiver com valor valido, vai executar o programa.
            console.log('As vareável está com valor.')

            let valorResultado = document.getElementById('valorResultado')

            document.getElementById('resultado').style.display = 'block'

            for (let cont = Number(enter01); cont <= Number(enter02); cont += Number(enter03)) {
                    document.getElementById('valorResultado').innerHTML += cont + '<strong id="strong02"> &#9755; </strong>'
                    if (cont == Number(enter02)) {
                        document.getElementById('valorResultado').innerHTML += '&#10003;'
                    }


                }
            }
        }
    }

    function butaoF() {
        document.getElementById('butao').classList.remove('butao')
        document.getElementById('butao').style.backgroundColor = 'rgb(209, 209, 209)'
    
        document.getElementById('butao').style.width = '60px'
        
        document.getElementById('butao').style.transition = '1s'
}