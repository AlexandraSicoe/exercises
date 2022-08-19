let jokes;
let btn;
let index;
let joke;
fetch("./joke.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    jokes = data;
    btn = document.querySelector("button");
    joke = document.querySelector("p");
    btn.addEventListener("click", getJoke);

    index = randomInteger(0, jokes.length - 1);
    console.log(jokes[index]);
    joke.innerText = jokes[index];
  });
const getJoke = () => {
  index = randomInteger(0, jokes.length - 1);
  joke.innerText = jokes[index];
};
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
