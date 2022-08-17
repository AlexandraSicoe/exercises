let posX;
let posY;
let body;
let score = 0;
let scoreParagraph;

let moleSize;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

body = document.querySelector("body");
scoreParagraph = document.querySelector(".score");

setInterval(() => {
  let mole = document.createElement("button");
  mole.className = "btn";

  moleSize = randomInteger(30, 100);

  mole.style.height = moleSize + "px";
  mole.style.width = moleSize + "px";
  posX = randomInteger(0, window.innerWidth - moleSize);
  posY = randomInteger(0, window.innerHeight - moleSize);
  mole.style.top = posY + "px";
  mole.style.left = posX + "px";
  mole.addEventListener("click", killMole);
  body.appendChild(mole);
}, 1000);
const killMole = (e) => {
  e.target.remove();
  score++;
  scoreParagraph.innerText = "Score: " + score;
};
