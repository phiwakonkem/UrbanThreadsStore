import { signup as createUser, login as signIn } from "./auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");

// SIGN UP
async function handleSignup() {
  try {
    await createUser(email.value, password.value);
    alert("Account created!");
  } catch (error) {
    alert(error.message);
  }
}

// LOGIN
async function handleLogin() {
  try {
    await signIn(email.value, password.value);
    alert("Logged in!");
    window.location.href = "shop.html";
  } catch (error) {
    alert(error.message);
  }
}

window.signup = handleSignup;
window.login = handleLogin;