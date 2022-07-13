//Bingo SIMPLE

let bomboArray = [];

const askName = () => {
  const user = prompt("Welcome, what is your name?");
  alert(`Welcome ${user}. Let's PLAY!!`);
};
askName();

let cardRowOne = [10, 50, 70, 88, 65];
console.table(cardRowOne);

let yesOrNot;

const askContinue = () => {
  yesOrNot = confirm("Do you want to keep playing?");
  if (yesOrNot === true) {
    randomBombo();
  } else {
    alert("Thank you! Bye!");
  }
};

const checkNumber = (win, numberOfTheBombo) => {
  console.table(cardRowOne);
  if (win === true) {
    alert("there is a coincidence");
  } else {
    alert(
      `a new number has been generated: ${numberOfTheBombo}, but there isn't any coincidence`
    );
  }
  askContinue();
};

const randomBombo = () => {
  let numberOfTheBombo = Math.floor(Math.random() * 25) + 1;
  if (bomboArray.includes(numberOfTheBombo) || numberOfTheBombo === 0) {
    return randomBombo();
  } else {
    bomboArray.push(numberOfTheBombo);
  }

  for (let i = 0; i < cardRowOne.length; i++) {
    if (numberOfTheBombo === cardRowOne[i]) {
      cardRowOne[i] = "X";
      return checkNumber(true, numberOfTheBombo);
    }
  }
  return checkNumber(false, numberOfTheBombo);
};

randomBombo();
