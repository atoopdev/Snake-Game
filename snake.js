const grid = document.querySelector(".grid");
const startBtn = document.getElementById("start");
const scoreEL = document.getElementById("score");
const gridItems = [];

let currentSnake = [2,1,0];
let direction = 1;
const width = 10;

let appleIndex = 0;

let score =0;

let timerId = 0;
let intervalTime = 1000;
let speed = 0.9;

// -------------------------createGrid()---------------------------------

function createGrid(){
    
    

    // create divs
    for(let i=0;i<width*width;i++){
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

// ------------------------------------------------------------------------

createGrid(); 
createSnake();

// ----------------------createSnake() ----------------------------------

function createSnake(){
// adds snake class to same index in gridItem as in currentSnake
    currentSnake.forEach(index => gridItems[index].classList.add('snake'));
}

// -----------------------------------------------------------------------

function removeSnake(){
    currentSnake.forEach(index => gridItems[index].classList.remove('snake'));
}

genApples();

// ---------------------startGame()---------------------------

function startGame(){
    // remove snake from grid
    removeSnake();

    // remove apple
    gridItems[appleIndex].classList.remove("apple");

    clearInterval(timerId);
    currentSnake = [2,1,0];
    score =0;
    // readd new code to browser
    scoreEL.textContent = score;

    direction = 1;
    intervalTime = 1000;
    genApples();

    // generate new snake
    createSnake();
// responsible for running moveSnake() on loop
timerId = setInterval(moveSnake, intervalTime);
}
// -----------------------------------------------------------


// -------------------------moveSnake()---------------------------

function moveSnake(){
// verify not about to move into wall
let head = currentSnake[0];
if((head + width >=width*width && direction ===width) ||//traveling down and hitting bottom
(head%width ===0 && direction ===-1) ||//traveling left and hit left wall
(head%width === width-1 && direction ===1) ||//travel right and hit right wall
(head - width <0 && direction ===-width) ||//travel up and hit top wall
gridItems[currentSnake[0] + direction].classList.contains('snake')
)
{ return clearInterval(timeId)}

    // 1. remove tail
    // remove last element from snake array
    const tail = currentSnake.pop();
    

    // remove styling from last element
    gridItems[tail].classList.remove('snake');

    // 2. add to head
    // add square in direction heading
    currentSnake.unshift(currentSnake[0]+direction);

    // deal with snake head getting apple
    if(gridItems[head].classList.contains("apple")){
        // remove class of apple
        gridItems[head].classList.remove("apple")

        // add snake class - turns square green but will not move with snake
        gridItems[tail].classList.add("snake")

        // grow snake array - now moves with snake
        currentSnake.push(tail)

        // generate new apple
        genApples();

        // add one to score
        score++;
        console.log(score)

        // display score
        scoreEL.textContent = score;

        // speed up snake
        clearInterval(timerId)
        intervalTime = intervalTime * speed;
        console.log("Interval time: ", intervalTime);
        timerId= setInterval(moveSnake, intervalTime);
    }





    
    // add styling so is visible
    gridItems[currentSnake[0]].classList.add("snake")
}

// --------------------------------------------------------------------



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

// ---------------------Event Listeners ----------------------
document.addEventListener("keydown", control)

startBtn.addEventListener("click", startGame);

// ------------------------------------------------------------

// ----------------------genApples() -------------------------------

function genApples(){
    do{
        // generate random number
        appleIndex = Math.floor(Math.random() * gridItems.length) +1;
        console.log(appleIndex);
    } while (gridItems[appleIndex].classList.contains("snake"))
    gridItems[appleIndex].classList.add("apple")
}

// ------------------------------------------------------------------



// refactor code
// add css styling
// make size variable
