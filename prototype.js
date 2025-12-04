class ToyotaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new ToyotaCar(this.model, this.price, this.interior, this.autopilot);
  }
}

const prototypeCar = new ToyotaCar("Camry", "30000$", "red", false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

console.log(car1);

car2.autopilot = true;
car2.interior = "white";

console.log(car2);

car3.model = "Camry 2018";
car3.price = "32000$";
console.log(car3);
