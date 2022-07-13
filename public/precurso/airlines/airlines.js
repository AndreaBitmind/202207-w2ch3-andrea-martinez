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

// Punto 3

let costeTotal = 0;
let numTotal = 0;
let numEscalas = 0;

for (let i = 0; i < flights.length; i++) {
  if (flights[i].scale === true) {
    console.log(
      `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y tiene escala.`
    );
    numEscalas++;
  } else {
    console.log(
      `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no tiene escala.`
    );
  }
  costeTotal += flights[i].cost;

  numTotal++;
}

const mediaCoste = costeTotal / numTotal;

// punto 4: para encontrar el promedio del coste de los vuelos:

console.log("El coste promedio de los vuelos es de " + mediaCoste.toFixed(3));

// punto 5: para mostrar los vuelos que efectuan escalas:

const destinoVuelos = [];

const escalas = flights.filter((flight) => flight.scale === true);
for (let i = 0; i < escalas.length; i++) {
  destinoVuelos.push(escalas[i].to);
}

console.log(
  "Hay " +
    numEscalas +
    " vuelos que hacen escala y son los que tienen destino a " +
    destinoVuelos.toString()
);

// punto 6: últimos 5 IDs y sus destinos

for (let i = flights.length - 5; i < flights.length; i++) {
  console.log(
    `El vuelo con origen ${flights[i].from} tiene destino en ${flights[i].to}.`
  );
}
