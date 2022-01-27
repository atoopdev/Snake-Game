const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const scoreEL = document.getElementById("score");
const gridItems = [];

createGrid();

function createGrid(){
    
    

    // create divs
    for(let i=0;i<100;i++){
        // create div
        const square = document.createElement('div');
        // console.log(square);
        // add styling to each square
        square.classList.add("square");
        // add div to grid
        grid.appendChild(square);
        // add each new square into array
        gridItems.push(square);
       
    }
}