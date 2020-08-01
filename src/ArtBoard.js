class ArtBoard {
  constructor() {
    this.body = document.querySelector('body');
    this.canvas = document.querySelector('#art-board');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = getComputedStyle(this.canvas).getPropertyValue('--width');
    this.canvas.height = getComputedStyle(this.canvas).getPropertyValue('--height');
    this.canvas.focus();
    // window.addEventListener('resize', () => {
    //   this.canvas.width = this.windowSize().w;
    //   this.canvas.height = this.windowSize().h;
    //   console.log(this.canvas.width, this.canvas.height);  
    // }, false);
  }
  clearAll() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }
  windowSize() {
    const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {w, h};
  }
}