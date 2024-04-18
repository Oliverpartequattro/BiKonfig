const FirstName = document.getElementById('FirstNameInput');
const LastName = document.getElementById('LastNameInput');
const CompanyName = document.getElementById('CompanyInput');
const CountryName = document.getElementById('CountryInput');
const PostalCode = document.getElementById('PostalCodeInput');
const City = document.getElementById('CityInput');
const Street = document.getElementById('StreetInput');
const PhoneNumber = document.getElementById('PhoneNumberInput');
const EmailName = document.getElementById('EmailInput');
const CardNumber = document.getElementById('CardNumberInput');
const CardName = document.getElementById('CardNameInput');
const Expiration = document.getElementById('ExpirationInput');
const CVC = document.getElementById('CVC');
const PayRules = document.getElementById('PayRules');
const ShopRules = document.getElementById('ShopRules');
const PayButton = document.getElementById('PayButton');

let cart = []
cart = JSON.parse(localStorage.getItem('cart'));

PayButton.addEventListener('click', PayChech)

let MustList = [
    FirstName,
    LastName,
    CountryName,
    PostalCode,
    City,
    Street,
    PhoneNumber,
    EmailName,
    CardNumber,
    CardName,
    Expiration,
    CVC
    
]
let Continue = true

function PayChech() {
    MustList.forEach(element => {
        if (element.value == "") {
            Continue = false
        }
    });
    
    if (Continue == false || PayRules.checked != 1 || ShopRules.checked != 1) {
        alert(`Nem tö ltöttél ki mindent!`)
    }
    else{
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Köszönjük a vásárlás.")
        window.location.href = 'indexx.html'
    } 
    
}

