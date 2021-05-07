const Item = require('./item');

class Conjured extends Item {
  constructor({ name, sellIn, quality }) {
    super({ name, sellIn, quality });
  }

  update() {
    this.quality = this.quality - 2;
    if (this.sellIn <= 0) this.quality = this.quality - 2;
    if (this.quality < 0) this.quality = 0

    this.sellIn = this.sellIn - 1;
  }
}

module.exports = Conjured