let paper = "Paper";
let rock = "Rock";
let scissor = "Scissor";
let humanScore = 0;
let computerScore = 0;
let computerWon = "Computer won," + " " + "Computer Score went up to:";
let humanWon = "Human won," + " " + "Human Score went up to:";
let roundResult;

const showScore = () => {
  whoWonContainer[0].innerHTML = roundResult;
  humanScoreContainer[0].innerHTML = "Human Score: " + humanScore;
  computerScoreContainer[0].innerHTML = "Computer Score: " + computerScore;
};

const getComputerNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const valueForComputerNumber = (randomNumber) => {
  if (randomNumber == 0) {
    return paper;
  } else if (randomNumber == 1) {
    return rock;
  }
  return scissor;
};

const playRound = (getHumanChoice) => {
  const randomNumber = getComputerNumber(0, 2);
  const getComputerChoice = valueForComputerNumber(randomNumber);

  if (getComputerChoice == getHumanChoice) {
    roundResult = "try again";
  } else if (getComputerChoice == paper) {
    if (getHumanChoice == rock) {
      computerScore = computerScore + 1;
      roundResult = computerWon + computerScore;
    } else {
      humanScore = humanScore + 1;
      roundResult = humanWon + humanScore;
    }
  } else if (getComputerChoice == rock) {
    if (getHumanChoice == scissor) {
      computerScore = computerScore + 1;
      roundResult = computerWon + computerScore;
    } else {
      humanScore = humanScore + 1;
      roundResult = humanWon + humanScore;
    }
  } else if (getComputerChoice == scissor) {
    if (getHumanChoice == paper) {
      computerScore = computerScore + 1;
      roundResult = computerWon + computerScore;
    } else {
      humanScore = humanScore + 1;
      roundResult = humanWon + humanScore;
    }
  }
};

const scissorButtons = document.getElementsByClassName("scissor");
const rockButtons = document.getElementsByClassName("rock");
const paperButtons = document.getElementsByClassName("paper");
const whoWonContainer = document.getElementsByClassName("whoWonContainer");
const humanScoreContainer = document.getElementsByClassName(
  "humanScoreContainer",
);
const computerScoreContainer = document.getElementsByClassName(
  "computerScoreContainer",
);

scissorButtons[0].addEventListener("click", () => {
  playRound(scissor);
  showScore();
});

rockButtons[0].addEventListener("click", () => {
  playRound(rock);
  showScore();
});

paperButtons[0].addEventListener("click", () => {
  playRound(paper);
  showScore();
});
