import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

// váriaveis - variables  
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//fechar a janela de erro ao digitar no campo
//oninput vai verificar se o input está alterando alguma coisa nele
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

//criar e atribuir função a um evento
//obs: padrão de um evento submit é recarregar a página
// preventDefault significa: evite o padrão , que é recarregar a página

form.onsubmit = event => {
    event.preventDefault()

//agora quero pegar os valores que eu colocar dentro do input que é altura e peso
const weight = inputWeight.value
const height = inputHeight.value

// notANumber vai retornar um booleano, verdadeiro ou falso
//weightOrHeightIsNotANumber ( se peso ou altura não for igual a número)
const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

if (weightOrHeightIsNotANumber) {
   AlertError.open()
    return;
}

AlertError.close()

const result = calculateIMC(weight, height)
displayResultmessage(result) 
} 
 
function displayResultmessage(result) {
    const message = `Seu IMC é de ${result}`

    //para aparecer a mensagem
    Modal.message.innerText = message
    // para aparecer o modal
    Modal.open()
}

