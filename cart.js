const AmountBoughtElement = document.getElementById("CartBuyProductNumber")
const CartItems = document.getElementById('bikeContainer')
let options = []
let cart = []
let data
cart = JSON.parse(localStorage.getItem('cart'));

// if (cart.length != 0) {
//     for (let i = 1; i < 10; i++) {
//         data = document.createElement('option');
//         data.innerText = `${i}`;
//         data.value = i
//         // AmountBoughtElement.appendChild(data);
        
//     }
// }
BucketAll()
function BucketAll() {
    
    console.log(cart)
    if(cart.length == 0){
        CartItems.innerHTML = `A kosara üres.`
    }
    else{
        let i = 0
        let sum = 0

        cart.forEach(element => {
            // dotnum = element.price.length % 3
            // dottedprice = String(element.price)
            // for (let i = 0; i < dotnum; i++) {
            //     const element = array[i];
                
            // }
            
            let DeletButton = document.createElement('button')
            DeletButton.classList.add('CartDeletProduct')
            DeletButton.id = `deletProduct${i}`
            DeletButton.innerHTML = "Törlés"

            let InsuranceButton = document.createElement('button')
            InsuranceButton.classList.add('CartDeletProduct')
            InsuranceButton.id = `insuranceProduct${i}`
            InsuranceButton.innerHTML = "Hozzáadás"

            let CartItem = document.createElement('div')
            CartItem.id = `cart${i}`
            CartItem.innerHTML = `
            <div class="cartItems card">
            <div class="card-body row p-5">
            <hr class="pb-3">
            <div class="Bimg col-4">
              <img class="w-75" src="${element.path}" alt="">
            </div>
                <ul class="col-8">
                  <li class="row">
                    <div class="col-5">
                      <ul class="aboutBicicle">
                        <li class="BicicleName"><h3>${element.name}</h3></li>
                        <li></li>
                      </ul>
                    </div>
                    <div class="col-3">
                      <select name="" id="CartBuyProductNumber">

                      </select>
                    </div>
                    <div class="col-4">
                      <ul class="aboutBicicle ">
                        <li class="priceli">
                          <h3 class="BiciclePrice">${element.price.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' })}</h3>
                        </li>
                        <li>
                            ${DeletButton.outerHTML}
                        </li>
                      </ul>
                    </div>
                    <hr>
                  </li>
                  <li class="row">
                    <div class="col-8">
                      <p>Biztonságban szeretné érezni kerékpárját? Kössön rá BringaBirodalom biztosítást ami egy évnyi biztosítást ad önnek </p>
                    </div>
                    <div class="col-4">
                        ${InsuranceButton.outerHTML}
                    </div>
                    <hr>
                  </li>
                  <li class="row">
                    <div class="col-7">
                    </div>
                    <div class="col-5">
                      <ul class="aboutBicicle">
                        <li class="priceli2">Részösszge: ${element.price.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' })}<span></span></li>
                        <li><p>Biztosításösszege: <span id="InsuranceFee">0,00 Ft</span></p></li>
                        <li><p>Szállításösszeg: <span>Ingyenes</span></p></li>
                      </ul>
                    </div>
                    <hr>
                  </li>
                  
                </ul>
                </div>
            </div>`

            CartItems.appendChild(CartItem)
            sum += element.price
            
            i++
          });
          console.log(sum);
          let BuyButton = document.createElement('button')
          BuyButton.classList.add('btn')
          BuyButton.classList.add('toCart')
          BuyButton.id = "BuyButton"
          BuyButton.innerHTML = "Vásárlás"

          let sumPrice = document.createElement('div')
          sumPrice.classList.add('cartItems')
          sumPrice.innerHTML = `
            <div class="card ps-5 pe-5">
            <hr>
            <li class="row">
              <div class="col-7"></div>
              <div class="col-5 ">
                <h3>Végösszeg: <span class="${sum}" id="SumMoney">${sum.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' })}</span></h3>
              </div>
              <hr>
            </li>
            <div id="BuyButtonDiv" class = "card-body">
              ${BuyButton.outerHTML}
            </div>
            <div class="">
              <div class="">
                <img class="payPic" src="images/mindenpay.jpg" alt="">
              </div>
            </div>
            </div>`
          CartItems.appendChild(sumPrice);
        }
}
      document.addEventListener('click', function(event) {
        console.log(event)
        if (event.target.id.includes('deletProduct')) {
          let id = event.target.id.slice(12)
          console.log(Number(id));
          console.log(`cart${id}`);
          elementRemove = document.getElementById(`cart${id}`)
          CartItems.removeChild(elementRemove)
          removeFromCartByIndex(id)
        }
        else if(event.target.id.includes('insuranceProduct')){
          let cost = 50000;
          let data = document.getElementById(`SumMoney`)
          let InsuranceFee = document.getElementById(`InsuranceFee`)
          if (InsuranceFee.innerHTML.length < 10) {
            InsuranceFee.innerHTML = `${cost.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' })}` 
            let newPrice = Number(data.classList.value) + cost
            data.innerHTML = `${newPrice.toLocaleString('hu-HU', { style: 'currency', currency: 'HUF' })}`
            data.classList = ""
            data.classList.add(newPrice) 
          }
          else{
            alert("Már van biztosítás ezen a bicikliden! ")
          }
        }
      });

      function removeFromCartByIndex(index) {
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            alert("Invalid index!");
        }
    }