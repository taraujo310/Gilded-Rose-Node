const Item = require('./item');

class Normal extends Item {
  constructor({ name, sellIn, quality }) {
    super({ name, sellIn, quality });
  }

  update() {
    this.sellIn = this.sellIn - 1;
    if (this.quality == 0) return;

    this.quality = this.quality - 1;
    if (this.sellIn <= 0) this.quality = this.quality - 1;
  }
}

module.exports = Normal