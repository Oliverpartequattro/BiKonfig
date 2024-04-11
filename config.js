import { ConfigItem } from './configItem.js';
import configData from './configData.js';
let configItems = ConfigItem.loadData(configData);
console.log(configItems)

var canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let dropdown = document.querySelectorAll("[id='dropdownMenu']");
dropdown.forEach(element => {
    element.addEventListener('change', putOnCanvas);
});

canvas.width = 800; 
canvas.height = 600; 
canvas.style.border = '1px solid black';
var container = document.getElementById('canvasContainer');
container.appendChild(canvas);

function putOnCanvas(event){
    configItems.forEach(item => {
        if(item.id == event.target.value){
            console.log(item)
            console.log(item.id)
            if(item.id.startsWith(0)){
                var base_image = new Image();
                base_image.src = item.path;
                base_image.onload = function() {
                    context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(base_image, 100, 100);
                };
                console.log("VÁZ");
            }
            else if(item.id.startsWith(1)){
                var base_image = new Image();
                base_image.src = item.path;
                base_image.onload = function() {
                    context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(base_image, 100, 100);
                };
                console.log("KERÉK");
            }
            else if(item.id.startsWith(2)){
                var base_image = new Image();
                base_image.src = item.path;
                base_image.onload = function() {
                    context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(base_image, 100, 100);
                };
                console.log("HAJTÁS");
            }
            else if(item.id.startsWith(3)){
                var base_image = new Image();
                base_image.src = item.path;
                base_image.onload = function() {
                    context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(base_image, 100, 100);
                };
                console.log("KORMÁNY");
            }
            else if(item.id.startsWith(4)){
                var base_image = new Image();
                base_image.src = item.path;
                base_image.onload = function() {
                    context.clearRect(0, 0, canvas.width, canvas.height); 
                    context.drawImage(base_image, 100, 100);
                };
                console.log("NYEREG");
            }

        }
    });

}