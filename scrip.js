document.getElementById('calcular').addEventListener('click', function () {
    let operador1 = document.getElementById('operador1').value;
    let signo = document.getElementById('signos').value;
    let operador2 = document.getElementById('operador2').value;
   
    operador1 = parseFloat(operador1);
    operador2 = parseFloat(operador2);
    let resultado;

    if (signo === "+") {
        resultado = operador1 + operador2;
    } else if (signo === "-") {
        resultado = operador1 - operador2;
    } else if (signo === "*") {
        resultado = operador1 * operador2;
    } else if (signo === "**") {
        resultado = operador1 ** operador2;
    } else if (signo === "%") {
        resultado = operador1 % operador2;
    } else if (signo === "/") {
        if (operador2 !== 0) {
            resultado = operador1 / operador2;
        } else {
            resultado = "error no se puede dividir por 0!";
        }
    } else {
        resultado = "error operador no valido!";
    }

    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
});