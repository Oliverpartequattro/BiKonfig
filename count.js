export function initializeCartCount(cartElementId) {
    let cartCount = document.getElementById(cartElementId);
    let cart = [];

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartCount();
    }

    function updateCartCount() {
        cartCount.innerHTML = cart.length;
    }

    return updateCartCount;
}