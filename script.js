import data from './bikeData.js'
import { Bike } from './item.js'

let shopButton = document.getElementById("toCart")
let bikes = Bike.loadData(data)
let cartCount = document.getElementById("count")
let cart = []
let count = 0

document.getElementById('bikeContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('toCart')) {
        addToCart(event.target);
    }
});

function addToCart(button) {
    bikes.forEach(element => {
        if(element.id == button.value){
            cart.push(element)
            count = cart.length
            cartCount.innerHTML = count
        }
    });
    console.log(cart)
    console.log(count)
}