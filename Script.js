document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("Product added to cart!");
        });
    });
});
.navbar {
  background-color: #1a1a1a;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}
