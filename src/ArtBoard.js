class ArtBoard {
  constructor() {
    this.body = document.querySelector('body');
    this.canvas = document.querySelector('#art-board');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = getComputedStyle(this.canvas).getPropertyValue('--width');
    this.canvas.height = getComputedStyle(this.canvas).getPropertyValue('--height');
    this.canvas.focus();
    this.canvas.style.opacity = '1';
  }
  clearAll() {
    this.context.clearRect(...this.getRect());
  }
  fillAll() {
    this.context.fillStyle = paint.currentColour;
    this.context.globalAlpha = 1;
    this.context.fillRect(...this.getRect());
  }
  getRect() {
    return [
      0, 0, this.context.canvas.width, this.context.canvas.height
    ];
  }
  windowSize() {
    const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {w, h};
  }
}