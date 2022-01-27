const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const scoreEL = document.getElementById("score");
const gridItems = [];

let currentSnake = [2,1,0];
let direction = 1;



function createGrid(){
    
    

    // create divs
    for(let i=0;i<100;i++){
        // create div
        const square = document.createElement('div');
        
        // add styling to each square
        square.classList.add("square");

        // add div to grid
        grid.appendChild(square);

        // add each new square into array
        gridItems.push(square);
       
    }
}

createGrid(); 

// adds snake class to same index in gridItem as in currentSnake
currentSnake.forEach(index => gridItems[index].classList.add('snake'));

function moveSnake(){

    // 1. remove tail
    // remove last element from snake array
    const tail = currentSnake.pop();
    

    // remove styling from last element
    gridItems[tail].classList.remove('snake');

    // 2. add to head
    // add square in direction heading
    currentSnake.unshift(currentSnake[0]+direction);
    
    // add styling so is visible
    gridItems[currentSnake[0]].classList.add("snake")
}

moveSnake();