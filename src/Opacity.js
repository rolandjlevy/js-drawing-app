class Opacity {
  constructor({value}) {
    this.value = value
    this.setValue(value);
  }
  setValue(n) {
    this.value = n / 250;
  }
}
