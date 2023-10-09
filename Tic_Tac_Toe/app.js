const gameBox = document.querySelectorAll(".game_box");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const newGame = document.getElementById("new_game");
const playerId = document.getElementById("player_id");

console.log(gameBox.length);

box1.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box1.innerText = "X";
    box1.style.pointerEvents = "none";
    playerId.innerText = "X";
    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box1.innerText = "0";
    playerId.innerText = "Y";
    counter++;
    box1.style.pointerEvents = "none";
    checkWinner();
  }
});
box2.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box2.innerText = "X";
    playerId.innerText = "X";

    box2.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box2.innerText = "0";
    playerId.innerText = "Y";

    box2.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box3.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box3.innerText = "X";
    playerId.innerText = "X";

    box3.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box3.innerText = "0";
    playerId.innerText = "Y";

    box3.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box4.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box4.innerText = "X";
    playerId.innerText = "X";

    box4.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box4.innerText = "0";
    playerId.innerText = "Y";

    box4.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box5.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box5.innerText = "X";
    playerId.innerText = "X";

    box5.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box5.innerText = "0";
    playerId.innerText = "Y";

    box5.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box6.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box6.innerText = "X";
    playerId.innerText = "X";

    box6.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box6.innerText = "0";
    playerId.innerText = "Y";

    box6.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box7.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box7.innerText = "X";
    playerId.innerText = "X";

    box7.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box7.innerText = "0";
    playerId.innerText = "Y";

    box7.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box8.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box8.innerText = "X";
    playerId.innerText = "X";

    box8.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box8.innerText = "0";
    playerId.innerText = "Y";

    box8.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
box9.addEventListener("click", () => {
  if (counter % 2 != 0) {
    box9.innerText = "X";
    playerId.innerText = "X";
    box9.style.pointerEvents = "none";

    counter++;
    checkWinner();
  } else if (counter % 2 == 0) {
    box9.innerText = "0";
    playerId.innerText = "Y";

    box9.style.pointerEvents = "none";

    counter++;
    checkWinner();
  }
});
newGame.addEventListener("click", () => {
  gameBox.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "auto";
    counter = 1;
    box.classList.remove("won");
  });
});
var counter = 1;

function checkWinner() {
  if (
    (box1.innerText == "X" && box2.innerText == "X" && box3.innerText == "X") ||
    (box1.innerText == "0" && box2.innerText == "0" && box3.innerText == "0")
  ) {
    box1.classList.add("won");
    box2.classList.add("won");
    box3.classList.add("won");
  }
  if (
    (box4.innerText == "X" && box5.innerText == "X" && box6.innerText == "X") ||
    (box1.innerText == "0" && box2.innerText == "0" && box3.innerText == "0")
  ) {
    box4.classList.add("won");
    box5.classList.add("won");
    box6.classList.add("won");
  }
  if (
    (box7.innerText == "X" && box8.innerText == "X" && box9.innerText == "X") ||
    (box7.innerText == "0" && box8.innerText == "0" && box9.innerText == "0")
  ) {
    box7.classList.add("won");
    box8.classList.add("won");
    box9.classList.add("won");
  }
  if (
    (box1.innerText == "X" && box4.innerText == "X" && box7.innerText == "X") ||
    (box1.innerText == "0" && box4.innerText == "0" && box7.innerText == "0")
  ) {
    box1.classList.add("won");
    box4.classList.add("won");
    box7.classList.add("won");
  }
  if (
    (box2.innerText == "X" && box5.innerText == "X" && box8.innerText == "X") ||
    (box2.innerText == "0" && box5.innerText == "0" && box8.innerText == "0")
  ) {
    box2.classList.add("won");
    box5.classList.add("won");
    box8.classList.add("won");
  }
  if (
    (box3.innerText == "X" && box6.innerText == "X" && box9.innerText == "X") ||
    (box3.innerText == "0" && box6.innerText == "0" && box9.innerText == "0")
  ) {
    box3.classList.add("won");
    box6.classList.add("won");
    box9.classList.add("won");
  }
  if (
    (box1.innerText == "X" && box5.innerText == "X" && box9.innerText == "X") ||
    (box1.innerText == "0" && box5.innerText == "0" && box9.innerText == "0")
  ) {
    box1.classList.add("won");
    box5.classList.add("won");
    box9.classList.add("won");
  }
  if (
    (box7.innerText == "X" && box5.innerText == "X" && box3.innerText == "X") ||
    (box7.innerText == "0" && box5.innerText == "0" && box3.innerText == "0")
  ) {
    box7.classList.add("won");
    box5.classList.add("won");
    box3.classList.add("won");
  }
}
