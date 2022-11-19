// добавляет новую функциональность в уже существующий класс
// расширяяе класс

class AcceptVisitor {
    accept(visitor, params) {
        visitor(this, params);
    }
}

class Iphone extends AcceptVisitor  {
    constructor(price) {
        super()
        this.price = price;
    }
    price() {
        console.log('price for Iphone')
        return this.price
    }
}

class Mac extends AcceptVisitor {
    constructor(price) {
        super()
        this.price = price;
    }
    price() {
        console.log('price for Mac')
        return this.price
    }
}

class AirPods extends AcceptVisitor {
    constructor(price) {
        super()
        this.price = price;
    }
    price() {
        console.log('price for AirPods')
        return this.price
    }
}

const visitor = new AcceptVisitor();

const iphone13 = new Iphone('1000');

iphone13.accept(visitorExample)

const myMac = new Mac('2000');

myMac.accept(visitorExample)

const air = new AirPods('500');

air.accept(visitorExample, { name: 'air' })

function visitorExample(instance,other) {
    console.log(other, '=> other')
    if (instance instanceof Iphone) {
        instance.color = function() {
            console.log('lol')
        }
    }
    if (instance instanceof Mac) {
        instance.macMethod = (par) => {
            console.log(par)
            console.log('ohh my mca')
        }
    }
    if (instance instanceof AirPods) {
        instance.color = () => console.log('white color')
    }
}

air.color()

myMac.macMethod(1)

iphone13.color()