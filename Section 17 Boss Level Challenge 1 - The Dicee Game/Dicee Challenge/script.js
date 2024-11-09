var randomNumber1 = Math.random() * 6 + 1;
var randomNumber2 = Math.random() * 6 + 1;

randomNumber1 = Math.floor(randomNumber1);
randomNumber2 = Math.floor(randomNumber2);

function img1(n1) {
  var imgsrc1 = "./images/dice" + n1 + ".png";
  document.querySelector(".img1").setAttribute("src", imgsrc1);
}

function img2(n1) {
  var imgsrc2 = "./images/dice" + n1 + ".png";
  document.querySelector(".img2").setAttribute("src", imgsrc2);
}

img1(randomNumber1);
img2(randomNumber2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Tie!";
}
