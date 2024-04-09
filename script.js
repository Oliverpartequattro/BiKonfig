import data from './bikeData.js'
import { Bike } from './item.js'

let shopButton = document.getElementById("toCart")
let bikes = Bike.loadData(data)
let cart = []

document.getElementById('bikeContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('toCart')) {
        addToCart(event.target);
    }
});

function addToCart(button) {
    bikes.forEach(element => {
        if(element.id == button.value){
            cart.push(element)
        }
    });
    console.log(cart)
}