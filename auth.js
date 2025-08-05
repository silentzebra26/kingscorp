document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  const user = localStorage.getItem("user");

  if (user) {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("signupBtn").style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";
  } else {
    if (logoutBtn) logoutBtn.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      showSnackbar("Logged out successfully!");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    });
  }

  // Snackbar display
  const params = new URLSearchParams(window.location.search);
  const action = params.get("action");

  if (action === "login") {
    showSnackbar("Logged in successfully!");
  } else if (action === "signup") {
    showSnackbar("Signed up successfully!");
  }

  function showSnackbar(message) {
    const sb = document.getElementById("snackbar");
    sb.innerText = message;
    sb.className = "show";
    setTimeout(() => {
      sb.className = sb.className.replace("show", "");
    }, 3000);
  }
});
