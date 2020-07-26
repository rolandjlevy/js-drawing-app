// When true, moving the mouse draws on the canvas
let isDrawing = false;
let brushSize = 20;
let x = 0;
let y = 0;

// const cursor = document.querySelector('.cursor');
// cursor.style.width = `${brushSize * 2}px`;
// cursor.style.height = `${brushSize * 2}px`;

const canvas = document.getElementById('art-board');
canvas.width = getComputedStyle(canvas).getPropertyValue('--width');
canvas.height = getComputedStyle(canvas).getPropertyValue('--height');
canvas.focus();

const context = canvas.getContext('2d');

// event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

// Add the event listeners for mousedown, mousemove, and mouseup
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
  // cursor.style.left = `${e.clientX - brushSize/2}px`;
  // cursor.style.top = `${e.clientY - brushSize/2}px`;
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
  context.strokeStyle = 'black';
  context.globalAlpha = 0.1;
  context.beginPath();
  context.arc(x1, y1, brushSize, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
}

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}