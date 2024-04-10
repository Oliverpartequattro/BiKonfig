export function initializeAddToCart(bikesData, cartElementId, updateCartCount) {
    let bikes = bikesData;
    let cart = [];

    let bikeContainer = document.getElementById('bikeContainer');
    if (bikeContainer) {
        bikeContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('toCart')) {
                addToCart(event.target);
            }
        });
    }

    function addToCart(button) {
        bikes.forEach(element => {
            if(element.id == button.value){
                if(cart.some(item => item.id === element.id)){
                    alert("Ez már benne van a kosárban!")
                }
                else{
                    cart.push(element)
                    updateCartCount();
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            }
        });
    }
}
