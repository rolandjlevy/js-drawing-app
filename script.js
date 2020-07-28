// document.addEventListener('DOMContentLoaded', (e) => {

/////////////////////
// Colour swatches //
/////////////////////

let colour = 'black';

const colours = ["white", "grey", "black", "purple", "red", "orange", "yellow", "greenyellow", "green", "turquoise", "blue"];

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

////////////
// Canvas //
////////////

const canvas = document.querySelector('#art-board');
canvas.width = getComputedStyle(canvas).getPropertyValue('--width');
canvas.height = getComputedStyle(canvas).getPropertyValue('--height');
canvas.focus();

const context = canvas.getContext('2d');

////////////
// Brush  //
////////////

let brushSize = 20;

const brushCursor = document.querySelector('.brush-cursor');
brushCursor.classList.add(`cursor-size-${brushSize}`);

function setBrushSize(n) {
  brushSize = n;
  brushCursor.classList = ['brush-cursor'];
  brushCursor.classList.add(`cursor-size-${n}`);
}

/////////////
// Events  //
/////////////

let isDrawing = false;
let blur = 5;
let x = 0;
let y = 0;

function getOffsetXY(evt) {
  const e = evt.touches ? evt.touches[0] : evt;
  const x = evt.touches ? e.clientX - e.target.offsetLeft : e.offsetX;
  const y = evt.touches ? e.clientY - e.target.offsetTop : e.offsetY;
  return {x, y};
}
['mousedown', 'touchstart'].forEach(event => {
  canvas.addEventListener(event, evt => {
    const offset = getOffsetXY(evt);
    x = offset.x;
    y = offset.y;
    drawCircle(context, x, y, offset.x, offset.y);
    isDrawing = true;
  });
});

['mousemove', 'touchmove'].forEach(event => {
  canvas.addEventListener(event, evt => {
    if (isDrawing) {
      const offset = getOffsetXY(evt);
      drawCircle(context, x, y, offset.x, offset.y);
      x = offset.x;
      y = offset.y;
    }
  });
});

['mouseup', 'touchend'].forEach(event => {
  canvas.addEventListener(event, evt => {
    if (isDrawing) {
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
});

// canvas.addEventListener('keyup', e => {
//   if (e.keyCode == 188 && brushSize > 0) {
//     brushSize--;
//     cursor.style.width = `${brushSize * 2}px`;
//     cursor.style.height = `${brushSize * 2}px`;
//   } else if (e.keyCode == 190) {
//     brushSize++;
//     cursor.style.width = `${brushSize * 2}px`;
//     cursor.style.height = `${brushSize * 2}px`;
//   }
// });

function drawCircle(context, x1, y1, x2, y2) {
  context.fillStyle = colour;
  context.globalAlpha = 0.05;
  context.beginPath();
  context.filter = `blur(${blur}px)`;
  context.arc(x1, y1, brushSize, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
}  

// });