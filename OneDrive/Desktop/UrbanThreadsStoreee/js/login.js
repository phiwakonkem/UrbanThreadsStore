import { signup as createUser, login as signIn } from "./auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

window.signup = async () => {
  await createUser(email.value, password.value);
  alert("Account created!");
};

window.login = async () => {
  await signIn(email.value, password.value);
  alert("Logged in!");
  window.location.href = "shop.html";
};