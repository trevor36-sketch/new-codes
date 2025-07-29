let board;

function startTrainer() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("trainer-screen").style.display = "block";

  board = Chessboard('board', {
    draggable: true,
    position: 'start'
  });

  // Hide notation after 5 seconds
  setTimeout(() => {
    document.getElementById("notation-box").style.display = "none";
  }, 5000);
}

