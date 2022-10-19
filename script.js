"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currScore0El = document.getElementById("current-0");
const currScore1El = document.getElementById("current-1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let currScore0 = 0;
let currScore1 = 0;
let currPlayer = 0;
let score0 = 0;
let score1 = 0;

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//Rolling a dice
btnRoll.addEventListener("click", function () {
  // Generation of dice Value
  let dice = Math.trunc(Math.random() * 6) + 1;

  //display Image
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //Check for roll having value 1
  if (dice !== 1) {
    if (currPlayer === 0) {
      currScore0 += dice;
      currScore0El.textContent = currScore0;
    } else {
      currScore1 += dice;
      currScore1El.textContent = currScore1;
    }
  } else {
    if (currPlayer === 0) {
      currPlayer = 1;
      //   score0 = currScore0;
      //   score0El.textContent = score0;
      currScore0 = 0;
      currScore0El.textContent = currScore0;
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
    } else {
      currPlayer = 0;
      //   score1 = currScore1;
      //   score1El.textContent = score1;
      currScore1 = 0;
      currScore1El.textContent = currScore1;
      player1.classList.remove("player--active");
      player0.classList.add("player--active");
    }
  }
});

btnHold.addEventListener("click", function () {
  if (currPlayer === 0) {
    currPlayer = 1;
    score0 += currScore0;
    score0El.textContent = score0;
    if (score0 >= 100) {
      alert("Player 1 Wins");
      restartGame();
    }
    currScore0 = 0;
    currScore0El.textContent = currScore0;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
  } else {
    currPlayer = 0;
    score1 += currScore1;
    score1El.textContent = score1;
    if (score1 >= 100) {
      alert("Player 2 Wins");
      restartGame();
    }
    currScore1 = 0;
    currScore1El.textContent = currScore1;
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
  }
});

const restartGame = function () {
  if (currPlayer === 1) {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
  }
  currScore0 = 0;
  currScore1 = 0;
  currPlayer = 0;
  score0 = 0;
  score1 = 0;

  currScore0El.textContent = currScore0;
  currScore1El.textContent = currScore1;
  score0El.textContent = score0;
  score1El.textContent = score1;
  diceEl.classList.add("hidden");
};

btnNew.addEventListener("click", restartGame);

// const rollDice = document.querySelector(".btn--roll");

// const diceImage = document.querySelector(".dice");

// const player1 = document.querySelector("player--0");
// const player2 = document.querySelector("player--1");

// const currScore1 = document.querySelector("#current-0");
// let currScore1Val = Number(currScore1.textContent);

// const currScore2 = document.querySelector("#current-1");
// let currScore2Val = Number(currScore1.textContent);

// rollDice.addEventListener("click", function () {
//   //Initial click
//   if (diceImage.classList.contains("hidden")) {
//     diceImage.classList.remove("hidden");
//   }

//   //Generation of image
//   let generatedValue = Math.trunc(Math.random() * 6) + 1;

//   let imageUrl = `dice-${generatedValue}.png`;

//   diceImage.src = imageUrl;

//   //Swaping Condition
//   if (generatedValue === 1) {
//     currScore1Val = 0;
//     currScore1.textContent = currScore1Val;

//     player1.classList.remove("player--active");
//     player2.classList.add("player--active player--1");
//   } else {
//     currScore1Val += generatedValue;
//     currScore1.textContent = currScore1Val;
//   }
// });
