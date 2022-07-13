const pasapalabra = () => {
  const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question:
        "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question:
        "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "churumbel",
      status: 0,
      question: "CON LA C. Niño, crío, bebé",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question:
        "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "ectoplasma",
      status: 0,
      question:
        "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
    },
    {
      letter: "f",
      answer: "facil",
      status: 0,
      question:
        "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
    },
    {
      letter: "g",
      answer: "galaxia",
      status: 0,
      question:
        "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
    },
    {
      letter: "h",
      answer: "harakiri",
      status: 0,
      question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
    },
    {
      letter: "i",
      answer: "iglesia",
      status: 0,
      question: "CON LA I. Templo cristiano",
    },
    {
      letter: "j",
      answer: "jabali",
      status: 0,
      question:
        "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
    },
    {
      letter: "k",
      answer: "kamikaze",
      status: 0,
      question:
        "CON LA K. Persona que se juega la vida realizando una acción temeraria",
    },
    {
      letter: "l",
      answer: "licantropo",
      status: 0,
      question: "CON LA L. Hombre lobo",
    },
    {
      letter: "m",
      answer: "misantropo",
      status: 0,
      question:
        "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
    },
    {
      letter: "n",
      answer: "necedad",
      status: 0,
      question: "CON LA N. Demostración de poca inteligencia",
    },
    {
      letter: "ñ",
      answer: "señal",
      status: 0,
      question:
        "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
    },
    {
      letter: "o",
      answer: "orco",
      status: 0,
      question:
        "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
    },
    {
      letter: "p",
      answer: "protoss",
      status: 0,
      question:
        "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
    },
    {
      letter: "q",
      answer: "queso",
      status: 0,
      question:
        "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
    },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
    {
      letter: "s",
      answer: "stackoverflow",
      status: 0,
      question:
        "CON LA S. Comunidad salvadora de todo desarrollador informático",
    },
    {
      letter: "t",
      answer: "terminator",
      status: 0,
      question:
        "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
    },
    {
      letter: "u",
      answer: "unamuno",
      status: 0,
      question:
        "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
    },
    {
      letter: "v",
      answer: "vikingos",
      status: 0,
      question:
        "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
    },
    {
      letter: "w",
      answer: "sandwich",
      status: 0,
      question:
        "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
    },
    {
      letter: "x",
      answer: "botox",
      status: 0,
      question:
        "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
    },
    {
      letter: "y",
      answer: "peyote",
      status: 0,
      question:
        "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
    },
    {
      letter: "z",
      answer: "zen",
      status: 0,
      question:
        "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
    },
  ];

  let user;
  let rightWords = 0;
  let wrongWords = 0;
  let skippedWords = [];
  let askUserToFinish;

  const wellcome = () => {
    do {
      user = prompt("Wellcome to the game. What´s your name?");
      if (user === null || user === undefined || !isNaN(user)) {
        alert(`You must enter a valid character`);
      } else {
        alert(`Hello ${user}`);
        roscoPlay();
      }
    } while (user === null || user === undefined || !isNaN(user));
  };

  const pasapalabraRules = console.log(`
           \n Wellcome to the pasapalabra game rules:
           \n You will see one definition for each letter of the alphabet, and you will have to guess which word is it.
           \n You have the option to say Pasapalabra and leave that definition for next round.
           \n The game will finish when all the alphabet words have been guessed or failed.
           \n Please, do not use accents, which will give an error.
           \n You can end the game whenever writting "END".
          `);

  const playersRanking = () => {
    const ranking = [
      { name: "Natalia", rightLetters: 25, wrongLetters: 2 },
      { name: "Berta", rightLetters: 20, wrongLetters: 7 },
      { name: "Xifré", rightLetters: 10, wrongLetters: 17 },
      { name: "Manuela", rightLetters: 5, wrongLetters: 22 },
      { name: user, rightLetters: rightWords, wrongLetters: wrongWords },
    ];
    console.log(`Current game ranking`);
    ranking.sort(function (a, b) {
      return b.rightLetters - a.rightLetters;
    });
    console.table(ranking);
  };

  const roscoPlay = () => {
    let playerAnswer;

    do {
      if (skippedWords.length > 0) {
        for (let i = 0; i < skippedWords.length; i++) {
          playerAnswer = prompt(`${questions[skippedWords[i]].question}`);

          if (
            playerAnswer.toLowerCase() === questions[skippedWords[i]].answer
          ) {
            alert(`Right word!`);
            questions[i].status = 1;
            skippedWords.splice(i, 1);
            rightWords++;
            i++;
          } else if (playerAnswer.toLowerCase() === "pasapalabra") {
            alert("Next letter");
          } else if (playerAnswer.toUpperCase() === "END") {
            askEndGame();
          } else if (
            playerAnswer.toLowerCase() !== questions[skippedWords[i]].answer ||
            playerAnswer.toLowerCase() === null
          ) {
            alert(
              `Wrong word!. The right word is ${
                questions[skippedWords[i]].answer
              }`
            );
            skippedWords.splice(i, 1);
            wrongWords++;
          } else {
            endGame();
          }
        }
      } else {
        for (let i = 0; i < questions.length; i++) {
          playerAnswer = prompt(`${questions[i].question}`);

          if (playerAnswer.toLowerCase() === questions[i].answer) {
            alert(`Right word!`);
            questions[i].status = 1;
            rightWords++;
          } else if (playerAnswer.toLowerCase() === "pasapalabra") {
            alert("Next letter");
            skippedWords.push(i);
          } else if (playerAnswer.toUpperCase() === "END") {
            askEndGame();
          } else if (playerAnswer.toLowerCase() !== questions[i].answer) {
            alert(`Wrong word!. The right word is ${questions[i].answer}`);
            wrongWords++;
          } else {
            endGame();
          }
        }
      }
    } while (skippedWords.length !== 0 || askUserToFinish === true); //while (rightWords+ wrongWords <27 || askEndGame() === false || skippedWords.length !== 0);
  };

  const endGame = () => {
    console.log(
      `The game is over! The results are ${rightWords} right words and ${wrongWords} wrong words.`
    );
    console.log(`This is the current ranking:`);
    playersRanking();
  };

  const askEndGame = () => {
    askUserToFinish = confirm(
      `Do you want to finish the game now (accept) or play again (cancel)?`
    );
    askUserToFinish
      ? alert(
          `Thanks for playing!.The results are ${rightWords} right words and ${wrongWords} wrong words.`
        )
      : roscoPlay();
  };

  wellcome();
  endGame();
};
pasapalabra();
