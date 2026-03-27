import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { addToCart } from "./cart.js";
import { logout, observeAuth } from "./auth.js";

const container = document.getElementById("products");
const userEl = document.getElementById("user");
const loadingEl = document.getElementById("loading");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");


let allProducts = [];

observeAuth(user => {
    if (!user) {
        window.location.href = "login.html";
    } else {
        userEl.innerText = user.email;
    }    
});

async function loadProducts() {
    loadingEl.style.display = "block";
  const snapshot = await getDocs(collection(db, "products"));

  allProducts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  displayProducts(allProducts);
  loadingEl.style.display = "none";
}

  function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${product.imageURL}" />
        <h3>${product.name}</h3>
        <p>R${product.price}</p>
        <a href="product.html?id=${product.id}">View</a>
        <button onclick="addToCart('${product.id}', '${product.name}', ${product.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}
loadProducts();

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const category = filterSelect.value;

  let filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(search)
  );

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  displayProducts(filtered);
}

searchInput.addEventListener("input", applyFilters);
filterSelect.addEventListener("change", applyFilters);