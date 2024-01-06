// declaring variables
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// function to get comp choice
const getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randonIndex = Math.floor(Math.random() * 3);
  return options[randonIndex];
};

// draw game function
const drawGame = () => {
  msg.innerText = "Game Drawn";
  msg.style.backgroundColor = "rgb(11, 11, 62)";
};

// winner function
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! Your  ${userChoice} beats  ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const displayChoice = (compChoice) => {
  document.querySelector("#comp-choice").innerText = compChoice;
};

// function to control game flow
const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    // game draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // comp choice will be either paper or scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // comp choice will be either rock or scissors
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      // comp choice will be either rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// function to get user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
