class Paint {
  constructor({canvas, context, brush, opacity, blurrer, colour}) {
    this.canvas = canvas;
    this.context = context;
    this.brush = brush;
    this.opacity = opacity;
    this.blur = blurrer;
    this.colour = colour;
    this.isDrawing = false;
    this.x = 0;
    this.y = 0;
    this.initEvents();
  }
  initEvents() {
    ['mousedown', 'touchstart'].forEach(event => {
      this.canvas.addEventListener(event, evt => {
        const offset = this.getOffsetXY(evt);
        this.x = offset.x;
        this.y = offset.y;
        this.drawCircle(this.x, this.y);
        this.isDrawing = true;
      });
    });

    ['mousemove', 'touchmove'].forEach(event => {
      this.canvas.addEventListener(event, evt => {
        if (this.isDrawing) {
          const offset = this.getOffsetXY(evt);
          this.x = offset.x;
          this.y = offset.y;
          this.drawCircle(this.x, this.y);
        }
      });
    });

    ['mouseup', 'touchend'].forEach(event => {
      this.canvas.addEventListener(event, evt => {
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
  set currentColour(colour) {
    this.colour = colour;
  }
  get currentColour() {
    return this.colour;
  }
  drawCircle(x1, y1) {
    this.context.fillStyle = this.colour;
    this.context.globalAlpha = this.opacity.value;
    this.context.beginPath();
    this.context.filter = `blur(${this.blur.value}px)`;
    this.context.arc(x1, y1, this.brush.size, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
  }
}