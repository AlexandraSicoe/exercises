var icon;
var container;
var body;
var nav;
var pageState;
var lista;
function init() {
  fetch("./rotating-navigation-texts.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
      console.log(jsonResponse.firstParagraph);
      document.querySelector("#firstP").innerText = jsonResponse.firstParagraph;
      document.querySelector("#secondP").innerText =
        jsonResponse.secondParagraph;
    });
  icon = document.querySelector(".fa-bars");
  container = document.querySelector(".container");
  body = document.querySelector("body");
  nav = document.querySelector("nav");
  lista = document.querySelectorAll("li");
  pageState = false;
}
init();
function rotateContainer() {
  if (pageState == false) {
    container.style.transform = "rotate(-20deg)";
    body.style.overflow = "hidden";
    icon.className = "fa-solid fa-x";
    // nav.style.visibility = "visible";
    pageState = true;
    lista.forEach((li) => {
      li.style.transform = "translateX(0)";
      li.style.translationDelay = "0.3s";
    });
  } else {
    container.style.transform = "rotate(0deg)";
    body.style.overflow = "visible";
    icon.className = "fa-solid fa-bars";
    // nav.style.visibility = "hidden";
    pageState = false;
    lista.forEach((li, index) => {
      if (index == 0) {
        li.style.transform = "translateX(-100%)";
      }
      if (index == 1) {
        li.style.transform = "translateX(-150%)";
      }
      if (index == 2) {
        li.style.transform = "translateX(-200%)";
      }
    });
  }
}
icon.addEventListener("click", rotateContainer);
