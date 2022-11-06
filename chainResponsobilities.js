class Account {
    pay(price) {
        if (this.canPay(price)) {
            console.log(`Paid ${price} with ${this.name}`);
            this.totalAmount -= price;
            return;
        } else if (this.incomer) {
            console.log(`cannot pay with ${this.name}`);
            this.incomer.pay(price);
        } else {
            console.log('not enought money');
        }
    }

    canPay(amount) {
        return this.totalAmount >= amount
    }

    setNext(account) {
        this.incomer = account;
    }
}

class MasterCard extends Account {
    constructor(totalAmount) {
        super();
        this.name = 'Master card';
        this.totalAmount = totalAmount;
    }
}

class VisaSberbank extends Account {
    constructor(totalAmount) {
        super();
        this.name = 'VisaSberbank';
        this.totalAmount = totalAmount;
    }
}

class MIRGazprombank extends Account {
    constructor(totalAmount) {
        super();
        this.name = 'MIRGazprombank';
        this.totalAmount = totalAmount;
    }
}

const master =  new MasterCard(100);
const visaSber =  new VisaSberbank(300);
const mir =  new MIRGazprombank(500);

master.setNext(visaSber);
visaSber.setNext(mir);

master.pay(300)