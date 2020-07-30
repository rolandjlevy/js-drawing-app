
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

const artBoard = new ArtBoard();
const brush = new Brush({size:20});
const opacity = new Opacity({value:50});
const blurrer = new Blur({value:5});

const paint = new Paint({
  canvas: artBoard.canvas, 
  brush,
  opacity,
  blurrer
});

