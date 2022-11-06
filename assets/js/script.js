const pixelsContainer = document.getElementById("pixelsContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let btns = document.querySelectorAll("input");
let rangeVal = document.getElementsByClassName("boxRange");
let totalBoxes = document.querySelector(".boxRange");
let selectedColor = document.querySelector("input[type='color']");
let action = "";

//  Grid Code Starts  //

// Creates a default grid sized 16x16
let grid = 16;
function defaultGrid(grid) {
  makeRows(grid);
  makeColumns(grid);
}
defaultGrid(grid);
// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  // Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    pixelsContainer.appendChild(row).className = "gridRow";
  }
}

// Creates columns
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";

      cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
        cell.style.setProperty("width", `calc(100% / ${cellNum})`);
      });
    }
  }
}

//  End Grid Code   //

// ! Select Color

function setColor(cells, color) {
  console.log(cells, color);
  Array.from(cells).forEach((cell) => {
    cell.onmouseover = () => (cell.style.background = color);
  });
}

function pickedColor(e) {
  let cells = document.getElementsByClassName("cell");
  let color = e.target.value;
  setColor(cells, color);
}

selectedColor.addEventListener("input", pickedColor);

//Rainbow Color
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}
function randomColorPicked(cells) {
  cells.forEach((cell) => {
    cell.onmouseover = () => (cell.style.background = randomColor());
  });
}

//Erase Color
function eraseColor(cells) {
  cells.forEach((cell) => {
    cell.onmouseover = (e) => (cell.style.background = "transparent");
  });
}

//Reset Color
function resetColor() {
  cells.forEach((cell) => {
    cell.style.background = "inherit";
  });
}

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    action = e.target.id;
    console.log(action);
    if (action == "erase") {
      eraseColor(cells);
    } else if (action == "rainbow") {
      randomColorPicked(cells);
    } else if (action == "color") {
      //code will here
      setColor(cells, color);
    } else if (action == "reset") {
      resetColor(cells);
    }
  });
});
