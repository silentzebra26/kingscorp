document.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");
  const signupLink = document.getElementById("signupLink");
  const logoutLink = document.getElementById("logoutLink");

  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  if (isLoggedIn) {
    loginLink.style.display = "none";
    signupLink.style.display = "none";
    logoutLink.style.display = "inline-block";
  } else {
    loginLink.style.display = "inline-block";
    signupLink.style.display = "inline-block";
    logoutLink.style.display = "none";
  }

  if (logoutLink) {
    logoutLink.addEventListener("click", () => {
      localStorage.setItem("loggedIn", "false");
      alert("You have been logged out.");
      window.location.href = "index.html";
    });
  }
});

// Show/hide logout button based on login state
document.addEventListener("DOMContentLoaded", () => {
  const logoutLink = document.getElementById("logoutLink");
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (logoutLink) {
    if (isLoggedIn === "true") {
      logoutLink.style.display = "inline-block";
    } else {
      logoutLink.style.display = "none";
    }

    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("loggedIn");
      alert("You have been logged out.");
      window.location.href = "login.html";
    });
  }
});
