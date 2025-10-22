
const colors = ["#f1c40f", "#1abc9c", "#9b59b6", "#e67e22", "#2ecc71", "#e74c3c", "#3498db"];

let index = 0;

function changeBackgroundColor() {
  // Change color
  document.body.style.backgroundColor = colors[index];

  // Go to next color (loop back to start)
  index = (index + 1) % colors.length;
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
