function otraOperacion() {
  const pregunta = prompt(
    "Deseas volver a realizar otra operación? Escribe SI o NO"
  );
  const preguntaToUpper = pregunta.toUpperCase();

  function calculatorPro() {
    const numberList = [];
    let newNumber;

    do {
      newNumber = prompt("Añade un número nuevo o apreta cancelar");
      const newNumber1 = parseFloat(newNumber);

      if (Number.isNaN(newNumber1) && newNumber !== null) {
        alert("Error, el campo debe ser un valor numérico");
      } else if (newNumber !== null) {
        numberList.push(newNumber1);
      }
    } while (newNumber !== null);

    let sumaTotal = numberList[0];
    let restaTotal = numberList[0];
    let diviTotal = numberList[0];
    let multiplicaTotal = numberList[0];

    if (numberList.length === 1) {
      const raiz = Math.sqrt(parseFloat(numberList[0]));

      console.log(`La raíz cuadrada de ${numberList[0]} es ${raiz}`);
    } else {
      for (let i = 1; i < numberList.length; i++) {
        sumaTotal += numberList[i];
        restaTotal -= numberList[i];
        multiplicaTotal *= numberList[i];
        diviTotal /= numberList[i];
      }

      console.log(
        `La suma de los número es igual a ${sumaTotal}, la resta es ${restaTotal}, la multiplicación es ${multiplicaTotal}, la división es ${diviTotal}`
      );
    }
    otraOperacion();
  }

  calculatorPro();

  switch (preguntaToUpper) {
    case "SI":
      calculatorPro();
      break;

    case "NO":
      alert("Cerrando calculadoraPRO. Bye!");
      break;

    default:
      alert("Vuelve a introducir tu respuesta");
      otraOperacion();
      break;
  }
}

otraOperacion();
