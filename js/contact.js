document.addEventListener("DOMContentLoaded", function() {
  const colors = ["#f1c40f", "#1abc9c", "#9b59b6", "#e67e22", "#2ecc71", "#e74c3c", "#3498db"];
  let index = 0;

  const button = document.getElementById("colorButton");

  button.addEventListener("click", function() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  });
});
