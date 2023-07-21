//Variaveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const button = document.querySelector('#button')
const troca = document.querySelector('#troca')

const inspirations = [
    'Seja gentil com a sua mente e o seu coração ',
    'Valorize as coisas simples que estão perto de você.',
    'A felicidade é algo que começa lá dentro da alma.',
    'As plantas também precisam de chuva para crescer🌱',
    'Depois de um temporal, sempre aparece um arco-íris🌈',
    'Escolha algo que te faz feliz para fazer hoje.',
    'Valorize-se sempre.',
    'Há tanta gente querendo te ver bem.',
    'Cada desafio leva a uma nova aprendizagem.',
    'A pressa impede que se aprecie a paisagem do caminho.',
]


//Eventos
document.addEventListener('keydown', function (press) {
    if (press.key == 'Enter') {
        toggleScreen()
    }
    pickInspirations()
})

function toggleScreen() {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');

}

button.addEventListener('click', toggleScreen)

function pickInspirations() {
    let allInspirations = inspirations.length
    let randomPhrase = Math.floor(Math.random() * allInspirations)
    document.querySelector('#phrase').innerText = `${inspirations[randomPhrase]}`
}