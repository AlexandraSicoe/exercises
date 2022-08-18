let container;
let paragraph;
let loading;
let blur;
let opacity;
const init = () => {
  container = document.querySelector(".container");
  paragraph = document.querySelector("p");
  blur = 20;
  loading = 0;
  opacity = 1;
};
init();
const incrementLoading = setInterval(() => {
  loading++;
  blur = blur - 0.2;
  container.style.filter = "blur(" + blur + "px)";
  paragraph.innerText = loading + "%";
  opacity = opacity - 0.01;
  paragraph.style.opacity = opacity;
  if (loading > 99) {
    clearInterval(incrementLoading);
  }
}, 30);
