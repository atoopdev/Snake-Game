const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const scoreEL = document.getElementById("score");
const gridItems = [];

let currentSnake = [2,1,0];
let direction = 1;
let width = 10;



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
// verify not about to move into wall
let head = currentSnake[0];
if(head + width >=100 && direction ===10) //traveling down and hitting bottom
(head%width ===0 && direction ===-1) //traveling left and hit left wall
(head%width ===9 && direction ===1) //travel right and hit right wall
(head - width <0 && direction ===-10) //travel up and hit top wall
{ return clearInterval(timeId)}




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

// responsible for running moveSnake() on loop
let timerId = setInterval(moveSnake, 1000);

// clearInterval(timeId);

// keycodes
// 39 right arrow
// 38 up arrow
// 37 left arrow
// 40 down arrow

// note keycode method is depricated
function control(e){
    if(e.keyCode ===39){
        console.log("right arrow")
        direction = 1;
    } else if(e.keyCode ===38){
        console.log("up arrow")
        direction = -width;
    } else if(e.keyCode ===37){
        console.log("left arrow")
        direction = -1;
    } else if (e.keyCode ===40){
        console.log("down arrow")
        direction = +width;
    }
    
}

document.addEventListener("keydown", control)