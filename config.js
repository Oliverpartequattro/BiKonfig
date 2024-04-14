import { ConfigItem } from './configItem.js';
import configData from './configData.js';
let configItems = ConfigItem.loadData(configData);
console.log(configItems)

let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let dropdown = document.querySelectorAll("[id='dropdownMenu']");
let buildCost = document.getElementById("buildCost");
let buildPrice = 0
let frameImg
let wheelImg
let groupsetImg
let saddleImg
let handlebarImg

dropdown.forEach(element => {
    element.addEventListener('change', function(event) {
        putOnCanvas(event, frameImg, wheelImg, groupsetImg, saddleImg, handlebarImg);
    });
});

canvas.width = 850; 
canvas.height = 600; 
let container = document.getElementById('canvasContainer');
container.appendChild(canvas);


function putOnCanvas(event){

    configItems.forEach(item => {
        if(item.id == event.target.value){
            console.log(item)
            console.log(item.id)
            if(item.id.startsWith(0)){
                frameImg = new Image();
                frameImg.src = item.path;
                frameImg.price = item.price
                console.log(frameImg.price)
                console.log("VÁZ");
            }
            else if(item.id.startsWith(1)){
                wheelImg = new Image();
                wheelImg.src = item.path;
                wheelImg.price = item.price
                console.log("KERÉK");
            }
            else if(item.id.startsWith(2)){
                groupsetImg = new Image();
                groupsetImg.src = item.path;
                groupsetImg.price = item.price
                buildPrice += item.price;
                console.log("HAJTÁS");
            }
            else if(item.id.startsWith(3)){
                handlebarImg = new Image();
                handlebarImg.src = item.path;
                handlebarImg.price = item.price
                buildPrice += item.price;
                console.log(item)
                console.log("KORMÁNY");
            }
            else if(item.id.startsWith(4)){
                saddleImg = new Image();
                saddleImg.src = item.path;
                saddleImg.price = item.price
                buildPrice += item.price;
                console.log("NYEREG");

            }

        }
    });
    buildBike();
}

function buildBike() {
    buildPrice = 0
    context.clearRect(0, 0, canvas.width, canvas.height);
    let totalImages = [frameImg, wheelImg, groupsetImg, handlebarImg, saddleImg].filter(img => img); 
    totalImages.forEach(img => {
        img.onload = function() {
            if (wheelImg) {
                context.drawImage(wheelImg, 100, 350, 250, 250);
                context.drawImage(wheelImg, 500, 350, 250, 250);
                buildPrice += wheelImg.price;
            }
                if (frameImg) {
                    context.drawImage(frameImg, 125, 130);
                    buildPrice += frameImg.price;
                }
                if (groupsetImg) {
                    context.drawImage(groupsetImg, -100, 200);
                    buildPrice +=  groupsetImg.price;
                }
                if (handlebarImg) {
                    context.drawImage(handlebarImg, 464, 143);
                    buildPrice +=  handlebarImg.price;
                }
                if (saddleImg) {
                    context.drawImage(saddleImg, 188, 118);
                    buildPrice += saddleImg.price;
                }
                buildCost.innerHTML = buildPrice
            }
    });
}
