const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const handleLoginBtn = function () {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", handleLoginBtn);