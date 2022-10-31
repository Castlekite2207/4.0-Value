const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const handleLoginBtn = function () {
  const username = loginInput.value;
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long.");
  }
}

loginButton.addEventListener("click", handleLoginBtn);