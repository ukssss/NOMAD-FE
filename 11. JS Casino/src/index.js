const gameForm = document.querySelector(".game-form");
const range = gameForm.querySelector(".range > input");
const guess = gameForm.querySelector(".guess > input");

const resultForm = document.querySelector(".result-form");
const content = resultForm.querySelector(".result > span:first-child");
const result = resultForm.querySelector(".result > span:last-child");

const HIDDEN_CLASS = "hidden";

function onCasinoSubmit(event) {
  event.preventDefault();
  const rngNum = parseInt(range.value);
  const randomNum = parseInt(Math.random() * rngNum);
  const gesNum = parseInt(guess.value);
  console.log(rngNum + ",   " + randomNum + ",    " + gesNum);

  if (randomNum === gesNum) {
    resultForm.classList.remove(HIDDEN_CLASS);
    content.innerText = `${gesNum} === ${randomNum}`;
    result.innerText = "You Win!";
  } else {
    resultForm.classList.remove(HIDDEN_CLASS);
    content.innerText = `${gesNum} !== ${randomNum} `;
    result.innerText = "You Lose!";
  }
}

gameForm.addEventListener("submit", onCasinoSubmit);
