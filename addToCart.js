export function addToCartFunction(bikesData) {
    let bikes = bikesData;
    let cart = []
    let canvasContainer = document.getElementById("canvascontainer1")
    
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
                    // cart = []
                    // localStorage.setItem('cart', JSON.stringify(cart)); 
                    // updateCartCount() //EZ KIURITI
                    location.reload()
                }
                else{
                    cart.push(element)
                    localStorage.setItem('cart', JSON.stringify(cart));
                    console.log(cart)
                    updateCartCount(); 
                    if(canvasContainer){
                        canvasContainer.classList.add("spinTheBike");
                        setTimeout(() => {
                            alert("Sikeres kosárhoz adás!")
                            location.reload()
                        }, 20000); 
                    }       

                    else{
                        alert("Sikeres kosárhoz adás!")
                    }                                                
                }
            }
        });
    }

    let bikeContainer = document.getElementById('bikeContainer');
    let configCart = document.getElementById("configCart");
    if (bikeContainer) {
        bikeContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('toCart')) {
                addToCart(event.target);
            }
        });
    }
    if (configCart) {
        configCart.addEventListener('click', function(event) {
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
