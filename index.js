// Generate random dice numbers
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Update dice images
document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

// Determine winner and update h1
let heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "Draw! 🎲 again";
}
