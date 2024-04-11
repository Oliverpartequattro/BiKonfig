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
    configItems.forEach(item => {
        if(item.id == event.target.value){
            console.log(item)
            console.log(item.id)
            if(item.id.startsWith(0)){
                let image = new Image();
                image.src = item.path;
                image.onload = function() {
                    //context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(image, 125, 120);
                };
                console.log("VÁZ");
            }
            else if(item.id.startsWith(1)){
                let image = new Image();
                let width = 250;
                let height = 250;
                image.src = item.path;
                image.onload = function() {
                    //context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(image, 100, 350, width, height);
                    context.drawImage(image, 500, 350, width, height);
                };
                console.log("KERÉK");
            }
            else if(item.id.startsWith(2)){
                let image = new Image();
                image.src = item.path;
                image.onload = function() {
                    //context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(image, -80 , 190);
                };
                console.log("HAJTÁS");
            }
            else if(item.id.startsWith(3)){
                let image = new Image();
                image.src = item.path;
                image.onload = function() {
                    //context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(image, 463, 130);
                };
                console.log("KORMÁNY");
            }
            else if(item.id.startsWith(4)){
                let image = new Image();
                image.src = item.path;
                image.onload = function() {
                    //context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(image, 188, 110);
                };
                console.log("NYEREG");
            }

        }
    });

}