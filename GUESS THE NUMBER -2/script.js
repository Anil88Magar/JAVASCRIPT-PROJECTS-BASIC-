const checkBtn = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const randomNumberMessage = document.querySelector(".number");
const scoreMessage = document.querySelector(".score");
const highScoreMessage = document.querySelector(".highscore");
const againButton = document.querySelector(".again");

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkBtn.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (guess < randomNumber) {
    message.textContent = "Too low!";
    score--;
    scoreMessage.textContent = score;
  } else if (guess > randomNumber) {
    message.textContent = "Too high!";
    score--;
    scoreMessage.textContent = score;
  } else if (guess === randomNumber) {
    message.textContent = "Correct!";
    document.body.style.backgroundColor = "#60b347";
    randomNumberMessage.textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      highScoreMessage.textContent = score;
    }
  }

  if (score === 0) {
    message.textContent = "You lost!";
    checkBtn.disabled = true;
  }
});

againButton.addEventListener("click", function () {
  location.reload();
});
