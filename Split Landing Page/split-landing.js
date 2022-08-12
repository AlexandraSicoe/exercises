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
  playstation.style.width = "80%";
  xbox.style.width = "20%";
  playstationWidth = false;
};
playstation.addEventListener("mouseenter", changeWidth);

const changeWidth2 = () => {
  xbox.style.width = "80%";
  playstation.style.width = "20%";
  xboxWidth = false;
};
xbox.addEventListener("mouseenter", changeWidth2);
const changeWidth3 = () => {
  playstation.style.width = "50%";
  xbox.style.width = "50%";
};
playstation.addEventListener("mouseleave", changeWidth3);
xbox.addEventListener("mouseleave", changeWidth3);
