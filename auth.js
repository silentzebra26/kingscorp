// Save users in localStorage
function signup() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    const users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[username]) {
      alert("Username already exists");
      return;
    }
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username);
    alert("Account created! Redirecting to homepage...");
    window.location.href = "index.html";
  } else {
    alert("Please fill in all fields.");
  }
}

// Login function
function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

// Update navbar when user is logged in
window.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const authButtons = document.getElementById("auth-buttons");
  const logoutBtn = document.getElementById("logoutBtn");

  if (loggedInUser) {
    if (authButtons) authButtons.style.display = "none";
    if (logoutBtn) {
      logoutBtn.style.display = "inline-block";
      logoutBtn.addEventListener("click", logout);
    }
  }
});
