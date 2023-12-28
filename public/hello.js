// hello.js

function addToCart() {
    var foodSelect = document.getElementById('food');
    var quantityInput = document.getElementById('quantity');

    var selectedFood = foodSelect.options[foodSelect.selectedIndex].text;
    var quantity = quantityInput.value;
    var cart = document.getElementById('cart');
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = '<span>' + selectedFood + '</span><span>: ' + quantity + '</span>';
    cart.appendChild(cartItem);
}

