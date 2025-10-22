document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!email || !password || !confirm) {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMsg.textContent = "Please enter a valid email!";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters!";
    return;
  }

  if (password !== confirm) {
    errorMsg.textContent = "Passwords do not match!";
    return;
  }

  errorMsg.textContent = "";
  alert("Form successfully submitted!");
  this.reset();
});