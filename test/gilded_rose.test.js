const { Shop } = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  describe("Normal Item", () => {
    const name = "normal";

    it("before_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(4);
      expect(items[0].sellIn).toBe(9);
    });

    it("on_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(-1);
    });

    it("after_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: -1, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(-2);
    });

    it("of_zero_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 0 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(9);
    });
  });

  describe("Aged Brie Item", () => {
    const name = "Aged Brie";
    it("before_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(31);
      expect(items[0].sellIn).toBe(9);
    });

    it("before_sell_date_with_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    });

    it("on_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(7);
      expect(items[0].sellIn).toBe(-1);
    });

    it("on_sell_date_near_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 44 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(46);
      expect(items[0].sellIn).toBe(-1);
    });

    it("on_sell_date_with_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(-1);
    });

    it("after_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: -1, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(7);
      expect(items[0].sellIn).toBe(-2);
    });

    it("after_sell_date_with_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: -1, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(-2);
    });
  });

  describe("Sulfuras", () => {
    const name = "Sulfuras, Hand of Ragnaros";
    it("before_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 80 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    });

    it("on_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 80 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(0);
    });

    it("after_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: -2, quality: 80 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(-2);
    });
  });

  describe("Backstage", () => {
    const name = "Backstage passes to a TAFKAL80ETC concert";
    it("long_before_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 11, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(31);
      expect(items[0].sellIn).toBe(10);
    });

    it("medium_before_sell_date_upper_bound", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(32);
      expect(items[0].sellIn).toBe(9);
    });

    it("medium_before_sell_date_upper_bound_at_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    });

    it("medium_before_sell_date_lower_bound", () => {
      const gildedRose = new Shop([{ name, sellIn: 6, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(32);
      expect(items[0].sellIn).toBe(5);
    });

    it("medium_before_sell_date_lower_bound_at_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 6, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(5);
    });

    it("very_close_to_sell_date_upper_bound", () => {
      const gildedRose = new Shop([{ name, sellIn: 5, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(33);
      expect(items[0].sellIn).toBe(4);
    });

    it("very_close_to_sell_date_upper_bound_at_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 5, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(4);
    });

    it("very_close_to_sell_date_lower_bound", () => {
      const gildedRose = new Shop([{ name, sellIn: 1, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(33);
      expect(items[0].sellIn).toBe(0);
    });

    it("very_close_to_sell_date_lower_bound_at_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 1, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(0);
    });

    it("on_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it("on_sell_date_at_max_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 50 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it("after_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: -1, quality: 30 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-2);
    });
  });

  describe("Conjure Item", () => {
    const name = "Conjured";
    it("before_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(9);
    });

    it("on_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(-1);
    });

    it("after_sell_date", () => {
      const gildedRose = new Shop([{ name, sellIn: -1, quality: 5 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(-2);
    });

    it("of_zero_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 10, quality: 0 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(9);
    });

    it("of_one_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 1 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it("of_two_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 2 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it("of_three_quality", () => {
      const gildedRose = new Shop([{ name, sellIn: 0, quality: 3 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it("of_three_quality_and_one_sellIn", () => {
      const gildedRose = new Shop([{ name, sellIn: 1, quality: 3 }]);
      const items = gildedRose.update();

      expect(items[0].quality).toBe(1);
      expect(items[0].sellIn).toBe(0);
    });
  });
});
