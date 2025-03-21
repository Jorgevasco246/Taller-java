const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    let operador1 = document.getElementById('operador1').value
    let signos = document.getElementById('signos').value
    let operador2 = document.getElementById('operador2').value

    const textofinal = Mi nombre es  ${ operador1 }, mi edad es ${ signos } y naci el ${ operador2 };

    document.getElementById('resultado').textContent = textofinal
})