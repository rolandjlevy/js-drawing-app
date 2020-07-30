class ArtBoard {
  constructor() {
    this.canvas = document.querySelector('#art-board');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = getComputedStyle(this.canvas).getPropertyValue('--width');
    this.canvas.height = getComputedStyle(this.canvas).getPropertyValue('--height');
    this.canvas.focus();
  }
  clearAll() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }
}