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
                <img src="${bike.pathasd}" class="card-img-top" alt= "KEP">
                <div class="card-body">
                    <h5 class="card-title">${bike.name}</h5>
                    <p class="card-title">${bike.description}</p>
                    <p class="card-text">Ár: ${bike.price}</p>
                    <button value="${bike.id}" class="btn toCart">Kosárba</button>
                </div>
            </div>
        `;
        container.appendChild(cardDiv);
    });
}
document.addEventListener('DOMContentLoaded', createBikeCards);
