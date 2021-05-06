class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  update() {
    for (let i = 0; i < this.items.length; i++) {
      this._update(this.items[i])
    }

    return this.items;
  }

  _normalUpdate(item) {
    item.sellIn = item.sellIn - 1;
    if (item.quality == 0) return;

    item.quality = item.quality - 1;
    if (item.sellIn <= 0) item.quality = item.quality - 1;
  }

  _agedBrieUpdate(item) {
    item.sellIn = item.sellIn - 1;
    if (item.quality >= 50) return;

    item.quality = item.quality + 1;
    if (item.sellIn <= 0) item.quality = item.quality + 1;
  }

  _sulfurasUpdate(item) {
    return;
  }

  _backstageUpdate(item) {
    item.sellIn = item.sellIn - 1;

    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }
    if (item.quality >= 50) return;

    item.quality = item.quality + 1;
    if (item.sellIn < 10) item.quality = item.quality + 1;
    if (item.sellIn < 5) item.quality = item.quality + 1;
  }

  _update(item) {
    switch(item.name) {
      case 'normal':
        return this._normalUpdate(item);
      case 'Aged Brie':
        return this._agedBrieUpdate(item);
      case 'Sulfuras':
        return this._sulfurasUpdate(item);
      case 'Backstage passes to a TAFKAL80ETC concert':
        return this._backstageUpdate(item);
    }
  }
}

module.exports = {
  Item,
  Shop
}
