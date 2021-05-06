class Item {
  constructor({ name, sellIn, quality }){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    return;
  }
}

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

class AgedBrie extends Item {
  constructor({ name, sellIn, quality }) {
    super({ name, sellIn, quality });
  }

  update() {
    this.sellIn = this.sellIn - 1;
    if (this.quality >= 50) return;

    this.quality = this.quality + 1;
    if (this.sellIn <= 0) this.quality = this.quality + 1;
  }
}

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

class Shop {
  constructor(items=[]){
    this.items = items;

    this.defaultType = Item;
    this.types = {
      'normal': Normal,
      'Aged Brie': AgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': Backstage
    }
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = this._factory(this.items[i]);
      this.items[i].update()
    }

    return this.items;
  }

  _factory(item) {
    const klass = this.types[item.name] || this.defaultType;
    return new klass(item);
  }
}

module.exports = {
  Item,
  Normal,
  AgedBrie,
  Backstage,
  Shop
}
