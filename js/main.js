let qtdCartas = 0
let primeiraCarta = ''
let segundaCarta = ''
let travaVirar = false
let contador = 0
let relogioSeg = 0
let relogioMin = 0
let relogioFunc = ''
let novoJogo = ''


const main = document.querySelector('#main')

function pegarCartas() {

    while (qtdCartas > 14 || qtdCartas < 4 || qtdCartas % 2 !== 0) {
        qtdCartas = parseInt(prompt(`Olá, com quantas cartas você quer jogar? Escolha números pares de 4 a 14`));
    }

}

pegarCartas()

function relogio() {

    relogioFunc = setInterval(() => {
        relogioSeg++
        if (relogioSeg < 10) {
            relogioSeg = '0' + relogioSeg
        }
        if (relogioSeg > 59) {
            relogioSeg = '00'
            relogioMin++
        }
        if (relogioMin < 10) {
            document.querySelector('section').innerHTML = `0${relogioMin}:${relogioSeg}`
        } else {
            document.querySelector('section').innerHTML = `${relogioMin}:${relogioSeg}`
        }
    }, 1000)
}
relogio()

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
    <div class="cartao" data-cartao="${cartas[i]}" data-identifier="card">
    <img class="cartao-frente" src="./Assets/${cartas[i]}.gif" data-identifier="front-face">
    <img class="cartao-verso" src="./Assets/front.png" data-identifier="back-face">
    </div>
    <div class="cartao" data-cartao="${cartas[i]}" data-identifier="card">
    <img class="cartao-frente" src="./Assets/${cartas[i]}.gif" data-identifier="front-face">
    <img class="cartao-verso" src="./Assets/front.png" data-identifier="back-face">
    </div>
    `
}

const cartao = document.querySelectorAll('.cartao')
cartao.forEach(el => el.addEventListener('click', virarCarta))

function virarCarta() {
    if (travaVirar) return false
    contador++

    this.classList.add('virar')

    if (primeiraCarta == '') {
        primeiraCarta = this
        primeiraCarta.removeEventListener('click', virarCarta)
        return false
    }
    segundaCarta = this

    verificarIgualdade()
    finalizarJogo()
}

const rand = document.querySelectorAll('.cartao')

function aleatorio() {

    for (let i = 0; i < rand.length; i++) {
        let random = Math.floor(Math.random() * 1000)

        rand[i].style.order = random
    }

}

aleatorio()


function verificarIgualdade() {

    let igual = primeiraCarta.dataset.cartao === segundaCarta.dataset.cartao

    if (!igual) {
        desabilitarVirar()
        primeiraCarta.addEventListener('click', virarCarta)
    } else {
        limparVariaveis(igual)
    }

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

function finalizarJogo() {
    const completa = document.querySelectorAll('.completa')

    setTimeout(() => {
        if (completa.length == qtdCartas) {

            if (relogioMin < 1) {
                alert(`Parabéns, você ganhou com ${contador} jogadas. Com o tempo de: ${relogioSeg} segundos.`)
                recomecar()
            } else {
                if (relogioMin < 2 && relogioMin >= 1) {
                    alert(`Parabéns, você ganhou com ${contador} jogadas. Com o tempo de: 0${relogioMin} minuto e ${relogioSeg} segundos.`)
                    recomecar()
                } else if (relogioMin < 10 && relogioMin >= 2) {
                    alert(`Parabéns, você ganhou com ${contador} jogadas. Com o tempo de: 0${relogioMin} minutos e ${relogioSeg} segundos.`)
                    recomecar()
                } else {
                    alert(`Parabéns, você ganhou com ${contador} jogadas. Com o tempo de: ${relogioMin} minutos e ${relogioSeg} segundos.`)
                    recomecar()
                }
            }
        }

    }, 2000)

    if (completa.length == qtdCartas) {
        clearInterval(relogioFunc)
    }

}

function recomecar() {
    novoJogo = prompt('Gostaria de jogar novamente?')

    if (novoJogo == 'sim' || novoJogo == 's' || novoJogo == 'yes' || novoJogo == '') {
        window.location.reload()
    } else {
        alert('Ah que pena! Até logo.')
    }
}