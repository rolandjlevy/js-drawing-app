class Brush {
  constructor({size}) {
    this.size = size;
    this.brushCursor = document.querySelector('.brush-cursor');
    this.setSize(size);
  }
  setSize(n) {
    this.size = n;
    this.brushCursor.classList = ['brush-cursor'];
    this.brushCursor.classList.add(`cursor-size-${n}`);
  }
}
