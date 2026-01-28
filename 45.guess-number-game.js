// create a basic number guessing game using while //to ask untill tha correct number is guessed
let secretNumber = 5;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Number(prompt("Guess the number (1–10)"));
  attempts++;

  if (guess < secretNumber) {
    alert("Too low!");
  } else if (guess > secretNumber) {
    alert("Too high!");
  } else {
    alert("🎉 Correct! Attempts: " + attempts);
  }
}