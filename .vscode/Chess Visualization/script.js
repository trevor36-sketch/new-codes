let board = Chessboard('board', {
  draggable: true,
  dropOffBoard: 'snapback',
  position: 'start'
});
const moves = [
  ["e4", "e5", "Nf3"],
  ["d4", "d5", "c4"],
  ["Nf3", "d5", "g3"],
  ["c4", "e6", "Nc3"]
];

const moveDisplay = document.getElementById("moves-display");
const instruction = document.getElementById("instruction");
const startBtn = document.getElementById("start-btn");

let currentSequence = [];

startBtn.addEventListener("click", () => {
  // Pick a random move sequence
  currentSequence = moves[Math.floor(Math.random() * moves.length)];
  moveDisplay.textContent = `Memorize: ${currentSequence.join(", ")}`;
  instruction.textContent = "Memorize these moves...";

  // After 5 seconds, hide the moves and ask the user
  setTimeout(() => {
    moveDisplay.textContent = "Now play the moves!";
    instruction.textContent = "Try to play the sequence on the board.";
    board.start(); // Reset board
  }, 5000);
});
