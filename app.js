const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.height = 700;
canvas.width = 700;

ctx.lineWidth = 2.5;
ctx.strokeS = '#2c2c2c';

let painting = false;


function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    painting = true;
}

if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    
}

const range = document.getElementById('jsRange');

function onChange(event){
    console.log(range.value);
    ctx.lineWidth = range.value;
}


if (range) {
    range.addEventListener('change', onChange)
}

const clear = document.getElementById('jsClear');

function onClear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

if (clear) {
    clear.addEventListener('click', onClear)
}

function changeColor(event){
    color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

const colors = document.getElementsByClassName('jsColor');
Array.from(colors).forEach(color => addEventListener('click', changeColor));