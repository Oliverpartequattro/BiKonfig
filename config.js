var canvas = document.createElement('canvas');
context = canvas.getContext('2d');
let dropdown = document.getElementById("dropdownMenu")
dropdown.addEventListener("change", putOnCanvas)

canvas.width = 800; 
canvas.height = 600; 
canvas.style.border = '1px solid black';
var container = document.getElementById('canvasContainer');
container.appendChild(canvas);

function putOnCanvas(event){
    var base_image = new Image();
    base_image.onload = function() {
        context.clearRect(0, 0, canvas.width, canvas.height); 
        context.drawImage(base_image, 100, 100);
    };
    base_image.src = event.target.value;
    console.log("jesz");
}