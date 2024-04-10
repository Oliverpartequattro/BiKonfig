import { ConfigItem } from './configItem.js';
import configData from './configData.js';
let configItems = ConfigItem.loadData(configData);

var canvas = document.createElement('canvas');
let context = canvas.getContext('2d');
let dropdown = document.getElementById("dropdownMenu")
dropdown.addEventListener("change", putOnCanvas)

canvas.width = 800; 
canvas.height = 600; 
canvas.style.border = '1px solid black';
var container = document.getElementById('canvasContainer');
container.appendChild(canvas);

function putOnCanvas(event){
    configItems.forEach(element => {
        if(element.id == event.target.value){
            let item = element
            console.log(item)
            var base_image = new Image();
            base_image.onload = function() {
                context.clearRect(0, 0, canvas.width, canvas.height); 
                context.drawImage(base_image, 100, 100);
            };
            base_image.src = item.path;
            console.log("jesz");
        }
    });

}