class Paint {
  constructor({canvas, brushSize, blur}) {
    this.context = canvas.getContext('2d');
    this.brushCursor = document.querySelector('.brush-cursor');
    this.brushSize = brushSize;
    this.blur = blur;
    this.isDrawing = false;
    this.x = 0;
    this.y = 0;
    this.setBrushSize(brushSize);
    
    ['mousedown', 'touchstart'].forEach(event => {
      canvas.addEventListener(event, evt => {
        const offset = this.getOffsetXY(evt);
        this.x = offset.x;
        this.y = offset.y;
        this.drawCircle(this.x, this.y, offset.x, offset.y);
        this.isDrawing = true;
      });
    });

    ['mousemove', 'touchmove'].forEach(event => {
      canvas.addEventListener(event, evt => {
        if (this.isDrawing) {
          const offset = this.getOffsetXY(evt);
          this.drawCircle(this.x, this.y, offset.x, offset.y);
          this.x = offset.x;
          this.y = offset.y;
        }
      });
    });

    ['mouseup', 'touchend'].forEach(event => {
      canvas.addEventListener(event, evt => {
        if (this.isDrawing) {
          this.x = 0;
          this.y = 0;
          this.isDrawing = false;
        }
      });
    });
  }
  getOffsetXY(evt) {
    const e = evt.touches ? evt.touches[0] : evt;
    const x = evt.touches ? e.clientX - e.target.offsetLeft : e.offsetX;
    const y = evt.touches ? e.clientY - e.target.offsetTop : e.offsetY;
    return {x, y};
  }
  drawCircle(x1, y1, x2, y2) {
    this.context.fillStyle = colour;
    this.context.globalAlpha = 0.05;
    this.context.beginPath();
    this.context.filter = `blur(${this.blur}px)`;
    this.context.arc(x1, y1, this.brushSize, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
  }
  setBrushSize(n) {
    this.brushSize = n;
    this.brushCursor.classList = ['brush-cursor'];
    this.brushCursor.classList.add(`cursor-size-${n}`);
  }
}