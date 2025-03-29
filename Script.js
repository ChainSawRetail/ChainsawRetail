document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Product added to cart!");
        });
    });
});
