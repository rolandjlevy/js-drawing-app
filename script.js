
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

const canvas = document.querySelector('#art-board');
canvas.width = getComputedStyle(canvas).getPropertyValue('--width');
canvas.height = getComputedStyle(canvas).getPropertyValue('--height');
canvas.focus();

const paint = new Paint({canvas, brushSize: 20, blur: 5});

// const input = new Input();
