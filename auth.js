document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const signupLink = document.getElementById("signupLink");
  const logoutLink = document.getElementById("logoutLink");

  const user = localStorage.getItem("user");

  if (user) {
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
    if (logoutLink) logoutLink.style.display = "inline-block";
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (signupLink) signupLink.style.display = "inline-block";
    if (logoutLink) logoutLink.style.display = "none";
  }

  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault(); // prevent link jump
      localStorage.removeItem("user");
      showSnackbar("Logged out successfully!");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    });
  }

  // Snackbar display after login or signup
  const params = new URLSearchParams(window.location.search);
  const action = params.get("action");

  if (action === "login") {
    showSnackbar("Logged in successfully!");
  } else if (action === "signup") {
    showSnackbar("Signed up successfully!");
  }

  // Snackbar function
  function showSnackbar(message) {
    const sb = document.getElementById("snackbar");
    if (sb) {
      sb.innerText = message;
      sb.className = "show";
      setTimeout(() => {
        sb.className = sb.className.replace("show", "");
      }, 3000);
    }
  }
});
