
let isDrawing = false;
let brushSize = 20;
let blur = 5;
let x = 0;
let y = 0;
let colour = 'black';

const colours = ["white", "grey", "black", "red", "orange", "yellow", "greenyellow", "green", "turquoise", "blue"];

const coloursList = document.querySelector('ul.colours');

colours.forEach(col => {
  const li = document.createElement('li');
  li.classList.add(col);
  li.style.background = col;
  coloursList.appendChild(li);
  li.addEventListener('click', e => {
    colour = e.target.classList.value;
  });
});

const canvas = document.getElementById('art-board');
canvas.width = getComputedStyle(canvas).getPropertyValue('--width');
canvas.height = getComputedStyle(canvas).getPropertyValue('--height');
canvas.focus();

const context = canvas.getContext('2d');

// e.offsetX, e.offsetY gives (x,y) offset from edge of canvas

canvas.addEventListener('mousedown', e => {
  x = e.offsetX + brushSize;
  y = e.offsetY + brushSize;
  drawCircle(context, x, y, e.offsetX, e.offsetY);
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing) {
    drawCircle(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX + brushSize;
    y = e.offsetY + brushSize;
  }
});

canvas.addEventListener('mouseup', e => {
  if (isDrawing) {
    drawCircle(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

canvas.addEventListener('keyup', e => {
  if (e.keyCode == 188 && brushSize > 0) {
    brushSize--;
    cursor.style.width = `${brushSize * 2}px`;
    cursor.style.height = `${brushSize * 2}px`;
  } else if (e.keyCode == 190) {
    brushSize++;
    cursor.style.width = `${brushSize * 2}px`;
    cursor.style.height = `${brushSize * 2}px`;
  }
});

function drawCircle(context, x1, y1, x2, y2) {
  context.fillStyle = colour;
  context.globalAlpha = 0.025;
  context.beginPath();
  context.filter = `blur(${blur}px)`;
  context.arc(x1, y1, brushSize, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
}

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = colour;
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}