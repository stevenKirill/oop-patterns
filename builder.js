class Fruit {
    constructor() {
        this.type = '';
        this.price = 1;
        this.producer = '';
        this.country = '';
    }
}

class FruitBuilder {
    constructor() {
        this.fruit = new Fruit();
    }

    addType(type) {
        this.fruit.type = type;
        return this;
    }

    addPrice(price) {
        this.fruit.price = price;
        return this;
    }

    addProducer(producer) {
        this.fruit.producer = producer;
        return this;
    }

    addCountry(country) {
        this.fruit.country = country;
        return this;
    }

    addDescription(description) {
        this.fruit.description = description;
        return this;
    }
    
    build() {
        return this.fruit;
    }
}

const polandApples = new FruitBuilder();
polandApples
    .addType('apples')
    .addCountry('Poland')
    .addPrice(3)
    .addProducer('Ms. Shifu')
    .build()

console.log(polandApples);

const africanBanana = new FruitBuilder();
africanBanana
    .addType('bananas')
    .addCountry('Africa')
    .addPrice(2)
    .addProducer('Black people')
    .addDescription('very sweet')
    .build()

console.log(africanBanana);

const russianStrawberry = new FruitBuilder();
russianStrawberry
    .addType('strawberries')
    .addCountry('Russia')
    .addPrice(5)
    .addProducer('Krasnodar')
    .build()

console.log(russianStrawberry);