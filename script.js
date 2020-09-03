const artBoard = new ArtBoard();
const brush = new Brush({size:20});
const opacity = new Opacity({value:50});
const blurrer = new Blur({value:5});
const swatches = new Swatches({initColour: 'purple'});

const paint = new Paint({
  canvas: artBoard.canvas,
  context: artBoard.context, 
  brush,
  opacity,
  blurrer,
  colour: swatches.colour
});