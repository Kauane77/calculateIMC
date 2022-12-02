//separando as responsibilidades; é um objeto que abrir e fechar o modal
export const Modal = {

    // pegando o modal
    // essa é para abrir e fechar o modal
    wrapper: document.querySelector('.modal-wrapper'),
    // pegar a mensagem
    message: document.querySelector('.modal .title span'),
    //botão x para fechar o modal
    buttonClose: document.querySelector('.modal button.close'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
}
}

// fechar o modal, evento de clique
Modal.buttonClose.onclick = () => {
    Modal.close()
}

// fazer o modal fechar pelo teclado (esq)
window.addEventListener('Keydown', handleKeydown)

function handleKeydown(event) {
    // se o key(clicar no teclado) for na tecla escape (esq)
    if (event.Key === 'Escape') {
    // o Modal fecha
        Modal.close()
    }
}
    