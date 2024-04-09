var canvas = document.createElement('canvas');
let dropdown = document.getElementById("dropdownMenu")
dropdown.addEventListener("onchange", putOnCanvas)

canvas.width = 800; 
canvas.height = 600; 
canvas.style.border = '1px solid black';
var container = document.getElementById('canvasContainer');
container.appendChild(canvas);

function putOnCanvas(event){
console.log(event.target.value)
}