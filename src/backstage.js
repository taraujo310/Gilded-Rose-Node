const Item = require('./item');

class Backstage extends Item {
  constructor({ name, sellIn, quality }) {
    super({ name, sellIn, quality });
  }

  update() {
    this.sellIn = this.sellIn - 1;

    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
    if (this.quality >= 50) return;

    this.quality = this.quality + 1;
    if (this.sellIn < 10) this.quality = this.quality + 1;
    if (this.sellIn < 5) this.quality = this.quality + 1;
  }
}

module.exports = Backstage