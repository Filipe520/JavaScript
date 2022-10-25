let enter01 = 5
let enter02 = 7
let enter03 = 1

// A VEREÁVEL ESTÁ VAZIA?
if (enter01 == '' || enter02 == '' || enter03 == ""|| enter03 == 0 || enter01 > enter02) {
    // Ser tiver vazia não vai exercutar o programa.
    console.log('Por favor digite um valor valido.')
} else {
    // Agora ser tiver com valor valido, vai executar o programa.
    console.log('As vareável está com valor.')

    for (let cont = Number(enter01); cont <= Number(enter02); cont += Number(enter03)) {
            console.log(`Número: ${cont}`)
            if (cont == Number(enter02)) {
                console.log('Emoji')
            }
        }
}


let nota01 = 1
let nota02 = 5

while (nota01 <= nota02) {
    for (let contado = nota01; contado >= nota02; cont++){
        console.log('Número: ' + contado)
    }
    nota01 ++
}