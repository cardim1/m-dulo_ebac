const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const formulario = document.getElementById('formulario')



function validaForm() {
    if (campoB.value > campoA.value) {
        return true
    } else {
        return false
    }
}

const container = document.getElementById('container')
const novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML = ''

formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    if (validaForm()) {
        novoParagrafo.textContent = 'Its valid, congratulations!'
        container.appendChild(novoParagrafo)
    } else {
        novoParagrafo.textContent = 'Not valid. B field does not a bigger than A field'
        container.appendChild(novoParagrafo)
    }


})