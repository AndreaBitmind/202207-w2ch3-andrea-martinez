// Punto 1)

const usuario = prompt("Bienvenido a Skylab Airlines. ¿Cuál es tu nombre?");

console.log(`Bienvenido ${usuario}`);

// Enunciado

let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

//AIRLINES PRO

const adminPRO = () => {
  let accion;

  do {
    accion = prompt("Que quieres hacer? crear o eliminar vuelos?");

    if (accion) accion = accion.toLowerCase();
  } while (accion !== "crear" && accion !== "eliminar" && accion !== null);

  if (accion === null) {
    alert(`Que tengas un buen día ${usuario}`);
    return;
  } else {
    switch (accion) {
      case "crear":
        if (flights.length < 15) {
          crearVuelo();
          break;
        } else {
          alert(
            "Ya has alcanzado " + flights.length + ", ya no puedes añadir mas."
          );
          break;
        }
      case "eliminar":
        mostrarVuelos(flights);
        const id = +prompt(
          "¿Que vuelo desear eliminar? Ingrese un número de ID"
        );
        const nuevaArrayVuelosMenosUno = flights.filter(
          (vuelo) => vuelo.id !== id
        );
        flights = nuevaArrayVuelosMenosUno;
        mostrarVuelos(flights);
        break;
      default:
        alert("No existe esta opción, asegurese de escribir CREAR o ELIMINAR");
    }
  }
  adminPRO();
};

const crearVuelo = () => {
  const nuevoVuelo = {};
  nuevoVuelo.id = flights.length;
  nuevoVuelo.to = prompt("Destino?");
  nuevoVuelo.from = prompt("Salida?");
  nuevoVuelo.cost = +prompt("Coste?");
  nuevoVuelo.scale = confirm(
    "Tiene escala? Pulsa ACEPTAR si tienes escala o CANCELAR si no tiene escala"
  );

  flights.push(nuevoVuelo);

  mostrarVuelos(flights);
};

const mostrarVuelos = (array) => {
  console.clear();
  for (let i = 0; i < array.length; i++) {
    if (array[i].scale === true) {
      console.log(
        `ID vuelo: ${array[i].id}. El vuelo con origen ${array[i].from} y destino ${array[i].to} tiene un coste de ${array[i].cost}€ y tiene escala.`
      );
    } else {
      console.log(
        `ID vuelo: ${array[i].id}. El vuelo con origen ${array[i].from} y destino ${array[i].to} tiene un coste de ${array[i].cost}€ y no tiene escala.`
      );
    }
  }
};

function User() {
  const precio = prompt(
    "¿Cuál es el precio máximo que quieres pagar por tu viaje? Escribe un número."
  );
  const precioNum = parseFloat(precio);

  const vuelosBaratos = flights.filter((flight) => flight.cost <= precioNum);

  for (let i = 0; i < vuelosBaratos.length; i++) {
    if (vuelosBaratos[i].scale === true) {
      console.log(
        `ID del vuelo: ${vuelosBaratos[i].id}. El vuelo con origen ${vuelosBaratos[i].from} y destino ${vuelosBaratos[i].to} tiene un coste de ${vuelosBaratos[i].cost}€ y tiene escala.`
      );
    } else {
      console.log(
        `ID del vuelo: ${vuelosBaratos[i].id}. El vuelo con origen ${vuelosBaratos[i].from} y destino ${vuelosBaratos[i].to} tiene un coste de ${vuelosBaratos[i].cost}€ y no tiene escala.`
      );
    }
  }

  const seleccionUsuario = prompt(
    "¿Qué número de vuelo quieres comprar? Indica el número de ID"
  );
  alert(`Gracias por su compra del vuelo ${seleccionUsuario}, vuelva pronto.`);
}

function airlinesPro() {
  let pregunta;

  do {
    let preguntaUser = prompt(`Hola ${usuario}, ¿eres ADMIN o USER?`);
    pregunta = preguntaUser.toLowerCase();

    if (pregunta === "admin") {
      adminPRO();
      return;
    } else if (pregunta === "user") {
      User();
      return;
    }
  } while (pregunta !== "admin" || pregunta !== "user");
}

airlinesPro();
