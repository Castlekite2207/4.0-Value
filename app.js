const loginForm = document.querySelector("#login");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const handleLoginBtn = function () {
  console.log(`hello${loginInput.value}`);
};

loginButton.addEventListener("click", handleLoginBtn);
