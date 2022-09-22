//pseudo code
/* 
    1. user will set number of pixels on page
*/


// Sets important constants and variables

const pixelsContainer = document.getElementById("pixelsContainer");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let btns = document.querySelectorAll('input');
let action='' ;



// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}
defaultGrid();

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        pixelsContainer.appendChild(row).className = "gridRow";
    };
};


// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";

            cells = document.querySelectorAll('.cell');
            cells.forEach(cell => {
                cell.style.setProperty('width', `calc(100% / ${cellNum} - 2px)`);
            });   
        };
    };
};


function drawColor(cells){
    cells.forEach(cell => {
        cell.onmouseover = (e) => cell.style.background = '#fff';        
    });
}


function eraseColor(cells){
    cells.forEach(cell => {
        cell.onmouseover = (e) => cell.style.background = 'transparent';        
    });
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
function randomColorPicked(cells){
    cells.forEach(cell => {
        cell.onmouseover = (e) => cell.style.background = randomColor();        
    });
} 

 

btns.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        action = e.target.value;
        if (action == 'Erase') {
            eraseColor(cells);
        }
        else if (action == 'Rainbow') {
            randomColorPicked(cells);
        }
        else{
            drawColor(cells);
        }
    });
     
});
