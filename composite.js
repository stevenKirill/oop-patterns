class Computer {
    get getPrice() {
        return this.price || 0;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }

    get getName() {
        return this.name || '';
    }

    set setName(newName) {
        this.name = newName
    }
}

class Screen extends Computer {
    constructor() {
        super();
        this.setName = 'screen matrix';
        this.setPrice = 15;
    }
}

class Keyboard extends Computer {
    constructor() {
        super()
        this.setName = 'keyboard apple magic';
        this.setPrice = 8;
    }
}

class Processor extends Computer {
    constructor() {
        super()
        this.setName = 'processor m1';
        this.setPrice = 40;
    }
}

class Composite extends Computer {
    constructor() {
        super();
        this.computerParts = [];
    }

    addPart(part) {
        this.computerParts.push(part);
    }

    // компоновщик вызывает методы у всех подклассов
    getPrice() {
        return this.computerParts
                .map((part) => part.getPrice)
                .reduce((acc, curr) => acc + curr, 0)
    }
}

class Macbook extends Composite {
    constructor() {
        super()
        this.setName = 'Macbook m1 2020'
    }
}

const myMacbook = new Macbook();

console.log(myMacbook)

myMacbook.addPart(new Screen())
myMacbook.addPart(new Keyboard())
myMacbook.addPart(new Processor())

console.log(myMacbook)
console.log(`${myMacbook.getName} costs ${myMacbook.getPrice()}`)