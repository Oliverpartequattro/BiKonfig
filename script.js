import data from './bikeData.js';
import { Bike } from './item.js';
import { cartCountFunction } from './count.js';
import { addToCartFunction } from './addToCart.js';

document.addEventListener("DOMContentLoaded", function() {
    let updateCartCount = cartCountFunction("count");
    let bikes = Bike.loadData(data);
    addToCartFunction(bikes, "count", updateCartCount);
});