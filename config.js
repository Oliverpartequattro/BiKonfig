import { ConfigItem } from './configItem.js';
import configData from './configData.js';
let configItems = ConfigItem.loadData(configData);
console.log(configItems)

let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let dropdown = document.querySelectorAll("[id='dropdownMenu']");
dropdown.forEach(element => {
    element.addEventListener('change', putOnCanvas);
});

canvas.width = 850; 
canvas.height = 600; 
let container = document.getElementById('canvasContainer');
container.appendChild(canvas);

function putOnCanvas(event){
    let frameImg
    let wheelImg
    let groupsetImg
    let saddleImg
    let handlebarImg

    configItems.forEach(item => {
        if(item.id == event.target.value){
            console.log(item)
            console.log(item.id)
            if(item.id.startsWith(0)){
                frameImg = new Image();
                frameImg.src = item.path;
                 console.log("VÁZ");
            }
            else if(item.id.startsWith(1)){
                wheelImg = new Image();
                wheelImg.src = item.path;
                console.log("KERÉK");
            }
            else if(item.id.startsWith(2)){
                groupsetImg = new Image();
                groupsetImg.src = item.path;
                console.log("HAJTÁS");
            }
            else if(item.id.startsWith(3)){
                handlebarImg = new Image();
                handlebarImg.src = item.path;
                console.log("KORMÁNY");
            }
            else if(item.id.startsWith(4)){
                saddleImg = new Image();
                saddleImg.src = item.path;
                console.log("NYEREG");
            }

        }
    });
    buildBike(frameImg, wheelImg, groupsetImg, handlebarImg, saddleImg);

}

function buildBike(frameImg, wheelImg, groupsetImg, handlebarImg, saddleImg) {
    if (wheelImg) {
        wheelImg.onload = function() {
            context.drawImage(wheelImg, 100, 350, 250, 250);
            context.drawImage(wheelImg, 500, 350, 250, 250);
        };
    }
    if (frameImg) {
        frameImg.onload = function() {
            context.drawImage(frameImg, 125, 120);
        };
    }
    if (groupsetImg) {
        groupsetImg.onload = function() {
            context.drawImage(groupsetImg, -80, 190);
        };
    }
    if (handlebarImg) {
        handlebarImg.onload = function() {
            context.drawImage(handlebarImg, 463, 130);
        };
    }
    if (saddleImg) {
        saddleImg.onload = function() {
            context.drawImage(saddleImg, 188, 110);
        };
    }
}
