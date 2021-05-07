const {
  Item,
  Normal,
  AgedBrie,
  Backstage,
  Conjured
} = require('./types');

class Shop {
  constructor(items=[]){
    this.items = items;

    this.defaultType = Item;
    this.types = {
      'normal': Normal,
      'Aged Brie': AgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': Backstage,
      'Conjured': Conjured
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

module.exports = { Shop }