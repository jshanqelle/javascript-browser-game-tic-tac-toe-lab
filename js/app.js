//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
// a. Store the nine elements representing the squares
const squareEls = document.querySelectorAll('.sqr');
    // Assuming each square has the class 'sqr'

// b. Store the element that displays the game's status
const messageEls = document.querySelector('#message'); 
// Assuming the status element has the class 'message'

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let board = ['X','O','X','O','X','O','X','O','X']
let turn = 'X';
let winner = false;
let tie = false;


/*------------------------ Cached Element References ------------------------*/

const resetBtnEL = document.querySelector('reset')

/*-------------------------------- Functions --------------------------------*/
function init() {
    render()
}; 


function render() {
updateBoard()
updateMessage()
};


function updateBoard() {
 board.forEach((square, index) => {
squareEls[index]
 })
};

function updateMessage() {
if (winner === false && tie === false) {
messageEls.innerText ='O turn'
} else if (winner === false && tie === true){
messageEls.innerText = 'tie game'
} else {
    messageEls.innerText = 'Winner'
}
};
function handleclick(Event) {
    const squareIndex = Event.target.id;
    console.log();
    placePeace(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O') {
        return
    }

}
function placePeace (Index){
    board[Index] = turn
    console.log[board];
}

function checkForWinner() {
    if ((board[0] !== "" && board[0] === board[1] && board[0] === board[2]) ||
        (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) ||
        (board[6] !== "" && board[6] === board[7] && board[6] === board[8]) ||
        (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) ||
        (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) ||
        (board[2] !== "" && board[2] === board[5] && board[2] === board[8]) ||
        (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) ||
        (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) 
    ) { 
 winner = true;
    
}
function checkForTie() {
if (winner = true) {
    return 
} else if (board[Index] = '') {
    tie = false
     } else {
        tie = true
     }
}}

function switchPlayerTurn() {
    if (winner) {
        return
    }  if(turn  === 'X') {
        turn === 'O'
    } else {
        turn === 'X'
    }
}


/*----------------------------- Event Listeners -----------------------------*/
init()

squareEls.forEach(square => {
    square.addEventListener('click', handleclick)
})

reset.addEventListener('click', init);
