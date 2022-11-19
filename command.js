/// инкапсуляция некоторых действий и данные для них отделяя клиента от получателя

class Driver {
    constructor(command) {
        this.command = command;
    }
    execute(param) {
        this.command.execute(param);
    }
}

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class EngineCommader {
    constructor(engine) {
        this.engine = engine
    }
    execute(param) {
        if (param === 'on') {
            this.engine.on();
        }
        if (param === 'off') {
            this.engine.off(); 
        }
    }
}

class EndEngineCommand {
    constructor(engine) {
        this.engine = engine
    }
    execute() {
        this.engine.off();
    }
}

const engine = new Engine();
console.log(engine, '=> off')
const commander = new EngineCommader(engine);
const driver = new Driver(commander);
driver.execute('on')
console.log(engine, '=> on')
driver.execute('off')
console.log(engine, '=> off')