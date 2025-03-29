let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = ${item.product} - $${item.price};
        cartList.appendChild(li);
    });
    document.getElementById("total").textContent = total;
}
