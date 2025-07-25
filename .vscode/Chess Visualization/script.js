function startTrainer() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("trainer-screen").style.display = "block";

  // Hide notation after 5 seconds
  setTimeout(() => {
    const notationBox = document.getElementById("notation-box");
    if (notationBox) {
      notationBox.style.display = "none";
    }
  }, 5000);
}
