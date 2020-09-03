class Swatches {
  constructor({initColour}) {
    this.colour = initColour;
    this.colours = ["white", "grey", "black", "purple", "red", "orange", "yellow", "greenyellow", "green", "turquoise", "blue"];
    this.swatchesList = document.querySelector('ul.swatches');
    this.li = document.querySelector('ul.swatches > li');
    this.generateSwatches();
  }
  generateSwatches() {
    this.colours.forEach((col, index) => {
      const clone = this.li.cloneNode(true);
      clone.style.display = 'initial';
      const label = clone.querySelector('label');
      const input = clone.querySelector('input');
      input.value = col;
      input.id = `col-${index + 1}`;
      label.htmlFor = `col-${index + 1}`;
      label.classList.add(col);
      label.style.background = col;
      label.addEventListener('click', e => {
        this.colour = e.target.classList.value;
        paint.currentColour = this.colour;
      });
      if (col === this.colour) input.checked = true;
      this.swatchesList.appendChild(clone);
    });
  }
}