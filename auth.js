// auth.js
document.addEventListener("DOMContentLoaded", function () {
  const loginLink = document.querySelector('.nav-login');
  const signupLink = document.querySelector('.nav-signup');
  const logoutLink = document.querySelector('.nav-logout');

  const username = localStorage.getItem('username');

  if (username) {
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
    if (logoutLink) logoutLink.style.display = "inline-block";
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (signupLink) signupLink.style.display = "inline-block";
    if (logoutLink) logoutLink.style.display = "none";
  }
});
