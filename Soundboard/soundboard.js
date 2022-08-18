// let audio1 = new Audio("./0.mp3");
// let audio2 = new Audio("./1.mp3");
// let audio3 = new Audio("./2.mp3");
// let audio4 = new Audio("./3.mp3");
// let audio5 = new Audio("./4.mp3");
// let audio6 = new Audio("./5.mp3");

// let btn1;
// let btn2;
// let btn3;
// let btn4;
// let btn5;
// let btn6;

// const init = () => {
//   btn1 = document.querySelector(".btn1");
//   btn2 = document.querySelector(".btn2");
//   btn3 = document.querySelector(".btn3");
//   btn4 = document.querySelector(".btn4");
//   btn5 = document.querySelector(".btn5");
//   btn6 = document.querySelector(".btn6");
// };
// init();
// const playAudio1 = () => {
//   audio1.play();
// };
// const playAudio2 = () => {
//   audio2.play();
// };
// const playAudio3 = () => {
//   audio3.play();
// };
// const playAudio4 = () => {
//   audio4.play();
// };
// const playAudio5 = () => {
//   audio5.play();
// };
// const playAudio6 = () => {
//   audio6.play();
// };
// btn1.addEventListener("click", playAudio1);
// btn2.addEventListener("click", playAudio2);
// btn3.addEventListener("click", playAudio3);
// btn4.addEventListener("click", playAudio4);
// btn5.addEventListener("click", playAudio5);
// btn6.addEventListener("click", playAudio6);
btns = [];
const init = () => {
  btns = document.querySelectorAll(".btn");
};
init();
btns.forEach((btn, index) => {
  let audio = new Audio("./" + index + ".mp3");
  const playAudio = () => {
    audio.play();
  };
  btn.addEventListener("click", playAudio);
});
