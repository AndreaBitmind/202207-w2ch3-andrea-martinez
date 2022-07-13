function calculatorPro() {
  let numberList = [];
  let newNumber;

  let sumaTotal;
  let restaTotal;
  let diviTotal;
  let multiplicaTotal;

  do {
    newNumber = prompt("Añade un número nuevo o apreta cancelar");
    const newNumber1 = parseFloat(newNumber);

    //damos error cuando se ingresa letra en vez de número

    if (Number.isNaN(newNumber1) && newNumber !== null) {
      alert("Error, el campo debe ser un valor numérico");
    } else if (newNumber !== null) {
      numberList.push(newNumber1);
    }
  } while (newNumber !== null);

  sumaTotal = numberList[0];
  restaTotal = numberList[0];
  diviTotal = numberList[0];
  multiplicaTotal = numberList[0];

  // damos la raíz cuadrada cuando se mete solo un número en el array
  if (numberList.length === 1) {
    let raiz = Math.sqrt(parseFloat(numberList[0]));

    console.log(`La raíz cuadrada de ${numberList[0]} es ${raiz}`);
  }

  //calculamos todas las operaciones cuando se meten los números
  else {
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

function otraOperacion() {
  let pregunta = prompt(
    "Deseas volver a realizar otra operación? Escribe SI o NO"
  );
  let preguntaToUpper = pregunta.toUpperCase();

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
