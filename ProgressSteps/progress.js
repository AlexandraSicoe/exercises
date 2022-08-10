var button;
var state;
var bar;
function init() {
  button = document.querySelectorAll(".btn");
  state = 0;
  bar = document.querySelector(".bar");
  bar.style.width = "0%";
  button[0].setAttribute("disabled", "disabled");
}
init();

function onNext() {
  if (state < 4) {
    state = state + 1;
    button[0].removeAttribute("disabled");
    bar.style.width = state * 25 + "%";
  }
  if (state + 1 > 4) {
    button[1].setAttribute("disabled", "disabled");
  }
}
button[1].addEventListener("click", onNext);
function onPrev() {
  if (state > 0) {
    state = state - 1;
    button[1].removeAttribute("disabled");
    bar.style.width = state * 25 + "%";
  }
  if (state - 1 < 0) {
    button[0].setAttribute("disabled", "disabled");
  }
}
button[0].addEventListener("click", onPrev);
