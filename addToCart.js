export function addToCartFunction(bikesData) {
    let bikes = bikesData;
    let cart = []
    
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart)
        updateCartCount();
    }
    else{
        cart = []
    }

    function addToCart(button) {
        bikes.forEach(element => {
            if(element.id == button.value){
                if(cart.some(item => item.id === element.id)){
                    alert("Ez már benne van a kosárban!")
                    cart = []
                    localStorage.setItem('cart', JSON.stringify(cart)); 
                    updateCartCount() //EZ KIURITI
                }
                else{
                    cart.push(element)
                    localStorage.setItem('cart', JSON.stringify(cart));
                    console.log(cart)
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

    function updateCartCount (){
        let cartCount = document.getElementById("count");
        if(cartCount){
            let cart = []
    
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
                console.log(cart)
            }
            else{
                cart = []
            }
            if(cart.length == 0){
                cartCount.innerHTML = "A kosara üres."
            }
            else{
                cartCount.innerHTML = `A kosárban ${cart.length} bicikli van.`
            }
                
        }
    }
}


