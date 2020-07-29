class ArtBoard {
  constructor() {
    this.canvas = document.querySelector('#art-board');
    this.canvas.width = getComputedStyle(this.canvas).getPropertyValue('--width');
    this.canvas.height = getComputedStyle(this.canvas).getPropertyValue('--height');
    this.canvas.focus();
  }
}