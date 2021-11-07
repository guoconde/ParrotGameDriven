let qtdCartas = 14
let nome = ''

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
        <div class="cartao">
            <img class="cartao-frente ${cartas[i]}" src="./Assets/${cartas[i]}.gif">
            <img class="cartao-verso" src="./Assets/front.png">
        </div>
        <div class="cartao">
            <img class="cartao-frente ${cartas[i]}" src="./Assets/${cartas[i]}.gif">
            <img class="cartao-verso" src="./Assets/front.png">
        </div>
        `
}

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

