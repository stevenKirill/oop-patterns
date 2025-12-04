class HondaCRV {
  constructor() {
    if (typeof HondaCRV.instance === "object") {
      return HondaCRV.instance;
    }
    this.name = "Honda CRV";
    this.color = "Red";
    this.speed = 120;
    HondaCRV.instance = this;
    return this;
  }

  logCarInfo() {
    console.log(`${this.name}-${this.color}-${this.speed}`);
  }

  increaseSpeed() {
    this.speed += 100;
  }
}

const crvInstance1 = new HondaCRV();
{
}
const crvInstance2 = new HondaCRV();
{
}

crvInstance1.increaseSpeed();
crvInstance1.increaseSpeed();

crvInstance2.increaseSpeed();
crvInstance2.increaseSpeed();

crvInstance1.logCarInfo();
crvInstance2.logCarInfo();
