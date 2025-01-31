// Step 1: Define required variables
let board;
let turn;
let winner;
let tie;

// Step 2: Cache DOM elements
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const boardEl = document.querySelector('#board'); 
const resetBtnEl = document.querySelector('#reset');

console.log(squareEls); 
console.log(messageEl); 
console.log(boardEl); 
console.log(resetBtnEl); 

// Step 3: Initialize game state
function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  turn = 'X';
  winner = false;
  tie = false;
  render();
}


// Step 4: Render game state
function render() {
  updateBoard();
  updateMessage();
}

function updateBoard() {
  board.forEach((value, index) => {
    squareEls[index].textContent = value;
  }); if (value === 'X') {
    square.style.color = 'blue';
} else if (value === 'O') {
    square.style.color = 'red';
} else {
    square.style.color = 'black';
}
}

function updateMessage() {
  if (winner) {
    messageEl.textContent = `Congratulations! ${turn} wins!`;
  } else if (tie) {
    messageEl.textContent = "It's a tie!";
  } else {
    messageEl.textContent = `Player ${turn}'s turn`;
  }
}

// Step 5: Define winning combinations
const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Step 6: Handle clicks
const handleClick = (event) => {
  const squareIndex = Number(event.target.id);
  const squareTaken = board[squareIndex] !== '';
  if (squareTaken || winner){
      return;
  }
 placePiece(squareIndex);
 checkForWinner();
 checkForTie();
 switchPlayerTurn();
render();
};

function placePiece(index) {
  board[index] = turn; 
  console.log(board); 
}

function checkForWinner() {
  winningCombos.forEach(combo => {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = true;
    }
  });
  console.log("Winner: ", winner);
}



function checkForTie() {
  if (winner) return;
  tie = board.every(cell => cell !== '');
  console.log("Tie: ", tie);
}

function switchPlayerTurn() {
  if (winner) return;
  turn = turn === 'X' ? 'O' : 'X';
  console.log(" Turn ", turn);
}

// Attach event listeners
squareEls.forEach((square, index) => {
  square.id = index;
  square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);
init();