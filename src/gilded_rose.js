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

    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality > 0) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.quality = item.quality - 1;
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
}

module.exports = {
  Item,
  Shop
}
