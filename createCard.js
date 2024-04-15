import data from './bikeData.js';
import { Bike } from './item.js';

let bikes = Bike.loadData(data);

function createBikeCards() {

    const container = document.getElementById('bikeContainer');

bikes.forEach(bike => {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML = `
        <div class="card h-100">
            <div class="d-flex justify-content-center align-items-center">
                <img src="${bike.path}" class="shopimg" alt="KEP" width="40%" height="40%">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${bike.name}</h5>
                <p class="card-title">${bike.description}</p>
                <p class="card-text">Ár: ${bike.price.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' })}</p> 
                <button value="${bike.id}" class="btn toCart">Kosárba</button>
            </div>
        </div>
    `;
        container.appendChild(cardDiv);
    });
}
document.addEventListener('DOMContentLoaded', createBikeCards);
