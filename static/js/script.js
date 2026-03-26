console.log("Gikomba Pottery website loaded successfully");

/* Function to show a welcome message when the page loads */
function showMessage() {
    alert("Welcome to ClayCraft Pottery 🏺✨ Explore our handcrafted collection!");
}

/* Scroll-based animation for fade-in effect */
window.addEventListener("scroll", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add("show");
        }
    });
});

/* Function to toggle dark mode */
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

/* Function to show product details when a gallery item is clicked */
function showProduct(product) {
    alert("You selected: " + product);
}

/* Function to add a product to the cart */
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: name, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart 🛒");
}
/* Function to remove an item from the cart */
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let container = document.getElementById("cart-items");
    let total = 0;

    if (!container) return;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        container.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - KES ${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        total += item.price;
    });

    document.getElementById("total").innerText = "Total: KES " + total;
}
/* Function to clear the cart */
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart(); // refresh cart
}
function clearCart() {
    localStorage.removeItem("cart");
    loadCart(); // refresh cart
}
/* Load cart items when the cart page is loaded */
if (window.location.pathname.includes("cart.html")) {
    loadCart();
}
document.querySelector("form")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login feature coming soon 🔐");
});
