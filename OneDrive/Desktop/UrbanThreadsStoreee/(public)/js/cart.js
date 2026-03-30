import { observeAuth } from "./auth.js";

observeAuth(user => {
  if (!user) {
    window.location.href = "login.html";
  }
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("cart");
const totalEl = document.getElementById("total");

export function addToCart(id, name, price) {
  const item = cart.find(p => p.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function displayCart() {

  if (!container || !totalEl) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <div>
          <h3>${item.name}</h3>
          <p>Qty: ${item.quantity}</p>
        </div>
        <div>
          <p>R${item.price * item.quantity}</p>
          <button onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
      </div>
    `;
  });

  totalEl.innerText = "Total: R" + total;
}

window.removeFromCart = removeFromCart;
window.addToCart = addToCart;

if (document.getElementById("cart")) {
  displayCart();
}

window.checkout = function () {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("✅ Payment Successful (Demo)");

  localStorage.removeItem("cart");
  cart = [];
  displayCart();
};