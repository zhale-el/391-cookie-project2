const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberMecheckbox = document.querySelector(".ck");
const loginBtn = document.querySelector("button");

function setCookie(cookieName, cookieValue, exDay) {
  const now = new Date();
  now.setTime(now.getTime() + exDay * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};path=/;expires=${now}`;
}

function clearInput() {
  usernameInput.value = "";
  passwordInput.value = "";
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("remember");
  if (rememberMecheckbox.checked) {
    setCookie("login-token", usernameInput.value, 9);
  }
  clearInput();
});
