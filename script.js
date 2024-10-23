let box = document.querySelectorAll(".box");
let restartbtn = document.querySelector("#restartbtn");
let h2 = document.querySelector('h2');
let turnX = true;
let gameOver = false;
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

box.forEach(element => {
  let a = element.addEventListener('click', () => {
    if (element.innerText == "" && gameOver != true) {
      if (turnX == true) {
        element.innerText = "X";
        turnX = false;
        h2.innerText = `now o's turn`;
      } else {
        turnX = true;
        element.innerText = "O";
        h2.innerText = `now x's turn`;
      }
    }
    checkWinner();
  })
});

let checkWinner = () => {
  for (patterns of winningPatterns) {
    let posval1 = box[patterns[0]].innerText;
    let posval2 = box[patterns[1]].innerText;
    let posval3 = box[patterns[2]].innerText;

    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        h2.innerText = `winner ${posval1}`;
        gameOver = true;
        break;
      }
    }
  }
  if ([...box].every(ele => ele.innerText !== "")) {
    h2.innerText = "It's a draw!";
    gameOver = true;
  }

}

restartbtn.addEventListener('click', callback);

function callback() {
  box.forEach((ele) => {
    ele.innerText = "";
  });
  h2.innerText = "now it's X turn";
  gameOver = false;
}