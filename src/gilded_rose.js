class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Normal extends Item {
  constructor({ name, sellIn, quality }) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn = this.sellIn - 1;
    if (this.quality == 0) return;

    this.quality = this.quality - 1;
    if (this.sellIn <= 0) this.quality = this.quality - 1;
  }
}

class AgedBrie extends Item {
  constructor({ name, sellIn, quality }) {
    super(name, sellIn, quality);
  }

  update() {
    this.sellIn = this.sellIn - 1;
    if (this.quality >= 50) return;

    this.quality = this.quality + 1;
    if (this.sellIn <= 0) this.quality = this.quality + 1;
  }
}

class Sulfuras extends Item {
  constructor({ name, sellIn, quality }) {
    super(name, sellIn, quality);
  }

  update() {
    return;
  }
}

class Backstage extends Item {
  constructor({ name, sellIn, quality }) {
    super(name, sellIn, quality);
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

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].update();
    }

    return this.items;
  }
}

module.exports = {
  Normal,
  AgedBrie,
  Sulfuras,
  Backstage,
  Shop
}
