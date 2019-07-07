// We started with some configuration before we write the main functions.

let game = document.getElementById("game-container");
let gameHtml = "";
let pairs = [];
let cards;
let movesPlayed = 0;
window.shuffledImages = null;

function shuffle(array) {
  var i = array.length - 1,
    temp;
  while (i >= 0) {
    var rand = Math.floor(Math.random() * 24);
    temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
    --i;
  }
  return array;
}

let memoryImages = [
  "assets/3d.png",
  "assets/amber.png",
  "assets/angular.png",
  "assets/react.png",
  "assets/graphql.png",
  "assets/js.png",
  "assets/nodejs.png",
  "assets/rxjs.jpeg",
  "assets/tensorflow.png",
  "assets/view.jpg",
  "assets/gulp.png",
  "assets/chartjs.svg",

  "assets/3d.png",
  "assets/amber.png",
  "assets/angular.png",
  "assets/react.png",
  "assets/graphql.png",
  "assets/js.png",
  "assets/nodejs.png",
  "assets/rxjs.jpeg",
  "assets/tensorflow.png",
  "assets/view.jpg",
  "assets/gulp.png",
  "assets/chartjs.svg"
];

/**
 * To start new game, set initial values, images shuffling and rendering rendering
 */
function newGame() {
  setMovePoints(true);
  pairs = [];
  shuffledImages = shuffle(memoryImages);
  for (let i = 0; i < shuffledImages.length; i++) {
    gameHtml += `<div class="card" onclick="window.flipCard(${i})">
                    <div class="front-face">
                      <img class="unique-src" src="${shuffledImages[i]}" />
                    </div>
                    <div class="back-face">
                      <img src="assets/texture.jpg" />
                    </div>
                  </div>`;
  }
  cards = document.getElementsByClassName("card");
  game.innerHTML = gameHtml;
}

/**
 * check if those pairs has the same image source. If yes then add matched flag to the element in order preventing clicking on the element again
 * @param {number[]} pairs
 */
function checkMathes(pairs) {
  let p1 = cards[pairs[0]].getElementsByClassName("unique-src")[0],
    p2 = cards[pairs[1]].getElementsByClassName("unique-src")[0],
    hasMatch = p1.src === p2.src;
  if (hasMatch) {
    cards[pairs[0]].setAttribute("data-matched", true);
    cards[pairs[1]].setAttribute("data-matched", true);
  }
  return hasMatch;
}

/**
 * To cards click event triggered then flip the card. Also it is caching clicked paris position to be used then for checking for matchings
 * @param {index} index
 */
function flipCard(index) {
  if (
    !cards[index].getAttribute("data-matched") &&
    cards[index].className !== "card flip"
  ) {
    cards[index].className = "card flip";

    if (pairs.length === 2) {
      if (!checkMathes(pairs)) {
        for (let i = 0; i < pairs.length; i++) {
          cards[pairs[i]].className = "card";
        }
      }
      pairs = [];
    }
    if (pairs[0] != index) {
      pairs.push(index);
    }
    setMovePoints();
  }
  return false;
}

/**
 * To increase movesPlayed counter on each move, then show it to the html
 * @param {boolean} isNewGame
 */
function setMovePoints(isNewGame) {
  movesPlayed++;
  if (isNewGame) {
    movesPlayed = 0;
  }
  document.querySelector("#moves .points").textContent = movesPlayed;
}
newGame();

/**
 * Those two lines are used to solve webpack contexts issue which is not referring to window by default.
 */
window.flipCard = flipCard;
window.newGame = newGame;
