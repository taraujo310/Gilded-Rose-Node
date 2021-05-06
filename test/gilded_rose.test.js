const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  describe("Normal Item", () => {
    it("before_sell_date", () => {
      const gildedRose = new Shop([new Item("normal", 10, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(4);
      expect(items[0].sellIn).toBe(9);
    })

    it("on_sell_date", () => {
      const gildedRose = new Shop([new Item("normal", 0, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(-1);
    })

    it("after_sell_date", () => {
      const gildedRose = new Shop([new Item("normal", -1, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(-2);
    })

    it("of_zero_quality", () => {
      const gildedRose = new Shop([new Item("normal", 10, 0)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(9);
    })
  })

  describe("Aged Brie Item", () => {
    it("before_sell_date", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 30)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(31);
      expect(items[0].sellIn).toBe(9);
    })

    it("before_sell_date_with_max_quality", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    })

    it("on_sell_date", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(7);
      expect(items[0].sellIn).toBe(-1);
    })

    it("on_sell_date_near_max_quality", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 44)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(46);
      expect(items[0].sellIn).toBe(-1);
    })

    it("on_sell_date_with_max_quality", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(-1);
    })

    it("after_sell_date", () => {
      const gildedRose = new Shop([new Item("Aged Brie", -1, 5)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(7);
      expect(items[0].sellIn).toBe(-2);
    })

    it("after_sell_date_with_max_quality", () => {
      const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(-2);
    })
  })

  describe("Sulfuras", () => {
    it("before_sell_date", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    })

    it("on_sell_date", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(0);
    })

    it("after_sell_date", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -2, 80)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(-2);
    })
  })
});
