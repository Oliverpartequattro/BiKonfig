import data from './bikeData.js'
import { Bike } from './item.js'

let cartCount = document.getElementById("count")
let bikes = Bike.loadData(data)
let cart = []

if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
}

document.getElementById('bikeContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('toCart')) {
        addToCart(event.target);
    }
});

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

function updateCartCount() {
    cartCount.innerHTML = cart.length;
}
