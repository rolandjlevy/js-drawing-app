### Idea from
+ [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)

### Improvements
+ have a panel that shows selected colour, opacity, blur
+ look at scrolling issue in mobile view - make canvas resize to fit full width. Look at ResizeObserver object and see https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport
+ bug: when tools has focus it activates drawing
+ make tools UI into an object
+ improve the layout and styling for the controls

### Done
+ add [touch events](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_touchmove2) so it's mobile friendly: 
+ have preset brush sizes 
+ adjust the origin of the brush cursor
+ make an HTML slider for opacity
+ add a clear canvas button
+ make an HTML slider for blurring
+ make the swatches radio buttons so they have an on/off state

### Youtube tutorials
+ [Adam Khoury](https://www.youtube.com/watch?v=n-AuSopUl6s)
+ [DesignCourse](https://www.youtube.com/watch?v=rfpRZ2t_BrQ)

### SVG cursor
+ [from stackoverflow](https://stackoverflow.com/questions/46017334/how-to-reference-inline-svg-as-cursor-in-css-style)

### ideas

- inside Artboard constructor:

```js
window.addEventListener('resize', () => {
  this.canvas.width = this.windowSize().w;
  this.canvas.height = this.windowSize().h;
  console.log(this.canvas.width, this.canvas.height);  
}, false);
```