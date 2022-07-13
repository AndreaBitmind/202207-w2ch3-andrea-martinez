const numberUser1 = prompt("Ingrese el primer valor");
const number1 = parseFloat(numberUser1);

const numberUser2 = prompt("Ingrese el segundo valor");
const number2 = parseFloat(numberUser2);

const results = [];

let sumaTotal;
let restaTotal;
let diviTotal;
let multiplicaTotal;

function calculator() {
  if (
    Number.isNaN(number1) ||
    (Number.isNaN(number2) && numberUser2 !== null)
  ) {
    // eslint-disable-next-line no-throw-literal
    throw "Error, el campo debe ser un valor numérico";
  }

  // damos la raíz cuadrada cuando se mete solo el primer número y el segundo se da a cancelar
  else if (number1 > 0 && numberUser2 === null) {
    const raiz = Math.sqrt(parseFloat(number1));

    console.log(`La raíz cuadrada de ${number1} es ${raiz}`);
  } else {
    const suma = (variable1, variable2) => variable1 + variable2;
    sumaTotal = suma(number1, number2);

    const resta = (variable1, variable2) => variable1 - variable2;
    restaTotal = resta(number1, number2);

    const multiplicar = (variable1, variable2) => variable1 * variable2;
    multiplicaTotal = multiplicar(number1, number2);

    const dividir = (variable1, variable2) => variable1 / variable2;
    diviTotal = dividir(number1, number2);
  }

  if (Number.isInteger(sumaTotal)) {
    results.push(sumaTotal);
  } else {
    results.push(sumaTotal.toFixed(3));
  }

  if (Number.isInteger(restaTotal)) {
    results.push(restaTotal);
  } else {
    results.push(restaTotal.toFixed(3));
  }

  if (Number.isInteger(multiplicaTotal)) {
    results.push(multiplicaTotal);
  } else {
    results.push(multiplicaTotal.toFixed(3));
  }

  if (Number.isInteger(diviTotal)) {
    results.push(diviTotal);
  } else {
    results.push(diviTotal.toFixed(3));
  }

  console.log(
    `La suma de los número es igual a ${results[0]}, la resta es ${results[1]}, la multiplicación es ${results[2]}, la división es ${results[3]}`
  );
}

calculator();
