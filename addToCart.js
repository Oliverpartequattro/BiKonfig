export function addToCartFunction(bikesData, cartElementId, updateCartCount) {
    let bikes = bikesData;
    let cart = []

    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartCount();
        console.log(cart)
    }
    else{
        cart = []
    }

    function addToCart(button) {
        bikes.forEach(element => {
            if(element.id == button.value){
                if(cart.some(item => item.id === element.id)){
                    alert("Ez már benne van a kosárban!")
                    // cart = []
                    // localStorage.setItem('cart', JSON.stringify(cart)); EZ KIURITI
                }
                else{
                    cart.push(element)
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount(); 
                }
            }
        });
    }

    let bikeContainer = document.getElementById('bikeContainer');
    if (bikeContainer) {
        bikeContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('toCart')) {
                addToCart(event.target);
            }
        });
    }
}
