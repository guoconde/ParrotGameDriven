let qtdCartas = 14
let nome = ''
let primeiraCarta = ''
let segundaCarta = ''
let travaVirar = false

const main = document.querySelector('#main')


let cartas = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
]

for (let i = 0; i < qtdCartas / 2; i++) {

    main.innerHTML += `
    <div class="cartao" data-cartao="${cartas[i]}">
    <img class="cartao-frente" src="./Assets/${cartas[i]}.gif">
    <img class="cartao-verso" src="./Assets/front.png">
    </div>
    <div class="cartao" data-cartao="${cartas[i]}">
    <img class="cartao-frente" src="./Assets/${cartas[i]}.gif">
    <img class="cartao-verso" src="./Assets/front.png">
    </div>
    `
}

function virarCarta() {
    if (travaVirar) return false

    this.classList.add('virar')

    if (primeiraCarta == '') {
        primeiraCarta = this

        return false
    }
    segundaCarta = this

    verificarIgualdade()
}

function aleatorio() {
    const rand = document.querySelectorAll('.cartao')

    for (let i = 0; i < rand.length; i++) {
        let random = Math.floor(Math.random() * qtdCartas)

        rand[i].style.order = random
    }


}

aleatorio()

function verificarIgualdade() {

    let igual = primeiraCarta.dataset.cartao === segundaCarta.dataset.cartao

    !igual ? desabilitarVirar() : limparVariaveis(igual)
}

function desabilitarVirar() {
    travaVirar = true

    setTimeout(() => {
        primeiraCarta.classList.remove('virar')
        segundaCarta.classList.remove('virar')

        limparVariaveis()
    }, 1000)
}

function limparVariaveis(igual = false) {

    if (igual) {
        primeiraCarta.removeEventListener('click', virarCarta)
        primeiraCarta.classList.add('completa')

        segundaCarta.removeEventListener('click', virarCarta)
        segundaCarta.classList.add('completa')
    }

    travaVirar = false
    primeiraCarta = ''
    segundaCarta = ''

}


const cartao = document.querySelectorAll('.cartao')
cartao.forEach(el => el.addEventListener('click', virarCarta))

// for (let i = 0; i < qtdCartas / 2; i++) {

//     main.innerHTML += `
//         <div class="cartao">
//             <img class="cartao-frente ${cartas[i]}" src="./Assets/${cartas[i]}.gif">
//             <img class="cartao-verso" src="./Assets/front.png">
//         </div>
//         `
// }

// function getName() {

//     while (nome == '' || nome == null) {
//         nome = prompt('Qual o seu nome?')
//     }

//     getCards()
// }


// function getCards() {

//     while (qtdCartas > 14 || qtdCartas < 4 || qtdCartas % 2 !== 0) {
//         qtdCartas = parseInt(prompt("Com quantas cartas você quer jogar? Escolha números pares de 4 a 14"));
//     }

//     createGame()
// }
