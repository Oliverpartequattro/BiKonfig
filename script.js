import data from './bikeData.js';
import { Bike } from './item.js';
import { initializeCartCount } from './count.js';
import { initializeAddToCart } from './addToCart.js';

let updateCartCount = initializeCartCount("count");
let bikes = Bike.loadData(data);
initializeAddToCart(bikes, "count", updateCartCount);