const AmountBoughtElement = document.getElementById("CartBuyProductNumber")

let options = []

for (let i = 1; i < 10; i++) {
    let data = document.createElement('option');
    data.innerText = `${i}`;
    data.value = i
    AmountBoughtElement.appendChild(data);
    
}