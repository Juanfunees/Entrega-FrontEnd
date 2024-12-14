// Datos de productos (agregué los precios)
const products = [
  { id: 1, name: "Zapatilla 1", price: 120000, image: "/img/old-blue.jpg" },
  { id: 2, name: "Zapatilla 2", price: 100000, image: "/img/old-clara.jpg" },
  { id: 3, name: "Zapatilla 3", price: 110000, image: "/img/old-negra.jpg" },
  { id: 4, name: "Zapatilla 4", price: 130000, image: "/img/run-black.jpg" },
  {
    id: 5,
    name: "Zapatilla 5",
    price: 115000,
    image: "/img/run-lightblue.jpg",
  },
  { id: 6, name: "Zapatilla 6", price: 125000, image: "/img/run-white.jpg" },
  { id: 7, name: "Zapatilla 7", price: 90000, image: "/img/slip-black.jpg" },
  { id: 8, name: "Zapatilla 8", price: 95000, image: "/img/slip-blap.jpg" },
  { id: 9, name: "Zapatilla 9", price: 85000, image: "/img/slip-blue.jpg" },
];

let cart = [];
let total = 0;

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    total += product.price;
    updateCart();
  }
}

function updateCart() {
  document.getElementById("total").textContent =
    total.toLocaleString("es-ES") + " $ARG";

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price.toLocaleString(
      "es-ES"
    )}`;
    cartItems.appendChild(li);
  });

  console.log(cart);
}

function finalizarCompra() {
  alert(
    "Compra realizada con éxito. Total: " +
      total.toLocaleString("es-ES") +
      "$ ARG"
  );
  cart = [];
  total = 0;
  updateCart();
}

document.addEventListener("DOMContentLoaded", function () {});
