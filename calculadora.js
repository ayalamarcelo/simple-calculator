function performOperation(operator) {
    let op1 = parseFloat(document.getElementById('op1').value);
    let op2 = parseFloat(document.getElementById('op2').value);
    let resultElement = document.getElementById('resultado');

    if (isNaN(op1) || isNaN(op2)) {
      resultElement.textContent = 'Por favor, ingresá números válidos.';
      return;
    }

    switch (operator) {
      case '+':
        resultElement.textContent = 'Resultado: ' + (op1 + op2);
        break;
      case '-':
        resultElement.textContent = 'Resultado: ' + (op1 - op2);
        break;
      case '*':
        resultElement.textContent = 'Resultado: ' + (op1 * op2);
        break;
      case '/':
        if (op2 !== 0) {
          resultElement.textContent = 'Resultado: ' + (op1 / op2);
        } else {
          resultElement.textContent = 'No se puede dividir por 0.';
        }
        break;
      default:
        resultElement.textContent = 'Operador no válido.';
    }
  }
