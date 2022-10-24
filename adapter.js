class EngineV8 {
    superHardcoreMethod() {
        console.log('simple simple')
    }
}

class Engine2 {
    simpleMethod() {
        console.log('hardcore');
    }
}

class AdapterV8 {
    constructor(engine) {
        this.engine = engine;
    }
    // такое же назание метода как и у другого интерфейса что подогнать
    simpleMethod() {
        // do some logic
        this.engine.superHardcoreMethod()
    }
}

class Car {
    startEngine(engine) {
        engine.simpleMethod()
    }
}

const car1 = new Car();
const oldEngine = new Engine2();

car1.startEngine(oldEngine);

const car2 = new Car();
const engineAdapter = new AdapterV8(new EngineV8());
car2.startEngine(engineAdapter);

const car3 = new Car();
const enginee = new EngineV8();
// car3.startEngine(enginee)