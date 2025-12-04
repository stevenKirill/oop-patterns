class Car {
 constructor() {
    this.price = 1500;
    this.model = 'any Car you want';
 }

 getCarPrice() {
    return this.price
 }

 getCarModel() {
    return this.model
 }
};

class Honda extends Car {
    constructor() {
        super();
        this.price = 2500;
        this.model = 'Honda Accord 2020'
    }
};

class AutoPilot {
    constructor(car) {
       this.car = car;
    }

    addAutoPilot() {
        this.car.autopilot = true;
    }

    getCarPrice() {
        return this.car.getCarPrice() + 5000;
    }

    getCarDescription() {
        return `${this.car.getCarModel()} with autopilot`
    }
};

class Spoiler {
    constructor(car) {
       this.car = car;
    }

    addSpoler() {
        this.car.spoiler = true;
    }

    getCarPrice() {
        return this.car.getCarPrice() + 1000;
    }

    paintSpoler(color = 'white') {
        return this.car.spoilerColor = color;
    }

    getCarDescription() {
        return `${this.car.getCarModel()} with spoiler`
    }
};

const basicHonda = new Honda();

const hondaWithAutopilot = new AutoPilot(new Honda());
hondaWithAutopilot.addAutoPilot();

const hondaWithAutopilot2 = new AutoPilot(new Honda());
hondaWithAutopilot2.addAutoPilot();
const hondaWithAutopilotAndSpoiler = new Spoiler(hondaWithAutopilot2);
hondaWithAutopilotAndSpoiler.addSpoler();