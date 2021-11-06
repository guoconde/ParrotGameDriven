let howManyCards = parseInt(prompt('Quantas Cartas?'))
let cardResults = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']

function createGame() {

    // if (howManyCards < 4 || howManyCards > 14 || howManyCards % 2 == 1 || howManyCards !== null || howManyCards !== '') {
    //     howManyCards = parseInt(prompt('Favor inserir um número váçido de cartas. Deve ser um número par e estar entre 4 e 14.'))
    // } else {
    for (let i = 0; i < howManyCards / 2; i++) {
        const main = document.querySelector('main')
        main.innerHTML += `
                <div class="card ${cardResults[i]}" data-identifier="card">
                    <div class="card-inner" onclick="this.classList.toggle('hover')">
                        <div class="card-front" data-identifier="front-face">
                            <img src="./Assets/front.png">
                        </div>
                        <div class="card-back" data-identifier="back-face">
                        <img src="./Assets/${cardResults[i]}.gif">
                        </div>
                    </div>
                </div>
                <div class="card ${cardResults[i]}" data-identifier="card">
                    <div class="card-inner" onclick="this.classList.toggle('hover')">
                        <div class="card-front" data-identifier="front-face">
                            <img src="./Assets/front.png">
                        </div>
                        <div class="card-back" data-identifier="back-face">
                        <img src="./Assets/${cardResults[i]}.gif">
                        </div>
                    </div>
                </div>
                `
        // }
    }
}

function verify() {
    const contains = document.querySelectorAll('.bobrossparrot')

    contains.classList.add('hover')


}

createGame()