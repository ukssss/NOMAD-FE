const gameForm = document.querySelector(".game-form");
const range = gameForm.querySelector(".range > input");
const guess = gameForm.querySelector(".guess > input");

const resultForm = document.querySelector(".result-form");

const HIDDEN_CLASS = "hidden";

function onCasinoSubmit(event) {
  event.preventDefault();
  const rngNum = parseInt(range.value);
  const randomNum = parseInt(Math.random() * rngNum);
  const gesNum = parseInt(guess.value);

  if (rngNum < 0) {
    alert("Negative numbers cannot be entered.");
  } else {
    if (randomNum === gesNum) {
      resultForm.classList.remove(HIDDEN_CLASS);
      resultForm.innerHTML = `<span>You: ${gesNum}, AI: ${randomNum}</span>
      <span style='color:green'>You win!</span>`;
    } else {
      resultForm.classList.remove(HIDDEN_CLASS);
      resultForm.innerHTML = `<span>You: ${gesNum}, AI: ${randomNum}</span>
      <span style='color:red'>You Lose!</span>`;
    }
  }

  console.log(rngNum + ",   " + randomNum + ",    " + gesNum);
}

gameForm.addEventListener("submit", onCasinoSubmit);
