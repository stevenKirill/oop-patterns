class Apartment {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    checkout() {
        return this.discount(this.amount);
    }
}
// стратегии это функции который вызыыаются в одном и том же классе и дают разный результат
// какие то методы которые выполняют разную логику
const baseStrategy = (amount) => amount;

const silverStrategy = (amount) => amount * 0.8;

const goldStrategy = (amount) => amount * 0.6;

const APARTMENT_PRICE = 10_000_000;

const baseCustomer = new Apartment(baseStrategy);
const prePremiumCustomer = new Apartment(silverStrategy);
const premiumCustomer = new Apartment(goldStrategy);

baseCustomer.setAmount(APARTMENT_PRICE);
console.log(baseCustomer.checkout());

prePremiumCustomer.setAmount(APARTMENT_PRICE);
console.log(prePremiumCustomer.checkout());

premiumCustomer.setAmount(APARTMENT_PRICE);
console.log(premiumCustomer.checkout());