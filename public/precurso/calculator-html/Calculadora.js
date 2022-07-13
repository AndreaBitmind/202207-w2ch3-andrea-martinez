class Calculadora {
  addition(num1, num2) {
    return evaluarEntero(num1 + num2);
  }

  substraction(num1, num2) {
    return evaluarEntero(num1 - num2);
  }

  division(num1, num2) {
    return evaluarEntero(num1 / num2);
  }

  multiplication(num1, num2) {
    return evaluarEntero(num1 * num2);
  }
}

function evaluarEntero(result) {
  if (result - Math.floor(result) === 0) {
    return result;
  } else {
    return parseFloat(result).toFixed(3);
  }
}
