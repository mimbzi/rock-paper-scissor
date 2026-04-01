//console.log("Hello world");

let getComputerChoice;
let getHumanChoice;
let paper = "Paper";
let rock = "Rock";
let scissor = "Scissor";
let humanScore = 0;
let computerScore = 0;
let computerWon = "Computer won," + " " + "Computer Score went up to:";
let humanWon = "Human won," + " " + "Human Score went up to:";

let whoScored = 0;

for (let i = 0; i < 2; i++) {
  // Computer chooses
  const getComputerNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomNumber = getComputerNumber(0, 2);
  //console.log(randomNumber);

  function valueForComputerNumber() {
    if (randomNumber == 0) {
      return paper;
    } else if (randomNumber == 1) {
      return rock;
    }
    return scissor;
  }
  getComputerChoice = valueForComputerNumber();
  console.log(getComputerChoice);
  // Computer chooses End

  const humanChooses = Number(
    window.prompt("Choose your weapon: 0 = Paper, 1 = Rock, 2 = Scissor"),
  );

  function valueForHumanNumber() {
    if (humanChooses == 0) {
      return paper;
    } else if (humanChooses == 1) {
      return rock;
    }
    return scissor;
  }
  getHumanChoice = valueForHumanNumber();
  console.log(getHumanChoice);

  function playRound(getComputerChoice, getHumanChoice) {
    if (getComputerChoice == getHumanChoice) {
      return "try again";
    } else if (getComputerChoice == paper) {
      if (getHumanChoice == rock) {
        computerScore = computerScore + 1;
        return computerWon + computerScore;
      }
      humanScore = humanScore + 1;
      return humanWon + humanScore;
    } else if (getComputerChoice == rock) {
      if (getHumanChoice == scissor) {
        computerScore = computerScore + 1;
        return computerWon + computerScore;
      }
      humanScore = humanScore + 1;
      return humanWon + humanScore;
    } else if (getComputerChoice == scissor) {
      if (getHumanChoice == paper) {
        computerScore = computerScore + 1;
        return computerWon + computerScore;
      }
      humanScore = humanScore + 1;
      return humanWon + humanScore;
    }
  }
  whoScored = playRound(getComputerChoice, getHumanChoice);
  console.log(whoScored + "test test");
}
