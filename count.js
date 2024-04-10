export function cartCountFunction(cartElementId) {
    let cartCount = document.getElementById(cartElementId);
    let cart = [];

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartCount();
        console.log(cart)
    }

    function updateCartCount() {
        cartCount.innerHTML = cart.length;
    }

    return updateCartCount;
}