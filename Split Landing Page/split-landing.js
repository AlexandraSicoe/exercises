let playstation;
let xbox;
let playstationWidth;
let xboxWidth;
const init = () => {
  playstation = document.querySelector(".playstation");
  xbox = document.querySelector(".xbox");
  playstationWidth = false;
  xboxWidth = false;
};
init();
const changeWidth = () => {
  if (playstationWidth == true) {
    playstation.style.width = "80%";
    xbox.style.width = "20%";

    playstationWidth = false;
  } else {
    playstation.style.width = "50%";
    xbox.style.width = "50%";

    playstationWidth = true;
  }
};
playstation.addEventListener("mouseover", changeWidth);

const changeWidth2 = () => {
  if (xboxWidth == true) {
    xbox.style.width = "80%";
    playstation.style.width = "20%";
    xboxWidth = false;
  } else {
    xbox.style.width = "50%";
    playstation.style.width = "50%";
    xboxWidth = true;
  }
};
xbox.addEventListener("mouseover", changeWidth2);
