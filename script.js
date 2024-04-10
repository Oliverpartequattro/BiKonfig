import data from './bikeData.js';
import { Bike } from './item.js';
import { addToCartFunction } from './addToCart.js';

document.addEventListener("DOMContentLoaded", function() {
    let bikes = Bike.loadData(data);
    addToCartFunction(bikes);
});