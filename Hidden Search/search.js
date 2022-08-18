let input;
let icon;
let isInputVisible;
let icoana;
const init = () => {
  input = document.querySelector("input");
  icon = document.querySelector(".icon");
  icoana = document.querySelector(".icoana");
  isInputVisible = false;
};
init();
const hideInput = () => {
  if (isInputVisible == true) {
    // input.style.display = "none";
    icoana.style.transform = "translateX(0px)";
    isInputVisible = false;
    input.className = " ";
  } else {
    icoana.style.transform = "translateX(198px)";

    // input.style.display = "inline-block";
    isInputVisible = true;
    input.className = "active";
  }
};
icon.addEventListener("click", hideInput);
