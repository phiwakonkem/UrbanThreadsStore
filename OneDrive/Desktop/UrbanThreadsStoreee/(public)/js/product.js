import { db } from "./firebase.js";
import { doc, getDoc } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const container = document.getElementById("product");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadProduct() {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);

  const p = snap.data();

  container.innerHTML = `
    <img src="${p.imageURL}" style="width:300px;">
    <h1>${p.name}</h1>
    <p>${p.description}</p>
    <h2>R${p.price}</h2>
  `;
}

loadProduct();