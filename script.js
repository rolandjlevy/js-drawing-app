
/////////////////////
// Colour swatches //
/////////////////////

let colour = 'purple';

const colours = ["white", "grey", "black", "purple", "red", "orange", "yellow", "greenyellow", "green", "turquoise", "blue"];

const swatchesList = document.querySelector('ul.swatches');
const li = document.querySelector('ul.swatches > li');

colours.forEach((col, index) => {
  const clone = li.cloneNode(true);
  clone.style.display = 'initial';
  const label = clone.querySelector('label');
  const input = clone.querySelector('input');
  input.value = col;
  input.id = `col-${index + 1}`;
  label.htmlFor = `col-${index + 1}`;
  label.classList.add(col);
  label.style.background = col;
  label.addEventListener('click', e => {
    colour = e.target.classList.value;
  });
  if (col === colour) input.checked = true;
  swatchesList.appendChild(clone);
});

const artBoard = new ArtBoard();
const brush = new Brush({size:20});
const opacity = new Opacity({value:50});
const blurrer = new Blur({value:5});

const paint = new Paint({
  canvas: artBoard.canvas,
  context: artBoard.context, 
  brush,
  opacity,
  blurrer
});

