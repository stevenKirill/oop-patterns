class Coffee {
  constructor(kind, price, volume) {
    this.kind = kind;
    this.price = price;
    this.volume = volume;
  }
}

class CoffeeFactory {
  create(type) {
    if (type === "cappuchino") {
      return new Coffee(type, 5, 0.2);
    }
    if (type === "latte") {
      return new Coffee(type, 6, 0.3);
    }
    if (type === "americano") {
      return new Coffee(type, 2, 0.5);
    }
  }
}

const factory = new CoffeeFactory();
const cappuchino = factory.create("cappuchino");
const latte = factory.create("latte");
