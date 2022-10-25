let p1 = document.getElementsByTagName('p')[0]
let corpo = window.document.body

          //Mudando o background Color

// corpo.style.backgroundColor = 'black'        

         // Mudando a cor das letras e o background
         
// window.document.write(p1.innerText)
// p1.style.color = 'blue'
// p1.style.backgroundColor = 'violet'

        // Olhar só o innerText ele não pegar as Tags filho do elemento, como aconteceu aqui ela não pegou a tag Strong que tá dentro da 'tag p'.

// document.write(p1.innerText + '<br>')

         // Olhar só o innerHTML pegar a Tag toda inclusive as tags  filhos do elemento.

// document.write(p1.innerHTML)

                // Selecionando classes

// let class1 = document.getElementsByClassName('p2')[1]
// class1.innerHTML = 'Está usando array 0'


// var d = window.document.querySelector('header')
// d.innerHTML = 'Usando querySelector'
// d.style.color = 'white'
// d.style.fontFamily = 'Arial'