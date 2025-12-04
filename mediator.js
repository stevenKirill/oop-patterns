// посредник поведенческие паттерны
// уменьшает взаимосвязи между классами
class Customer {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  getName() {
    return this.name;
  }

  orderProduct(options) {
    // не описываем заказ непосредственно в этом классе
    const { price, country, year, type } = options;
    console.log(price);
    console.log(country);
    console.log(year);
    console.log(type);
    this.mediator.order(this, options);
  }
}

class Government {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  getTax() {
    const prices = this.mediator.customersPrices.map((c) => c.split(/\$/)[0]);
    const total = prices.reduce((acc, curr) => acc + Number(curr) * 0.13, 0);
    console.log(`Customers payd ${total} taxes`);
    return total;
  }
}

// cкрываем все связи классов внутри этого класса посредника
class Intermediary {
  constructor() {
    /// мы можем в другом классе как то использовать этот массив
    this.customers = [];
    this.customersPrices = [];
  }

  addCustomer(name) {
    this.customers.push(name);
  }

  addPrice(price) {
    this.customersPrices.push(price);
  }

  order(currentCustomer, options) {
    const name = currentCustomer.getName();
    const { price, country, year, type } = options;
    console.log(`${name} created order to buy ${type} with price ${price}`);
    console.log(`Desired country and year of product ${country}/${year}`);
    this.addCustomer(name);
    this.addPrice(price);
  }
}

const intermediary = new Intermediary();

const kirill = new Customer("kirill", intermediary);
const irina = new Customer("irina", intermediary);

const gov = new Government("Russia", intermediary);

kirill.orderProduct({
  type: "iphone 14",
  country: "Dubai",
  year: 2022,
  price: "1000$",
});
irina.orderProduct({
  type: "Macbook",
  country: "Germany",
  year: 2020,
  price: "1200$",
});

console.log(gov.getTax());
