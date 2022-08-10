var cards = document.querySelectorAll(".card"); //devine array de cards

cards.forEach(function (card) {
  card.addEventListener("click", function (e) {
    //e=evenimentul care vine din div=target, va fi trimis la o functie
    console.log(e);
    switchToMainCard(e);
  });
});
function switchToMainCard(e) {
  var clickedCard = e.target;
  if (clickedCard.className.indexOf("main-card") == -1) {
    cards.forEach(function (card) {
      if (card.className.indexOf("main-card") != -1) {
        card.className = "secondary-card card";
        card.children[0].className = "text hidden";
      }
    });
    clickedCard.className = "main-card card";

    clickedCard.children[0].className = "text";
  }
}
